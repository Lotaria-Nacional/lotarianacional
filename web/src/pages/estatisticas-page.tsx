import { useState } from "react"
import Ui from "../components/ui"
import { IStats } from "@/interfaces"
import { ICONS } from "../constants/assets"
import Container from "../components/common/container"
import { useStatistic } from "@/hooks/api/query/useStatistic"
import GraphAndTable from "@/components/estatisticas/graph-and-table"
import StatisticSkeleton from "@/components/estatisticas/statistic-skeleton"

const EstatisticasPage = () => {
  const { isLoading, stats } = useStatistic()
  const [switchTableAndGraph, setSwitchTableAndGraph] = useState(true)

  if (isLoading) return <StatisticSkeleton />

  const renderNumber = (maxNumber: number, data?: IStats[]) => {
    const numberMap = data
      ? new Map(data.map((obj) => [obj.sortedNumber, obj.sortedTimes]))
      : new Map()

    return Array.from({ length: maxNumber }, (_, i) => {
      const number = i + 1
      return {
        sortedNumber: number,
        sortedTimes: numberMap.get(number) || 0,
      }
    })
  }

  const statsDataArr = renderNumber(90, stats?.statsData)

  const toggleGraphAndTable = () => {
    setSwitchTableAndGraph((prev) => !prev)
  }

  return (
    <>
      <Container className="flex-col pt-6 pb-12">
        <div className="bg-white w-full items-center flex rounded-lg flex-col gap-8">
          {/** NUMBERS GRID DATA */}
          <>
            <div className="w-full flex items-center justify-between">
              <h1 className="text-[18px] text-wrap lg:text-nowrap w-[150px] lg:w-fit lg:text-[20px] font-bold lg:text-center">
                Números em destaque
              </h1>

              <Ui.Button
                btn="red"
                onClick={toggleGraphAndTable}
                className="gap-1 lg:gap-2 text-[14px] py-3 px-4"
              >
                <img
                  alt="ícone de gráfico"
                  src={ICONS.estatisticas}
                  className="object-contain w-5 h-5"
                />
                {switchTableAndGraph ? "Ver gráfico" : "Ver tabela"}
              </Ui.Button>
            </div>

            <GraphAndTable
              statsDataArr={statsDataArr}
              switchTableAndGraph={switchTableAndGraph}
            />
          </>
        </div>
      </Container>
    </>
  )
}

export default EstatisticasPage
