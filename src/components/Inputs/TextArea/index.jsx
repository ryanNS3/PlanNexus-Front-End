import React from 'react'

export const TextArea = ({name,cols=50, rows=6, value, setValue,  ...props}) => {
  return (
    <textarea  className=' w-full resize-none p-5 border-2 rounded-lg border-cinza-100 focus:outline-none
     focus:border-rosa-destaque
      disabled:bg-cinza-100'
      id={name}
      cols={cols}
      rows={rows}
      value={value}
      onChange={setValue}
      {...props}/>
  )
}
