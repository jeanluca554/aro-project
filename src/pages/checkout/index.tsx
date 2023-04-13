import { useState } from 'react';
import { useFormCheckout } from 'hooks';
import { CustomerForm, PaymentForm, ReviewForm, Steps } from 'components';
import { ArrowLeft } from "@phosphor-icons/react";
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'

const formTemplate = {
  name: '',
  identity: '',
  phone: '',
  addressCity: '',
  addressComplement: '',
  addressDistrict: '',
  addressNumber: '' || false,
  addressStateInitials: '',
  addressStreet: '',
  addressZipCode: '',
  creditCardHolder: '',
  creditCardCardNumber: '',
  creditCardExpirationDate: '',
  creditCardSecurityCode: '',
  creditCardInstallmentQuantity: '',
  creditCardFocus: '',
}

export default function checkout() {
  const [data, setData] = useState(formTemplate);
  const [output, setOutput] = useState('')
  // const { handleSubmit } = useForm()

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value }
    })
  }

  const formComponents = [
    <CustomerForm data={data} updateFieldHandler={updateFieldHandler} />,
    <PaymentForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm />
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
    identity: z.string().nonempty({ message: 'O CPF é obrigatório', }).length(14),
    phone: z.string().nonempty({ message: 'O telefone é obrigatório', }).min(14),
    addressCity: z.string().nonempty({ message: 'A cidade é obrigatória', }),
    addressComplement: z.string(),
    addressDistrict: z.string().nonempty({ message: 'O bairro é obrigatório', }),
    addressNumber: z.string(),
    addressStateInitials: z.string().nonempty({ message: 'A UF é obrigatória', }).toUpperCase(),
    addressStreet: z.string().nonempty({ message: 'A rua é obrigatória', }),
    addressZipCode: z.string().nonempty({ message: 'O CEP é obrigatório', }),
  })

  const createCheckoutSchema2 = z.object({
    creditCardHolder: z.string().nonempty({ message: 'O nome impresso é obrigatório', }),
    creditCardCardNumber: z.string().nonempty({ message: 'O número do cartão é obrigatório', }).length(19, {
      message: 'Insira um número válido de 0-16'
    }),
    creditCardExpirationDate: z.string().nonempty({ message: 'A data de expiração é obrigatória', }),
    creditCardSecurityCode: z.string().nonempty({ message: 'CVV inválido', }),
  })

  type CreateCheckoutData = z.infer<typeof createCheckoutSchema>

  const createCheckoutForm = useForm<CreateCheckoutData>({
    resolver: zodResolver(currentStep === 1 ? createCheckoutSchema2 : createCheckoutSchema),
  })

  const {
    handleSubmit,
    formState: { isSubmitting },
    watch,
    control,
  } = createCheckoutForm;

  function onSubmit(data: CreateCheckoutData, event: any) {
    console.log(currentStep);
    setOutput(JSON.stringify(data, null, 2))
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
            // onSubmit={(event) => { handleSubmit(onSubmit); changeStep(currentStep + 1, event) }}
            // onSubmit={(event) => { handleSubmitForm(event) }}
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