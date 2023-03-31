import React from 'react'
import { CheckCircle, User, Wallet } from "@phosphor-icons/react";

export function Steps({ currentStep }) {
  return (
    <>
      <div className='steps flex  justify-center items-center max-w-lg my-0 mx-auto relative mb-2 px-2 '>
        <div className="step active flex flex-col items-center justify-center">
          <div className='w-14 h-14 rounded-full border-2 border-orange-600 flex items-center justify-center'>
            <User size={24} weight="bold" className='text-gray-800' />
          </div>
        </div>

        <hr className={`w-full border ${currentStep >= 1 ? "border-orange-500" : "border-gray-800"}`} />

        <div className="step active flex flex-col items-center justify-center">
          <div className={`w-14 h-14 rounded-full border-2 ${currentStep >= 1 ? "border-orange-600" : "border-gray-800 bg-gray-800"} flex items-center justify-center`}>
            <Wallet size={24} weight="bold" className={`${currentStep >= 1 ? "text-gray-800" : "text-gray-300"} `} />
          </div>
        </div>

        <hr className={`w-full border ${currentStep >= 2 ? "border-orange-500" : "border-gray-800"}`} />

        <div className="step active flex flex-col items-center justify-center">
          <div className={`w-14 h-14 rounded-full border-2 ${currentStep >= 2 ? "border-orange-600" : "border-gray-800 bg-gray-800"} flex items-center justify-center`}>
            <CheckCircle size={24} weight="bold" className={`${currentStep >= 2 ? "text-gray-800" : "text-gray-300"} `} />
          </div>
        </div>
      </div>
      <div className='steps flex items-center justify-between max-w-lg my-0 mx-auto relative mb-8 text-xs'>
        <p className='text-orange-600'>Identificação</p>
        <p className={`px-1 ${currentStep >= 1 ? "text-orange-600" : "text-gray-800"}`}>Pagamento</p>
        <p className={`${currentStep >= 2 ? "text-orange-600" : "text-gray-800"}`}>Finalização</p>

      </div>
    </>
  )
}
