import React from "react";

import { EditableInput } from "../../../Inputs/input-text/inputTextComp";
import { DecorationLine } from "../../../decorationLine";
import { TextArea } from "../../../Inputs/TextArea";
import { Label } from "../../../Inputs/Label";
import { GhostButton } from "../../../Buttons/ghostButton";
import { Square } from "../../../square";
import { PinkButton } from "../../../Buttons/pinkButton";



export function EditProductForm({ dataProduct, setIsEditForm, idColor = 0 }) {
    const [nameProduct, setNameProduct] = React.useState(dataProduct.nome) 
    const [priceProduct, setPriceProduct] = React.useState(dataProduct.produtos[0].tamanhos[0].valor)


    const [originalDataProduct, setOriginalDataProduct] = React.useState([{
        nome : dataProduct.nome,
        valor: dataProduct.produtos[0].tamanhos[0].valor,
        tamanhos : [dataProduct.produtos[idColor].tamanhos?.map((size) => size.tamanho)]
    }])
    const [isEditing, setIsEditing] = React.useState({
        nome: false,
        valor: false,
        email: false
    });

    function handleCloseEdit(event) {
        event.preventDefault()
        setIsEditForm(false)
    

    }
    const handleEditClick = (field) => {
        setIsEditing((prev) => ({
          ...prev,
          [field]: !prev[field]
        }));
      };
    
    return(
        <form>
            <div className=" flex">
                <h1 className=" text-fun1">Brinde AAPM</h1>
                <input type="checkbox" />
            </div>

            <DecorationLine my={"my-6"}/>

            <section className=" mb-9" aria-labelledby="informacoesGeraisProduto" >
                <h2 className=" text-fun2 mb-4 text-rosa-300 after:w-2 after:h-full after:block" id="informacoesGeraisProduto" >INFORMAÇÕES GERAIS:</h2>
                <div className="grid grid-cols-2 gap-x-9 gap-y-4">
                    <EditableInput name="Nome" disabled value={nameProduct}/>
                    <EditableInput name="Preço" disabled value={priceProduct}/>
                    <div className=" col-span-2">
                        <Label text="Descrição" id="descricaoProduto"/>
                        <TextArea name="descricaoProduto" disabled/>
                    </div>
                </div>
            </section>

            <section aria-labelledby="variacoesProduto" className=" mb-9">
                <h2 className=" text-fun2 mb-5 text-rosa-300 after:w-2 after:h-full after:block" id="variacoesProduto" >TAMANHOS:</h2>
                <div className=" flex gap-4">
                    {dataProduct.produtos[idColor].tamanhos?.map((size) => {
                        return(
                            <Square>
                                <p className=" text-fun2 items-center">{size.tamanho}</p>
                            </Square>
                        )
                    })}
                </div>
            </section>

            <div className=" flex gap-5 ">
                <GhostButton action={handleCloseEdit} text="Cancelar" />
                <PinkButton text="Confirmar" size="small" />
            </div>
            
        </form>
    )
}