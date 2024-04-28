import { DonationIcon } from "../../assets/Gestao/donationIcon";
import subscriptionIcon from '../../assets/Gestao/subscriptionIcon.jsx'
import { useState } from "react";

export function MediumCard({children}){

    return(
        <div className="mt-20 w-80 h-56 bg-gradient-to-br from-[#FFF] from-3% to-[#F6F4F4] to-96% shadow-lg border-2 border-cinza-100 rounded-lg p-4" >
            {children}
        </div>
    )
}

