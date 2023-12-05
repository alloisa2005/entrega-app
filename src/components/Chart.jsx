'use client'
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const MiBarChart = ({ tipo = 'bar', meses, totales }) => {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  
  const data = {
    labels: meses,
    datasets: [
      {
        label: 'Montos de Compras por Mes',
        data: totales,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },    
    ],
  };

  return (
    <Bar options={options} data={data} />
  )
}

export default MiBarChart