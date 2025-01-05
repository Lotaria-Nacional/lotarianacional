import Ui from "../components/ui"
import usePopUp from "@/hooks/usePopUp"
import { ICONS } from "../constants/assets"
import Container from "../components/common/container"
import EmptyState from "@/components/common/empty-state"
import { useStatistic } from "@/hooks/api/query/useStatistic"
import ChartPopUp from "../components/estatisticas/chart-pop-up"
import StatisticSkeleton from "@/components/estatisticas/statistic-skeleton"

const EstatisticasPage = () => {
  const { isLoading, stats } = useStatistic()
  const { handleClosePopUp, handleOpenPopUp, isPopUpOpen } = usePopUp()

  if (isLoading) return <StatisticSkeleton />

  return (
    <>
      <Container className="flex-col pt-6 pb-12">
        <div className="bg-white w-full items-center flex rounded-lg flex-col gap-8">
          {/** NUMBERS GRID DATA */}
          {stats && stats.statsData.length > 0 ? (
            <>
              <div className="w-full flex items-center justify-between">
                <h1 className="text-[18px] text-wrap lg:text-nowrap w-[150px] lg:w-fit lg:text-[20px] font-bold lg:text-center">
                  Números em destaque
                </h1>

                <Ui.Button
                  btn="red"
                  onClick={handleOpenPopUp}
                  className="gap-1 lg:gap-2 text-[14px] py-3 px-4"
                >
                  <img
                    alt="ícone de gráfico"
                    src={ICONS.estatisticas}
                    className="object-contain w-5 h-5"
                  />
                  Ver o gráfico
                </Ui.Button>
              </div>

              {isPopUpOpen && (
                <ChartPopUp
                  statsData={stats?.statsData}
                  closePopUp={handleClosePopUp}
                />
              )}

              <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-10 xl:grid-cols-[repeat(15,1fr)] gap-4 w-full place-items-center">
                {stats?.statsData.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1 lg:gap-2 text-sm justify-center w-[58px] lg:w-[70px] h-[48px] p-2 rounded-lg bg-[#EAEAEA]"
                  >
                    <span
                      className={`h-6 w-6 p-2 text-white flex font-bold items-center justify-center ${
                        item.sortedTimes > 50
                          ? "bg-LT_RED-200/90"
                          : item.sortedTimes < 10
                          ? "bg-[#00A5FF]"
                          : "bg-yellow-400"
                      } rounded-full`}
                    >
                      {item.sortedNumber}
                    </span>
                    <span className="text-black">{item.sortedTimes}</span>
                  </div>
                ))}
              </div>

              {/** BOTTOM TEXTS */}
              <div className="flex items-center mt-8 justify-between w-full xl:w-2/5">
                <div className="flex flex-col text-center lg:flex-row items-center gap-3">
                  <div className="size-3 rounded-full bg-LT_RED-100" />
                  <span>Números quentes</span>
                </div>

                <div className="flex flex-col text-center lg:flex-row items-center gap-3">
                  <div className="size-3 rounded-full bg-yellow-400" />
                  <span>Números normais</span>
                </div>
                <div className="flex flex-col text-center lg:flex-row items-center gap-3">
                  <div className="size-3 rounded-full bg-[#00A5FF]" />
                  <span>Números frios</span>
                </div>
              </div>
            </>
          ) : (
            <EmptyState message="Não há estatísticas ainda." />
          )}
        </div>
      </Container>
    </>
  )
}

export default EstatisticasPage
