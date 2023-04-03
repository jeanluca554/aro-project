import { Input } from 'components'
import React from 'react'

export function PaymentForm() {
  return (
    <div>
      <div className="form-control flex flex-col gap-2 mb-8">
        <h2 className='font-medium text-gray-600 pt-2'>Dados do cartão</h2>
        <Input placeholder='Nome impresso no cartão' id='cardHolder' name='cardHolder' />
        <Input placeholder='Número do cartão' id='cardNumber' name='cardNumber' />
        <div className='flex flex-wrap '>
          <div className='w-2/3 pr-2'>
            <Input placeholder='Validade' id='cardExpirationDate' name='cardExpirationDate' />
          </div>
          <div className='w-1/3 pl-2'>
            <Input placeholder='CVV' id='cardSecurityCode' name='cardSecurityCode' />
          </div>
        </div>

        <div className="inline-block relative">
          <select className="block appearance-none w-full border-2 border-gray-200 outline-gray-400 rounded bg-gray-200 text-gray-700 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-orange-500 p-2 pr-8 ">
            <option value="0">Quantidade de parcelas</option>
            <option value="1" >1 vez</option>
            <option value="2">2 vezes</option>
            <option value="3">3 vezes</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
