import React from 'react'
import { PlusRose, PlusWhite } from '../../../assets/Plus'

export function AddItems({onclick, id}) {
  return (
    <button id={id} onClick={onclick} className=' hover:bg-gradient-to-r hover:from-[#BD3FD1] hover:to-[#9332AE] px-4  rounded'>
        <PlusRose/>
    </button>
  )
}


export function AddItemsGhost({id,Text,onclick,  hover}){
  const isHover = hover ?  <PlusWhite/>: <PlusRose/> 
  return (
    <button id={id} onClick={onclick} className='flex items-center gap-2'>
        <div className='p-2 border-2 border-rosa-300 hover:bg-gradient-to-r hover:from-[#BD3FD1] hover:to-[#9332AE] px-4  rounded'>
          {isHover}
        </div>

        <p className=' text-ct2'>{Text}</p>
    </button>
  )
  
}
