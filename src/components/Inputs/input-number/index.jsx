import React from 'react'

export function InputNumber({name, maxValue=100, minValue=1, value, disabled, setValue,  error, ...props }){
  return (
    <>
        <input className={`appearance-none border-2
          ${disabled ? 'bg-cinza-100' : 'bg-cinza-50'}
          ${error ? 'border-vermelho-300' : 'border-cinza-100'}
          rounded-lg focus:outline-none focus:border-rosa-destaque w-full py-4 px-3 leading-tight focus:shadow-outline text-fun2 text-cinza-500`}
          id={name}
          value={value}
          type='number'
          min={minValue}
          max={maxValue}
          {...props}/>
    </>
  )
}
