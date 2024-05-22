import React from "react";
import useAxios from "../../../hooks/useAxios"
import { InputText } from "../../Inputs/input-text/inputTextComp";
import { Label } from "../../Inputs/Label";
import { InputNumber } from "../../Inputs/input-number";
import { TextArea } from "../../Inputs/TextArea";
import { AddItemsGhost } from "../../Buttons/AddItems";
import { PinkButton } from "../../Buttons/pinkButton";
import { GhostButton } from "../../Buttons/ghostButton";
import { SquareCheckBox } from "../../Inputs/input-CheckBox";
import { InputImage } from "../../Inputs/input-file";
import avatar from "../../../assets/avatar.jpg"
import { productReduce } from "../../../reducers/product/reduce";
import { toastifyContext } from "../../../context/toastifyContext";

export function ProductForm({ setIsOpenProductModal }) {
  // informações para consumir a API
  const {requisicao,dados,loading,error} = useAxios()
  const BASE_URL = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem('token')
  const user = localStorage.getItem('user')
  const {Notification} = React.useContext(toastifyContext)

  const [productDataState, dispatch] = React.useReducer(
    productReduce
    ,{
    nameProduct: "",
    priceProduct: 1,
    descriptionProduct: "",
    discountProduct: 1,
    sizeProduct: [],
    colorsProduct: [],
    selectedColor: null,
    image: [[], [], [], []],
    isSize: false
  })

  const {nameProduct, priceProduct, discountProduct, descriptionProduct, sizeProduct ,colorsProduct, selectedColor, image} = productDataState
  const [isSizeOptions, setIsSizeOptions] = React.useState(false);
  /**
   * ATENÇÃO!!
   * A variável tempColorValue foi criada para controle unico do input de cor, pois,
   *  não é possível alterar diretamente no reduce, sempre que um item é alterado TODOS os inputs
   *  são renderizados novamente ocasionando a perca de foco ao digitar no input
   */
  const [tempColorValue, setTempColorValue] = React.useState(colorsProduct)

  const sizes = [
    {
      size: "P",
    },
    {
      size: "M",
    },
    {
      size: "G",
    },
  ];
  console.log(image)
  async function handleCreateProduct(event) {
    event.preventDefault()
    const AddProductFetch = await requisicao(`${BASE_URL}/produto/`,{
      nome: nameProduct,
      cores: colorsProduct,
      valor : parseFloat(priceProduct),
      desconto: parseFloat(discountProduct),
      tamanhos: sizeProduct,
      descricao: descriptionProduct,
      fotos: image.flat(),
      brinde: "false",
    }, "POST", {
      authorization: `bearer ${token}`,
      nif: user,
      'Content-Type': 'multipart/form-data',
    })

    if (AddProductFetch){
      Notification("sucess", "Produto cadastrado com sucesso")
      setIsOpenProductModal(false)
    }
    else{
      Notification("error", "Ocorreu um erro")
    }

  }
  

  function handleRemoveColor(event){
    event.preventDefault()
    const keyOfColor = event.target.id
    const colorRemove = colorsProduct[keyOfColor]
    const filteredColor = colorsProduct.filter((color, index) => index != keyOfColor)
    // console.log(image.flat().filter((image) => image))

    dispatch({
      type: "HANDLE_REMOVE_COLOR",
      payload: keyOfColor
      
    })
    setTempColorValue(filteredColor)

    
  }

  function handleCloseSizeOptions(event){
    event.preventDefault()
    setIsSizeOptions(!isSizeOptions)
    // setSizeProduct([])
  }

  function handleChangeSelectedColor(event){
    event.preventDefault()
    dispatch({
      type: "HANDLE_SELECTED_COLOR",
      payload : event.currentTarget.dataset.color
    })
  }

  function handleChangeDescription(event){
    dispatch({
      type: "HANDLE_CHANGE_DESCRIPTION",
      payload: event.target.value
    })
  
  }

  function handleSize({ target }) {
    dispatch({
      type: "HANDLE_CHANGE_SIZE",
      payload:{
        check : target.checked,
        value: target.value
      }
    })
  }


  function handleChangeColor({target}){
    let colorsChange = [...tempColorValue];
    colorsChange[target.id] = target.value;
    setTempColorValue(colorsChange)

  }

  function handleBlurColor(event) {
   dispatch({
    type: "HANDLE_CHANGE_COLOR",
    payload:{
      id: event.target.id,
      value: event.target.value
    }
   })
  }

  function handleToAdd(event){
    event.preventDefault()
    dispatch({
      type : "HANDLE_ADD_COLOR"
    })

    // setTempColorValue( [...tempColorValue, `cor${tempColorValue.length}`])
  }

  function handleRemoveImage(event, indexPosition, indexOfColor){
    event.preventDefault()

    dispatch({
      type: "HANDLE_REMOVE_IMAGE",
      payload:{
        indexPosition : indexPosition,
        indexOfColor : indexOfColor

      }
    })
  }

  const onDropImage = React.useCallback((file, index) =>{
    dispatch({
      type: "ON_DROP_IMAGE",
      payload :{
        index : index,
        file : file
      }
    })
  },[selectedColor])
  

  return (
    <form
    className="grid md:grid-cols-2 gap-14 max-h-full w-full overflow-y-scroll"
    onSubmit={handleCreateProduct}
    >
      <section
        aria-label="Formulário produto"
        className="flex flex-col p-4 md:max-h-[99%] gap-6 md:overflow-y-scroll"
        >
        <h1 className=" grid-rows-1 text-h4">Adicionar produto</h1>
        <InputText
          name="nome"
          value={nameProduct}
          onChange={ (event) => dispatch({type: "HANDLE_CHANGE_NAME", payload: event.target.value })}
          type="text"
        />

        <div>
          <Label text="Preço" id="preco">
            Preço
          </Label>
          <InputNumber
            value={priceProduct}
            onChange={(event) => dispatch({type: "HANDLE_CHANGE_PRICE", payload: event.target.value })}
            steps={0.1}
            name="preco"
          />
        </div>

        <div>
          <Label text="Desconto" id="desconto">
            Desconto:
          </Label>
          <InputNumber
            value={discountProduct}
            onChange={(event) => dispatch({type: "HANDLE_CHANGE_DISCOUNT", payload: event.target.value})}
            steps={0.1}
            name="desconto"
          />
        </div>

        <div>
          <Label text="Descrição" id="descricao" />
          <TextArea
            cols={62}
            value={descriptionProduct}
            onChange={handleChangeDescription}
            name="descricao"
            placeholder="Descreva detalhes sobre o produto"
          />
        </div>

        <div>
          <Label id="adicionarCor" text="Adicionar cores" />
          {colorsProduct && (
            <section className="flex flex-col gap-2">
              {colorsProduct.map((color, index) => {
                return (
                  <div key={color+index} className=" flex justify-center items-center gap-4">
                    <InputText
                      placeholder="Digite o nome da cor"
                      id={index}
                      onBlur={handleBlurColor}
                      onChange={handleChangeColor}
                      value={tempColorValue[index]}
                    />
                    <button  className="p-2 rounded bg-cinza-100 hover:bg-rosa-300 hover:text-cinza-50" id={index} onClick={handleRemoveColor}>
                      -
                    </button>
                  </div>
                );
              })}
            </section>
          )}
          <AddItemsGhost
            onclick={handleToAdd}
            Text="Adicionar cor"
          />
        </div>

        <div>
          <Label id="adicionarTamanhos" text="Adicionar tamanhos" />
          {isSizeOptions && (
            <section className="flex flex-wrap gap-4 mb-4 ">
              {sizes.map((size, index) => {
                return (
                  <SquareCheckBox
                    name={size.size}
                    value={size.size}
                    key={size + index}
                    check={sizeProduct.includes(size.size)}
                    onChange={handleSize}
                  />
                );
              })}
            </section>
          )}
          <AddItemsGhost
            isOpen={isSizeOptions}
            onclick={handleCloseSizeOptions}
            Text={`${isSizeOptions ? "Remover tamanhos" : "Adicionar tamanhos"}`}
          />
        </div>

        <nav className="flex gap-4" aria-label="Prosseguir ou cancelar">
          <PinkButton
            onClick={handleCreateProduct}
            aria-label="continuar"
            text="continuar"
          />
          <GhostButton
            action={() => setIsOpenProductModal(false)}
            text="cancelar"
          />
        </nav>
      </section>

      <section
        aria-label="Visualização do produto"
        className="flex flex-col sm:max-h-[99%] md:overflow-y-scroll rounded-lg "
      >
        <h2 className=" text-h4">{nameProduct}</h2>
        <p>Selecione a cor</p>
        
        <section className="flex gap-2 justify-start items-start">
          {tempColorValue.map((color, index) =>{
             if (color !== "") {
               return(
                 <button key={`selectedColor${color}${index}`} data-color={color} onClick={handleChangeSelectedColor}
                  className={`flex flex-col justify-start items-start`}>
                   <div
                     className={`flex flex-1 border-[3px] border-cinza-100 ${selectedColor === color ? " border-rosa-300" : ""}  hover:border-rosa-300 py-2 px-2  rounded-lg `}>
                     <p  className="text-fun2">{color}</p>
                   </div>
                 </button> 
               )
             }
            }
          )}
        </section>
          <div className=" grid grid-cols-[1fr 2fr] gap-6 max-h-[500px] backdrop-blur-2xl">
            <InputImage onDrop={(file) => onDropImage(file, 0)} onRemoveImage={(event) => handleRemoveImage(event,0,colorsProduct.indexOf(selectedColor))}  keyForImage={selectedColor} indexForColor={colorsProduct.indexOf(selectedColor)} disabled={!selectedColor} indice={0} value={image}  />
            <div className="grid grid-cols-2 gap-6 max-h-6">
              <InputImage onDrop={(file) => onDropImage(file, 1)} onRemoveImage={(event) => handleRemoveImage(event,1,colorsProduct.indexOf(selectedColor))} keyForImage={selectedColor} indexForColor={colorsProduct.indexOf(selectedColor)} disabled={!selectedColor} indice={1} value={image} />
              <InputImage onDrop={(file) => onDropImage(file, 2)} onRemoveImage={(event) => handleRemoveImage(event,2,colorsProduct.indexOf(selectedColor))} keyForImage={selectedColor} indexForColor={colorsProduct.indexOf(selectedColor)} disabled={!selectedColor} indice={2} value={image} />
              <InputImage onDrop={(file) => onDropImage(file, 3)} onRemoveImage={(event) => handleRemoveImage(event,3,colorsProduct.indexOf(selectedColor))} keyForImage={selectedColor} indexForColor={colorsProduct.indexOf(selectedColor)} disabled={!selectedColor} indice={3} value={image} />
            </div>
          </div>

      </section>
    </form>
  );
}
