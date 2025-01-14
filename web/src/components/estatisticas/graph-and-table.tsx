import BarChart from "./bar-chart"
import { IStats } from "@/interfaces"
import StatsInfoText, { StatsTextColor } from "./stats-info-text"

type Props = {
  switchTableAndGraph: boolean
  statsDataArr: IStats[]
}

const GraphAndTable = ({ switchTableAndGraph, statsDataArr }: Props) => {
  return switchTableAndGraph ? (
    <>
      <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-10 xl:grid-cols-[repeat(15,1fr)] gap-4 w-full place-items-center">
        {statsDataArr?.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-1 lg:gap-2 text-sm justify-center w-[58px] lg:w-[70px] h-[48px] p-2 rounded-lg bg-[#EAEAEA]"
          >
            <span
              className={`h-6 w-6 p-2 text-white flex font-bold items-center justify-center ${
                item.sortedTimes > 3
                  ? "bg-LT_RED-200/90"
                  : item.sortedTimes > 3
                  ? "bg-yellow-400"
                  : "bg-[#00A5FF]"
              } rounded-full`}
            >
              {item.sortedNumber}
            </span>
            <span className="text-black">{item.sortedTimes}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center mt-8 justify-between w-full xl:w-2/5">
        <StatsInfoText text="Números quentes" color={StatsTextColor.red} />
        <StatsInfoText text="Números normais" color={StatsTextColor.yellow} />
        <StatsInfoText text="Números frios" color={StatsTextColor.blue} />
      </div>
    </>
  ) : (
    <div className="relative border border-neutral-100 rounded-lg flex items-center justify-center w-full h-full lg:h-[440px]">
      <BarChart stats={statsDataArr} />
    </div>
  )
}

export default GraphAndTable
