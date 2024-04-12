import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
} from "chart.js";
import { useState, useEffect } from "react";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Legend);

// propriedades do gráfico
export const options = {
  elements: {
    line: {
      borderWidth: 2,
    },

    point: {
      pointBackgroundColor: "#fff",
      pointRadius: 5,
      pointBorderWidth: 2,
    },
  },

  plugins: {
    legend: {
      align: "end",

      labels: {
        boxWidth: 16,
        boxHeight: 16,
        borderRadius: 8,
        useBorderRadius: true,
        color: "#000",
        font: {
          size: 15,
          weight: 500,
        },
      },
    },
  },

  scales: {
    y: {
      min: 0,
      max: 1000,

      grid: {
        display: false,
      },

      ticks: {
        stepSize: 250,
        color: "#000",
      },

      border: {
        display: true,
        color: "#000",
      },
    },

    x: {
      grid: {
        display: false,
      },

      border: {
        display: true,
        color: "#000",
      },

      ticks: {
        color: "#000",
      },
    },
  },
};

// eixo y do gráfico
const labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];

const d1 = [200, 456, 789, 12];
const d2 = [500, 10, 740];

// dados do gráfico
export const data = {
  labels,
  datasets: [
    {
      label: "Camisetas",
      data: d1.map((item) => item),
      borderColor: "#9F2DBF",
      backgroundColor: "#9F2DBF",
    },
    {
      label: "Copos",
      data: d2.map((item) => item),
      borderColor: "#EBA5FF",
      backgroundColor: "#EBA5FF",
    },
  ],
};

export function SalesChart() {
  return (
    <section className="shadow-[0_4px_8px_0px_rgba(227,227,227)] rounded-lg p-6">
      <figure>
        <h2 className="text-sub2">Vendas AAPM</h2>
        <Line options={options} data={data} />
      </figure>
    </section>
  );
}
