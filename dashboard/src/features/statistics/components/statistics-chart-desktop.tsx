import {
  Bar,
  XAxis,
  Tooltip,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts"
import { useMemo } from "react"
import { useGetStatistics } from "../hooks/query"
import EmptyState from "@/components/empty-state"
import StatisticsChartSkeleton from "./statistics-chart-skeleton"

export default function StatsChartDesktop() {
  const { data: statistics, isLoading } = useGetStatistics()

  const data = useMemo(
    () =>
      statistics &&
      statistics.statsData.map((item) => ({
        numero: item.sortedNumber,
        vezes: item.sortedTimes,
      })),
    [statistics]
  )

  return (
    <div className="hidden  lg:min-h-[250px] h-full w-full md:block">
      {isLoading ? (
        <StatisticsChartSkeleton />
      ) : data ? (
        <ResponsiveContainer
          className="hidden lg:block"
          width="100%"
          height="100%"
        >
          <BarChart barSize={6} data={data} margin={{ left: -35 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Bar dataKey={"vezes"} fill="#951913" />
            <XAxis dataKey="numero" type="category" interval={4} />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <EmptyState message="Não há estatísticas ainda." />
      )}
    </div>
  )
}
