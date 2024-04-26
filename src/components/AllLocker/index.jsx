import React from "react"
import { NavLocker } from "../NavLocker"
import { Notice } from "../Notice"
import { Percentage } from "../Percentage"
import { VoidDate } from "../VoidDate"
import BasicModal from "../Modal"
import { LockerForm } from "../Form/locker"
import { Options } from "../Options"
import { LockerContext } from "../../context/lockerContext"

export function AllLocker({ typeUser }) {

  // const { dado } = React.useContext(LockerContext)
  // console.log(dado)

  const [isOpenOptions, setIsOpenOptions] = React.useState(false)

  function handleFocusAllLocker(event) {
    event.preventDefault()
    setIsOpenOptions(false)
  }

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

  return (
    <div onFocus={handleFocusAllLocker}>

      <div className="flex flex-wrap mt-8 gap-5">
        <Percentage /><VoidDate />
      </div>

      <div className="col-start-1 col-end-12 flex justify-between mt-10" >
        <h1 className="text-h5" >Todos os {typeUser}: </h1>
        <BasicModal TextButton={<Notice />}>
          <LockerForm />

        </BasicModal>
      </div>

      <div className="grid grid-cols-1 col-span-12 gap-4 mt-7 sm:grid-cols-3 sm:col-span-12 md:grid-cols-6 md:col-span-12 lg:grid-cols-9 lg:col-span-12 xl:grid-cols-12 xl:col-span-12">
        {data.map((element) => {
          return <Locker key={element.id} id={`#e${element.id}`} numero={element.numero} status={element.status} />
        }
        )
        }
      </div>

      <NavLocker />
    </div>
  )
}

function Locker({ id, numero, status }) {
  const [isOpenOptions, setIsOpenOptions] = React.useState(false)
  function onClickRight(event) {
    event.preventDefault();
    setIsOpenOptions(!isOpenOptions)
    console.log(event)
  }

  return (
    <>
      <div onContextMenuCapture={onClickRight} key={id} id={id} className={` relative col-span-1 ${status == 'ocupado' ? "bg-[#A0E29E]" : "bg-cinza-100"} h-24 flex items-center justify-center rounded-lg`}>
        <p className="text-h5">{numero}</p>

        <div className="absolute top-0 -right-2">
          {isOpenOptions ? <Options /> : null}
        </div>

      </div>
    </>
  )
}

// function Locker({ id, numero, status }) {
//   return (
//     <div key={id} className={`col-span-1 ${status == 'ocupado' ? "bg-[#A0E29E]" : "bg-cinza-100"} h-24 flex items-center justify-center rounded-lg`}><p className="text-h5">{numero}</p></div>
//   )
// }
