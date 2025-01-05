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
import { IStats } from "@/interfaces"
import { Bar } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

type Props = {
  statsData: IStats[]
}

const BarChart = ({ statsData }: Props) => {
  const options = {
    indexAxis: "x" as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
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
  const labels = useMemo(
    () => statsData.map((item) => item.sortedNumber),
    [statsData]
  )
  const data = useMemo(
    () => ({
      labels,
      datasets: [
        {
          data: statsData.map((item) => item.sortedTimes),
          borderColor: "#bd1717",
          backgroundColor: "#bd1717",
        },
      ],
    }),
    [labels]
  )

  return <Bar data={data} options={options} />
}

export default BarChart
