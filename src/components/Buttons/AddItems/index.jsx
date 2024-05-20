import React from 'react'
import { PlusRose, PlusWhite } from '../../../assets/Plus'

export function AddItems({onclick, id}) {
  return (
    <button id={id} onClick={onclick} className=' hover:bg-gradient-to-r hover:from-[#BD3FD1] hover:to-[#9332AE] px-4  rounded'>
        <PlusRose/>
    </button>
  )
}


export function AddItemsGhost({id,Text,onclick,hover, isOpen}){
  // const isHover = hover ?  <PlusWhite/>: <PlusRose/> 
  return (
    <button id={id} onClick={onclick} className='flex items-center gap-2 mt-2'>
        <div className={` p-1 border-[3px]  hover:text-branco  text-rosa-300" border-rosa-300 hover:bg-gradient-to-r hover:from-[#BD3FD1] hover:to-[#9332AE] px-4  rounded`}>
          {isOpen ? <span className=' rotate-1 delay-75 duration-150 '>-</span> : <span className=' rotate-1 delay-75 duration-150'>+</span>}
        </div>

        <p className=' text-ct2'>{Text}</p>
    </button>
  )
  
}
