import {
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  BarChart as RechartsBarChart,
} from "recharts";
import { useMemo } from "react";
import { Stats } from "../@types/statistics.types";

type Props = {
  stats?: Stats[];
};

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
  );

  const interval = 2;
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
  );
}
