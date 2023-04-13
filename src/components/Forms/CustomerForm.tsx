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

        <h2 className='font-medium text-gray-600 pt-2'>Endereço</h2>
        <Input
          placeholder='CEP'
          id='addressZipCode'
          name='addressZipCode'
          mask='99999-999'
          value={data.addressZipCode || ""}
          onChange={
            (e: React.ChangeEvent<HTMLInputElement>) => updateFieldHandler("addressZipCode", e.target.value)
          }
        />
        <ErrorMessage field='addressZipCode' />

        <Input
          placeholder='Rua'
          id='addressStreet'
          name='addressStreet'
          value={data.addressStreet || ""}
          onChange={
            (e: React.ChangeEvent<HTMLInputElement>) => updateFieldHandler("addressStreet", e.target.value)
          }
        />
        <ErrorMessage field='addressStreet' />

        <Input
          placeholder='Número'
          id='addressNumber'
          name='addressNumber'
          value={data.addressNumber || ""}
          onChange={
            (e: React.ChangeEvent<HTMLInputElement>) => updateFieldHandler("addressNumber", e.target.value)
          }
          disabled={data.addressNumber}
        />
        <ErrorMessage field='addressNumber' />

        <div className='flex py-2'>
          <input type="checkbox"
            id='withoutNumber'
            name='withoutNumber'
            value={data.addressComplement || "S/N"}
            onChange={
              (e: React.ChangeEvent<HTMLInputElement>) => updateFieldHandler("addressNumber", e.target.checked)
            }
          />
          <span className='ml-2 text-gray-500'>S/ número</span>
        </div>

        <Input
          placeholder='Complemento'
          id='addressComplement'
          name='addressComplement'
          value={data.addressComplement || ""}
          onChange={
            (e: React.ChangeEvent<HTMLInputElement>) => updateFieldHandler("addressComplement", e.target.value)
          }
        />
        <ErrorMessage field='addressComplement' />

        <Input
          placeholder='Bairro'
          id='addressDistrict'
          name='addressDistrict'
          value={data.addressDistrict || ""}
          onChange={
            (e: React.ChangeEvent<HTMLInputElement>) => updateFieldHandler("addressDistrict", e.target.value)
          }
        />
        <ErrorMessage field='addressDistrict' />

        <Input
          placeholder='Cidade'
          id='addressCity'
          name='addressCity'
          value={data.addressCity || ""}
          onChange={
            (e: React.ChangeEvent<HTMLInputElement>) => updateFieldHandler("addressCity", e.target.value)
          }
        />
        <ErrorMessage field='addressCity' />

        <Input
          placeholder='UF'
          id='addressStateInitials'
          name='addressStateInitials'
          mask='aa'
          value={data.addressStateInitials || ""}
          onChange={
            (e: React.ChangeEvent<HTMLInputElement>) => updateFieldHandler("addressStateInitials", e.target.value)
          }
        />
        <ErrorMessage field='addressStateInitials' />

      </div>
    </div>
  )
}
