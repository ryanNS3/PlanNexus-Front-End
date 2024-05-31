import React from "react";
import { EditProductForm } from "../../Form/Product/EditProduct";
import { PinkButton } from "../../Buttons/pinkButton";
import { GhostButton } from "../../Buttons/ghostButton";
import { EditableInput, InputText } from "../../Inputs/input-text/inputTextComp";
import { ProductReplacent } from "../../Form/Product/ProductReplacent";
import { RemoveItems } from "../../Buttons/RemoveItems";

export function ProductDetails({ isExtendModalForEdit, setIsExtendModalForEdit, dataUniqueProduct }) {
    const allColorsProduct = dataUniqueProduct?.produtos?.map((product) => product.cor)     

    const [idColorOfProduct, setIdColorOfProduct] = React.useState(0) 
    const [isModalStockReplacent, setIsModalStockReplacent] = React.useState(false)

    function handleEditProduct(event) {
        setIsExtendModalForEdit(true);
    }

    function handleStockReplacent(event) {
        event.preventDefault()
        setIsModalStockReplacent(true)
    }

    function handleSelectedColor(event) {
        const { target } = event;
        event.preventDefault();

        console.log(target.innerText)
        allColorsProduct.map((color) => {
            if (color == target.innerText) {
            console.log(color)    
                setIdColorOfProduct(allColorsProduct.indexOf(color))
            }
        })

    }

  

    return (
        <div className=" max-h-full py-5 space-y-4">
            {dataUniqueProduct && (
                <>
                    {!isModalStockReplacent &&
                    <div className={`max-h-full w-full overflow-y-scroll py-5  ${isExtendModalForEdit ? "grid grid-cols-2 gap-6" : ""}`}>
                        <div className=" ">
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
                                <p className="text-sub2">R${dataUniqueProduct.produtos[idColorOfProduct].tamanhos[0].valor}</p>
                            </header>

                                <span className="block w-full h-[2px] my-4 bg-cinza-100"></span>
                                
                                {allColorsProduct.map((color, index) =>
                                    <button className={`  border-2 ${idColorOfProduct == index ? "  text-branco bg-preto " : " border-cinza-100"} py-1 px-2  rounded-lg hover:border-cinza-950 duration-200`} onClick={handleSelectedColor}>{ color}</button>
                                )}        

                            {dataUniqueProduct.produtos[idColorOfProduct].fotos.length > 1 && (
                                <section className="grid gap-4">
                                    <img className=" w-4/5 lg:w-2/3 justify-self-center rounded" src={dataUniqueProduct.produtos[idColorOfProduct].fotos[0]} alt="" />
                                    <div className="flex max-w-full gap-4 overflow-x-scroll cursor-grab">
                                        {dataUniqueProduct.produtos[idColorOfProduct].fotos.map((image, index) => (
                                            <div key={index} className="">
                                                <RemoveItems/>
                                                <img className="w-full min-w-18 max-h-18 rounded" src={image} alt="" />
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}
                        </div>
                        {isExtendModalForEdit && (
                                <EditProductForm
                                idColor={idColorOfProduct}
                                dataProduct={dataUniqueProduct}
                                setIsEditForm={setIsExtendModalForEdit}
                            />
                            )}
                            
                    </div>  
                    }
                    
                    {isModalStockReplacent && 
                        <ProductReplacent
                        idOfColor={idColorOfProduct}
                        product={dataUniqueProduct.produtos}
                        setOpenReplacentModal={setIsModalStockReplacent} />
                    
                    }
                    
                </>
            )}
        </div>
    );
}