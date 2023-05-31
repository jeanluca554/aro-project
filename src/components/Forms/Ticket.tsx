import React from 'react'
import QRCode from 'react-qr-code';

export function Ticket() {
  return (

    // <div className='flex justify-center items-center min-w-max min-h-screen rotate-90'>
    // <div className='flex h-64 w-[784px] rotate-90 -translate-x-40 translate-y-72'>
    // <div className='flex h-64 w-[784px] origin-[25%_75%] rotate-90 '>
    <div className='flex h-64 w-[750px] '>
      <div className='border border-gray-500 flex flex-col h-64 w-56 rounded-tl-lg rounded-bl-lg border-r-0 bg-orange-100'>
        < div className='flex justify-center my-auto' >
          <img src="logo2.png" alt="" className='w-48 h-48' />

        </div >
        <div className='flex justify-end'>
          <span className="text-xs text-gray-400 font-semibold pb-2 pr-2">#20030220</span>
        </div>

      </div >

      <div className='border border-x-0 border-gray-500 flex flex-col w-96 h-64 rounded-tr-lg rounded-br-lg'>
        <div className='flex justify-between border-t border-b border-gray-400 mx-8 my-4 font-semibold '>
          <span className='text-xs self-center text-gray-600 p-0'>Sábado</span>
          <span className=' text-orange-500 text-lg p-0'>10 de Junho</span>
          <span className='text-xs self-center text-gray-600 p-0'>2023</span>
        </div>

        <div className='font-semibold text-gray-600 text-4xl text-center mt-4'>
          Tribunal do Júri
        </div>

        <div className='text-orange-500 text-3xl text-center'>
          <a className='font-semibold'>Instituto Aro </a>
        </div>

        <div className='font-semibold text-gray-600 text-center mt-auto text-lg'>
          9h00<a className='text-orange-500 px-2'>às</a> 18h00
        </div>

        <div className='flex justify-evenly border-t border-gray-400 mx-8 my-4 font-semibold mt-auto'>
          <span className='text-xs self-center text-gray-600 p-0'>Universidade de Taubaté</span>
          <span className=' text-orange-500 p-0'> | </span>
          <span className='text-xs self-center text-gray-600 p-0'>Taubaté-SP</span>
        </div>

      </div>

      <div className='border border-r-0 border-t-0 border-b-0 border-gray-500 border-dashed h-60 mt-2'></div>

      <div className='border border-l-0 border-gray-500 flex flex-col w-44 h-64 rounded-tl-lg rounded-bl-lg rounded-xl'>
        <div className='font-semibold text-orange-500 text-lg text-center mt-4'>
          Tribunal do Júri
        </div>

        <div className='font-semibold text-gray-600 text-center text-sm mt-4 mb-2'>
          <p> 9h00<a className='text-orange-500 px-1'>às</a> 18h00</p>

          <p className='mt-1'>10<a className='text-orange-500'>/</a>06<a className='text-orange-500'>/</a>2023</p>
        </div>

        <div className='font-semibold text-gray-600'>
          <QRCode
            value='https://www.institutoaro.com.br/'
            size={84}
            className='mx-auto mt-3 text-orange-500'
            bgColor='#fff'
            fgColor='#4b5563'
          />
        </div>

        <div className='flex justify-center my-4'>
          <span className="text-xs text-gray-400 font-semibold">#20030220</span>
        </div>

      </div>
    </div >
  )
}
