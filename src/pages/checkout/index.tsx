import { CustomerForm, PaymentForm, ReviewForm, Steps } from 'components';

import { useForm } from 'hooks';

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CheckIcon
} from '@heroicons/react/outline';

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
    <div className="app bg-[#f9fafc] h-screen p-8">
      <div className="header text-center mb-8">
        <h2 className='text-4xl mb-4'>Deixe sua avaliação</h2>
        <p className='text-[#777]'>Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto</p>
      </div>
      <Steps currentStep={currentStep} />
      <div className="form-container max-w-xl my-0 mx-auto bg-white p-6 shadow-3xl">
        <form onSubmit={(event) => changeStep(currentStep + 1, event)} className="max-w-md my-0 mx-auto">
          <div className="inputs-container min-h-[280px]">{currentComponent}</div>

          <div className="actions flex justify-end gap-4">
            {!isFirsStep && (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <ChevronLeftIcon />
                <span>Voltar</span>
              </button>
            )
            }
            {!isLastStep ? (
              <button type="submit" className='text-sm py-2 px-4 flex gap-2 items-center rounded-md bg-[#dfdfdf] hover:bg-[#cfcfcf] transition-all'>
                <span>Avançar</span>
                <ChevronRightIcon className='h-4 w-4' />
              </button>
            ) : (
              <button type="button">
                <span>Enviar</span>
                <CheckIcon />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}