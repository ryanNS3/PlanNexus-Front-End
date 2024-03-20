import { AssociadosIcon } from "../../assets/Associados";
import { GanhosIcon } from "../../assets/Ganhos";
import { VendasIcon } from "../../assets/Vendas";
import { EstoqueIcon } from "../../assets/Estoque";
import { FuncionarioIcon } from "../../assets/Funcionario";

export function StatisticCard() {
  return (
    <div className="px-4 py-6 flex flex-col gap-12 border border-cinza-100 rounded-lg shadow-[0_4px_8px_0px_rgba(227,227,227)] absolute right-[0] top-96">
      <header className="flex justify-center items-center gap-2">
        <div className="h-10 w-10 flex items-center justify-center rounded bg-rosa-200">
          {/* <AssociadosIcon size={24} />
          <GanhosIcon size={24} />
          <VendasIcon size={24} />
          <FuncionarioIcon size={24} />
          <EstoqueIcon /> */}
        </div>

        <h1 className="text-fun2">Associados</h1>
      </header>

      <div className="flex flex-col gap-4 text-xl">
        <p className="text-ct3">
          aumento
          <span className="bg-rosa-50 p-1 rounded-md inline-block ml-[0.188rem]">
            +16
          </span>
        </p>
        <p className="font-semibold text-h4">354</p>
        {/* Alterar o tamanho do texto pois 4xl = 36px e o certo é 40 px */}
      </div>
    </div>
  );
}
