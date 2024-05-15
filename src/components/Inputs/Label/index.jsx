import React from 'react'

export function Label({text, id, children}) {
  return (
    <label className='flex flex-col text-fun2 w-full capitalize mb-2' htmlFor={id}>{text}</label>
  )
}
