import { useState } from "react"
import { ICONS } from "@/app/constants/assets"
import { Stats } from "../@types/statistics.types"
import { useGetStatistics } from "../hooks/use-get-statistics"
import Button from "@/shared/components/ui/button/button"
import GraphAndTable from "../components/graph-and-table"
import StatisticSkeleton from "../components/statistic-skeleton"
import { PageBody } from "@/shared/components/layout/page-body"
import { PageHeader } from "@/shared/components/layout/page-header"

const EstatisticasPage = () => {
  const statstistics = useGetStatistics()
  const [switchTableAndGraph, setSwitchTableAndGraph] = useState(true)

  if (statstistics.isLoading) return <StatisticSkeleton />

  const renderNumber = (maxNumber: number, data?: Stats[]) => {
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

  const statsDataArr = renderNumber(90, statstistics.data?.statsData)

  const toggleGraphAndTable = () => {
    setSwitchTableAndGraph((prev) => !prev)
  }

  return (
    <PageBody.Container>
      <PageHeader.Container>
        <PageHeader.Title>Estatísticas</PageHeader.Title>
        <PageHeader.Actions>
          <Button onClick={toggleGraphAndTable}>
            <img
              alt="ícone de gráfico"
              src={ICONS.estatisticas}
              className="object-contain w-5 h-5"
            />
            <span>{switchTableAndGraph ? "Ver gráfico" : "Ver tabela"}</span>
          </Button>
        </PageHeader.Actions>
      </PageHeader.Container>

      <div className="bg-white w-full items-center flex rounded-lg flex-col gap-8">
        <GraphAndTable
          statsDataArr={statsDataArr}
          switchTableAndGraph={switchTableAndGraph}
        />
      </div>
    </PageBody.Container>
  )
}

export default EstatisticasPage
