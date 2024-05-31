import React from 'react'
import Edit from '../../../assets/edit.svg';

export const TextArea = ({ cols = 50, rows = 6,
  id,
  type = 'text',
  name,
  value,
  onChange,
  onBlur,
  errorValidacao,
  placeholder,
  required,
  disabled,
  error,
  onEditClick,
  isEditable,
  
  
  ...props }) => {
  return (
    <div className=' relative'>
      <textarea  className=' w-full resize-none p-5 border-2 rounded-lg border-cinza-100 focus:outline-none
       focus:border-rosa-destaque
        disabled:bg-cinza-100'
        id={name}
        name={name}
        cols={cols}
        rows={rows}
        value={value}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        onChange={onChange}
        {...props}/>
       {isEditable && (
          <button type="button" onClick={onEditClick} className=" text-fun2 text-vermelho-300 absolute right-4  top-6 transform -translate-y-1/2">
            {/* <img src={disabled ? Edit : Close} alt={disabled ? "Edit" : "Close"} className="w-5 h-5"/>
             */}
          {disabled ? <img src={Edit} alt="" /> : "X" }
          </button>
        )}
      {error && <p className='text-ct3 capitalize text-vermelho-300'>{error}</p>}

    </div>
  )
}
