import { Input } from 'components';

export function CustomerForm({ data, updateFieldHandler }) {
  return (
    <div>
      <div className="form-control flex flex-col gap-2 mb-8">
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
        <Input
          placeholder='CPF'
          id='cpf'
          name='cpf'
          value={data.identity || ""}
          onChange={
            (e: React.ChangeEvent<HTMLInputElement>) => updateFieldHandler("identity", e.target.value)
          }
        />
        <Input
          placeholder='Telefone'
          id='phone'
          name='phone'
          value={data.phone || ""}
          onChange={
            (e: React.ChangeEvent<HTMLInputElement>) => updateFieldHandler("phone", e.target.value)
          }
        />

        <h2 className='font-medium text-gray-600 pt-2'>Endereço</h2>
        <Input
          placeholder='CEP'
          id='cep'
          name='cep'
          value={data.addressZipCode || ""}
          onChange={
            (e: React.ChangeEvent<HTMLInputElement>) => updateFieldHandler("addressZipCode", e.target.value)
          }
        />
        <Input
          placeholder='Rua'
          id='street'
          name='street'
          value={data.addressStreet || ""}
          onChange={
            (e: React.ChangeEvent<HTMLInputElement>) => updateFieldHandler("addressStreet", e.target.value)
          }
        />
        <Input
          placeholder='Número'
          id='number'
          name='number'
          value={data.addressNumber || ""}
          onChange={
            (e: React.ChangeEvent<HTMLInputElement>) => updateFieldHandler("addressNumber", e.target.value)
          }
          disabled={data.addressNumber}
        />
        <div className='flex py-2'>
          <input type="checkbox"
            id='withoutNumber'
            name='withoutNumber'
            value={data.addressComplement || ""}
            onChange={
              (e: React.ChangeEvent<HTMLInputElement>) => updateFieldHandler("addressNumber", e.target.checked)
            }
          />
          <span className='ml-2 text-gray-500'>S/ número</span>
        </div>
        <Input
          placeholder='Complemento'
          id='complement'
          name='complement'
          value={data.addressComplement || ""}
          onChange={
            (e: React.ChangeEvent<HTMLInputElement>) => updateFieldHandler("addressComplement", e.target.value)
          }
        />
        <Input
          placeholder='Bairro'
          id='district'
          name='district'
          value={data.addressDistrict || ""}
          onChange={
            (e: React.ChangeEvent<HTMLInputElement>) => updateFieldHandler("addressDistrict", e.target.value)
          }
        />
        <Input
          placeholder='Cidade'
          id='city'
          name='city'
          value={data.addressCity || ""}
          onChange={
            (e: React.ChangeEvent<HTMLInputElement>) => updateFieldHandler("addressCity", e.target.value)
          }
        />
        <Input
          placeholder='UF'
          id='stateInitials'
          name='stateInitials'
          value={data.addressStateInitials || ""}
          onChange={
            (e: React.ChangeEvent<HTMLInputElement>) => updateFieldHandler("addressStateInitials", e.target.value)
          }
        />
      </div>
    </div>
  )
}
