import React, { ChangeEvent } from 'react'

interface InputProps{
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  type?: string;
  label: string;
}

export default function Input({
  value, onChange, disabled, type="text", label
}: InputProps) {
  return (
    <div className="relative w-full lg:w-[30rem]">
      <input 
        value={value}
        onChange={onChange}
        disabled={disabled}
        type={type}
        className="outline-none p-4 border-2 border-neutral-300 w-full rounded-md peer focus:border-neutral-900 disabled:bg-neutral-200"
      />
      <label className='capitalize absolute top-0 left-3 scale-75 peer-focus-within:scale-100 peer-focus-within:-top-3 peer-focus-within:bg-white peer-focus-within:px-2 px-0 bg-transparent transition-all duration-200 ease-in-out'>{label}</label>
    </div>
  )
}
