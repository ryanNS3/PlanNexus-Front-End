import { Doughnut, Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import { CardMedium } from "../Cards/Card";

const dadosMock = [124, 63, 71];
const colorsData = ["#D9A5EC", "#45DDA8", "#527661"];

const dadosMock2 = [58, 26, 128];

const data = {
  labels: [],
  datasets: [
    {
      label: "Valor (em R$)",
      data: dadosMock.map((item) => item),
      backgroundColor: colorsData.map((item) => item),
    },
  ],
};

const data2 = {
  labels: [],
  datasets: [
    {
      label: "Quantidade",
      data: dadosMock2.map((item) => item),
      backgroundColor: colorsData.map((item) => item),
    },
  ],
};

const config = {
  type: "doughnut",
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
    },
  },
};

const config2 = {
  type: "doughnut",
  data: data2,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
    },
  },
};

// dados do gráfico
const DATA_COUNT = 3;

export function DonateChart() {
  return (
    <>
      <CardMedium>
        <div className=" max-w-[250px]">
            <h2 className="text-sub2">Custo de Doação</h2>
            <div className="flex">
              <Doughnut  options={config} data={data} />
              <div className="flex-col p-10">
                <div className="flex items-center gap-1"><div className="w-4 h-4 rounded bg-[#D9A5EC]"></div>Transporte</div>
                <div className="flex items-center gap-1"><div className="w-4 h-4 rounded bg-[#45DDA8]"></div>Alimentício</div>
                <div className="flex items-center gap-1"><div className="w-4 h-4 rounded bg-[#527661]"></div>Dinheiro</div>
              </div>
            </div>
        </div>
      </CardMedium>
    </>
  );
}

export function DonateChart2() {
  return (
    <>
      <CardMedium>
        <div className=" max-w-[250px]">
            <h2 className="text-sub2">Produtos mais doados</h2>
            <div className="flex">
              <Doughnut  options={config2} data={data2} />
              <div className="flex-col p-10">
                <div className="flex items-center gap-1"><div className="w-4 h-4 rounded bg-[#D9A5EC]"></div>Camiseta</div>
                <div className="flex items-center gap-1"><div className="w-4 h-4 rounded bg-[#45DDA8]"></div>Copo</div>
                <div className="flex items-center gap-1"><div className="w-4 h-4 rounded bg-[#527661]"></div>Caneta</div>
              </div>
            </div>

        </div>
      </CardMedium>
    </>
  );
}

