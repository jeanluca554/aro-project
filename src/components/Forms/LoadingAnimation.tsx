import React, { useState } from 'react'
import Lottie from 'react-lottie';
import animationData from '../../../public/loading-animation.json';

export function LoadingAnimation() {
  const [animationState, setAnimationState] = useState({
    isStopped: false, isPaused: false
  })

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className='flex flex-col items-center'>
      <Lottie
        options={defaultOptions}
        height={200}
        width={200}
        isStopped={animationState.isStopped}
        isPaused={animationState.isPaused}
      />
      <p className='-mt-4 text-orange-600'>Confirmando transação...</p>
    </div>
  )
}
