import { DonationIcon } from "../../assets/Gestao/donationIcon";
import subscriptionIcon from '../../assets/Gestao/subscriptionIcon.jsx'
import { useState } from "react";

export function MediumCard({children}){

    return(
        <div className="mt-20 w-80 h-56 bg-gradient-to-r from-{#000} from-97% to-{#F6F4F4} to-3% shadow-md border-2 border-cinza-100 rounded-lg p-4" >
            {children}
        </div>
    )
}

