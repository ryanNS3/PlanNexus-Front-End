import { Doughnut, Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import { CardLarge } from "../Cards/Card";

const dadosMock = [24, 47, 15];
const colorsData = ["#D9A5EC", "#45DDA8", "#527661"];
const labelNames = ["Transporte", "Dinheiro", "Alimentício"];

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

// eixo y do gráfico
const labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];

// dados do gráfico
const DATA_COUNT = 3;
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

export function DonateChart() {
  return (
    <>
      <CardLarge>
        <div className=" max-w-[350px]">
            <h2 className="text-sub2">Custo de Doação</h2>
            <Doughnut  options={config} data={data} />

        </div>
      </CardLarge>
    </>
  );
}
