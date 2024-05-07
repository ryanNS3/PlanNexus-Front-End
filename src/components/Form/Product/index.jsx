import React from 'react'
import { InputText } from '../../Inputs/input-text/inputTextComp'
import { Label } from '../../Inputs/Label';
import { InputNumber } from '../../Inputs/input-number';
import { TextArea } from '../../Inputs/TextArea';
import { AddItemsGhost } from '../../Buttons/AddItems';
import { PinkButton } from '../../Buttons/pinkButton';
import { GhostButton } from '../../Buttons/ghostButton';
import { SquareCheckBox } from '../../Inputs/input-CheckBox';
import { InputImage } from '../../Inputs/input-file';
import { Link } from 'react-router-dom';


export function ProductForm(){
    const [nameProduct, setNameProduct] = React.useState(" ");
    const [pricProduct, setPriceProduct] = React.useState(null);
    const [descriptionProduct, setDescriptionProduct] = React.useState(null);
    const [sizeProduct, setSizeProduct] = React.useState([])
    const [colorsProduct, setColorsProduct] = React.useState([])
    const [ImageLink, setImageLink] = React.useState([],["eeeee", "aaaaaa"],['', '', '', ''],['','','','', ''])
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
          tamanhos: sizeProduct,
          fotos:{
            ...ImageLink
          },
          brinde: false
        }])

        // console.log(dataProduct)
    }

    let image = ImageLink
    image[0] =  {nome:{
      link: "teste",
    },
    nome:{
      link: "teste"
    },
    nome:{
      link: "teste"
    },
    nome3:{
      link: "teste"
    }
    },
  
    
  
  
    
    console.log(ImageLink.filter((item) => item))
    // setImageLink([...ImageLink, ImageLink[0]])

    
    // console.log(ImageLink.map((item) => item))
    
    
    
    function handleSize({target}){
      if (target.checked){
        setSizeProduct([...sizeProduct, target.value])
      }
      
      else{
        setSizeProduct(sizeProduct.filter((size) => size !== target.value))
      }
    }

    function handleColor({target}){
      let colorsChange = [...colorsProduct];
      colorsChange[target.id] = target.value  
      setColorsProduct(colorsChange)
    }
  return (
    <form className='grid md:grid-cols-2 max-h-full' onSubmit={handleCreateProduct}>
        <section  aria-label='Visualização do produto' className=' max-h-[90%] rounded-lg '>
          <h1 className=' text-h4'>{nameProduct}</h1>
          {/* <input onChange={handleProfileImageUpload} type='file'/> */}
          <div className=' grid grid-cols-[1fr 2fr] max-h-[500px]'>
            <div className='flex gap-3 max-h-6'>
              {/* <InputImage value={ImageLink[1]}  setValue={setImageLink}/>
              <InputImage value={ImageLink[2]}  setValue={setImageLink} />
              <InputImage value={ImageLink[3]}  setValue={setImageLink}/> */}

            </div>
            {/* <InputImage value={ImageLink[0]}  setValue={setImageLink} /> */}
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
                      <SquareCheckBox name={size.size} value={size.size} check={sizeProduct.includes(size.size)} onChange={handleSize}/>
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
                          <InputText placeholder="Digite o nome da cor" id={index} onChange={handleColor} value={color}/>
                          <button id={index} onClick={() => setColorsProduct() }>-</button>
                        </>
                      )
                    })}
                  </section>
                }
              <AddItemsGhost onclick={() => setColorsProduct([...colorsProduct, ""])}  Text="Adicionar cor"/>
            </div>

            <nav className='flex gap-4' aria-label='Prosseguir ou cancelar'>
              <PinkButton aria-label="continuar" text="continuar"/>
              <GhostButton text="cancelar"/>
            </nav>

        </section>

    </form>
  )
}

