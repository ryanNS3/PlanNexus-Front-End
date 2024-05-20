import React from 'react'
import { CardMedium} from '../../components/Cards/Card'
import avatar from "../../assets/avatar.jpg"
import { TemplateView } from '../../components/ViewTemplate'
import BasicModal, { UniqueModal } from '../../components/Modal'
import { ProductForm } from '../../components/Form/Product'
import { PlusWhite } from '../../assets/Plus'
import { ProductContext } from '../../context/ProductContext'
import { LineTable } from '../../components/LineTable'
import { GhostButton } from '../../components/Buttons/ghostButton'
import { PinkButton } from '../../components/Buttons/pinkButton'



export function Stock() {
  const [isOpenModalForm, setIsOpenModalForm] = React.useState(false)
  const [isOpenModalView, setIsOpenModalView] = React.useState(false)
  const [isOpenModalAddStock, setIsOpenModalAddStock] = React.useState(false)
  const {GetProducts, FetchGetProducts} = React.useContext(ProductContext)
  const [productSelected, setProductSelected] = React.useState(null)

  function handleEditProduct(event){
    console.log(event)
  }
  

  const {resProductData} = GetProducts()
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
        isExtendModal={true}
        name="produtos"
        isOpenModal={isOpenModalForm}
        setIsOpenModal={setIsOpenModalForm}
        formModal={<ProductForm setIsOpenProductModal={setIsOpenModalForm}/>}
        header_data={["Alerta", "Estoque", "Ações"]}/>

      <div className=' space-y-4'>
        {resProductData &&
          resProductData.json.response.map((product) =>{
            return(
              <div className='flex  items-center border-2 p-2 gap-4 overflow-y-scroll max-h-full  rounded border-cinza-100'>
                <div className=' w-14'>
                  <img className=' rounded max-w-full' src={product.foto[0]}/>
                </div>
                <p>{`${product.nome}(${product.cor})`}</p>
                <UniqueModal selectedId={product.id_produto} setSelectedId={setProductSelected} >

                  <div className='flex gap-2'>
                    <GhostButton action={handleEditProduct} align="start" size="medium" text={`Editar produto`}/>
                    <span className=' block w-[2px] h-10 rounded-sm bg-cinza-100'></span>
                    <PinkButton align="start" size="medium" text={`+ Repor esroque`}/>
                  </div>
                  <header className='flex justify-between'>
                    <h1 className=' text-h5'>{`${product.nome}(${product.cor})`}</h1>
                    <p className=' text-sub2'>R${product.valor}</p>
                  </header>

                  <span className=' block w-full h-[2px] my-4 bg-cinza-100 '></span>

                  {product.foto.length > 1 && (
                  <section className='  '>
                      <img className='rounded' src={product.foto[0]} alt="" />
                    <div className=' grid grid-cols-6'>
                      {product.foto.map((image, index) => (
                        <div key={index} className=''>
                          <img key={index} src={image} alt="" />
                        </div>
                      ))}
                    </div>
                  </section>
                  )}

                  {/* If there's only one photo, you can render it like this */}
                  {product.foto.length === 1 && (
                    <img className='rounded' src={product.foto[0]} alt="" />
                  )}

                  
                </UniqueModal>
              </div>
            )
          })
        
        }
      </div>
    </>
  )
}
