import { Input } from 'components';
import { ErrorMessage } from 'components';

export function CustomerForm({ data, updateFieldHandler }) {
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
          placeholder='CPF'
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

      </div>
    </div>
  )
}
