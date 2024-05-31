import React from 'react'
import { CardMedium} from '../../components/Cards/Card'
import avatar from "../../assets/avatar.jpg"
import { LineTable, TemplateView } from '../../components/ViewTemplate'
import BasicModal, { ExtendModal, UniqueModal } from '../../components/Modal'
import { ProductForm } from '../../components/Form/Product'
import { PlusWhite } from '../../assets/Plus'
import { ProductContext } from '../../context/ProductContext'
import { Box, LinearProgress, Tooltip } from '@mui/material'
import { ProductDetails } from '../../components/Details/productDetails'


export function Stock() {

  const { GetProducts, useGroupDataProducts, CalcAllStockForOneProduct } = React.useContext(ProductContext)
  const { resProductData } = GetProducts();
  const [isExtendModalFormEditing, setIsExtendModalFormEditing] = React.useState(false)
  const configModal = { isExtend: isExtendModalFormEditing, setIsExtend: setIsExtendModalFormEditing}
  const { groupProduct } = useGroupDataProducts(resProductData)
  const [isOpenModalForm, setIsOpenModalForm] = React.useState(false)
  const [isOpenModalAddStock, setIsOpenModalAddStock] = React.useState(false)


  console.log(groupProduct)
  console.log(resProductData)

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
        name="produtos"
        isOpenModal={isOpenModalForm}
        setIsOpenModal={setIsOpenModalForm}
        formModal={<ProductForm />}
        header_data={["Alerta", "Estoque"]}
        gap="14"
        type="products">
        
        {groupProduct &&
          groupProduct.map((product) => {
            const {allStock, allReserved} = CalcAllStockForOneProduct(product.produtos)
            return (
              <LineTable
                name={product.nome}
                typeModal='ExtendModal'
                detailsModal={<ProductDetails isExtendModalForEdit={isExtendModalFormEditing} setIsExtendModalForEdit={setIsExtendModalFormEditing} dataUniqueProduct={product} />}
                configModal={configModal}
                photo={product.produtos[0].fotos[0]}
                grid={`67px 1fr repeat(${3}, 100px)`}
                gap="14">
                  <p>
                    {Number(product.porcentagem) < 30.000 ? "estoque baixo" : "sem alertas" }
                  </p>
                  <Tooltip className='flex flex-col justify-center items-center' title={<span className=' text-fun2'>Total / reservado</span>}>
                    <p className='flex flex-wrap'>
                      <span>{allStock}</span>
                      /
                      <span>{ allReserved}</span>
                    </p>
                    <Box className="w-32 ">
                      <LinearProgress value={product.porcentagem} variant='determinate'/>
                    </Box>
                  </Tooltip>

              </LineTable>
              
            )
          })
        
        }

        </TemplateView>
      
    </>
  )
}