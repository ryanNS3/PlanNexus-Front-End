import React from "react";
import { EditProductForm } from "../../Form/Product/EditProduct";
import { PinkButton } from "../../Buttons/pinkButton";
import { GhostButton } from "../../Buttons/ghostButton";
import { EditableInput, InputText } from "../../Inputs/input-text/inputTextComp";
import { ProductReplacent } from "../../Form/Product/ProductReplacent";

export function ProductDetails({ isExtendModalForEdit, setIsExtendModalForEdit, dataUniqueProduct }) {
    const [isModalStockReplacent, setIsModalStockReplacent] = React.useState(false)

    function handleEditProduct(event) {
        setIsExtendModalForEdit(true);
    }

    function handleStockReplacent(event) {
        event.preventDefault()
        setIsModalStockReplacent(true)
    }

  

    return (
        <div className="space-y-4">
            {dataUniqueProduct && (
                <>
                    {!isModalStockReplacent &&
                        
                    <div className={`max-h-full ${isExtendModalForEdit ? "grid grid-cols-2 gap-6" : ""}`}>
                        <div className="max-h-full overflow-y-scroll">
                            <div className="flex gap-2">
                                {!isExtendModalForEdit && (
                                    <>
                                        <GhostButton action={handleEditProduct} align="start" size="medium" text="Editar produto" />
                                        <span className="block w-[2px] h-10 rounded-sm bg-cinza-100"></span>
                                        <PinkButton action={handleStockReplacent} align="start" size="medium" text="+ Repor estoque" />
                                    </>
                                )}
                            </div>
                            <header className="flex justify-between">
                                <h4 className="text-h5">{dataUniqueProduct.nome}</h4>
                                <p className="text-sub2">R${dataUniqueProduct.produtos[0].tamanhos[0].valor}</p>
                            </header>

                            <span className="block w-full h-[2px] my-4 bg-cinza-100"></span>

                            {dataUniqueProduct.produtos[0].fotos.length > 1 && (
                                <section className="grid gap-4">
                                    <img className=" w-full rounded" src={dataUniqueProduct.produtos[0].fotos[0]} alt="" />
                                    <div className="flex max-w-full gap-4 overflow-x-scroll">
                                        {dataUniqueProduct.produtos[0].fotos.map((image, index) => (
                                            <div key={index} className="">
                                                <img className="w-full min-w-18 max-h-18 rounded" src={image} alt="" />
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}
                        </div>
                        {isExtendModalForEdit && (
                            <EditProductForm
                                dataProduct={dataUniqueProduct}
                                setIsEditForm={setIsExtendModalForEdit}
                            />
                            )}
                            
                    </div>  
                    }
                    
                    {isModalStockReplacent && 
                        <ProductReplacent />
                    
                    }
                    
                </>
            )}
        </div>
    );
}