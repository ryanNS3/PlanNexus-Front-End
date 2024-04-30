import React from 'react'
import { InputText } from '../../Inputs/input-text/inputTextComp'
import { Label } from '../../Inputs/Label';
import { InputNumber } from '../../Inputs/input-number';
import { TextArea } from '../../Inputs/TextArea';
import { AddItems, AddItemsGhost } from '../../Buttons/AddItems';
import { PinkButton } from '../../Buttons/pinkButton';
import { GhostButton } from '../../Buttons/ghostButton';
import { Checkbox } from '@mui/material';
import { SquareCheckBox } from '../../Inputs/CheckBox';

export function ProductForm(){
    const [nameProduct, setNameProduct] = React.useState(null);
    const [pricProduct, setPriceProduct] = React.useState(null);
    const [descriptionProduct, setDescriptionProduct] = React.useState(null);
    const [sizeProduct, setSizeProduct] = React.useState([])
    const [colorsProduct, setColorsProduct] = React.useState([])
    const [ImageLink, setImageLink] = React.useState([])
    const [dataProduct,setDataProduct] = React.useState([])

    const [isSizeOptions, setIsSizeOptions] = React.useState(false)


    const sizes = [
      {
        size: "P"
      } ,
      {
        size: "M"
      } ,
      {
        size : "G"
      },
      
    ]
    

    function handleCreateProduct(event){
        event.preventDefault()
        setDataProduct([{
          name:  nameProduct,
          cores: colorsProduct,
          fotos:{
            ...ImageLink
          },
          brinde: false
        }])

        console.log(dataProduct)
    }

  const handleProfileImageUpload = (event) => {
    const image = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageLink(reader.result);
    };
    if (image) {
      reader.readAsDataURL(image);
    }
  };


  return (
    <form className='grid md:grid-cols-2 max-h-full' onSubmit={handleCreateProduct}>
        <section aria-label='Visualização do produto' className=''>
          <h1 className=' text-h4'>{nameProduct}</h1>
          <input onChange={handleProfileImageUpload} type='file'/>
          <img src={ImageLink}/>
        </section>

        <section aria-label='Formulário produto' className='flex flex-col p-4 max-h-[90%] gap-6 overflow-y-scroll overflow-hidden'>
            <h1 className=' text-h4'>Adicionar produto</h1>

            <div>
             
              <InputText name="nome" value={nameProduct} onChange={(event) => setNameProduct(event.target.value)}  type="text" />
            </div>
            
            <div>
              <Label text="Preço" id="preco">Preço</Label>
              <InputNumber name="preco" />
            </div>

            <div>
              <Label text="Descrição" id="descricao"/>
              <TextArea cols={62} name="descricao" placeholder="Descreva detalhes sobre o produto"/>
            </div>

            <div>
              <Label id="adicionarTamanhos" text="Adicionar tamanhos"/>
              {isSizeOptions && 
                <section className='flex flex-wrap gap-4'>
                  {sizes.map((size) =>{
                    return(
                      <SquareCheckBox name={size.size} value="500"/>

                    )

                  })}
                 

                </section>
              }
              <AddItemsGhost onclick={() => setIsSizeOptions(!isSizeOptions)} Text="Adicionar tamanho"/>

            </div>
            
            <div>
              <Label id="adicionarCor" text="Adicionar cores"/>
              <AddItemsGhost  Text="Adicionar cor"/>
            </div>

            <nav className='flex gap-4' aria-label='Prosseguir ou cancelar'>
              <PinkButton aria-label="continuar" text="continuar"/>
              <GhostButton text="cancelar"/>
            </nav>

        </section>

    </form>
  )
}
