import React from 'react';
import Close from '../../../assets/close_small.svg';
import Edit from '../../../assets/edit.svg';

export const InputText = React.memo(({
    id,
    type,
    name,
    value,
    onChange,
    onBlur,
    errorValidacao,
    placeholder,
    required,
    disabled,
    error,
    ...props}) =>

        
        <div className='flex w-full'>
            <label  htmlFor={id} className='flex flex-col text-fun2 w-full capitalize' >
                {name}
                <input
                    id={id}
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    {...props}
                    onBlur={onBlur}
                    className={`appearance-none border-[2.5px] ${disabled ? 'bg-cinza-100' : ''} ${error ? 'border-vermelho-300' : 'border-cinza-100'} rounded-lg focus:outline-none focus:border-rosa-destaque w-full py-4 px-3 leading-tight focus:shadow-outline text-fun2 text-cinza-500`}
                    placeholder={placeholder}
                    required={required}
                    disabled={disabled}
                />  
                {errorValidacao && <p className=' text-ct3 capitalize text-vermelho-300'>{errorValidacao}</p>}
                {error && <p className=' text-ct2 capitalize text-vermelho-300'>{error}</p>}
            </label>

        </div>
    )



export function EditableInput({
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
  isEditable
}) {
  return (
    <div className=' flex flex-col w-full'>
      <label htmlFor={id} className='mb-1 capitalize text-fun2'>
        {name}
      </label>
      <div className='relative'>
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={`appearance-none border-2 ${disabled ? 'bg-cinza-100' : 'bg-cinza-50'} ${error ? 'border-vermelho-300' : 'border-cinza-100'} rounded-lg focus:outline-none focus:border-rosa-destaque w-full py-4 px-3 pr-10 leading-tight focus:shadow-outline text-fun2 text-cinza-500`}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
        />
        {isEditable && (
          <button type="button" onClick={onEditClick} className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <img src={disabled ? Edit : Close} alt={disabled ? "Edit" : "Close"} className="w-5 h-5"/>
          </button>
        )}
      </div>
      {errorValidacao && <p className='text-ct3 capitalize text-vermelho-300'>{errorValidacao}</p>}
    </div>
  );
}

