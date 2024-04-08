import React from 'react';
import Close from '../../../assets/close_small.svg'

export function InputText({id, type, name, value, onChange, placeholder, required, disabled, error}) {

    
    return(
        <div className='flex'>
            <input
                id={id}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className={`appearance-none border border-2 ${disabled ? 'bg-cinza-100' : 'bg-cinza-50'} ${error ? 'border-vermelho-300' : 'border-cinza-100'} rounded-lg focus:outline-none focus:border-rosa-destaque w-full py-6 px-3 leading-tight focus:outline-none focus:shadow-outline h-12 md:h-16`}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
            />
            
            {error ? <img className='w-6 mt-4' src={Close} /> : null}
        
        </div>
    )
}