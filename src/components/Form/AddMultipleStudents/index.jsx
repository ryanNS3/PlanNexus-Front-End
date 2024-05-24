import { Check, Close } from "../../../assets/Check";

export function AddMultipleStudents() {
  return (
    <div className="mt-10">
      <p className="text-sub1">Pré Visualização:</p>
      <div>
        <header className="flex justify-between px-16 py-4 border-b-2 border-b-cinza-200">
          <p className="text-fun2">nome</p>
          <p className="text-fun2">Status</p>
        </header>
        <div className="py-5 flex flex-col gap-5">
          <Line />
          <Line />
          <Line />
          <Line />
        </div>
      </div>
    </div>
  );
}

function Line({}) {
  return (
    <div className="p-4 flex items-center justify-between shadow-[0_4px_8px_0_rgba(227,227,227,1)] rounded">
      <div className="flex items-center gap-5">
        <img
          src={`https://static.thenounproject.com/png/2932881-200.png`}
          alt=""
          className="h-6 w-6"
        />
        <p className="text-ct3">Nome do aluno</p>
      </div>
      <div className="flex items-center justify-between gap-3 px-3 py-[0.25rem] bg-[#700707] bg-[#346C32] rounded text-branco text-ct3 font-bold">
        {<Check /> || <Close />}
        Adicionado
      </div>
    </div>
  );
}
