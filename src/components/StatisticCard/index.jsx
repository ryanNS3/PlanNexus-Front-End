import { AssociadosIcon } from "../../assets/Associados";
import { GanhosIcon } from "../../assets/Ganhos";
import { VendasIcon } from "../../assets/Vendas";
import { EstoqueIcon } from "../../assets/Estoque";
import { FuncionarioIcon } from "../../assets/Funcionario";

export function StatisticCard({ title, situation, value }) {
  let icon, bgColor;

  switch (title) {
    case "Associados":
      icon = <AssociadosIcon size={24} />;
      bgColor = "bg-rosa-50";
      break;

    case "Ganhos":
      icon = <GanhosIcon size={24} />;
      bgColor = "bg-[#C5EFA4]";
      break;

    case "Vendas":
      icon = <VendasIcon size={24} />;
      bgColor = "bg-[#EFDFA4]";
      break;

    case "Estoque":
      icon = <EstoqueIcon size={24} />;
      bgColor = "bg-[#A4D9EF]";
      break;

    case "Funcionário":
      icon = <FuncionarioIcon size={24} />;
      bgColor = "bg-[#B8A4EF]";
      break;

    default:
      break;
  }

  return (
    <div className="px-4 py-6 flex flex-col gap-12 border border-cinza-100 rounded-lg shadow-[0_4px_8px_0px_rgba(227,227,227)]">
      <header className="flex justify-start items-center gap-2">
        <div
          className={`h-10 w-10 flex items-center justify-center rounded ${bgColor}`}
        >
          {icon}
        </div>

        <h1 className="text-fun2">{title}</h1>
      </header>

      <div className="flex flex-col gap-4 text-xl">
        <p className="text-ct3">
          {situation >= 0 ? "aumento" : "Baixo"}
          <span
            className={`p-1 rounded-md inline-block ml-[0.188rem] ${bgColor}`}
          >
            {(situation > 0 && `+${situation}`) || situation}
          </span>
        </p>
        <p className="font-semibold text-h4">{value}</p>
        {/* Alterar o tamanho do texto pois 4xl = 36px e o certo é 40 px */}
      </div>
    </div>
  );
}
