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

export function ProductForm({ setIsOpenProductModal }) {
  const {requisicao,dados,loading,error} = useAxios()
  const BASE_URL = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem('token')
  const user = localStorage.getItem('user')

  const [nameProduct, setNameProduct] = React.useState(" ");
  const [priceProduct, setPriceProduct] = React.useState(null);
  const [discountProduct, setdiscountProduct] = React.useState(null);
  const [descriptionProduct, setDescriptionProduct] = React.useState(null);
  const [sizeProduct, setSizeProduct] = React.useState([]);
  const [colorsProduct, setColorsProduct] = React.useState([]);
  const [selectedColor, setSelectedColor] = React.useState(null);
  // cada array representa uma posição de cada imagem
  const [ImageLink, setImageLink] = React.useState([[], [], [], []]);
  const [dataProduct, setDataProduct] = React.useState([]);
  const [isSizeOptions, setIsSizeOptions] = React.useState(false);

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
    setDataProduct(
      {
        nome: nameProduct,
        cores: colorsProduct,
        valor : priceProduct,
        descontoAssociado: discountProduct,
        tamanhos: sizeProduct,
        descricao: descriptionProduct,
        fotos: ImageLink.flat(),
        brinde: "false",
      },
    );
    console.log(dataProduct)
    const AddProductFetch = await requisicao(`${BASE_URL}/produto/`, dataProduct, "POST", {
      authorization: `bearer ${token}`,
      nif: user,
      'Content-Type': 'multipart/form-data',
    })
    console.log(AddProductFetch)
  }
  console.log(user)


  function handleRemoveColor(event){
    event.preventDefault()
    const chave = event.target.id
    console.log(chave)
    let colorRemove = [...colorsProduct]
    console.log(colorRemove.filter((color, index) => { return index == chave ? console.log(color) : setColorsProduct(color)}))
    setColorsProduct(colorRemove.filter((color, index) => { return index == chave ? console.log(color) : color}))
    

  }

  function handleCloseSizeOptions(){
    setIsSizeOptions(!isSizeOptions)
    setSizeProduct([])
  }

  function handleChangeSelectedColor(event){
    event.preventDefault()
    setSelectedColor(event.currentTarget.dataset.color)
  }

  function handleChangeDescription(event){
    setDescriptionProduct(event.target.value)
  }

  function handleSize({ target }) {
    if (target.checked) {
      setSizeProduct([...sizeProduct, target.value]);
    } else {
      setSizeProduct(sizeProduct.filter((size) => size !== target.value));
    }
  }

  function handleColor({ target }) {
    let colorsChange = [...colorsProduct];

    if (colorsChange[target.id] === selectedColor){
      colorsChange[target.id] = target.value;
      setSelectedColor(colorsChange[target.id])
    }
  
    colorsChange[target.id] = target.value;
    setColorsProduct(colorsChange);
  }
  return (
    <form
    className="grid md:grid-cols-2 gap-14 max-h-full w-full overflow-y-scroll"
    onSubmit={handleCreateProduct}
    >
      <section
        aria-label="Formulário produto"
        className="flex flex-col p-4 md:max-h-[99%] gap-6 md:overflow-y-scroll"
        >
        {/* <Lock black={true}/>  */}
        <h1 className=" grid-rows-1 text-h4">Adicionar produto</h1>
        <InputText
          name="nome"
          value={nameProduct}
          onChange={(event) => setNameProduct(event.target.value)}
          type="text"
        />

        <div>
          <Label text="Preço" id="preco">
            Preço
          </Label>
          <InputNumber
            value={priceProduct}
            onChange={(event) => setPriceProduct(event.target.value)}
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
            onChange={(event) => setdiscountProduct(event.target.value)}
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
                  <div className=" flex justify-center items-center gap-4 animate-topToButton">
                    <InputText
                      placeholder="Digite o nome da cor"
                      id={index}
                      onChange={handleColor}
                      value={color}
                    />
                    <button className="p-2 rounded bg-cinza-100 hover:bg-rosa-300 hover:text-cinza-50" id={index} onClick={handleRemoveColor}>
                      -
                    </button>
                  </div>
                );
              })}
            </section>
          )}
          <AddItemsGhost
            onclick={() => setColorsProduct([...colorsProduct, ` cor ${colorsProduct.length}`])}
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
        
        <section className="flex gap-4 justify-start items-start">
          {colorsProduct.map((color) =>{
            return(
              <button data-color={color} onClick={handleChangeSelectedColor}
               className="flex flex-col justify-start items-start">
                <div
                  className={` border-2 border-transparent ${selectedColor === color ? "border-rosa-300" : null}  hover:border-rosa-300 py-2 px-2 bg-cinza-100 rounded max-w-24`}>
                  <img className=" rounded-lg w-full" src={avatar} alt="" aria-hidden />
                </div>
                <p  className=" max-w-[3ch] text-fun2">{color}</p>
              </button>
            )
          })}
        </section>
          <div className=" grid grid-cols-[1fr 2fr] gap-6 max-h-[500px] backdrop-blur-2xl">
            <InputImage keyForImage={selectedColor} disabled={!selectedColor} indice={0} value={ImageLink} setValue={setImageLink} />
            <div className="grid grid-cols-2 gap-6 max-h-6">
              <InputImage keyForImage={selectedColor} disabled={!selectedColor} indice={1} value={ImageLink} setValue={setImageLink} />
              <InputImage keyForImage={selectedColor} disabled={!selectedColor} indice={2} value={ImageLink} setValue={setImageLink} />
              <InputImage keyForImage={selectedColor} disabled={!selectedColor} indice={3} value={ImageLink} setValue={setImageLink} />
            </div>
          </div>
        
        
        
      </section>
    </form>
  );
}
