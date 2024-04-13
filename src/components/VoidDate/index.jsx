import React from "react";
import { CalenBlack } from "../../assets/CalenIcon";


export function VoidDate(){
    return (
        <>
      <div className="col-span-2 col-start-3 w-52 h-24 p-4 mt-8 shadow-lg flex-col flex justify-between">
        <div className="flex justify-between items-center">
          <p className="text-fun2">Esvaziamento</p>
        <CalenBlack/>
        </div>
         <p className="text-fun2">13/05/2023</p>
      </div>
        </>
    )
}