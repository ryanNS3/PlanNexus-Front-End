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
        <article className='mt-20 w-80 h-56 bg-gradient-to-br from-[#FFF] from-3% to-[#F6F4F4] to-96% shadow-lg border-2 border-cinza-100 rounded-lg p-4'>
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
