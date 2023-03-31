import { useState } from 'react';

type eventProps = {
  event: React.FormEvent<HTMLFormElement>
}

export function useForm(steps) {
  const [currentStep, setCurrentStep] = useState(0);

  function changeStep(input, event?: React.FormEvent<HTMLFormElement>) {
    if (event) event.preventDefault();

    if (input < 0 || input >= steps.length) return;

    setCurrentStep(input);
  }

  return {
    currentStep,
    currentComponent: steps[currentStep],
    changeStep,
    isLastStep: currentStep + 1 === steps.length ? true : false,
    isFirsStep: currentStep === 0 ? true : false,
  }
}