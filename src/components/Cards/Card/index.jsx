import React from 'react'

export function CardSmall({children}){
  return (
    <article className='px-4 py-6 flex flex-col gap-12 border border-cinza-100 rounded-lg shadow-[0_4px_8px_0px_rgba(227,227,227)]'>
        {children}
    </article>
  )
}

export function CardMedium({children}){
    return(
        <article className='max-h-72 min-w-84 max-w-86 px-4 py-6 flex flex-col gap-12 border border-cinza-100 rounded-lg shadow-[0_4px_8px_0px_rgba(227,227,227)]'>
            {children}
        </article>
    )
}


export function CardLarge({children}){
    return(
        <article>
            {children}
        </article>
    )
}
