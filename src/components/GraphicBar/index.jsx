import React, { useEffect, useContext } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { ProductContext } from "../../context/ProductContext";

export function Grafico() {
const {getChartData} = useContext(ProductContext)
const {chartData} = getChartData()

const labels = chartData?.json?.Estoque?.Label || [];
const dataValues = chartData?.json?.Estoque?.Data || [];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Vendas por mês",
        backgroundColor: "#DE7FF9",
        borderColor: "#EBA5FF",
        data: dataValues
      },
    ],
  };

  return (
    // chamando o componente do grafico e passando o objeto data
    <section className="shadow-[0_4px_8px_0px_rgba(227,227,227)] rounded-lg p-6">
      <figure>
        <h2 className="col-span-full text-sub2">Estoque</h2>
        <Bar data={data} />
      </figure>
    </section>
  );
}
