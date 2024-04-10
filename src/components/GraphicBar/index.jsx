import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

export function Grafico() {
  const meses = [
    { year: "Camiseta Branca" },
    { year: "Camiseta Preta" },
    { year: "Avental" },
    { year: "Copo" },
    { year: "Mochila" },
    { year: "Camisa Polo" },
  ];

  const vendas = [
    { numero: 500 },
    { numero: 200 },
    { numero: 50 },
    { numero: 5 },
    { numero: 75 },
    { numero: 30 },
  ];

  console.log(meses.map((itemMes) => itemMes));

  const labels = meses.map((itemMes) => itemMes.year);

  const data = {
    labels: labels,
    datasets: [
      {
        // nome da tabela
        label: "Vendas por mês",
        backgroundColor: "#DE7FF9",
        borderColor: "#EBA5FF",
        // Passando os valores númericos via api para a comparação
        data: vendas.map((itemVenda) => itemVenda.numero),
      },
    ],
  };

  return (
    // chamando o componente do grafico e passando o objeto data
    <section className="shadow-[0_4px_8px_0px_rgba(227,227,227)] border border-cinza-100 rounded-lg p-6">
      <figure>
        <h2 className="col-span-full text-sub2">Estoque</h2>
        <Bar data={data} />
      </figure>
    </section>
  );
}
