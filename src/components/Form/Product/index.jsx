import React from 'react'
import { InputText } from '../../Inputs/input-text/inputTextComp'
import { Label } from '../../Inputs/Label';
import { InputNumber } from '../../Inputs/input-number';
import { TextArea } from '../../Inputs/TextArea';
import { AddItems, AddItemsGhost } from '../../Buttons/AddItems';
import { PinkButton } from '../../Buttons/pinkButton';
import { GhostButton } from '../../Buttons/ghostButton';
import { Checkbox } from '@mui/material';
import { SquareCheckBox } from '../../Inputs/input-CheckBox';
import { InputImage } from '../../Inputs/input-file';
import { Input } from 'postcss';
import { Colors } from 'chart.js';

export function ProductForm(){
    const [nameProduct, setNameProduct] = React.useState(" ");
    const [pricProduct, setPriceProduct] = React.useState(null);
    const [descriptionProduct, setDescriptionProduct] = React.useState(null);
    const [sizeProduct, setSizeProduct] = React.useState([])
    const [colorsProduct, setColorsProduct] = React.useState(["nova cor"])
    const [ImageLink, setImageLink] = React.useState([])
    const [dataProduct,setDataProduct] = React.useState([])
    console.log(colorsProduct.map(( item) => console.log(item)))
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

    function handleColor({target}){
      let colorsChange = [...colorsProduct];
      colorsChange[target.id] = target.value  
      setColorsProduct(colorsChange)
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
        <section  aria-label='Visualização do produto' className=' max-h-[90%] rounded-lg '>
          <h1 className=' text-h4'>{nameProduct}</h1>
          {/* <input onChange={handleProfileImageUpload} type='file'/> */}
          <div className=' grid  max-h-[500px]'>
            <InputImage value={ImageLink[0]}  setValue={setImageLink} onChange={handleProfileImageUpload}/>
            <div className='flex gap-3 max-h-6'>
              <InputImage value={ImageLink[1]}  setValue={setImageLink} onChange={handleProfileImageUpload}/>
              <InputImage value={ImageLink[2]}  setValue={setImageLink} onChange={handleProfileImageUpload}/>
              <InputImage value={ImageLink[3]}  setValue={setImageLink} onChange={handleProfileImageUpload}/>

            </div>
          </div>

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
                <section className='flex flex-wrap gap-4 mb-4 '>
                  {sizes.map((size) =>{
                    return(
                      <SquareCheckBox name={size.size} value="500"/>
                    )
                  })}
                </section>
              }
              <AddItemsGhost isOpen={isSizeOptions} onclick={() => setIsSizeOptions(!isSizeOptions)} Text="Adicionar tamanho"/>

            </div>
            
            <div>
              <Label id="adicionarCor" text="Adicionar cores"/>
                {colorsProduct &&
                  <section>
                    {colorsProduct.map((color, index) =>{
                      return(
                        <>
                          <InputText id={index} onChange={handleColor} value={color}/>
                          <button id={index} onClick={() => setColorsProduct() }>-</button>
                        </>
                      )
                    })}
                  </section>
                }
              <AddItemsGhost onclick={() => setColorsProduct([...colorsProduct, "nova cor"])}  Text="Adicionar cor"/>
            </div>

            <nav className='flex gap-4' aria-label='Prosseguir ou cancelar'>
              <PinkButton aria-label="continuar" text="continuar"/>
              <GhostButton text="cancelar"/>
            </nav>

        </section>

    </form>
  )
}
