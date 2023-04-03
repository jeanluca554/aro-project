import { useForm } from 'hooks';
import { CustomerForm, PaymentForm, ReviewForm, Steps } from 'components';
import { ArrowLeft } from "@phosphor-icons/react";

export default function checkout() {
  const formComponents = [
    <CustomerForm />,
    <PaymentForm />,
    <ReviewForm />
  ]

  const {
    currentComponent,
    currentStep,
    changeStep,
    isLastStep,
    isFirsStep,
  } = useForm(formComponents);

  return (
    <div className="app bg-white h-full sm:p-8">
      {/* <div className="header text-center mb-8">
        <h2 className='text-4xl mb-4'>Deixe sua avaliação</h2>
        <p className='text-[#777]'>Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto</p>
      </div> */}
      <Steps currentStep={currentStep} />
      {!isFirsStep && (
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
              <button type="submit" className='py-3 w-full text-sm text-white rounded-md bg-orange-600 hover:bg-orange-500 transition-all mb-6'>
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