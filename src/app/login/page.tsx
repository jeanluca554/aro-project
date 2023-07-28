'use client'

import axios from 'axios'
import { LockClosedIcon } from '@heroicons/react/solid'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

type FormValues = {
  email: string
  password: string
}

export default function Login() {
  const { register, handleSubmit } = useForm<FormValues>();
  // const { signIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState(false);
  const { push } = useRouter();

  async function handleSigIn(data: FormValues) {
    try {
      // await axios.post('/api/auth/login', data)
      const response = await axios.post('/api/auth/login', data)
      console.log('a response é: ', response)

      response.data.error === 'Request failed with status code 401' && setLoginError(true)

      const redirectURL = response.data.redirectTo ?? '/dashboard'

      response.data.message === 'authenticated' && push(redirectURL)
    } catch (error) {
      setLoginError(true)
      console.log(error)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm space-y-8">
        <div>
          <img className="mx-auto h-40 w-auto" src="logo2.png" alt="Workflow" />
          <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-600">
            Informe suas credenciais
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(handleSigIn)}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className={`-space-y-px rounded-md ${!loginError && 'shadow-sm'}`}>
            <div>
              <label htmlFor="email-address" className="sr-only">
                E-mail
              </label>
              <input
                {...register('email')}
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
                placeholder="E-mail"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Senha
              </label>
              <input
                {...register('password')}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
                placeholder="Senha"
              />
            </div>
            {loginError && 
            <p className='text-xs pt-2 text-red-500'>O email ou a senha fornecidos estão incorretos.</p>
          }
          </div>

          <div className="flex items-center justify-center">
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-orange-500 hover:text-orange-400"
              >
                Esqueceu sua senha?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-orange-300 group-hover:text-orange-400"
                  aria-hidden="true"
                />
              </span>
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

