import React from "react";
import { CampWhite } from '../../assets/CampIcon'

export function Notice(){

    function OpenModal(){ 
        return (
            console.log('Abrir modal')
        )
    }

    return (
        <button onClick={OpenModal} className="text-white flex justify-around items-center col-start-9 col-span-2 w-44 h-10 mt-8 mb-7 rounded bg-gradient-to-b from-[#B53DCB] to-[#9332AE]">
            <CampWhite/>
            <p className="text-fun2">ENVIAR AVISO</p>
        </button>
    )
}