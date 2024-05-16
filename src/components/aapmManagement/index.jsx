import { CardMedium } from "../Cards/Card"
import React from "react"
import { TemplateView } from "../ViewTemplate"
import { PriceCard } from "./PriceCard"
import { GiftCard } from "./GiftCard"

export function AapmManage(){
    return(
        <section>
            <div className="grid grid-cols-3 mb-10 gap-2 h-screen">
                <CardMedium children={ <PriceCard/> } />
                <CardMedium children={ <GiftCard/> } />
            </div>

            {/* <TemplateView name="Associados" /> */}
        </section>
    )
}


