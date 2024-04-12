import React from "react"
import { NavLocker } from "../NavLocker"
import { Notice } from "../Notice"
import { Percentage } from "../Percentage"
import { VoidDate } from "../VoidDate"

export function AllLocker(){

  const data = [
    {
    numero: 1,
    status:'desocupado'},
    {numero: 2,
    status:'desocupado'},
    {numero: 3,
    status:'desocupado'},
    {numero: 4,
    status:'ocupado'},
    {numero: 5,
    status:'ocupado'},
    {numero: 6,
    status:'desocupado'},
    {numero: 7,
    status:'desocupado'},
    {numero: 8,
    status:'desocupado'},
    {numero: 9,
    status:'ocupado'},
    {numero: 10,
    status:'ocupado'},
    {numero: 11,
    status:'desocupado'},
    {numero: 12,
    status:'desocupado'},
    {numero: 13,
    status:'desocupado'},
    {numero: 14,
    status:'ocupado'},
    {numero: 15,
    status:'ocupado'},
    {numero: 16,
    status:'desocupado'},
    {numero: 17,
    status:'desocupado'},
    {numero: 18,
    status:'desocupado'},
    {numero: 19,
    status:'ocupado'},
    {numero: 20,
    status:'ocupado'},
    {numero: 21,
    status:'desocupado'},
    {numero: 22,
    status:'desocupado'},
    {numero: 23,
    status:'desocupado'},
    {numero: 24,
    status:'ocupado'},
    {numero: 25,
    status:'ocupado'},
    {numero: 26,
    status:'desocupado'},
    {numero: 27,
    status:'desocupado'},
    {numero: 28,
    status:'desocupado'},
    {numero: 29,
    status:'ocupado'},
    {numero: 30,
    status:'ocupado'},
]

  function Ops() {
    return(
      console.log("abri as opções")
    )
  }
  
  return(
    <>
    <div className="grid grid-cols-10 col-span-10 gap-x-4 gap-y-4">
      <Percentage/> <VoidDate/>
      <h2 className="text-h5 mt-8 mb-7 col-span-8">Todos os armários: </h2><Notice/>
      {data.map((element) => {
       return <Locker numero={element.numero} status={element.status} onClick={Ops}/>
      }
      )
      }  
    </div>

    <NavLocker/>
    </>
  )
}

function Locker({numero, status, onClick}){
  return(
    <div onClick={onClick} className={`col-span-1 ${ status == 'ocupado'  ? "bg-[#A0E29E]" : "bg-cinza-100" } w-24 h-24 flex items-center justify-center rounded-lg`}><p className="text-h5 active:">{numero}</p></div>
  )
}