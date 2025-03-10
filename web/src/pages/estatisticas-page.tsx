import { useState } from "react";
import { IStats } from "@/interfaces";
import { ICONS } from "../constants/assets";
import Container from "../components/common/container";
import { useStatistic } from "@/hooks/api/query/useStatistic";
import GraphAndTable from "@/components/estatisticas/graph-and-table";
import StatisticSkeleton from "@/components/estatisticas/statistic-skeleton";
import Button from "@/components/ui/button/button";
import PageTitle from "@/components/page-title";

const EstatisticasPage = () => {
  const { isLoading, stats } = useStatistic();
  const [switchTableAndGraph, setSwitchTableAndGraph] = useState(true);

  if (isLoading) return <StatisticSkeleton />;

  const renderNumber = (maxNumber: number, data?: IStats[]) => {
    const numberMap = data
      ? new Map(data.map((obj) => [obj.sortedNumber, obj.sortedTimes]))
      : new Map();

    return Array.from({ length: maxNumber }, (_, i) => {
      const number = i + 1;
      return {
        sortedNumber: number,
        sortedTimes: numberMap.get(number) || 0,
      };
    });
  };

  const statsDataArr = renderNumber(90, stats?.statsData);

  const toggleGraphAndTable = () => {
    setSwitchTableAndGraph((prev) => !prev);
  };

  return (
    <>
      <Container className="flex-col py-[40px]">
        <div className="bg-white w-full items-center flex rounded-lg flex-col gap-8">
          {/** NUMBERS GRID DATA */}
          <>
            <div className="w-full flex items-center justify-between">
              <PageTitle>Estatísticas</PageTitle>

              <Button
                variant="red"
                className="flex"
                onClick={toggleGraphAndTable}
              >
                <img
                  alt="ícone de gráfico"
                  src={ICONS.estatisticas}
                  className="object-contain w-5 h-5"
                />
                {switchTableAndGraph ? "Ver gráfico" : "Ver tabela"}
              </Button>
            </div>

            <GraphAndTable
              statsDataArr={statsDataArr}
              switchTableAndGraph={switchTableAndGraph}
            />
          </>
        </div>
      </Container>
    </>
  );
};

export default EstatisticasPage;
