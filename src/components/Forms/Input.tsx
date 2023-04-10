import React from 'react'

type InputProps = {
  placeholder: string;
  name: string;
  id: string;
  value: string;
  onChange: any;
  disabled?: boolean;
  onFocus?: any;

}

export function Input(props: InputProps) {
  return (
    <input
      type="text"
      name={props.name}
      id={props.id}
      placeholder={props.placeholder}
      //only used in checkbox `withoutNumber`:
      value={props.disabled === true ? "S/N" : props.value}
      onChange={props.onChange}
      onFocus={props.onFocus}
      disabled={props.disabled === true}
      className={`py-3 px-4 border-2 border-gray-200 outline-gray-400 rounded bg-gray-200 text-gray-700 placeholder-gray-500 mb-2 focus:outline-none focus:bg-white focus:border-orange-500 block w-full disabled:bg-gray-300 disabled:text-gray-500 disabled:border-gray-300 required:border-red-500`}
    />
  )
}
