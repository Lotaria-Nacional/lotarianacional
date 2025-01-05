import BarChart from "./common/chart"
import NothingToShow from "./common/nothing-to-show"
import { useStatistics } from "@/hooks/useStatistics"
import DownloadExcelButton from "./download-excel-button"
import StatisticsSkeleton from "./skeletons/statistics-skeleton"

const StatisticSection = () => {
  const { isLoading, stats } = useStatistics()

  if (isLoading) return <StatisticsSkeleton />

  return (
    <>
      {stats && stats.statsData.length > 0 ? (
        <div className="w-full lg:w-[576px] flex flex-col items-center justify-center p-3 bg-white rounded-[20px]">
          <DownloadExcelButton file={stats.file} />
          <BarChart statsData={stats.statsData} />
        </div>
      ) : (
        <NothingToShow className="Não há estatísticas para mostrar." />
      )}
    </>
  )
}

export default StatisticSection
