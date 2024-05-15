import React from 'react'

export function SquareCheckBox({name, value , setvalue, check, onChange, ...props}){
  return (
    <label className=' block relative '> 
        <div className='py-4 px-5 bg-cinza-100 rounded'>
            <input className=' absolute -top-1 -right-1' type='checkbox' value={value} onChange={onChange} checked={check} {...props}/>
            <div className=' z-20'>
                {name}
            </div>  
        </div>
        
    </label>
  )
}

export function CheckBox({name, value , setvalue, check, onChange, ...props}){
  return (
    <label className=' relative '> 
            <input className='w-6 h-6 border-preto' type='checkbox' value={value} onChange={onChange} checked={check} {...props}/>
            <div className=' z-20'>
                {name}
            </div>  
    </label>
  )
}