import React from "react";

import { EditableInput } from "../../../Inputs/input-text/inputTextComp";
import { DecorationLine } from "../../../decorationLine";
import { TextArea } from "../../../Inputs/TextArea";
import { Label } from "../../../Inputs/Label";
import { GhostButton } from "../../../Buttons/ghostButton";
import { Square } from "../../../square";
import { PinkButton } from "../../../Buttons/pinkButton";
import { Switch } from "@mui/material";
import { SquareCheckBox } from "../../../Inputs/input-CheckBox";
import { ProductContext } from "../../../../context/ProductContext";
import { toastifyContext } from "../../../../context/toastifyContext";



export function EditProductForm({ dataProduct, setIsEditForm, idColor = 0 }) {
    const { mutatePatchProduct } = React.useContext(ProductContext)
    const {Notification} = React.useContext(toastifyContext)
    const [allResponseEditingProduct, setAllResponseEditingProduct] = React.useState([])
    const [isDisabledButtonNotEditing, setIsDisableButtonNotEditing] = React.useState(true)
    const allIdsProduct = dataProduct.produtos.map((product) => product.tamanhos.map((size) => size.id_produto))
    const [editedProduct, setEditedProduct] = React.useState({});
    const [originalDataProduct, setOriginalDataProduct] = React.useState({
        brinde: dataProduct.brinde,
        nome: dataProduct.nome,
        descricao: dataProduct.descricao,
        valor: dataProduct.produtos[idColor].tamanhos[0].valor,
        tamanhos : [dataProduct.produtos[idColor].tamanhos?.map((size) => size.tamanho)]
    })
    

    const [isEditing, setIsEditing] = React.useState({
        nome: false,
        brinde: false,
        valor: false,
        tamanhos: false,
        descricao: false,
        img: false
    });

    function handleSubmitEditingProduct(event) {
        event.preventDefault();
        let sucessOrError = []
        allIdsProduct[0].map((idProduct) => {
            console.log(idProduct)
            mutatePatchProduct.mutate({
                id_produto: idProduct,
                ...editedProduct
            }, {
                onSuccess: () => {
                    sucessOrError.push(true)
                    if (sucessOrError.length == allIdsProduct.length) {
                        finalizeSubmit(sucessOrError)
                    }

                },
                onError: () => {
                    sucessOrError.push(false)
                    if (sucessOrError.length == allIdsProduct.length) {
                        finalizeSubmit(sucessOrError)
                    }
                }
            })
        })
        // verifiacando se todas as requisições foram bem sucedidas
        
       
    }

    function finalizeSubmit(results) {
        setAllResponseEditingProduct(results);
        if (results.every((item) => item)) {
            Notification("success", "Alteração realizada com sucesso");
            setAllResponseEditingProduct([])
        } else {
            Notification("error", "Ocorreu um erro ao alterar os itens");
            setAllResponseEditingProduct([])
        }
    }

    function handleCloseEdit(event) {
        event.preventDefault()
        setIsEditForm(false)
    }

    function handleChangeEditingProduct({ target }) {
        const { name, value } = target;
        setEditedProduct((prevState) => ({
            ...prevState,
            [name] : value
        }
        ))
    }

    function handleChangeEditingGift({ target }) {
        const { name, checked } = target;
        setEditedProduct((prevState) => ({
            ...prevState,
            [name] : checked ? 1 : 0 
        }))

    }

    React.useEffect(() => {
        const { nome, valor, tamanhos, descricao, img } = isEditing
        const isChekedAllEditingOnFalse = !nome && !valor && !tamanhos && !descricao && !img
        if (isChekedAllEditingOnFalse) {
            setIsDisableButtonNotEditing(true)
        }
        else {
            setIsDisableButtonNotEditing(false)
        }
        
    }, [isEditing])


    const handleEditClick = (field) => {
        setIsEditing((prev) => ({
          ...prev,
          [field]: !prev[field]
        }));
      };
    
    return(
        <form onSubmit={handleSubmitEditingProduct}>
            <div className=" flex items-center">
                <h1 className=" text-fun1">Brinde AAPM</h1>
                <Switch name="brinde" onChange={handleChangeEditingGift} checked={ editedProduct.brinde} />
            </div>

            <DecorationLine my={"my-6"}/>

            <section className=" mb-9" aria-labelledby="informacoesGeraisProduto" >
                <h2 className=" text-fun2 mb-4 text-rosa-300 after:w-2 after:h-full after:block" id="informacoesGeraisProduto" >INFORMAÇÕES GERAIS:</h2>
                <div className="grid grid-cols-2 gap-x-9 gap-y-4">
                    <EditableInput
                        onChange={handleChangeEditingProduct}
                        onEditClick={() => handleEditClick("nome")}
                        disabled={!isEditing.nome}
                        isEditable
                        name="nome"
                        value={isEditing.nome ? editedProduct.nome : originalDataProduct.nome}
                        />
                    <EditableInput
                        name="preco"
                        type="number"
                        onChange={handleChangeEditingProduct}
                        onEditClick={() => handleEditClick("preco")}
                        disabled={!isEditing.preco}
                        value={isEditing.descricao ? editedProduct.preco : originalDataProduct.valor}
                        isEditable
                    />
                    <div className=" col-span-2">
                        <Label text="Descrição" id="descricao" />
                        
                        <TextArea
                            name="descricao"
                            value={isEditing.descricao ? editedProduct.descricao : originalDataProduct.descricao}
                            disabled={!isEditing.descricao}
                            onEditClick={() => handleEditClick("descricao")}
                            onChange={handleChangeEditingProduct}
                            isEditable
                        />
                    </div>
                </div>
            </section>

            <section aria-labelledby="variacoesProduto" className=" mb-9">
                <h2 className=" text-fun2 mb-5 text-rosa-300 after:w-2 after:h-full after:block" id="variacoesProduto" >TAMANHOS:</h2>
                <div className=" flex flex-wrap gap-4">
                    {dataProduct.produtos[idColor].tamanhos?.map((size) => {
                        return(
                            <SquareCheckBox value={size.tamanho}>
                                <p className=" text-fun2 items-center">{size.tamanho}</p>
                            </SquareCheckBox>
                        )
                    })}
                </div>
            </section>

            <div className=" flex gap-5 ">
                <GhostButton action={handleCloseEdit} text="Cancelar" />
                <PinkButton disabled={isDisabledButtonNotEditing} text="Confirmar" size="small" />
            </div>
            
        </form>
    )
}