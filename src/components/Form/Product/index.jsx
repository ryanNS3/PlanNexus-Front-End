import React from 'react'
import { InputText } from '../../Inputs/input-text/inputTextComp'

export function ProductForm(){
    const [nameProduct, setNameProduct] = React.useState(null);
    const [pricProduct, setPriceProduct] = React.useState(null);
    const [descriptionProduct, setDescriptionProduct] = React.useState(null);
    const [sizeProduct, setSizeProduct] = React.useState([])
    const [colorsProduct, setColorsProduct] = React.useState([])
    
    


    function handleCreateProduct(event){
        event.preventDefault()
        

    }


  return (
    <form className='grid md:grid-cols-2' onSubmit={handleCreateProduct}>
        <div>

        </div>

        <div>
            <h1>Adicionar produto</h1>
            <InputText type="color" />

        </div>
    </form>
  )
}
