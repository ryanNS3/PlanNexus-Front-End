import { LockerContext } from "../../context/lockerContext";

export function StudentName({ nome }) {
  return (
    <div className="flex flex-wrap w-full h-fit items-center justify-start border-cinza-100 rounded border-2 align-start px-4 py-3 gap-x-3">
      <div className="flex items-center justify-center w-8 h-fit border-2 rounded-3xl px-4 py-1 ">
        <p className="fun2">{nome[0]}</p>
      </div>
      <p className="text-ct3">{nome}</p>
    </div>
  );
}
