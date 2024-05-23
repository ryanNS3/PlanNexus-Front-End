import React from 'react'
import { CardMedium} from '../../components/Cards/Card'
import avatar from "../../assets/avatar.jpg"
import { TemplateView } from '../../components/ViewTemplate'
import BasicModal, { ExtendModal, UniqueModal } from '../../components/Modal'
import { ProductForm } from '../../components/Form/Product'
import { PlusWhite } from '../../assets/Plus'
import { ProductContext } from '../../context/ProductContext'
import { LineTable } from '../../components/LineTable'
import { GhostButton } from '../../components/Buttons/ghostButton'
import { PinkButton } from '../../components/Buttons/pinkButton'
import { EditProductForm } from '../../components/Form/Product/EditProduct'



export function Stock() {
  const [isOpenModalForm, setIsOpenModalForm] = React.useState(false)
  const [isOpenModalAddStock, setIsOpenModalAddStock] = React.useState(false)

  return (
    <>

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

                  <BasicModal labelButton="Repor estqoue" TextButton={<PlusWhite/>} isOpenModal={isOpenModalAddStock} setIsOpenModal={setIsOpenModalAddStock}>
                    <h3>Repor estoque</h3>
                  </BasicModal>
                  
                </div>
              </footer>

            </div>
          </section>
        </CardMedium>
      </section>

      <TemplateView role=""
        isExtendModalForm={true}
        name="Adicionar produtos"
        isOpenModal={isOpenModalForm}
        setIsOpenModal={setIsOpenModalForm}
        formModal={<ProductForm />}
        header_data={["Alerta", "Estoque"]}
        type="products"/>

      
    </>
  )
}