import { Fragment, useEffect, useState } from 'react'

import { ErrorMessage } from 'components';
import InputMask from 'react-input-mask';

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { isCPF } from 'brazilian-values';

export default function MyTickets() {
  const [identity, setIdentity] = useState('');
  const [email, setEmail] = useState('');

  const createCheckoutSchema = z.object({
    identity: z.string().refine((identity) => isCPF(identity), { message: "Não é um CPF válido" }),
    email: z.string().email({ message: "Informe um e-mail válido" }),
  })

  type CreateCheckoutData = z.infer<typeof createCheckoutSchema>

  const createCheckoutForm = useForm<CreateCheckoutData>({
    resolver: zodResolver(createCheckoutSchema),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateCheckoutData>({
    resolver: zodResolver(createCheckoutSchema),
  });

  const onSubmit: SubmitHandler<CreateCheckoutData> = (data) => console.log(data);

  return (
    <div className='flex w-full h-screen bg-gray-100'>
      <FormProvider {...createCheckoutForm}>
        <form
          className='mt-8  mx-6'
          onSubmit={handleSubmit(onSubmit)}
        >

          <h2 className='font-medium text-gray-600 pb-6 text-lg'>Preencha os campos para visualizar os ingressos:</h2>

          <label htmlFor="" className='text-gray-700 ml-2'>Insira o CPF informado no momento da compra</label>
          <InputMask
            placeholder='000.000.000-00'
            id='identity'
            name='identity'
            {...register('identity')}
            value={identity}
            mask={'999.999.999-99'}
            maskChar=" "
            onChange={
              (e: React.ChangeEvent<HTMLInputElement>) => setIdentity(e.target.value)
            }
            className={`py-3 px-4 border-2 border-gray-200 outline-gray-400 rounded bg-gray-200 text-gray-700 placeholder-gray-500  focus:outline-none focus:bg-white focus:border-orange-500 block w-full disabled:bg-gray-300 disabled:text-gray-500 disabled:border-gray-300 focus:invalid:border-red-500 ${errors.identity ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-orange-500'}`}
          />
          {errors.identity && (
            <p className="text-xs italic text-red-500 mb-4 mt-1">
              {errors.identity?.message}
            </p>
          )}

          <label htmlFor="" className='text-gray-700 ml-2'>Insira o email informado no momento da compra</label>
          <input
            placeholder='E-mail'
            id='email'
            name='email'
            {...register('email')}
            value={email}
            onChange={
              (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
            }
            className={`py-3 px-4 border-2 outline-gray-400 rounded bg-gray-200 text-gray-700 placeholder-gray-500  focus:outline-none focus:bg-white block w-full disabled:bg-gray-300 disabled:text-gray-500 disabled:border-gray-300 focus:invalid:border-red-500 ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-orange-500'}`}
          />
          {errors.email && (
            <p className="text-xs italic text-red-500 mb-4 mt-1">
              {errors.email?.message}
            </p>
          )}

          <button
            className='py-4 mt-8 font-bold w-full text-white rounded-md bg-orange-600 hover:bg-orange-500 transition-all mb-6 disabled:cursor-not-allowed'
            type='submit'
          >
            BUSCAR
          </button>

        </form>
      </FormProvider>
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