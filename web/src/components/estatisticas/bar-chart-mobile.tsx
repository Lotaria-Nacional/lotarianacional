import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { IStats } from "@/interfaces"
import { useMemo } from "react"
type Props = {
  stats?: IStats[]
}

export const enum COLORS {
  RED = "#951913",
  BLUE = "#00A5FF",
  GRAY = "#e1e1e1",
}

export default function BarChartMobile({ stats }: Props) {
  const data = useMemo(
    () =>
      stats &&
      stats.map((item) => ({
        name: item.sortedNumber,
        numero: item.sortedNumber,
        Vezes: item.sortedTimes,
      })),
    [stats]
  )

  const interval = 2
  return (
    <div className="w-full items-start justify-start lg:hidden flex relative">
      <ResponsiveContainer width="100%" height={900}>
        <RechartsBarChart
          data={data}
          layout="vertical"
          margin={{ left: -30, top: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <YAxis interval={interval} type="category" dataKey="name" />
          <XAxis type="number" />
          <Tooltip />
          <Bar dataKey="Vezes" fill={COLORS.RED} />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  )
}
