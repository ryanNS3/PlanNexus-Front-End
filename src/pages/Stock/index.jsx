import React, { useContext } from 'react'
import { CardMedium, CardSmall } from '../../components/Cards/Card'
import avatar from "../../assets/avatar.jpg"
import { TemplateView } from '../../components/ViewTemplate'
import BasicModal, { ExtendModal } from '../../components/Modal'
import { LineTable } from '../../components/LineTable'
import { AddItems } from '../../components/Buttons/AddItems'
import { ProductForm } from '../../components/Form/Product'
import { modalContext } from '../../context/modalContext'
import { PlusWhite } from '../../assets/Plus'
import { useCookies } from '../../hooks/useCookies'


export function Stock() {

  const [isOpenModalForm, setIsOpenModalForm] = React.useState(false)
  const [isOpenModalView, setIsOpenModalView] = React.useState(false)
  const [isOpenModalAddStock, setIsOpenModalAddStock] = React.useState(false)

  const [token, setToken] = useCookies("token", "teste", 1);

  
  return (
    <>
    <button>test</button>

    {/* <DuoModal contentOne={<p>teste</p>} contentDuo={<p>poaaa</p>}/> */}
      <h1 id='BaixoEstoque' className='text-h5 mb-6'>Baixo estoque</h1>
    
      <section className='flex mb-5' aria-labelledby='BaixoEstoque'>
        <CardMedium>
          <section className='flex gap-4'>
            <div className=' max-w-24'>
              <img className=' max-w-[100%]' src={avatar} alt="" />
            </div>

            <div className='flex flex-col justify-between'>
              <h2 className=' text-sub1'>Nome produto</h2>
              <footer>
                <h2 className=' text-cinza-950 text-ct2'>Quantidade em estoque</h2>
                <div className='flex gap-2'>
                  <p className=' text-sub1 gap-2'>150</p>

                  <BasicModal labelButton="Repor estqoue" TextButton={<PlusWhite/>} isOpenModal={isOpenModalForm} setIsOpenModal={setIsOpenModalForm}>
                    <p>eeeee</p>
                  </BasicModal>
                  
                </div>
              </footer>

            </div>
          </section>
          
        </CardMedium>
      </section>

      <TemplateView isExtendModal={true} name="Adicionar produtos" formModal={<ProductForm/>}>

      </TemplateView>
    </>
  )
}
