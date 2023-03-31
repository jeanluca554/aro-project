import React from 'react'

export function CustomerForm() {
  return (
    <div>
      <div className="form-control flex flex-col gap-2 mb-8">
        <label htmlFor="name" className='font-bold text-[#777] text-sm'>Nome:</label>
        <input type="text" name='text' id='name' placeholder='Digite o seu nome' required className='p-2 border border-gray-300 outline-gray-400 rounded' />
      </div>
      <div className="form-control flex flex-col gap-2 mb-8">
        <label htmlFor="email" className='font-bold text-[#777] text-sm'>E-mail:</label>
        <input type="email" name='email' id='email' placeholder='Digite o seu e-mail' required className='p-2 border border-gray-300 outline-gray-400 rounded' />
      </div>
    </div>
  )
}
