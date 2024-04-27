import React from 'react'
import { Plus } from '../../../assets/Plus'

export function AddItems({onclick}) {
  return (
    <button onClick={onclick} className=' bg-gradient-to-r from-[#BD3FD1] to-[#9332AE] px-4  rounded'>
        <Plus/>
    </button>
  )
}
