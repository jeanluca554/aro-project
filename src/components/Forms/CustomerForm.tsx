import { Input } from 'components';
import React from 'react'

export function CustomerForm() {
  return (
    <div>
      <div className="form-control flex flex-col gap-2 mb-8">
        <h2 className='font-medium text-gray-600 pt-2'>Dados pessoais</h2>
        <Input placeholder='Nome completo' id='name' name='name' />
        <Input placeholder='CPF' id='cpf' name='cpf' />
        <Input placeholder='Telefone' id='phone' name='phone' />

        <h2 className='font-medium text-gray-600 pt-2'>Endereço</h2>
        <Input placeholder='CEP' id='cep' name='cep' />
        <Input placeholder='Rua' id='street' name='street' />
        <Input placeholder='Número' id='number' name='number' />
        <div className='flex py-2'>
          <input type="checkbox" id='withoutNumber' name='withoutNumber' />
          <span className='ml-2 text-gray-500'>S/ número</span>
        </div>
        <Input placeholder='Complemento' id='complement' name='complement' />
        <Input placeholder='Bairro' id='district' name='district' />
        <Input placeholder='Cidade' id='city' name='city' />
        <Input placeholder='UF' id='stateInitials' name='stateInitials' />
      </div>
    </div>
  )
}
