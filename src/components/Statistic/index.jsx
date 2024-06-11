import { useParams, Link } from "react-router-dom";
import { ProductContext } from '../../context/ProductContext'

export function Statistic() {
  const {getStaticData} = useContext(ProductContext)
  const {statisticData} = getStaticData()
 
  const [period, setPeriod] = useState("dia");

  // Construir lógica para mostrar valores de acordo com o período selecionado
  let associates
  if(period === 'dia'){
    associates = statisticData?.json?.Associado?.Dia || []
  }else if (period === 'mes') {
    associates = statisticData?.json?.Associado?.Mes || []
  }else{
    associates = statisticData?.json?.Associado?.Semana || []
  }

  return (
    <section className="flex flex-col gap-5">
      <StatisticHeader period={period} setPeriod={setPeriod} />

      <div className="grid  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
        <StatisticOverview title="Associados" comparativeValue={associates.valor} value={associates.total} />
        <StatisticOverview title="Ganhos" comparativeValue={16} value={`R$ 2`} />
        <StatisticOverview title="Vendas" comparativeValue={16} value={85} />
        <StatisticOverview title="Estoque" comparativeValue={-16} value={354} />
        <StatisticOverview title="Funcionário" comparativeValue={16} value={354} />
      </div>
    </section>
  );
}

/*************************************************************************************************/
// import { useParams, Link } from "react-router-dom"; IMPORTED ON TOP

function StatisticHeader({ period, setPeriod }) {
  return (
    <header className="flex justify-between items-center flex-wrap gap-5">
      <h5 className="text-h5">Estatística:</h5>
      <nav>
        <ul className="flex border border-cinza-100 rounded-lg text-fun2">
          <li>
            <button
              className={`block px-4 py-[1.25rem] ${
                period === "dia" ? "bg-cinza-800 rounded-lg text-cinza-50" : ""
              }`}
              onClick={() => setPeriod("dia")}
            >
              Hoje
            </button>
          </li>

          <li>
            <button
              className={`block px-4 py-[1.25rem] ${
                period === "semana"
                  ? "bg-cinza-800 rounded-lg text-cinza-50"
                  : ""
              }`}
              onClick={() => setPeriod("semana")}
            >
              Essa semana
            </button>
          </li>

          <li>
            <button
              className={`block px-4 py-[1.25rem] ${
                period === "mes" ? "bg-cinza-800 rounded-lg text-cinza-50" : ""
              }`}
              onClick={() => setPeriod("mes")}
            >
              Esse mês
            </button>
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
import { useContext, useState } from "react";

function StatisticOverview({ title, comparativeValue, value }) {
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
          {comparativeValue >= 0 ? "aumento" : "Baixo"}
          <span
            className={`p-1 rounded-md inline-block ml-[0.188rem] ${bgColor}`}
          >
            {(comparativeValue > 0 && `+${comparativeValue}`) || comparativeValue}
          </span>
        </p>
        <p className="font-semibold text-h5">{value}</p>
        {/* Alterar o tamanho do texto pois 4xl = 36px e o certo é 40 px */}
      </div>
    </div>
  );
}
