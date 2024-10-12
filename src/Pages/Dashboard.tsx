import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, BarElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement,Title, Tooltip, Legend, Filler);


const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const data = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
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

export default function Dashboard() {
    return (
        <div>
            <header className="mb-5">
                <h1 className="font-medium text-[#228B22] text-2xl">Dashboard</h1>
                 <p className="text-[#2C3E50] text-[1rem]">Informacion general y relevante sobre tu usuario</p>
            </header>
            <div className="grid grid-cols-2 gap-y-10">
                <div className="h-full w-full">
                    <Bar data={data}></Bar>
                </div>
                <div className="h-full w-full">
                    <Bar data={data}></Bar>
                </div>
            </div>
        </div>
    )
}