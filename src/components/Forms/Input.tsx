import React from 'react'

type InputProps = {
  placeholder: string;
  name: string;
  id: string;
}

export function Input(props: InputProps) {
  return (
    <input type="text" name={props.name} id={props.id} placeholder={props.placeholder} className='py-3 px-4 border-2 border-gray-200 outline-gray-400 rounded bg-gray-200 text-gray-700 placeholder-gray-500 mb-2 focus:outline-none focus:bg-white focus:border-orange-500 block w-full' />
  )
}
