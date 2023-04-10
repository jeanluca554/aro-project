import { useState } from 'react';
import { useForm } from 'hooks';
import { CustomerForm, PaymentForm, ReviewForm, Steps } from 'components';
import { ArrowLeft } from "@phosphor-icons/react";

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
  } = useForm(formComponents);

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
        <form onSubmit={(event) => changeStep(currentStep + 1, event)} className="max-w-md my-0 mx-auto">
          <div className="inputs-container min-h-[280px]">
            {currentComponent}
          </div>

          <div className="actions flex justify-end gap-4">

            {!isLastStep ? (
              <button type="submit" className='py-4 w-full text-sm text-white rounded-md bg-orange-600 hover:bg-orange-500 transition-all mb-6'>
                <span className='font-semibold'>AVANÇAR</span>
              </button>
            ) : (
              <button type="button">
                <span>Enviar</span>
              </button>
            )}

          </div>
        </form>
      </div>
    </div>
  )
}