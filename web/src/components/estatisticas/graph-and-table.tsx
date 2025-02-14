import BarChart from "./bar-chart"
import { IStats } from "@/interfaces"
import StatsInfoText, { StatsTextColor } from "./stats-info-text"
import BarChartMobile from "./bar-chart-mobile"
import React from "react"

// Função para calcular percentis corretamente
const calculatePercentile = (arr: number[], percentile: number) => {
  if (arr.length === 0) return 0
  const sortedArr = [...arr].sort((a, b) => a - b)
  const index = Math.floor(percentile * sortedArr.length) // Usa Math.floor para evitar arredondamento exagerado
  return sortedArr[Math.max(0, index)]
}

type Props = {
  switchTableAndGraph: boolean
  statsDataArr: IStats[]
}

const GraphAndTable = ({ switchTableAndGraph, statsDataArr }: Props) => {
  const frequencies = statsDataArr.map((item) => item.sortedTimes)

  if (frequencies.length === 0) return null

  // Calcular percentis ajustados
  const p15 = calculatePercentile(frequencies, 0.15) // Números frios
  const p85 = calculatePercentile(frequencies, 0.85) // Números quentes

  return switchTableAndGraph ? (
    <>
      <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-10 xl:grid-cols-[repeat(15,1fr)] gap-3 w-full place-items-center">
        {statsDataArr?.map((item, index) => {
          let bgColor = "bg-[#00A5FF]" // Azul (frio) por padrão

          if (item.sortedTimes >= p85) {
            bgColor = "bg-LT_RED-300" // Vermelho (quente)
          } else if (item.sortedTimes >= p15) {
            bgColor = "bg-zinc-500" // Amarelo (normal)
          }

          return (
            <div
              key={index}
              className="flex items-center gap-1 lg:gap-2 text-sm justify-center w-[58px] lg:w-[70px] h-[48px] p-2 rounded-lg bg-[#EAEAEA]"
            >
              <span
                className={`h-6 w-6 p-2 text-white flex font-bold items-center justify-center ${bgColor} rounded-full`}
              >
                {item.sortedNumber}
              </span>
              <span className="text-black">{item.sortedTimes}</span>
            </div>
          )
        })}
      </div>
      <div className="flex flex-col lg:flex-row items-start mt-2 mx-auto lg:mt-8 lg:justify-between justify-start w-fit xl:w-2/5">
        <StatsInfoText text="Números quentes" color={StatsTextColor.red} />
        <StatsInfoText text="Números normais" color={StatsTextColor.gray} />
        <StatsInfoText text="Números frios" color={StatsTextColor.blue} />
      </div>
    </>
  ) : (
    <React.Fragment>
      <BarChart stats={statsDataArr} />
      <BarChartMobile stats={statsDataArr} />
    </React.Fragment>
  )
}

export default GraphAndTable
