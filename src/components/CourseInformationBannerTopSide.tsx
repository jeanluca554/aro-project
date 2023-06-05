import React, { useEffect, useState } from 'react'

export function CourseInformationBannerTopSide({ data, currentStep }) {
  const [productPrice, setProductPrice] = useState(400);
  let [productDiscount, setProductDiscount] = useState(0);

  useEffect(() => {
    if (data.category === "student") {
      setProductDiscount(100);
    }
    if (data.category === "lawyer") {
      setProductDiscount(0);
    }

  }, [data.category]);
  return (
    <div className=" flex items-center justify-center w-full  border border-gray-300 py-2 border-b-0 md:hidden">
      <div className='font-semibold sm:text-xl text-gray-600 text-center px-4 max-w-[100px] sm:max-w-[150px]'>
        <a className='text-orange-600'>Curso</a> Tribunal do Júri
      </div>
      {
        currentStep === 1 && (
          <div className='w-full max-w-md min-w-[245px]'>
            <div className='relative border-l border-orange-600 border-opacity-50 text-gray-600 text-sm p-4'>
              <div className='flex justify-between'>
                <p>Valor do produto</p>
                <p>R$ {productPrice},00</p>
              </div>
              <div className='flex justify-between pb-2'>
                <p>Desconto aplicado</p>
                <p>R$ {productDiscount},00</p>
              </div>
              <div className='flex justify-between text-base'>
                <p className='font-semibold'>Total</p>
                <p className='text-green-600 '>R$ {productPrice - productDiscount},00</p>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}
