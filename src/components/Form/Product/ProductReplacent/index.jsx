import React from 'react';
import { GhostButton } from '../../../Buttons/ghostButton';
import { PinkButton } from '../../../Buttons/pinkButton';
import { ProductContext } from '../../../../context/ProductContext';
import { toastifyContext } from '../../../../context/toastifyContext';


export function ProductReplacent({ idOfColor, product, setOpenReplacentModal }) {
    const {mutateReplacentProducts} = React.useContext(ProductContext)
    const [idProductSize, setProductSize] = React.useState([])
    const [numberAdd, setNumberAdd] = React.useState(0)
    const [loadingButton, setLoadingButton] = React.useState(false)

    function handleDisabledButtonProductReplacnet(){

    }

    const [dataProductReplacent, setDataProductReplacent] = React.useState(() => product[idOfColor].tamanhos.map((size) => {
        return (
                {
                    tamanho: size.tamanho,
                    id: size.id_produto,
                    qtd_estoque: size.qtd_estoque,
                    add_estoque: 0
                }
        )
    }))
    const {Notification} = React.useContext(toastifyContext)


    function handleSubmitProductReplacent(event) {
        event.preventDefault()
        dataProductReplacent.map((size) => {
            if (size.add_estoque > 0) {
                setLoadingButton(true)
                mutateReplacentProducts.mutate({
                    idProduto: size.id,
                    quantidade: size.qtd_estoque + size.add_estoque
                })  

                if (mutateReplacentProducts.isSuccess) {
                    setLoadingButton(false)
                    setDataProductReplacent((prevState) => {
                        return prevState.map((size) => {
                            if (size.add_estoque > 0) {
                                return {...size, add_estoque: 0 }
                            }
                            return size
                        })
                    })
                    Notification("sucess", "REPOSIÇÃO FEITA COM SUCESSO")
                }
                else if (mutateReplacentProducts.isError) {
                    setLoadingButton(false)
                    Notification("error", "reposição falhou")
                }
             
            }

            
        })


    }
        

    function handleCloseProductReplacentModal(event) {
        event.preventDefault()
        setOpenReplacentModal(false)

    }

    function handleChangeStockReplacent(event){
        event.preventDefault()
        const productIdSelected = event.target.dataset.productId
        let value = event.target.value

        setDataProductReplacent((prevState) => {
            return prevState.map((size) => {
                if (size.id == productIdSelected && value >= 0) {
                    return {...size, add_estoque: value }
                }
                return size
            })
        })
        
    }

    function handleAddProductForStock(event) {
        event.preventDefault()
        const productIdSelected = event.target.dataset.productId
        setDataProductReplacent((prevState) => {
            return prevState.map((size) => {
                if (size.id == productIdSelected) {
                    return {...size, add_estoque: size.add_estoque + 1 }
                }
                return size
            })
        })
    }
    function handleRemoveProductForStock(event) {
        event.preventDefault()
        const productIdSelected = event.target.dataset.productId
        setDataProductReplacent((prevState) => {
            return prevState.map((size) => {
                if (size.id == productIdSelected) {
                    return {...size, add_estoque: size.add_estoque - 1 }
                }
                return size
            })
        })
        
    }

  return (
      <form className=' max-h-[99%] overflow-y-scroll py-5' onSubmit={handleSubmitProductReplacent} >
          <h1 className=' text-h4 mb-8 uppercase'>Repor estoque</h1>
          <section>
            <div>
                  <h1 className=' text-sub2 mb-4'>Tamanhos</h1>
                  <div className=' flex flex-col gap-4'>
                        {dataProductReplacent.map((size) => (
                            <article data-product-id={size.id} className=' h-16 flex justify-between items-center border-2 border-cinza-100 rounded-lg px-8 '>
                                <p>{ size.tamanho}</p>
                                <p>{ size.qtd_estoque}</p>
                                <div className='flex justify-between'>
                                    <div className='flex gap-2'>
                                        <button data-product-id={size.id} className=' size-6 bg-cinza-100 rounded-full hover:bg-rosa-300 hover:text-branco ' onClick={handleAddProductForStock}>+</button>
                                        <input onChange={handleChangeStockReplacent} value={size.add_estoque} id='hiddenNumber' className='flex w-10 active:border-rosa-300' type='number' data-product-id={size.id} />
                                        <button data-product-id={size.id} disabled={size.add_estoque == 0} className='size-6 bg-cinza-100 rounded-full disabled:opacity-0 duration-75 hover:bg-rosa-300 hover:text-branco  ' onClick={handleRemoveProductForStock}>-</button>
                                    </div>
                                </div>

                            </article>
                            
                        ))}

                  </div>
            </div>
           
          </section>

          <div className='flex gap-4 mt-9'>
            <GhostButton action={handleCloseProductReplacentModal} text="CANCELAR"/>
            <PinkButton loading={loadingButton} text="CONTINUAR"/>
          </div>
      </form>
  )
}
