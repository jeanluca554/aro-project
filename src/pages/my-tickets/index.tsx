import { Fragment, useEffect, useState } from 'react'


import { ErrorMessage } from 'components';
import InputMask from 'react-input-mask';



export default function MyTickets() {
  const [identity, setIdentity] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className='flex w-full h-screen bg-gray-100'>
      <div className='mt-8  mx-6'>

        <h2 className='font-medium text-gray-600 pb-6 text-lg'>Preencha os campos para visualizar os ingressos:</h2>

        <label htmlFor="" className='text-gray-700 ml-2'>Insira o CPF informado no momento da compra</label>
        <InputMask
          placeholder='000.000.000-00'
          id='identity'
          name='identity'
          value={identity}
          mask={'999.999.999-99'}
          maskChar=" "
          onChange={
            (e: React.ChangeEvent<HTMLInputElement>) => setIdentity(e.target.value)
          }
          className={`py-3 px-4 border-2 border-gray-200 outline-gray-400 rounded bg-gray-200 text-gray-700 placeholder-gray-500  focus:outline-none focus:bg-white focus:border-orange-500 block w-full disabled:bg-gray-300 disabled:text-gray-500 disabled:border-gray-300 focus:invalid:border-red-500 mb-4`}
        />

        <label htmlFor="" className='text-gray-700 ml-2'>Insira o email informado no momento da compra</label>
        <input
          placeholder='E-mail'
          id='email'
          name='email'
          value={email}
          onChange={
            (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
          }
          className={`py-3 px-4 border-2 border-gray-200 outline-gray-400 rounded bg-gray-200 text-gray-700 placeholder-gray-500  focus:outline-none focus:bg-white focus:border-orange-500 block w-full disabled:bg-gray-300 disabled:text-gray-500 disabled:border-gray-300 focus:invalid:border-red-500`}
        />

        <button
          className='py-4 mt-8 font-bold w-full text-white rounded-md bg-orange-600 hover:bg-orange-500 transition-all mb-6 disabled:cursor-not-allowed'
        >
          BUSCAR
        </button>

      </div>
    </div>



  )
}

MyTickets.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
    </>
  )
}