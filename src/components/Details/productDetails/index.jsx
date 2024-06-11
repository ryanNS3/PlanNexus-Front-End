import React from "react";
import { EditProductForm } from "../../Form/Product/EditProduct";
import { PinkButton } from "../../Buttons/pinkButton";
import { GhostButton } from "../../Buttons/ghostButton";
import { ProductReplacent } from "../../Form/Product/ProductReplacent";
import { RemoveItems } from "../../Buttons/RemoveItems";
import { Square } from "../../square";
import { Box, LinearProgress } from "@mui/material";

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
        allColorsProduct.map((color) => {
            if (color == target.innerText) {  
                setIdColorOfProduct(allColorsProduct.indexOf(color))
            }
        })

    }


    return (
        <div className=" max-h-full py-5 space-y-4">
            {dataUniqueProduct && (
                <>
                    {!isModalStockReplacent &&
                    <div className={`max-h-full w-full overflow-y-scroll py-5  ${isExtendModalForEdit ? "md:grid md:grid-cols-2 gap-6" : ""}`}>
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
                                
                            <section className=" space-y-8">
                                    
                                {dataUniqueProduct.produtos[idColorOfProduct].fotos.length > 1 ? (
                                    <section className="grid gap-4">
                                        <img className=" w-4/5 lg:w-2/3 justify-self-center rounded" src={dataUniqueProduct.produtos[idColorOfProduct].fotos[0]} alt="" />
                                        <div className="flex max-w-full gap-4 overflow-x-scroll cursor-grab">
                                            {/* {dataUniqueProduct.produtos[idColorOfProduct].fotos.map((image, index) => (
                                                <div key={index} className="">
                                                    {isExtendModalForEdit &&  <RemoveItems/> }
                                                
                                                    <img className="w-full min-w-18 max-h-18 rounded" src={image} alt="" />
                                                </div>
                                            ))
                                            } */}
                                        </div>
                                    </section>
                                )
                                
                                :
                                    <section className="grid gap-4">
                                        <img className=" w-4/5 lg:w-2/3 justify-self-center rounded" src={dataUniqueProduct.produtos[idColorOfProduct].fotos[0]} alt="" />
                                    </section>
                            
                                    }

                                {!isExtendModalForEdit && 
                                <>
                                
                                    <section aria-labelledby="section_colors_details_product">
                                            <h4 className="text-h5 mb-2" id="section_colors_details_product">Cores</h4>
                                        <div className="flex gap-5">
                                        
                                            {dataUniqueProduct.produtos.map((color) => {
                                                return (
                                                    <div className="flex flex-col justify-center items-center">
                                                        <Square>
                                                                <img src={color.fotos[0] } />        
                                                        </Square>
                                                        <p className=" text-fun2">{color.cor}</p>
                                                        
                                                    </div>     
                                                )
                                            } )}

                                        </div>
                                    </section>

                                    <section>
                                            <h4 className=" text-h5 mb-2">Estoque</h4>
                                            <div className="flex flex-col gap-2">
                                                {dataUniqueProduct?.produtos[idColorOfProduct].tamanhos?.map((size) => {
                                                return (
                                                    
                                                <div className="flex justify-between items-center px-8 py-2 border-2 border-cinza-100">
                                                    <p>{size.tamanho }</p>
                                                        <div>
                                                            <Box className="w-32">
                                                                <LinearProgress value={Number(size.qtd_estoque) / Number(size.qtd_reservado) * 100} variant="determinate" />
                                                                <span>{size.qtd_reservada}</span>
                                                                /
                                                                <span>{ size.qtd_estoque}</span>
                                                            </Box>

                                                        </div>
                                                </div>   
                                                    
                                                )
                                                
                                            })}
                                            </div>
                                    </section>    
        
                                </>
                                }
                            </section>
                                
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