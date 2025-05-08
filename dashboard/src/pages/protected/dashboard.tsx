import { isValidArray } from "@/lib/utils";
import TotalCard from "@/components/total-card";
import TotalCardSkeleton from "@/components/total-card-skeleton";
import AgencyMap from "@/features/agencies/components/agency-map";
import { useGetTotalResults } from "@/features/results/hooks/query";
import { useGetAllAgencies } from "@/features/agencies/hooks/query";
import TotalCardEmptyState from "@/components/total-card-empty-state";
import DailyResults from "@/features/results/components/daily-results";
import StatsChartMobile from "@/features/statistics/components/statistics-chart-mobile";
import StatsChartDesktop from "@/features/statistics/components/statistics-chart-desktop";

const Dashboard = () => {
  const { data: agencies, isLoading: isLoadingAgencies } = useGetAllAgencies({
    page: 1,
  });
  const { data: results, isLoading: isLoadingResults } = useGetTotalResults();

  return (
    <div className="main h-full flex flex-col lg:grid grid-cols-4 gap-6">
      <section className="bg-white pt-4 w-full flex flex-col items-center justify-center gap-6 h-fit lg:h-full relative rounded-card p-4">
        <DailyResults />
      </section>

      <section className="w-full col-span-3 min-h-[350px] gap-6 flex flex-col">
        <div className="bg-white rounded-card w-full p-3">
          <StatsChartDesktop />
          <StatsChartMobile />
        </div>

        <div className="gap-6 h-full grid grid-cols-1 lg:grid-cols-3 w-full">
          <div className="w-full flex h-full flex-col gap-6">
            {isLoadingResults ? (
              <TotalCardSkeleton />
            ) : results && results.total > 0 ? (
              <TotalCard name="resultados" total={results.total} />
            ) : (
              <TotalCardEmptyState message="Não há resultados ainda." />
            )}
            {isLoadingAgencies ? (
              <TotalCardSkeleton />
            ) : agencies && isValidArray(agencies.data) ? (
              <TotalCard name="agências" total={agencies.totalRecords} />
            ) : (
              <TotalCardEmptyState message="Não há agências ainda." />
            )}
          </div>

          <div className="w-full rounded-card h-[250px] lg:h-auto lg:col-span-2 relative">
            <span className="absolute top-2 right-2 text-white rounded-md px-4 py-1 bg-LT-RED-200 z-[999]">
              Agências
            </span>
            <AgencyMap />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
