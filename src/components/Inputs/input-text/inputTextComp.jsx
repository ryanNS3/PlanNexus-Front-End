import React from 'react';
import Close from '../../../assets/close_small.svg'

export function InputText({
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
    error}) {

    return(
        
        <div className='flex'>
            <label  htmlFor={id} className='flex flex-col text-fun2 w-full capitalize' >
                {name}
                <input
                    id={id}
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    className={`appearance-none border-2 ${disabled ? 'bg-cinza-100' : 'bg-cinza-50'} ${errorValidacao ? 'border-vermelho-300' : 'border-cinza-100'} rounded-lg focus:outline-none focus:border-rosa-destaque w-full py-4 px-3 leading-tight focus:shadow-outline text-fun2 text-cinza-500`}
                    placeholder={placeholder}
                    required={required}
                    disabled={disabled}
                />
                {error ? <img className='w-6 mt-4' src={Close} /> : null}
                {errorValidacao && <p className=' text-ct3 capitalize text-vermelho-300'>{errorValidacao}</p>}
            </label>

        </div>
    )
}
