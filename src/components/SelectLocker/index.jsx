import { LockersSelect } from "./../AllLocker";
import { CheckBox } from "./../Inputs/input-CheckBox/index";
import { useState } from "react";
import React from "react";

export function SelectLocker() {
  const [selectAll, setSelectAll] = useState(false);

  function handleSelectAll(event) {
    setSelectAll(event.target.checked);
    console.log('clicado')
  }

  return (
    <div className="flex flex-col flex-wrap mt-2 lg:mt-20 sm:mt-2">
      <h1 className="text-h5">Selecione o armário</h1>
      <div className="flex flex-wrap gap-x-2 items-center mt-5">
        <CheckBox check={selectAll} onChange={handleSelectAll} />
        <p className="text-fun2"> Selecionar tudo</p>
      </div>
      <div
        className="flex flex-col h-1/3 sm:h-1/4 lg:h-3/4 bg-branco px-6 rounded-lg overflow-y-auto mt-3"
        style={{ scrollbarWidth: "none" }}
      >
        <LockersSelect size={"small"} />
      </div>
    </div>
  );
}