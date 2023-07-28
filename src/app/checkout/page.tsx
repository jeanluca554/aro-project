'use client'

import { useState } from 'react'
import { useFormCheckout } from '@/hooks'
import {
  AddressForm,
  CourseInformationBannerRightSide,
  CourseInformationBannerTopSide,
  CustomerCategoryForm,
  CustomerForm,
  CustomerInformationBannerTopSide,
  PaymentForm,
  PaymentMethodForm,
  ReviewForm,
  Steps,
} from '@/components'
import { ArrowLeft, CaretRight, Scales, Student } from '@phosphor-icons/react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { isCPF, isPhone, isCEP } from 'brazilian-values'
import cep from 'cep-promise'
import { TransactionServices } from '@/services'
import toast, { ToastBar, Toaster } from 'react-hot-toast'
import { CustomerInformationBannerRightSide } from '@/components/CustomerInformationBannerRightSide'

const formTemplate = {
  name: '',
  identity: '',
  email: '',
  phone: '',
  addressCity: '',
  addressComplement: '',
  addressDistrict: '',
  addressNumber: '',
  addressStateInitials: '',
  addressStreet: '',
  addressZipCode: '',
  identityCreditCard: '',
  creditCardHolder: '',
  creditCardNumber: '',
  creditCardExpirationDate: '',
  creditCardSecurityCode: '',
  creditCardInstallmentQuantity: '',
  creditCardFocus: '',
  message: '',
  description: '',
  category: '',
  paymentMethod: '',
  pixKey: '',
  installments: '',
  isSelectedAnotherCreditCardOwner: false,
  idTransaction: '',
  statusTransaction: '',
}

const notify = () =>
  toast.error('Ocorreu um erro ao encontrar os dados do CEP.', {
    style: {
      color: '#fff',
      background: '#ef4444',
    },
    iconTheme: {
      primary: 'white',
      secondary: '#ef4444',
    },
  })

export default function Checkout() {
  const [dataForm, setDataForm] = useState(formTemplate)
  const [output, setOutput] = useState('')
  const [lastLengthIs7, setLastLengthIs7] = useState(false)

  function onlyNumbers(input: string) {
    const formattedNumber = input.replace(/[^0-9]/g, '')
    return formattedNumber
  }

  function verifyIdentity(input: string) {
    const formattedNumber = onlyNumbers(input)
    if (formattedNumber.length === 0) return false
    else {
      return isCPF(input)
    }
  }

  function verifyIdentityCreditCard(identityCreditCard: string) {
    console.log(dataForm.isSelectedAnotherCreditCardOwner)
    console.log('a identidade do cartão é: ', identityCreditCard)
    if (dataForm.isSelectedAnotherCreditCardOwner === false) {
      return true
    }
    return verifyIdentity(identityCreditCard)
  }

  function verifyInstallments(installment: string) {
    // if (dataForm.creditCardInstallmentQuantity.length === 0) {
    if (installment.length === 0) {
      return false
    }
    // return dataForm.creditCardInstallmentQuantity !== '0' ? true : false
    return installment !== '0'
  }

  const updateFieldHandler = (key, value) => {
    if (key === 'addressZipCode') {
      const formattedNumber = onlyNumbers(value)

      const getCep = async () => {
        try {
          const addressInfo = await cep(formattedNumber)

          setDataForm((prev) => {
            setValue('addressCity', addressInfo.city)
            setValue('addressDistrict', addressInfo.neighborhood)
            setValue('addressStreet', addressInfo.street)
            setValue('addressStateInitials', addressInfo.state)
            return {
              ...prev,
              addressStreet: addressInfo.street,
              addressDistrict: addressInfo.neighborhood,
              addressCity: addressInfo.city,
              addressStateInitials: addressInfo.state,
            }
          })
        } catch (e) {
          console.log('CEP inválido')
          setDataForm((prev) => {
            setValue('addressCity', '')
            setValue('addressDistrict', '')
            setValue('addressStreet', '')
            setValue('addressStateInitials', '')
            return {
              ...prev,
              addressStreet: '',
              addressDistrict: '',
              addressCity: '',
              addressStateInitials: '',
            }
          })
          notify()
        }
      }

      // ensure getCep() execute only once when the length is 8 to avoid unnecessary notifications
      if (formattedNumber.length === 7) {
        setLastLengthIs7(true)
      }

      if (formattedNumber.length === 8 && lastLengthIs7 === true) {
        getCep()
        setLastLengthIs7(false)
      }
    }

    setDataForm((prev) => {
      return { ...prev, [key]: value }
    })
  }

  const formComponents = [
    <CustomerForm
      key="customer"
      data={dataForm}
      updateFieldHandler={updateFieldHandler}
    />,
    <AddressForm
      key="address"
      data={dataForm}
      updateFieldHandler={updateFieldHandler}
    />,
    <PaymentMethodForm
      key="paymentMethod"
      updateFieldHandler={updateFieldHandler}
    />,
    <PaymentForm
      key="payment"
      data={dataForm}
      updateFieldHandler={updateFieldHandler}
    />,
    <ReviewForm key="review" data={dataForm} />,
  ]

  const { currentComponent, currentStep, changeStep, isLastStep, isFirstStep } =
    useFormCheckout(formComponents)

  const createCheckoutSchema = z.object({
    name: z
      .string()
      .nonempty({
        message: 'O nome é obrigatório',
      })
      .transform((name) => {
        return name
          .trim()
          .split(' ')
          .map((word) => word[0].toLocaleUpperCase().concat(word.substring(1)))
          .join(' ')
      }),
    email: z.string().email({ message: 'Informe um e-mail válido' }),
    phone: z.string().refine((phone) => isPhone(onlyNumbers(phone)), {
      message: 'Informe um número de telefone válido',
    }),
  })

  const createCheckoutSchema1 = z.object({
    addressCity: z.string().min(2, {
      message: 'Utilize o campo CEP para inserir uma cidade válida',
    }),
    addressComplement: z.string(),
    addressDistrict: z
      .string()
      .nonempty({ message: 'Informe um bairro válido' }),
    addressNumber: z.string(),
    addressStateInitials: z
      .string()
      .min(2, { message: 'Utilize o campo CEP para inserir uma UF válida' }),
    addressStreet: z
      .string()
      .nonempty({ message: 'Informe uma rua, avenida ou logradouro' }),
    addressZipCode: z
      .string()
      .refine((addressZipCode) => isCEP(addressZipCode), {
        message: 'Informe um CEP válido',
      }),
  })

  const createCheckoutSchema2 = z.object({
    category: z.unknown(),
  })

  let createCheckoutSchema3 = z.object({})

  if (dataForm.paymentMethod === '2') {
    dataForm.isSelectedAnotherCreditCardOwner === true
      ? (createCheckoutSchema3 = z.object({
          identity: z.string().refine((identity) => isCPF(identity), {
            message: 'Não é um CPF válido',
          }),
          identityCreditCard: z
            .string()
            .refine(
              (identityCreditCard) =>
                verifyIdentityCreditCard(identityCreditCard),
              {
                message: 'Não é um CPF válido',
              },
            ),
          creditCardHolder: z
            .string()
            .nonempty({ message: 'O nome impresso é obrigatório' }),
          creditCardNumber: z
            .string()
            .nonempty({ message: 'O número do cartão é obrigatório' })
            .length(19, {
              message: 'Insira um número válido de 0-16 dígitos',
            }),
          creditCardExpirationDate: z
            .string()
            .nonempty({ message: 'A data de expiração é obrigatória' }),
          creditCardSecurityCode: z
            .string()
            .nonempty({ message: 'CVV inválido' }),
          installment: z
            .string()
            .refine((installment) => verifyInstallments(installment), {
              message: 'Selecione a quantidade de parcelas',
            }),
        }))
      : (createCheckoutSchema3 = z.object({
          identity: z.string().refine((identity) => isCPF(identity), {
            message: 'Não é um CPF válido',
          }),
          creditCardHolder: z
            .string()
            .nonempty({ message: 'O nome impresso é obrigatório' }),
          creditCardNumber: z
            .string()
            .nonempty({ message: 'O número do cartão é obrigatório' })
            .length(19, {
              message: 'Insira um número válido de 0-16 dígitos',
            }),
          creditCardExpirationDate: z
            .string()
            .nonempty({ message: 'A data de expiração é obrigatória' }),
          creditCardSecurityCode: z
            .string()
            .nonempty({ message: 'CVV inválido' }),
          installment: z
            .string()
            .refine((installment) => verifyInstallments(installment), {
              message: 'Selecione a quantidade de parcelas',
            }),
        }))
  }

  if (dataForm.paymentMethod === '6') {
    createCheckoutSchema3 = z.object({
      identity: z.string().refine((identity) => isCPF(identity), {
        message: 'Não é um CPF válido',
      }),
    })
  }

  const checkoutSchemaTemplate = [
    createCheckoutSchema,
    createCheckoutSchema1,
    createCheckoutSchema2,
    createCheckoutSchema3,
  ]

  type CreateCheckoutData = z.infer<typeof createCheckoutSchema1>

  const createCheckoutForm = useForm<CreateCheckoutData>({
    resolver: zodResolver(checkoutSchemaTemplate[currentStep]),
  })

  const { handleSubmit, setValue } = createCheckoutForm

  function outputData() {
    console.log('Os dados salvos são: ' + JSON.stringify(dataForm, null, 2))
  }

  function transformAddressNumber(addressNumber: string | true) {
    if (addressNumber === true || addressNumber === '') {
      return 'S/N'
    } else {
      return addressNumber
    }
  }

  async function createTransaction() {
    const formattedAddressNumber = transformAddressNumber(
      dataForm.addressNumber,
    )

    const coursePrice = 400
    const discount = dataForm.category === 'student' ? 100 : 0

    const amount = coursePrice - discount

    await TransactionServices.transaction({
      paymentMethod: dataForm.paymentMethod,
      customerName: dataForm.name,
      customerIdentity: dataForm.identity,
      customerPhone: dataForm.phone,
      customerEmail: dataForm.email,
      customerCategory: dataForm.category,
      addressZipCode: dataForm.addressZipCode,
      addressStreet: dataForm.addressStreet,
      addressNumber: formattedAddressNumber,
      addressComplement: dataForm.addressComplement,
      addressDistrict: dataForm.addressDistrict,
      addressCity: dataForm.addressCity,
      addressStateInitials: dataForm.addressStateInitials,
      courseCode: 'd3ff5a60-f240-49c5-a863-368aaed7aa51',
      courseDescription: 'Tribunal do Júri',
      courseUnitPrice: amount,
      creditCardHolder: dataForm.creditCardHolder,
      creditCardCardNumber: dataForm.creditCardNumber,
      creditCardExpirationDate: dataForm.creditCardExpirationDate,
      creditCardSecurityCode: dataForm.creditCardSecurityCode,
      creditCardInstallmentQuantity: parseInt(
        dataForm.creditCardInstallmentQuantity,
      ),
      creditCardIdentity: dataForm.identityCreditCard,
      discount,
    })
      .then((response) => {
        if (response.status === 201) {
          if (response.data.transactionResult.errorCode) {
            setDataForm((prev) => {
              return {
                ...prev,
                description: response.data.transactionResult.errorMessage,
                message: 'Algo deu errado',
              }
            })
          } else {
            setDataForm((prev) => {
              return {
                ...prev,
                description: response.data.transactionResult.description,
                message: response.data.transactionResult.message,
                pixKey: response.data.transactionResult.pixKey,
                idTransaction: response.data.transactionResult.idTransaction,
                statusTransaction: response.data.transactionResult.status,
              }
            })

            console.log(response.data.transactionResult.message)
            console.log(response.data.transactionResult.description)
            console.log(response)
            outputData()
          }
        } else {
          console.log(response)
        }
      })
      .catch((error) => {
        if (error.code === 'ERR_BAD_REQUEST') {
          console.log(JSON.stringify(error.response.data, null, 2))
        } else {
          console.log(error)
        }
      })
  }

  function onSubmit(data: CreateCheckoutData) {
    console.log('O passo atual é: ', currentStep + 1)
    outputData()
    if (currentStep === 3) {
      createTransaction()
    }
    setOutput(JSON.stringify(data, null, 2))
    // currentStep === 0 && changeStep(currentStep + 1);
    changeStep(currentStep + 1)
  }

  return (
    <div className="app h-full bg-white md:p-8">
      <Steps currentStep={currentStep} />
      {!isFirstStep && !isLastStep ? (
        <div className="mx-auto my-0 w-full max-w-5xl px-10 py-4 sm:rounded-lg md:px-6">
          <button
            type="button"
            onClick={() => changeStep(currentStep - 1)}
            className="flex items-center gap-2 text-gray-600"
          >
            <ArrowLeft size={16} weight="bold" />
            <span className="font-medium ">Voltar</span>
          </button>
        </div>
      ) : (
        <></>
      )}
      <div className="items-start justify-center gap-8 md:flex">
        {currentStep > 0 && (
          <CustomerInformationBannerTopSide data={dataForm} />
        )}

        <CourseInformationBannerTopSide
          currentStep={currentStep}
          data={dataForm}
        />
        <div className="form-container my-0 w-full border  border-gray-300 px-10 py-6 md:max-w-xl md:rounded-lg md:px-6">
          <FormProvider {...createCheckoutForm}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mx-auto my-0 max-w-5xl md:max-w-md"
            >
              <div className="inputs-container min-h-[280px]">
                {currentComponent}
              </div>

              <div className="actions flex justify-end gap-4">
                {!isLastStep && currentStep !== 2 ? (
                  <button
                    type="submit"
                    disabled={dataForm.category === ''}
                    className="mb-6 w-full rounded-md bg-orange-600 py-4 text-sm text-white transition-all hover:bg-orange-500 disabled:cursor-not-allowed"
                  >
                    <span className="font-semibold">AVANÇAR</span>
                  </button>
                ) : (
                  <></>
                )}
                {/* {!isLastStep ? (
                <button
                  type="submit"
                  className='py-4 w-full text-sm text-white rounded-md bg-orange-600 hover:bg-orange-500 transition-all mb-6'
                >
                  <span className='font-semibold'>AVANÇAR</span>
                </button>
              ) : (
                <button type="button">
                  <span>Enviar</span>
                </button>
              )} */}

                <Toaster position="top-right" toastOptions={{ duration: 6000 }}>
                  {(t) => (
                    <ToastBar
                      toast={t}
                      style={{
                        ...t.style,
                        animation: t.visible
                          ? 'custom-enter 1s ease'
                          : 'custom-exit 1s ease',
                      }}
                    />
                  )}
                </Toaster>
              </div>
            </form>
          </FormProvider>
          {/* output && (
            <pre className="text-sm bg-zinc-800 text-zinc-100 p-6 rounded-lg">
              {output}
            </pre>
          ) */}
        </div>
        <div className="flex-row">
          {currentStep > 0 && (
            <CustomerInformationBannerRightSide data={dataForm} />
          )}
          <CourseInformationBannerRightSide
            data={dataForm}
            currentStep={currentStep}
          />
        </div>
      </div>
    </div>
  )
}
