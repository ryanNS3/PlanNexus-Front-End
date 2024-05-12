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
import { Link } from "react-router-dom";

export function ProductForm({ setIsOpenProductModal }) {
  const [nameProduct, setNameProduct] = React.useState(" ");
  const [priceProduct, setPriceProduct] = React.useState(null);
  const [descriptionProduct, setDescriptionProduct] = React.useState(null);
  const [sizeProduct, setSizeProduct] = React.useState([]);
  const [colorsProduct, setColorsProduct] = React.useState([]);
  const [selectedColor, setSelectedColor] = React.useState(null);
  // cada array representa uma posição de cada imagem
  const [ImageLink, setImageLink] = React.useState(() => [[], [], [], []]);
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

  function handleCreateProduct(event) {
    event.preventDefault();

    setDataProduct([
      {
        name: nameProduct,
        cores: colorsProduct,
        preco : priceProduct,
        tamanhos: sizeProduct,
        fotos: ImageLink.flat(),
        brinde: false,
      },
    ]);

    console.log(dataProduct);
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
          <Label text="Descrição" id="descricao" />
          <TextArea
            cols={62}
            name="descricao"
            placeholder="Descreva detalhes sobre o produto"
          />
        </div>

        <div>
          <Label id="adicionarCor" text="Adicionar cores" />
          {colorsProduct && (
            <section>
              {colorsProduct.map((color, index) => {
                return (
                  <>
                    <InputText
                      placeholder="Digite o nome da cor"
                      id={index}
                      onChange={handleColor}
                      value={color}
                    />
                    <button id={index} onClick={() => setColorsProduct()}>
                      -
                    </button>
                  </>
                );
              })}
            </section>
          )}
          <AddItemsGhost
            onclick={() => setColorsProduct([...colorsProduct, ""])}
            Text="Adicionar cor"
          />
        </div>

        <div>
          <Label id="adicionarTamanhos" text="Adicionar tamanhos" />
          {isSizeOptions && (
            <section className="flex flex-wrap gap-4 mb-4 ">
              {sizes.map((size) => {
                return (
                  <SquareCheckBox
                    name={size.size}
                    value={size.size}
                    check={sizeProduct.includes(size.size)}
                    onChange={handleSize}
                  />
                );
              })}
            </section>
          )}
          <AddItemsGhost
            isOpen={isSizeOptions}
            onclick={() => setIsSizeOptions(!isSizeOptions)}
            Text="Adicionar tamanho"
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
        <h1 className=" text-h4">{nameProduct}</h1>
        {colorsProduct &&
        <div className=" grid grid-cols-[1fr 2fr] gap-6 max-h-[500px]">
          <InputImage indice={0} value={ImageLink} setValue={setImageLink} />
          <div className="grid grid-cols-2 gap-6 max-h-6">
            <InputImage indice={1} value={ImageLink} setValue={setImageLink} />
            <InputImage indice={2} value={ImageLink} setValue={setImageLink} />
            <InputImage indice={3} value={ImageLink} setValue={setImageLink} />
            <input type="text" dis />
          </div>
        </div>
}
      </section>
    </form>
  );
}
