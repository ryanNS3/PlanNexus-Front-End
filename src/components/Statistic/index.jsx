import { useParams, Link } from "react-router-dom";

export function Statistic() {
  const { current } = useParams();

  //   Lógica para que os valores dos cards sejam referentes ao:
  current === "hoje"
    ? /* dia atual */ ""
    : current === "semana"
    ? /* semana atual */ ""
    : current === "mes"
    ? /* mes atual */ ""
    : null;

  return (
    <>
      <StatisticHeader />

      <div className="grid grid-cols-5 gap-5">
        <StatisticOverview title="Associados" situation={16} value={354} />
        <StatisticOverview title="Ganhos" situation={16} value={"R$ 3200"} />
        <StatisticOverview title="Vendas" situation={16} value={85} />
        <StatisticOverview title="Estoque" situation={-16} value={354} />
        <StatisticOverview title="Funcionário" situation={16} value={354} />
      </div>
    </>
  );
}

/*************************************************************************************************/
// import { useParams, Link } from "react-router-dom"; IMPORTED ON TOP

function StatisticHeader() {
  const { period } = useParams();

  return (
    <header className="flex justify-between items-center">
      <h5 className="text-h5">Estatística:</h5>
      <nav>
        <ul className="flex bg-cinza-100 rounded-lg text-fun2">
          <li>
            <Link
              className={`block px-4 py-[1.25rem] ${
                period === "day" ? "bg-cinza-800 rounded-lg text-cinza-50" : ""
              }`}
              to="day"
            >
              Hoje
            </Link>
          </li>

          <li>
            <Link className={`block px-4 py-[1.25rem] ${
                period === "week" ? "bg-cinza-800 rounded-lg text-cinza-50" : ""
              }`} to="week">
              Essa semana
            </Link>
          </li>

          <li>
            <Link className={`block px-4 py-[1.25rem] ${
                period === "month" ? "bg-cinza-800 rounded-lg text-cinza-50" : ""
              }`} to="month">
              Esse mês
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

/*************************************************************************************************/

import { AssociadosIcon } from "../../assets/Associados";
import { GanhosIcon } from "../../assets/Ganhos";
import { VendasIcon } from "../../assets/Vendas";
import { EstoqueIcon } from "../../assets/Estoque";
import { FuncionarioIcon } from "../../assets/Funcionario";

function StatisticOverview({ title, situation, value }) {
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
        <p className="font-semibold text-h5">{value}</p>
        {/* Alterar o tamanho do texto pois 4xl = 36px e o certo é 40 px */}
      </div>
    </div>
  );
}
