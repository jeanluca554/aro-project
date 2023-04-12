import React from 'react';
import { CreditCard, ErrorMessage, Input } from 'components';


export function PaymentForm({ data, updateFieldHandler }) {
  return (
    <div className='flex-wrap'>
      <div className='my-8'>
        <CreditCard
          holder={data.creditCardHolder}
          number={data.creditCardCardNumber}
          expirationDate={data.creditCardExpirationDate}
          securityCode={data.creditCardSecurityCode}
          focus={data.creditCardFocus}
        />

      </div>
      <div className="form-control flex flex-col gap-2 mb-8">
        <h2 className='font-medium text-gray-600 pt-2'>Dados do cartão</h2>
        <Input
          placeholder='Nome impresso no cartão'
          id='creditCardHolder'
          name='creditCardHolder'
          value={data.creditCardHolder || ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateFieldHandler("creditCardHolder", e.target.value)}
          onFocus={(e: React.FocusEvent<HTMLInputElement>) => updateFieldHandler("creditCardFocus", e.target.name)}
        />
        <ErrorMessage field='creditCardHolder' />

        <Input
          placeholder='Número do cartão'
          id='creditCardCardNumber'
          name='creditCardCardNumber'
          value={data.creditCardCardNumber || ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateFieldHandler("creditCardCardNumber", e.target.value)}
          onFocus={(e: React.FocusEvent<HTMLInputElement>) => updateFieldHandler("creditCardFocus", e.target.name)}
        />
        <ErrorMessage field='creditCardCardNumber' />

        <div className='flex flex-wrap '>
          <div className='w-2/3 pr-2'>
            <Input
              placeholder='Validade'
              id='creditCardExpirationDate'
              name='creditCardExpirationDate' value={data.creditCardExpirationDate || ""}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateFieldHandler("creditCardExpirationDate", e.target.value)}
              onFocus={(e: React.FocusEvent<HTMLInputElement>) => updateFieldHandler("creditCardFocus", e.target.name)}
            />
            <ErrorMessage field='creditCardExpirationDate' />
          </div>
          <div className='w-1/3 pl-2'>
            <Input
              placeholder='CVV'
              id='creditCardSecurityCode'
              name='creditCardSecurityCode'
              value={data.creditCardSecurityCode || ""}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateFieldHandler("creditCardSecurityCode", e.target.value)}
              onFocus={(e: React.FocusEvent<HTMLInputElement>) => updateFieldHandler("creditCardFocus", e.target.name)}
            />
            <ErrorMessage field='creditCardSecurityCode' />
          </div>
        </div>

        <div className="inline-block relative">
          <select
            value={data.creditCardInstallmentQuantity || ""}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => updateFieldHandler("creditCardInstallmentQuantity", e.target.value)}
            onFocus={(e: React.FocusEvent<HTMLSelectElement>) => updateFieldHandler("creditCardFocus", e.target.name)}
            className="block appearance-none w-full border-2 border-gray-200 outline-gray-400 rounded bg-gray-200 text-gray-700 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-orange-500 p-2 pr-8 ">
            <option value="0">Quantidade de parcelas</option>
            <option value="1" >1x sem juros</option>
            <option value="2">2x sem juros</option>
            <option value="3">3x sem juros</option>
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
