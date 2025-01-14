import {
  Title,
  Legend,
  Tooltip,
  BarElement,
  LinearScale,
  CategoryScale,
  Chart as ChartJS,
} from "chart.js"
import { useMemo } from "react"
import { Bar } from "react-chartjs-2"
import { IStats } from "@/interfaces"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

type Props = {
  stats?: IStats[]
}

const BarChart = ({ stats }: Props) => {
  const options = {
    indexAxis: "x" as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    // responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Frequência dos Números Sorteados",
      },
    },
  }
  const labels = useMemo(() => stats?.map((item) => item.sortedNumber), [])
  const data = useMemo(
    () => ({
      labels,
      datasets: [
        {
          data: stats?.map((item) => item.sortedTimes),
          borderColor: "#bd1717",
          backgroundColor: "#bd1717",
        },
      ],
    }),
    [labels]
  )

  return <Bar data={data} options={options} className="w-full h-full" />
}

export default BarChart
