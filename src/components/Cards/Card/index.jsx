import React from 'react'

export function CardSmall({children}){
  return (
    <div className='px-4 py-6 flex flex-col gap-12 border border-cinza-100 rounded-lg shadow-[0_4px_8px_0px_rgba(227,227,227)]'>
        {children}
    </div>
  )
}

export function CardMedium({children}){
    return(
        <div className=' max-w-80 px-4 py-6 flex flex-col gap-12 border border-cinza-100 rounded-lg shadow-[0_4px_8px_0px_rgba(227,227,227)]'>
            {children}
        </div>
    )
}


export function CardLarge({children}){
    return(
        <div>
            {children}
        </div>
    )
}
