import React from 'react';
import { SquareCheckBox } from '../../../Inputs/input-CheckBox';
import { Lock } from '../../../../assets/Lock';
import { GhostButton } from '../../../Buttons/ghostButton';
import { PinkButton } from '../../../Buttons/pinkButton';

export function ProductReplacent({product}) {
    const [selectColor, setSelectColor] = React.useState(null)
    const [idProductSize, setProductSize] = React.useState([])

    console.log(product)

    function handleProductReplacent(event){
        event.preventDefault()
        
    }

  return (
      <>
          <h1 className=' text-h4 mb-8 uppercase'>Repor estoque</h1>
          {/* <section className=' space-y-4'>
              <h2 className=' text-sub2'>Seleciona uma cor</h2>
              <div className='flex gap-5'>
                {product && 
                    product.map((color) =>{
                        return(
                            <div data-color-id={color}>
                                <SquareCheckBox value={color.cor} onChange={handleSelectColor}>
                                    <img className='w-full' src={color.fotos[0]}/>
                                </SquareCheckBox>
                                <p className='text-fun2' >{color.cor}</p>
                            </div>
                        )
                    })
                }

              </div>
          </section> */}

          <section>
            <div className='flex items-center gap-2' >
                <h1 className=' text-sub2'>Tamanhos</h1>
            </div>
           
          </section>


          <div className='flex'>
            <GhostButton text="CANCELAR"/>
            <PinkButton text="CONTINUAR"/>
          </div>
      </>
  )
}
