import React from "react";

import { EditableInput } from "../../../Inputs/input-text/inputTextComp";
import { DecorationLine } from "../../../decorationLine";
import { TextArea } from "../../../Inputs/TextArea";
import { Label } from "../../../Inputs/Label";
import { GhostButton } from "../../../Buttons/ghostButton";
import { Square } from "../../../square";


export function EditProductForm({name, preco, allSize, allColor}){
    const [nameProduct, setNameProduct] = React.useState(name)
    const [priceProduct, setPriceProduct] = React.useState(preco)
    return(
        <form>
            <div className=" flex">
                <h1 className=" text-fun1">Brinde AAPM</h1>
                <input type="checkbox" />
            </div>

            <DecorationLine my={"my-4"}/>

            <section className=" mb-11" aria-labelledby="informacoesGeraisProduto" >
                <h2 className=" text-fun2 mb-2 text-rosa-300 after:w-2 after:h-full after:block" id="informacoesGeraisProduto" >INFORMAÇÕES GERAIS:</h2>
                <div className="grid grid-cols-2 gap-x-9 gap-y-4">
                    <EditableInput name="Nome" disabled value={nameProduct}/>
                    <EditableInput name="Preço" disabled value={priceProduct}/>
                    <div className=" col-span-2">
                        <Label text="Descrição" id="descricaoProduto"/>
                        <TextArea name="descricaoProduto" disabled/>
                    </div>
                </div>
            </section>

            <section aria-labelledby="variacoesProduto">
                <h2 className=" text-fun2 mb-6 text-rosa-300 after:w-2 after:h-full after:block" id="variacoesProduto" >TAMANHOS:</h2>
                {allSize?.map((size) =>{
                    return(
                        <Square>{size}</Square>
                    )
                })}
            </section>

            <GhostButton/>
        </form>
    )
}