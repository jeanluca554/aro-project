import React, { useEffect, useState } from 'react'

export function CourseInformationBannerRightSide({ data, currentStep }) {
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
    <div className='hidden border-2 border-orange-600 border-opacity-50 sm:rounded-lg md:w-72 lg:w-96 md:block'>
      {/* <div className='hidden border-2 border-orange-600 border-opacity-50 sm:rounded-lg w-96 md:block'> */}
      <div className='m-5 text-center'>
        <div className='font-semibold text-gray-600 text-xl'>
          <a className='text-orange-600'>Curso</a> Tribunal do Júri
        </div>

        <div className='text-gray-600 text-sm'>
          <a className='font-semibold'>Aprenda </a>na prática o julgamento popular e como atuar <a className='font-semibold'>com excelência</a>
        </div>
        {
          currentStep === 1 && (
            <div className=' border-t border-b border-orange-600 border-opacity-50 mt-4 text-gray-600 text-sm py-4'>
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
          )
        }
      </div>

    </div>
  )
}
