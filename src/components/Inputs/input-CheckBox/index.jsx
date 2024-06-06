import React from "react";
import { LockBlack } from "../../../assets/Lock";

export function SquareCheckBox({
  name,
  children,
  value,
  setvalue,
  check,
  onChange,
  ...props
}) {
  return (
    <label className="flex relative ">
      <div className=" flex justify-center items-center rounded p-2 size-18 bg-cinza-50 hover:bg-cinza-100 duration-75">
        <input
          className=" absolute -top-1 right-10"
          type="checkbox"
          value={value}
          onChange={onChange}
          checked={check}
          {...props}
        />
        <div className=" z-20">{children}</div>
      </div>
    </label>
  );
}

export function CheckBox({ name, value, setvalue, check, onChange, ...props }) {
  return (
    <label className=" relative ">
      <input
        className="w-6 h-6 border-preto"
        type="checkbox"
        value={value}
        onChange={onChange}
        checked={check}
        {...props}
      />
      <div className=" z-20">{name}</div>
    </label>
  );
}

export function LockerBox({ numero, status }) {
  const unlocker = status == "desocupado" ? "hidden" : "";
  const [select, setSelect] = React.useState(false);

  return (
    <>
      <div
        className={`relative col-span-1 ${
          status == "desocupado" ? "bg-[#A0E29E]" : "bg-cinza-100"
        } h-14 md:h-20 lg:h-22 xl:h-24 flex items-center justify-center rounded-lg`}
      >
        <div className={`absolute top-1 right-1 ${unlocker}`}>
          <LockBlack />
        </div>

        <p className="text-h5">{numero}</p>
      </div>
    </>
  );
}
