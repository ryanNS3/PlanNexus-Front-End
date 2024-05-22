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
  const [isEditProduct, setIsEditProduct] = React.useState(false);
  const [groupProduct, setGroupProduct] = React.useState(null)
  const [isOpenModalAddStock, setIsOpenModalAddStock] = React.useState(false)
  const {GetProducts, FetchGetProducts} = React.useContext(ProductContext)
  const [productSelected, setProductSelected] = React.useState(null)

  function handleEditProduct(event){
    console.log(event)

    setIsEditProduct((prevIsEditProduct)=> !prevIsEditProduct)
  }
  

  const {resProductData} = GetProducts()
  console.log(resProductData)

  React.useEffect(() =>{
    setIsEditProduct((prevIsEditProduct)=> !prevIsEditProduct)
  },[])

  React.useEffect(() => {
    if (resProductData && resProductData.json && resProductData.json.response) {
      const groupedProducts = resProductData.json.response.reduce((acc, product) => {
        if (!acc[product.nome]) {
          acc[product.nome] = { nome: product.nome, produtos: [] }
        }

        const existingProduct = acc[product.nome].produtos.find(p => p.cor === product.cor)

        if (existingProduct) {
          existingProduct.tamanhos.push({
            id_produto: product.id_produto,
            tamanho: product.tamanho,
            qtd_estoque: product.qtd_estoque,
            qtd_reservada: product.qtd_reservada,
            valor: product.valor
          })
          existingProduct.fotos.push(...product.foto)
        } else {
          acc[product.nome].produtos.push({
            cor: product.cor,
            tamanhos: [{
              id_produto: product.id_produto,
              tamanho: product.tamanho,
              qtd_estoque: product.qtd_estoque,
              qtd_reservada: product.qtd_reservada,
              valor: product.valor
            }],
            fotos: [...product.foto]
          })
        }

        return acc
      }, {})

      const result = Object.values(groupedProducts)
      setGroupProduct(result)
      console.log(result)
    }
  }, [resProductData])
  
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
        name="Adicionar produtos"
        isOpenModal={isOpenModalForm}
        setIsOpenModal={setIsOpenModalForm}
        formModal={<ProductForm />}
        header_data={["Alerta", "Estoque"]}
        type="products"/>

      <div className=' space-y-4'>
        {groupProduct &&
          groupProduct.map((product) =>{
            return(
              <div className='flex  items-center border-2 p-2 gap-4 overflow-y-scroll max-h-full  rounded border-cinza-100'>
                <div className=' w-14'>
                  <img className=' rounded max-w-full' src={product.produtos[0].fotos[0]}/>
                </div>
                <p>{`${product.nome}(${product.cor})`}</p>
                
                <ExtendModal onCloseCallBack={handleEditProduct} selectedId={product.id_produto} setSelectedId={setProductSelected} isExtend={isEditProduct} componentForOpenModal={<PinkButton/>} >
                    <div className={` max-h-full ${isEditProduct ? "grid grid-cols-2 gap-6" : ""}`}>
                      <div className='max-h-full overflow-y-scroll'>
                        <div className='flex gap-2'>
                          {!isEditProduct &&
                          <>
                            <GhostButton action={handleEditProduct} align="start" size="medium" text={`Editar produto`}/>
                            <span className=' block w-[2px] h-10 rounded-sm bg-cinza-100'></span>
                            <PinkButton align="start" size="medium" text={`+ Repor esroque`}/>
                          </>
                          }
                        </div>
                        <header className='flex justify-between'>
                          <h4 className=' text-h5'>{`${product.nome}`}</h4>
                          <p className=' text-sub2'>R${product.valor}</p>
                        </header>

                        <span className='block w-full h-[2px] my-4 bg-cinza-100 '></span>

                        {product.produtos[0].fotos.length > 1 && 
                        <section className='  '>
                            <img className='rounded' src={product.produtos[0].fotos[0]} alt="" />
                          <div className='flex max-w-[99%] overflow-x-scroll'>
                            {product.produtos[0].fotos.map((image, index) => 
                            {
                              return(
                              <div key={index} className=''>
                                <img className=' w-full min-w-18' key={index} src={image} alt="" />
                              </div>
                              )
                            }
                            )}
                          </div>
                        </section>
                        }
                      </div>
                      <EditProductForm name={product.nome} preco={product.produtos[0].tamanhos[0].valor}/>  
                    </div>
                  </ExtendModal>
                </div>
              )
            })
          }
        </div>
      <div>


    </div>
    </>
  )
}