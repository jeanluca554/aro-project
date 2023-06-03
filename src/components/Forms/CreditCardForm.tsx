import React from 'react';
import { CreditCard, ErrorMessage, Input } from 'components';
import { Tab } from '@headlessui/react'
import { useFormContext } from 'react-hook-form';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function CreditCardForm({ data, updateFieldHandler }) {
  const { register } = useFormContext();
  return (
    <>
      <div className='my-8'>
        <CreditCard
          holder={data.creditCardHolder}
          number={data.creditCardNumber}
          expirationDate={data.creditCardExpirationDate}
          securityCode={data.creditCardSecurityCode}
          focus={data.creditCardFocus}
        />

      </div>

      <div className='mb-8'>
        <Input
          placeholder='Seu CPF'
          id='identity'
          name='identity'
          value={data.identity || ""}
          mask={'999.999.999-99'}
          maskChar=" "
          onChange={
            (e: React.ChangeEvent<HTMLInputElement>) => updateFieldHandler("identity", e.target.value)
          }
        />
        <ErrorMessage field='identity' />
      </div>

      <h2 className='font-medium text-gray-600 pt-1 pb-5 text-center'>Qual cartão deseja utilizar?</h2>
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded bg-gray-300 p-2 mb-4">
          <Tab className={({ selected }) =>
            classNames(
              'w-full rounded py-2.5 text-sm font-medium leading-5 text-orange-600',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-orange-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-white'
                : 'text-[#6b7280] hover:bg-gray-100 hover:text-gray-600'
            )
          }>
            O MEU
          </Tab>
          <Tab className={({ selected }) =>
            classNames(
              'w-full rounded py-2.5 text-sm font-medium leading-5 text-orange-600',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-orange-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-white'
                : 'text-[#6b7280] hover:bg-gray-100 hover:text-gray-600'
            )
          }>
            OUTRA TITULARIDADE
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <div className='flex-wrap'>

              <div className="form-control flex flex-col gap-4 mb-8">

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
                  id='creditCardNumber'
                  name='creditCardNumber'
                  mask='9999 9999 9999 9999'
                  maskChar=" "
                  value={data.creditCardNumber || ""}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateFieldHandler("creditCardNumber", e.target.value)}
                  onFocus={(e: React.FocusEvent<HTMLInputElement>) => updateFieldHandler("creditCardFocus", e.target.name)}
                />
                <ErrorMessage field='creditCardNumber' />

                <div className='flex flex-wrap '>
                  <div className='w-2/3 pr-2'>
                    <Input
                      placeholder='Validade'
                      id='creditCardExpirationDate'
                      name='creditCardExpirationDate'
                      mask='99/9999'
                      maskChar=" "
                      value={data.creditCardExpirationDate || ""}
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
                      mask='999'
                      maskChar=" "
                      value={data.creditCardSecurityCode || ""}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateFieldHandler("creditCardSecurityCode", e.target.value)}
                      onFocus={(e: React.FocusEvent<HTMLInputElement>) => updateFieldHandler("creditCardFocus", e.target.name)}
                    />
                    <ErrorMessage field='creditCardSecurityCode' />
                  </div>
                </div>

                <div className="inline-block relative">
                  <select
                    id='installment'
                    name='installment'
                    {...register('installment')}
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
                <ErrorMessage field='installment' />
              </div>
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <div className='flex-wrap'>

              <div className="form-control flex flex-col gap-4 mb-8">
                <Input
                  placeholder='CPF do titular do cartão'
                  id='identityCreditCard'
                  name='identityCreditCard'
                  value={data.identityCreditCard || ""}
                  mask={'999.999.999-99'}
                  maskChar=" "
                  onChange={
                    (e: React.ChangeEvent<HTMLInputElement>) => updateFieldHandler("identityCreditCard", e.target.value)
                  }
                />
                <ErrorMessage field='identityCreditCard' />

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
                  id='creditCardNumber'
                  name='creditCardNumber'
                  mask='9999 9999 9999 9999'
                  maskChar=" "
                  value={data.creditCardNumber || ""}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateFieldHandler("creditCardNumber", e.target.value)}
                  onFocus={(e: React.FocusEvent<HTMLInputElement>) => updateFieldHandler("creditCardFocus", e.target.name)}
                />
                <ErrorMessage field='creditCardNumber' />

                <div className='flex flex-wrap '>
                  <div className='w-2/3 pr-2'>
                    <Input
                      placeholder='Validade'
                      id='creditCardExpirationDate'
                      name='creditCardExpirationDate'
                      mask='99/9999'
                      maskChar=" "
                      value={data.creditCardExpirationDate || ""}
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
                      mask='999'
                      maskChar=" "
                      value={data.creditCardSecurityCode || ""}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateFieldHandler("creditCardSecurityCode", e.target.value)}
                      onFocus={(e: React.FocusEvent<HTMLInputElement>) => updateFieldHandler("creditCardFocus", e.target.name)}
                    />
                    <ErrorMessage field='creditCardSecurityCode' />
                  </div>
                </div>


                <div className="inline-block relative">
                  <select
                    id='installment'
                    name='installment'
                    {...register('installment')}
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
                <ErrorMessage field='installment' />
              </div>
            </div>
          </Tab.Panel>

        </Tab.Panels>
      </Tab.Group>

    </>
  )
}
