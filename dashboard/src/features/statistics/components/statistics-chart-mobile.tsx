import {
  Bar,
  XAxis,
  Tooltip,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts"
import { useGetStatistics } from "../hooks/query"
import EmptyState from "@/components/empty-state"
import { useMemo } from "react"
import StatisticsChartSkeleton from "./statistics-chart-skeleton"

export default function StatsChartMobile() {
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
    <div className="lg:hidden lg:h-full h-[250px] flex w-full">
      {isLoading ? (
        <StatisticsChartSkeleton />
      ) : data ? (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart barSize={6} data={data.slice(0, 25)} margin={{ left: -35 }}>
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
