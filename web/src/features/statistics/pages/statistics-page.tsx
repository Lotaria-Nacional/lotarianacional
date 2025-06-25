import { useState } from "react";
import { ICONS } from "@/app/constants/assets";
import { Stats } from "../@types/statistics.types";
import { useStatistic } from "../hooks/useStatistic";
import Button from "@/shared/components/ui/button/button";
import GraphAndTable from "../components/graph-and-table";
import PageTitle from "@/shared/components/common/page-title";
import StatisticSkeleton from "../components/statistic-skeleton";
import Container from "@/shared/components/common/container/container";

const EstatisticasPage = () => {
  const { isLoading, stats } = useStatistic();
  const [switchTableAndGraph, setSwitchTableAndGraph] = useState(true);

  if (isLoading) return <StatisticSkeleton />;

  const renderNumber = (maxNumber: number, data?: Stats[]) => {
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
