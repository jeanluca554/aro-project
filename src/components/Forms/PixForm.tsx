import React from 'react';
import { ErrorMessage, Input } from 'components';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function PixForm({ data, updateFieldHandler }) {
  return (
    <>
      <h2 className='font-medium text-gray-600 pt-2'>Informe o seu CPF para finalizarmos:</h2>
      <div className='mt-8'>
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
    </>
  )
}
