import React, { useState } from "react";
// import { CalenBlack } from "../../assets/CalenIcon";

export function VoidDate(){

  const [date, setDate] = useState()

    return (
        <>
      <div className=" w-52 h-24 p-4 shadow-lg flex-col flex justify-between">
        <div className="flex justify-start items-center">
          <p className="text-fun2">Esvaziamento</p>
        {/* <CalenBlack/> */}
        </div>
         <input type="date" name="calendar" id="data" value={date} />
      </div>
        </>
    )
}