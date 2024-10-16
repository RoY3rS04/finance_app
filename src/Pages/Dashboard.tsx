import { Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, BarElement, ArcElement } from "chart.js";
import { InfoCard } from "../Components/InfoCard";
import ChartCard from '../Components/ChartCard';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement,Title, Tooltip, Legend, Filler, ArcElement);

const labels = ['Antier', 'Ayer', 'Hoy'];

const data = {
  labels: labels,
  datasets: [{
    label: 'Estados Financieros',
    data: [3, 2, 0],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 99, 132, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 99, 132)',
      'rgb(255, 99, 132)'
    ],
    borderWidth: 1,
    borderRadius: 15,
    barThickness: 30
  },
    {
    label: 'Archivos',
    data: [1, 1, 0],
    backgroundColor: [
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgb(255, 159, 64)',
      'rgb(255, 159, 64)',
      'rgb(255, 159, 64)'
    ],
      borderWidth: 1,
      borderRadius: 15,
      barThickness: 30
    },
    {
    label: 'Analisis',
    data: [2, 4, 0],
    backgroundColor: [
      'rgba(0, 255, 0, 0.2)',
      'rgba(0, 255, 0, 0.2)',
      'rgba(0, 255, 0, 0.2)'
    ],
    borderColor: [
      'rgb(0, 255, 40)',
      'rgb(0, 255, 40)',
      'rgb(0, 255, 40)'
    ],
    borderWidth: 1,
      borderRadius: 15,
    barThickness: 30
  }]
};

const doughnutData = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgba(255, 99, 132, 0.7)',
      'rgba(54, 162, 235, 0.7)',
      'rgba(255, 205, 86, 0.7)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};

export default function Dashboard() {
    return (
        <div className="flex flex-col gap-y-5">
            <header className="">
                <h1 className="font-medium text-[#228B22] text-2xl">Dashboard</h1>
                 <p className="text-[#2C3E50] text-[1rem]">Informacion general y relevante sobre tu usuario</p>
            </header>
            <div className="p-5 bg-white rounded-md shadow-xl text-3xl font-semibold overflow-hidden text-[#2C3E50] bg-[url('./assets/hol7.jpg')] bg-cover bg-center bg-no-repeat">
              Bienvenido de vuelta RoYerS!
            </div>
            <div className="grid grid-cols-3 gap-x-5 gap-y-5">
              <InfoCard cardTitle="Total de Estados Financieros" cardValue="232">
                  <span className="text-gray-500">
                      <svg width='20' height='20' fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM112 256l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
                  </span>
              </InfoCard>
              <InfoCard cardTitle="Total de Archivos subidos" cardValue="78">
                <span className="text-gray-500">
                    <svg width='20' height='20' fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM155.7 250.2L192 302.1l36.3-51.9c7.6-10.9 22.6-13.5 33.4-5.9s13.5 22.6 5.9 33.4L221.3 344l46.4 66.2c7.6 10.9 5 25.8-5.9 33.4s-25.8 5-33.4-5.9L192 385.8l-36.3 51.9c-7.6 10.9-22.6 13.5-33.4 5.9s-13.5-22.6-5.9-33.4L162.7 344l-46.4-66.2c-7.6-10.9-5-25.8 5.9-33.4s25.8-5 33.4 5.9z"/></svg>
                </span>
              </InfoCard>
              <InfoCard cardTitle="Total de Analisis Realizados" cardValue="67">
                <span className="text-gray-500">
                  <svg width='20' height='20' fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zm-312 8l0 64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80-96l0 160c0 13.3 10.7 24 24 24s24-10.7 24-24l0-160c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80 64l0 96c0 13.3 10.7 24 24 24s24-10.7 24-24l0-96c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
                </span>
              </InfoCard>
              <div className="col-span-2">
                <ChartCard chartTitle="Stats">
                  <Bar data={data}></Bar>
                </ChartCard>
              </div>
              <div>
                <ChartCard chartTitle="Some Stats">
                  <Doughnut data={doughnutData}></Doughnut>
                </ChartCard>
              </div>
            </div>
        </div>
    )
}