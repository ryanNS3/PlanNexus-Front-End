import React from "react"
import { NavLocker } from "../NavLocker"
import { Notice } from "../Notice"
import { Percentage } from "../Percentage"
import { VoidDate } from "../VoidDate"

export function AllLocker() {

  const data = [
    {
      id: 1,
      numero: 1,
      status: 'desocupado'
    },
    {
      id: 2,
      numero: 2,
      status: 'desocupado'
    },

    {
      id: 3,
      numero: 3,
      status: 'desocupado'
    },
    {
      id: 4,
      numero: 4,
      status: 'ocupado'
    },
    {
      id: 5,
      numero: 5,
      status: 'ocupado'
    },
    {
      id: 6,
      numero: 6,
      status: 'desocupado'
    },
    {
      id: 7,
      numero: 7,
      status: 'desocupado'
    },
    {
      id: 8,
      numero: 8,
      status: 'desocupado'
    },
    {
      id: 9,
      numero: 9,
      status: 'ocupado'
    },
    {
      id: 10,
      numero: 10,
      status: 'ocupado'
    },
    {
      id: 11,
      numero: 11,
      status: 'desocupado'
    },
    {
      id: 12,
      numero: 12,
      status: 'desocupado'
    },
    {
      id: 13,
      numero: 13,
      status: 'desocupado'
    },
    {
      id: 14,
      numero: 14,
      status: 'ocupado'
    },
    {
      id: 15,
      numero: 15,
      status: 'ocupado'
    },
    {
      id: 16,
      numero: 16,
      status: 'desocupado'
    },
    {
      id: 17,
      numero: 17,
      status: 'desocupado'
    },
    {
      id: 18,
      numero: 18,
      status: 'desocupado'
    },
    {

      id: 19,
      numero: 19,
      status: 'ocupado'
    },
    {
      id: 20,
      numero: 20,
      status: 'ocupado'
    },
    {

      id: 21,
      numero: 21,
      status: 'desocupado'
    },
    {
      id: 22,
      numero: 22,
      status: 'desocupado'
    },
    {
      id: 23,
      numero: 23,
      status: 'desocupado'
    },
    {
      id: 24,
      numero: 24,
      status: 'ocupado'
    },
    {
      id: 25,
      numero: 25,
      status: 'ocupado'
    },
    {
      id: 26,
      numero: 26,
      status: 'desocupado'
    },
    {
      id: 27,
      numero: 27,
      status: 'desocupado'
    },
    {
      id: 28,
      numero: 28,
      status: 'desocupado'
    },
  ]

  function Ops() {
    return (
      console.log("abri as opções")
    )
  }

  return (
    <>
      <div className="grid grid-cols-10 col-span-10 gap-x-4 gap-y-4">
        <Percentage /> <VoidDate />
        <h2 className="text-h5 mt-8 mb-7 col-span-8">Todos os armários: </h2><Notice />
        {data.map((element) => {
          return <Locker key={element.id} numero={element.numero} status={element.status} onClick={Ops} />
        }
        )
        }
      </div>

      <NavLocker />
    </>
  )
}

function Locker({ id, numero, status, onClick }) {
  return (
    <div key={id} onClick={onClick} className={` col-span-1 ${status == 'ocupado' ? "bg-[#A0E29E]" : "bg-cinza-100"} w-24 h-24 flex items-center justify-center rounded-lg`}><p className="text-h5 active:">{numero}</p></div>
  )
}