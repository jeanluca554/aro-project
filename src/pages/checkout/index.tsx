import { useState } from 'react';
import { useFormCheckout } from 'hooks';
import { CustomerForm, PaymentForm, ReviewForm, Steps } from 'components';
import { ArrowLeft } from "@phosphor-icons/react";
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { isCPF, isPhone, isCEP } from 'brazilian-values';
import cep from 'cep-promise';
import { TransactionServices } from 'services';

const formTemplate = {
  name: '',
  identity: '',
  phone: '',
  addressCity: '',
  addressComplement: '',
  addressDistrict: '',
  addressNumber: '',
  addressStateInitials: '',
  addressStreet: '',
  addressZipCode: '',
  creditCardHolder: '',
  creditCardNumber: '',
  creditCardExpirationDate: '',
  creditCardSecurityCode: '',
  creditCardInstallmentQuantity: '',
  creditCardFocus: '',
  message: '',
  description: '',
}

export default function checkout() {
  const [dataForm, setDataForm] = useState(formTemplate);
  const [output, setOutput] = useState('')

  function onlyNumbers(input: string) {
    var formattedNumber = input.replace(/[^0-9]/g, '');
    return formattedNumber;
  }

  const updateFieldHandler = (key, value) => {
    if (key === 'addressZipCode') {
      var formattedNumber = onlyNumbers(value);

      const getCep = async () => {
        try {
          const addressInfo = await cep(formattedNumber);

          setDataForm((prev) => {
            setValue("addressCity", addressInfo.city);
            setValue("addressDistrict", addressInfo.neighborhood);
            setValue("addressStreet", addressInfo.street);
            setValue("addressStateInitials", addressInfo.state);
            return {
              ...prev,
              addressStreet: addressInfo.street,
              addressDistrict: addressInfo.neighborhood,
              addressCity: addressInfo.city,
              addressStateInitials: addressInfo.state
            }
          })
        } catch (e) {
          console.log('CEP inválido');
        }
      };

      if (formattedNumber.length === 8) {
        getCep();
      }
    }

    setDataForm((prev) => {
      return { ...prev, [key]: value }
    })
  }

  const formComponents = [
    <CustomerForm data={dataForm} updateFieldHandler={updateFieldHandler} />,
    <PaymentForm data={dataForm} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={dataForm} />
  ]

  const {
    currentComponent,
    currentStep,
    changeStep,
    isLastStep,
    isFirstStep,
  } = useFormCheckout(formComponents);

  const createCheckoutSchema = z.object({
    name: z.string().nonempty({
      message: 'O nome é obrigatório',
    }).transform(name => {
      return name
        .trim()
        .split(' ')
        .map(word => word[0].toLocaleUpperCase().concat(word.substring(1)))
        .join(' ')
    }),
    identity: z.string().refine((identity) => isCPF(identity), { message: "Não é um CPF válido" }),
    phone: z.string().refine((phone) => isPhone(onlyNumbers(phone)), { message: "Informe um número de telefone válido" }),
    addressCity: z.string(),
    addressComplement: z.string(),
    addressDistrict: z.string().nonempty({ message: "Informe um bairro válido" }),
    addressNumber: z.string(),
    addressStateInitials: z.string(),
    addressStreet: z.string().nonempty({ message: "Informe uma rua, avenida ou logradouro" }),
    addressZipCode: z.string().refine((addressZipCode) => isCEP(addressZipCode), { message: "Informe um CEP válido" }),
  })

  const createCheckoutSchema2 = z.object({
    creditCardHolder: z.string().nonempty({ message: 'O nome impresso é obrigatório', }),
    creditCardNumber: z.string().nonempty({ message: 'O número do cartão é obrigatório', }).length(19, {
      message: 'Insira um número válido de 0-16 dígitos'
    }),
    creditCardExpirationDate: z.string().nonempty({ message: 'A data de expiração é obrigatória', }),
    creditCardSecurityCode: z.string().nonempty({ message: 'CVV inválido', }),
  })

  type CreateCheckoutData = z.infer<typeof createCheckoutSchema>

  const createCheckoutForm = useForm<CreateCheckoutData>({
    resolver: zodResolver(currentStep === 1 ? createCheckoutSchema2 : createCheckoutSchema),
  })

  const { handleSubmit, setValue } = createCheckoutForm;

  function outputData() {
    console.log("Os dados salvos são: " + JSON.stringify(dataForm, null, 2));
  }

  async function createTransaction() {
    await TransactionServices.transaction({
      paymentMethod: "2",
      customerName: dataForm.name,
      customerIdentity: dataForm.identity,
      customerPhone: dataForm.phone,
      customerEmail: "safe2pay@safe2pay.com.br",
      addressZipCode: dataForm.addressZipCode,
      addressStreet: dataForm.addressStreet,
      addressNumber: dataForm.addressNumber,
      addressComplement: dataForm.addressComplement,
      addressDistrict: dataForm.addressDistrict,
      addressCity: dataForm.addressCity,
      addressStateInitials: dataForm.addressStateInitials,
      courseCode: "41fa7a4c-8315-4f2e-8e99-20c123ab34b0",
      courseDescription: "Tribunal do Júri",
      courseUnitPrice: 400,
      creditCardHolder: dataForm.creditCardHolder,
      creditCardCardNumber: dataForm.creditCardNumber,
      creditCardExpirationDate: dataForm.creditCardExpirationDate,
      creditCardSecurityCode: dataForm.creditCardSecurityCode,
      creditCardInstallmentQuantity: 2
    })
      .then((response) => {
        if (response.status === 201) {
          setDataForm((prev) => {
            return {
              ...prev,
              description: response.data.transactionResult.description,
              message: response.data.transactionResult.message
            }
          })

          console.log(response.data.transactionResult.message)
          console.log(response.data.transactionResult.description)
          console.log(response);
          outputData()
          return {
            message: response.data.transactionResult.message,
            description: response.data.transactionResult.description,
          }
        }
        else {
          console.log(response)
        }
      })
      .catch(error => {
        if (error.statusCode === 400) {
          console.log(JSON.stringify(error.response.data, null, 2));
        }
        else {
          console.log(error);
        }
      });
  }

  function onSubmit(data: CreateCheckoutData) {
    console.log("O passo atual é: " + currentStep);
    outputData();
    if (currentStep === 1) {
      createTransaction()
    }
    setOutput(JSON.stringify(data, null, 2))
    // currentStep === 0 && changeStep(currentStep + 1);
    changeStep(currentStep + 1);
  }

  return (
    <div className="app bg-white h-full sm:p-8">
      <Steps currentStep={currentStep} />
      {!isFirstStep && (
        <div className='w-full max-w-xl my-0 mx-auto px-6 py-4 sm:rounded-lg'>
          <button type="button" onClick={() => changeStep(currentStep - 1)} className='flex items-center gap-2 text-gray-600'>
            <ArrowLeft size={16} weight="bold" />
            <span className='font-medium '>Voltar</span>
          </button>
        </div>
      )
      }
      <div className="form-container w-full sm:max-w-xl my-0 mx-auto border border-gray-300 p-6 sm:rounded-lg">
        <FormProvider {...createCheckoutForm} >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-md my-0 mx-auto"
          >
            <div className="inputs-container min-h-[280px]">
              {currentComponent}
            </div>

            <div className="actions flex justify-end gap-4">

              {!isLastStep ? (
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
              )}

            </div>
          </form>
        </FormProvider>
        {output && (
          <pre className="text-sm bg-zinc-800 text-zinc-100 p-6 rounded-lg">
            {output}
          </pre>
        )}
      </div>
    </div>
  )
}