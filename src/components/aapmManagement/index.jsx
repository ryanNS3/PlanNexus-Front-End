import { CardMedium } from "../Cards/Card"
import React from "react"
import { useContext } from "react"
import { TemplateView } from "../ViewTemplate"
import { GiftCard } from "./GiftCard"
import { ProductContext } from "../../context/ProductContext";

export function AapmManage(){
    const  {GetGiftProduct}  = React.useContext(ProductContext)
    const { resOneProduct } = GetGiftProduct()
    // activeGift={resOneProduct && resOneProduct.json.response}
    
    return(
        <section>
            <div className="grid grid-cols-3 mb-10 gap-2 h-screen">
                {resOneProduct.json.response &&
                    <CardMedium children={ <GiftCard activeGift={resOneProduct} /> } />
                
                }
            </div>

            {/* <TemplateView name="Associados" /> */}
        </section>
    )
}


