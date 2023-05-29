import { useState } from 'react';
import { CustomerCategoryForm, Input } from 'components';
import { ErrorMessage } from 'components';
import Radio from '@mui/material/Radio';

export function CustomerForm({ data, updateFieldHandler }) {
  const [selectedValue, setSelectedValue] = useState('advogado');

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => updateFieldHandler("category", e.target.value),
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  return (
    <div>
      <div className="form-control flex flex-col gap-4 mb-8">
        <h2 className='font-medium text-gray-600 pt-2'>Dados pessoais</h2>
        <Input
          placeholder='Nome completo'
          id='name'
          name='name'
          value={data.name || ""}
          onChange={
            (e: React.ChangeEvent<HTMLInputElement>) => updateFieldHandler("name", e.target.value)
          }
        />
        <ErrorMessage field='name' />

        <Input
          placeholder='E-mail'
          id='email'
          name='email'
          value={data.email || ""}
          onChange={
            (e: React.ChangeEvent<HTMLInputElement>) => updateFieldHandler("email", e.target.value)
          }
        />
        <ErrorMessage field='email' />

        <Input
          placeholder='Telefone'
          id='phone'
          name='phone'
          value={data.phone || ""}
          mask='(99) 99999-9999'
          onChange={
            (e: React.ChangeEvent<HTMLInputElement>) => updateFieldHandler("phone", e.target.value)
          }
        />
        <ErrorMessage field='phone' />

        <CustomerCategoryForm updateFieldHandler={updateFieldHandler} data={data} />

      </div>
    </div>
  )
}
