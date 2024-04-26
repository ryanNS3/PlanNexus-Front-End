import React from 'react'
import { CardMedium, CardSmall } from '../../components/Cards/Card'
import avatar from "../../assets/avatar.jpg"
export function Stock() {
  return (
    <>
      <h1 className='text-h5'>Baixo estoque</h1>
      <section className='flex'>
        <CardMedium>
          <section className='flex gap-4'>
            <div className=''>
              <img className=' max-w-[50%]' src={avatar} alt="" />
            </div>

            <div className='flex flex-col justify-between'>
              <h2 className=' text-sub1'>Nome produto</h2>
              <div>
                <h2 className=' text-cinza-950 text-ct2'></h2>
              </div>

            </div>
          </section>
        </CardMedium>
      </section>
    </>
  )
}
