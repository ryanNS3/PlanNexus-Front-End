import React from "react";
import { productReduce } from "../../../../reducers/product/reduce";
import { EditableInput } from "../../../Inputs/input-text/inputTextComp";
import { DecorationLine } from "../../../decorationLine";
import { TextArea } from "../../../Inputs/TextArea";
import { Label } from "../../../Inputs/Label";
import { GhostButton } from "../../../Buttons/ghostButton";
import { PinkButton } from "../../../Buttons/pinkButton";
import { Switch } from "@mui/material";
import { SquareCheckBox } from "../../../Inputs/input-CheckBox";
import { ProductContext } from "../../../../context/ProductContext";
import { toastifyContext } from "../../../../context/toastifyContext";
import { handleChangeEditingAction, handleBlurEditingAction } from "../../../../reducers/product/actions";



export function EditProductForm({ dataProduct, setIsEditForm, idColor = 0 }) {
    const { mutatePatchProduct } = React.useContext(ProductContext)
    const [productDataState, dispatch] = React.useReducer(
        productReduce
        ,{
        nameProduct: dataProduct.nome,
        priceProduct: Number(dataProduct.produtos[idColor].tamanhos[0].valor),
        descriptionProduct: dataProduct.descricao,
        discountProduct: Number(dataProduct.desconto_associado),
        sizeProduct: dataProduct.produtos[idColor].tamanhos?.map((size) => size.tamanho),
        colorsProduct: dataProduct.produtos.map((color) => color.cor),
        selectedColor: dataProduct.produtos[idColor].cor,
        image: [[], [], [], []],
        isSize: false
        })


    const {nameProduct, priceProduct, discountProduct, descriptionProduct, sizeProduct ,colorsProduct, selectedColor, image} = productDataState
    const [errorValidation, setErrorValidation] = React.useState({
        nome: null,
        preco: null,
        desconto: null,


    })
    console.log(errorValidation)
    
    const {Notification} = React.useContext(toastifyContext)
    const [allResponseEditingProduct, setAllResponseEditingProduct] = React.useState([])
    const [isDisabledButtonNotEditing, setIsDisableButtonNotEditing] = React.useState(true)
    const allIdsProduct = dataProduct.produtos.map((product) => product.tamanhos.map((size) => size.id_produto))
    const [editedProduct, setEditedProduct] = React.useState({});
    // console.log(dataProduct)
    const colorSelected = dataProduct.produtos[idColor].cor;
    const sizes = [
        {
          size: "PP",
        },
        {
          size: "P",
        },
        {
          size: "M",
        },
        {
          size: "G",
        },
        {
          size: "GG",
        },
      ];

    // const images = dataProduct.produtos[idColor].fotos.reduce((acc, foto) =>{ 
    //     const arrayPhotos = []
    //     if (foto != acc){
    //         arrayPhotos.push(foto);
    //     }
    //     return arrayPhotos
    // }, dataProduct.produtos[idColor].fotos[0])
    const images = dataProduct.produtos[idColor].fotos.map((foto) =>{ 
        return foto
    })

    console.log(images)
  
    const [originalDataProduct, setOriginalDataProduct] = React.useState({
        brinde: dataProduct.brinde,
        nome: nameProduct,
        descricao: descriptionProduct,
        desconto: discountProduct,
        cor: colorsProduct,
        linksFotoAntiga: images,
        valor: priceProduct,
        tamanho : sizeProduct
    })

    const [isEditing, setIsEditing] = React.useState({
        nome: false,
        brinde: false,
        valor: false,
        desconto: false,
        tamanhos: false,
        descricao: false,
        img: false
    });

    function handleSubmitEditingProduct(event) {
        event.preventDefault();
        console.log(originalDataProduct)
        let sucessOrError = []
        allIdsProduct[0].map((idProduct) => {
            // console.log(idProduct)
            const tamanho = dataProduct.produtos[idColor].tamanhos.map((size) => size.id_produto == idProduct ? size.tamanho : null  )
            console.log("tamanho", tamanho)
            mutatePatchProduct.mutate({
                idProduto: idProduct,
                quantidadeEstoque: 1,
                brinde: dataProduct.brinde,
                nome: nameProduct.payload,
                descricao: descriptionProduct,
                desconto: discountProduct,
                cor: colorsProduct,
                linksFotoAntiga: JSON.stringify(images),
                valor: priceProduct,
                tamanho : tamanho.filter((size) => size)
            }, {
                onSuccess: () => {
                    // para cada sucesso adicione o verdadeiro na ultima posição
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
        // console.log(sucessOrError)
        // verifiacando se todas as requisições foram bem sucedidas
       
       
    }
    // depois do map de requisições essa função é executada e mostra o toastify
    function finalizeSubmit(results) {
        setAllResponseEditingProduct(results);
        if (results.every((item) => item == true)) {
            Notification("sucess", "Alteração realizada com sucesso");
            setAllResponseEditingProduct([])
            setIsEditing({
                nome: false,
                brinde: false,
                valor: false,
                desconto: false,
                tamanhos: false,
                descricao: false,
                img: false
            })
        } else {
            Notification("error", "Ocorreu um erro ao alterar os itens");
            setAllResponseEditingProduct([])
        }
    }

    function handleCloseEdit(event) {
        event.preventDefault()
        setIsEditForm(false)
    }

    function handleChangeEditingProduct(event, nameDataEditing, payload) {
        // const { name, value } = target;
        handleChangeEditingAction(event, nameDataEditing, payload, dispatch)
        console.log("edição")
        console.log("edit", productDataState)
        
    // console.log('teste', originalDataProduct)
}


    function handleBlurChangeEditing(event, typeBlur){
        handleBlurEditingAction(event, typeBlur, setErrorValidation, dispatch)
        console.log(errorValidation)
    }

    function handleChangeEditingGift({ target }) {
        const { name, checked } = target;
        setOriginalDataProduct((prevState) => ({
            ...prevState,
            [name] : checked ? 1 : 0 
        }))

    }

    React.useEffect(() => {
        const { nome, valor,desconto, tamanhos, descricao, img } = isEditing
        const isChekedAllEditingOnFalse = !nome && !valor && !tamanhos && !descricao && !img && !desconto
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
                        onChange={(event) => handleChangeEditingProduct(event,"nameProduct", {payload:event.target.value})}
                        onBlur={(event) => handleBlurChangeEditing(event, "nameProduct", dispatch)}
                        onEditClick={() => handleEditClick("nome")}
                        disabled={!isEditing.nome}
                        isEditable
                        name="nome"
                        errorValidacao={errorValidation.nome}
                        value={isEditing.nome ? editedProduct.nome : originalDataProduct.nome}
                        />
                    <EditableInput
                        name="preco"
                        type="number"
                        onChange={(event)=> handleChangeEditingProduct(event, "priceProduct", {payload: event.target.value})}
                        onBlur={(event) => handleBlurChangeEditing(event, "priceProduct")}
                        onEditClick={() => handleEditClick("preco")}
                        disabled={!isEditing.preco}
                        value={isEditing.valor ? editedProduct.preco : originalDataProduct.valor}
                        isEditable
                    />
                    <EditableInput
                        name="desconto"
                        type="number"
                        onChange={(event) => handleChangeEditingProduct(event,"discountProduct", {payload: event.target.value})}
                        onBlur={(event) => handleBlurChangeEditing(event, "discountProduct")}
                        onEditClick={() => handleEditClick("desconto")}
                        disabled={!isEditing.desconto}
                        value={isEditing.desconto ? editedProduct.desconto : originalDataProduct.desconto}
                        isEditable
                    
                    />
                    <div className=" col-span-2">
                        <Label text="Descrição" id="descricao" />
                        
                        <TextArea
                            name="descricao"
                            value={isEditing.descricao ? editedProduct.descricao : originalDataProduct.descricao}
                            disabled={!isEditing.descricao}
                            onEditClick={() => handleEditClick("descricao")}
                            onChange={(event) => handleChangeEditingProduct(event, "descriptionProduct")}
                            // onBlur={(event) => handleBlurChangeEditing(event,"")}
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