import { InfoCard } from '../Components/InfoCard';
import { CardInfo } from '../types/InfoCard';
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, BarElement } from "chart.js";
import ChartCard from '../Components/ChartCard';
import List from '../Components/List';
import { CompanyInfo } from '../types/CompanyInfo';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement,Title, Tooltip, Legend, Filler);


const labels = ['2010', '2011', '2012', '2013', '2014', '2015', '2016'];
const data = {
  labels: labels,
  datasets: [{
    label: 'Activos',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};

const myInfoCard: CardInfo = {
    cardTitle: 'Mis empresas',
    cardValue: '5',
    cardExtra: 'El numero total de las empresas que administras'
}

export default function Companies() {
    return (
        <div>
            <header>
                <h1 className="font-medium text-[#228B22] text-2xl">Empresas</h1>
                <p className="text-[#2C3E50] text-[1rem]">Informacion relevante sobre las empresas que administras</p>
            </header>
            <section className='space-y-4'>
                <div className="grid grid-cols-4 gap-x-5 mt-5">
                    <InfoCard {...myInfoCard}></InfoCard>
                    <InfoCard {...myInfoCard}></InfoCard>
                    <InfoCard {...myInfoCard}></InfoCard>
                    <InfoCard {...myInfoCard}></InfoCard>
                </div>
                <div className='grid grid-cols-5 gap-x-5 items-stretch'>
                    <div className='col-span-3'>
                        <ChartCard chartTitle='Activos'>
                            <div className='w-full'>
                                <Bar data={data}></Bar>
                            </div>
                        </ChartCard>
                    </div>
                    <div className='col-span-2'>
                        <ChartCard chartTitle='Pasivos'>
                            <div className='w-full'>
                                <Bar data={data}></Bar>
                            </div>
                        </ChartCard>
                    </div>
                </div>
            </section>
        </div>
    )
}