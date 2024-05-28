import React from "react";
import { InputText } from "../../Inputs/input-text/inputTextComp";
import { Label } from "../../Inputs/Label";
import { InputNumber } from "../../Inputs/input-number";
import { TextArea } from "../../Inputs/TextArea";
import { AddItemsGhost } from "../../Buttons/AddItems";
import { PinkButton } from "../../Buttons/pinkButton";
import { GhostButton } from "../../Buttons/ghostButton";
import { SquareCheckBox } from "../../Inputs/input-CheckBox";
import { InputImage } from "../../Inputs/input-file";
import { productReduce } from "../../../reducers/product/reduce";
import { toastifyContext } from "../../../context/toastifyContext";
import { ProductContext } from "../../../context/ProductContext";

import { ProductSchema, nameSchema } from "../../../hooks/useZod";
import { z } from "zod";

export function ProductForm({ setIsOpenProductModal }) {
  
  const {Notification} = React.useContext(toastifyContext)
  const {mutateCreateNewProduct} = React.useContext(ProductContext)
  const [errorValidate, setErrorValidate] = React.useState({
        nome: false,
        cores: false,
        valor : false,
        desconto: false,
        fotos: false,
        tamanhos: false,
        descricao: false,
        brinde: "false",
  })

  const [loadingButtonSubmit, setLoadingButtonSubmit] = React.useState(false)
  const [productDataState, dispatch] = React.useReducer(
    productReduce
    ,{
    nameProduct: "",
    priceProduct: 1,
    descriptionProduct: "",
    discountProduct: 1,
    sizeProduct: [],
    colorsProduct: [""],
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
   *  são renderizados novamente ocasionando a perda de foco ao digitar no input
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

  async function handleCreateProduct(event) {
    event.preventDefault();
    setLoadingButtonSubmit(true);
    const newProductData = {
      nome: nameProduct,
      cores: colorsProduct,
      valor: parseFloat(priceProduct),
      desconto: parseFloat(discountProduct),
      tamanhos: sizeProduct,
      descricao: descriptionProduct,
      fotos: image,
      brinde: "false",
    };

  try {
    ProductSchema.parse(newProductData);
    // ProductSchema.parse(newProductData);
    mutateCreateNewProduct.mutate(newProductData);
  
      if (mutateCreateNewProduct.isSuccess) {
        setLoadingButtonSubmit(false);
        Notification("sucess", "Produto criado com sucesso");
      } else if (mutateCreateNewProduct.isError) {
        setLoadingButtonSubmit(false);
        Notification("error", "Erro ao criar produto");
      }

    setLoadingButtonSubmit(false)
  } 
  
  catch (error) {
    const validationErrors = {}
    setLoadingButtonSubmit(false)
    if (Array.isArray(error.errors)) {
      error.errors.forEach((err) => {
        // console.log(err);
        setErrorValidate(validationErrors);
        setLoadingButtonSubmit(false);
        validationErrors[err.path[0]] = err.message;
      });
    }
  }
  }

  function handleRemoveColor(event){
    event.preventDefault()
    const keyOfColor = event.target.id
    const filteredColor = colorsProduct.filter((color, index) => index != keyOfColor)
    // console.log(image.flat().filter((image) => image))
    dispatch({
        type: "HANDLE_REMOVE_COLOR",
        payload: keyOfColor
    });
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
  
  console.log(errorValidate)
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
          required
          value={nameProduct}
          onChange={ (event) => dispatch({type: "HANDLE_CHANGE_NAME", payload: event.target.value })}
          onBlur={(event) => dispatch({type: "HANDLE_BLUR_NAME", payload: {value:event.target.value, setError: setErrorValidate, name: "nome"}})}
          // onBlur={handleBlur}
          error={errorValidate.nome}
          type="text"
          />

        <div>
          <Label text="Preço" id="preco">
            Preço
          </Label>
          <InputNumber
            value={priceProduct}
            required
            onChange={(event) => dispatch({type: "HANDLE_CHANGE_PRICE", payload: event.target.value })}
            onBlur={() => dispatch({type: "HANDLE_BLUR_PRICE", payload:{ value: priceProduct, setError: setErrorValidate, name: "valor"}})}
            steps={0.1}
            error={errorValidate.valor}
            name="preco"
          />
        </div>

        <div>
          <Label text="Desconto" id="desconto">
            Desconto:
          </Label>
          <InputNumber
            value={discountProduct}
            requered
            error={errorValidate.desconto}
            onChange={(event) => dispatch({type: "HANDLE_CHANGE_DISCOUNT", payload: event.target.value})}
            onBlur={() => dispatch({type: "HANDLE_BLUR_DISCOUUNT", payload:{ name:"desconto", desconto: parseFloat(discountProduct), valor: parseFloat(priceProduct), setError: setErrorValidate} })}
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
            onBlur={(event) => dispatch({type: "HANDLE_BLUR_DESCRIPTION"})}
            error={errorValidate.descricao}
            name="descricao"
            placeholder="Descreva detalhes sobre o produto"
          />
        </div>

        <div>
          <Label id="adicionarCor" text="Adicionar cores" />
          {colorsProduct && (
            <section className="flex flex-col gap-2">
              {/* {colorsProduct.map((color, index) => {
                return (
                  <div key={color+index} className=" flex justify-center items-center gap-4">
                    <InputText
                      placeholder="Digite o nome da cor"
                      id={index}
                      onBlur={handleBlurColor}
                      error={errorValidate.cores}
                      onChange={handleChangeColor}
                      value={tempColorValue[index]}
                    />
                    <button  className="p-2 rounded bg-cinza-100 hover:bg-rosa-300 hover:text-cinza-50" id={index} onClick={handleRemoveColor}>
                      -
                    </button>
                  </div>
                );
              })} */}
                  <div  className=" flex justify-center items-center gap-4">
                    <InputText
                      placeholder="Digite o nome da cor"
                      id={0}
                      onBlur={handleBlurColor}
                      error={errorValidate.cores}
                      onChange={handleChangeColor}
                      value={tempColorValue[0]}
                    />
                    {/* <button  className="p-2 rounded bg-cinza-100 hover:bg-rosa-300 hover:text-cinza-50" id={index} onClick={handleRemoveColor}>
                      -
                    </button> */}
                  </div>
            </section>
          )}
          {/* <AddItemsGhost
            onclick={handleToAdd}
            Text="Adicionar cor"
          /> */}
          {/* {errorValidate.cores && <p className=" text-ct2 text-vermelho-300">{errorValidate.cores}</p>} */}
        </div>

        <div>
          <Label id="adicionarTamanhos" text="Adicionar tamanhos" />
          {isSizeOptions && (
            <section className="flex flex-wrap gap-4 mb-4 ">
              {sizes.map((size, index) => {
                return (
                  <SquareCheckBox
                  
                  value={size.size}
                  key={size + index}
                  check={sizeProduct.includes(size.size)}
                  onChange={handleSize}
                  >
                    <p className=" justify-self-center">{size.size}</p>
                  </SquareCheckBox>
                );
              })}
            </section>
          )}
          <AddItemsGhost
            isOpen={isSizeOptions}
            onclick={handleCloseSizeOptions}
            Text={`${isSizeOptions ? "Remover tamanhos" : "Adicionar tamanhos"}`}
            />
            {errorValidate.tamanhos ? <p className=" text-ct2 text-vermelho-300">{errorValidate.tamanhos}</p> : ""}
        </div>

      </section>

      <section
        aria-label="Visualização do produto"
        className="flex flex-col sm:max-h-[99%] md:overflow-y-scroll rounded-lg "
      >
        
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
            <InputImage 
              error={errorValidate.fotos}
              onDrop={(file) => onDropImage(file, 0)}
              onRemoveImage={(event) => handleRemoveImage(event,0,colorsProduct.indexOf(selectedColor))}
              keyForImage={selectedColor} indexForColor={colorsProduct.indexOf(selectedColor)}
              disabled={!selectedColor}
              indice={0}
              value={image}  />
            <div className="grid grid-cols-2 gap-6 max-h-6">
              <InputImage 
                error={errorValidate.fotos}
                onDrop={(file) => onDropImage(file, 1)}
                onRemoveImage={(event) => handleRemoveImage(event,1,colorsProduct.indexOf(selectedColor))}
                keyForImage={selectedColor}
                indexForColor={colorsProduct.indexOf(selectedColor)}
                disabled={!selectedColor}
                indice={1}
                value={image} 
              />

              <InputImage 
                error={errorValidate.fotos}
                onDrop={(file) => onDropImage(file, 2)}
                onRemoveImage={(event) => handleRemoveImage(event,2,colorsProduct.indexOf(selectedColor))}
                keyForImage={selectedColor} indexForColor={colorsProduct.indexOf(selectedColor)}
                disabled={!selectedColor}
                indice={2}
                value={image}
              />

              <InputImage 
                error={errorValidate.fotos}
                onDrop={(file) => onDropImage(file, 3)}
                onRemoveImage={(event) => handleRemoveImage(event,3,colorsProduct.indexOf(selectedColor))}
                keyForImage={selectedColor} indexForColor={colorsProduct.indexOf(selectedColor)}
                disabled={!selectedColor}
                indice={3} value={image} 
              />

          '   <nav className="flex gap-4" aria-label="Prosseguir ou cancelar">
                <PinkButton
                  onClick={handleCreateProduct}
                  aria-label="continuar"
                  loading={loadingButtonSubmit}
                  text="continuar"
                />
                <GhostButton
                  action={() => setIsOpenProductModal(false)}
                  text="cancelar"
                />
              </nav>'
            </div>
          </div>

          {errorValidate.fotos && <p className=" text-ct2 text-vermelho-300">{errorValidate.fotos}</p>}

      </section>
    </form>
  );
}
