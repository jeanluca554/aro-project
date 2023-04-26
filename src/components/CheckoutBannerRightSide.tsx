import React from 'react'

export function CheckoutBannerRightSide() {
  return (
    <div className='hidden border-2 border-orange-600 border-opacity-50 sm:rounded-lg max-w-sm md:block'>
      <div className='m-5 text-center'>
        <div className='font-semibold text-lg text-gray-600 lg:text-2xl'>
          <a className='text-orange-600'>Curso</a> Tribunal do Júri
        </div>

        <div className='text-xs text-gray-600 lg:text-base'>
          <a className='font-semibold'>Aprenda </a>na prática o julgamento popular e como atuar <a className='font-semibold'>com excelência</a>
        </div>
      </div>
    </div>
  )
}
