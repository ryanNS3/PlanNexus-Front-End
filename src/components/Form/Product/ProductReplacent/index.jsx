import React from 'react';
import { SquareCheckBox } from '../../../Inputs/input-CheckBox';
import { Lock } from '../../../../assets/Lock';

export function ProductReplacent({product}) {
    const [selectColor, setSelectColor] = React.useState(null)
    const [idProductSize, setProductSize] = React.useState([])


    function handleSelectColor(event){
        console.log(event)
    }

  return (
      <>
          <h1 className=' text-h4 mb-8 uppercase'>Repor estoque</h1>
          <section className=' space-y-4'>
              <h2 className=' text-sub2'>Seleciona uma cor</h2>
              <div className='flex gap-5'>
                {product && 
                    product.map((color) =>{
                        return(
                            <article>
                                <SquareCheckBox onChange={handleSelectColor}>
                                    <img className=' w-full' src={color.fotos[0]}/>
                                </SquareCheckBox>
                                <p className=' text-fun2'>{color.cor}</p>
                            </article>
                        )
                    })
                }

              </div>
          </section>

          <section>
            <div className='flex items-center gap-2'>
                <h1 className=' text-sub2'>Tamanhos</h1>
                <Lock black/>
            </div>
           
          </section>
      </>
  )
}
