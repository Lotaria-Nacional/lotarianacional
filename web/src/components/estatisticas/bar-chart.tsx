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

const BarChart = ({ stats }: Props) => {
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
    <div className="relative hidden lg:flex w-full h-full lg:h-[440px]">
      <ResponsiveContainer height={"100%"} width={"100%"}>
        <RechartsBarChart data={data} margin={{ left: -30, top: 40 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={interval} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="Vezes" fill={COLORS.RED} width={600} />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarChart
