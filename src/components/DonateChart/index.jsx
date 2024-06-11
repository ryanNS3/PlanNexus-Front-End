import { Doughnut, Line } from "react-chartjs-2";
import { useState, useEffect, useContext } from "react";
import { CardMedium } from "../Cards/Card";
import { ProductContext } from "../../context/ProductContext";

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const generateRandomColors = (numColors) => {
  const colors = [];
  for (let i = 0; i < numColors; i++) {
    colors.push(getRandomColor());
  }
  return colors;
};

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



export function DonateChart() {
  const {getChartData} = useContext(ProductContext)
    const chartData = getChartData()
    const labels = chartData?.chartData?.json?.Doacao.Label || []
    const dataValues = chartData?.chartData?.json?.Doacao.Data || []
    const bgColors = generateRandomColors(dataValues.length)

    const data = {   
      labels: [],
      datasets: [
        {
          label: 'Valor em R$',
          data: dataValues,
          backgroundColor: bgColors.map(item => item),
        },
      ],
    };

  return (
    <>
      <CardMedium>
        <div className="w-full max-w-full p-4">
          <h2 className="text-sub2">Custo de doação</h2>
          <div className="flex flex-col sm:flex-row gap-2 mt-2">
            <div className="w-full sm:w-1/2">
              <Doughnut options={config} data={data} />
            </div>

            <div className="flex flex-col justify-center w-full sm:w-1/2 lg:w-2/3 xl:w-3/4">
              {labels && labels.map((item, index) => {
                return (
                  <div key={index} className="flex items-center gap-2 mt-2">
                    <div className="w-4 h-4 rounded" style={{ backgroundColor: bgColors[index] }}></div>
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </CardMedium>
    </>
  );
  }
  
  export function DonateChart2() {
    const {getChartData} = useContext(ProductContext)
    const chartData = getChartData()
    const labels = chartData?.chartData?.json?.ProdutosMaisDoados.Label || []
    const dataValues = chartData?.chartData?.json?.ProdutosMaisDoados.Data || []
    const bgColors = generateRandomColors(dataValues.length)

  const data2 = {   
    labels: [],
    datasets: [
      {
        label: 'Quantidade',
        data: dataValues,
        backgroundColor: bgColors.map(item => item),
      },
    ],
  };

  return (
    <>
      <CardMedium>
        <div className="w-full max-w-full p-4">
          <h2 className="text-sub2">Produtos mais doados</h2>
          <div className="flex flex-col sm:flex-row gap-2 mt-2">
            <div className="w-full sm:w-1/2">
              <Doughnut options={config} data={data2} />
            </div>

            <div className="flex flex-col justify-center w-full sm:w-1/2 lg:w-2/3 xl:w-3/4">
              {labels && labels.map((item, index) => {
                return (
                  <div key={index} className="flex items-center gap-2 mt-2">
                    <div className="w-4 h-4 rounded" style={{ backgroundColor: bgColors[index] }}></div>
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </CardMedium>
    </>
  );
}

