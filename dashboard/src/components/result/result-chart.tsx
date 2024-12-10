import {
  Title,
  Legend,
  Tooltip,
  BarElement,
  LinearScale,
  CategoryScale,
  Chart as ChartJs,
} from "chart.js"
import { useMemo } from "react"
import { Bar } from "react-chartjs-2"
import { STATISTICS } from "../../constants/statistics"

ChartJs.register(Tooltip, Legend, Title, BarElement, LinearScale, CategoryScale)

const ResultChart = () => {
  const options = {
    indexAxis: "x" as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: false,
      },
    },
  }

  const labels = useMemo(() => STATISTICS.map((item) => item.sortedNumber), [])
  const data = {
    labels,
    datasets: [
      {
        borderColor: "#bd1717",
        backgroundColor: "#bd1717",
        data: STATISTICS.map((item) => item.sortedTimes),
      },
    ],
  }

  return <Bar data={data} options={options} />
}

export default ResultChart
