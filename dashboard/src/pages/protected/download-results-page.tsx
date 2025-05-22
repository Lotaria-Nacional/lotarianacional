import EmptyState from "@/components/empty-state";
import { useGetLastResults } from "@/features/results/hooks/query";
import DownloadResultCard from "@/features/results/components/download-cards/download-result-card";
import DownloadAllResultsCard from "@/features/results/components/download-cards/download-all-results-card";
import { DownloadResultCardSkeleton } from "@/features/results/components/skeletons/download-result-card-skeleton";

export default function DownloadResultsPage() {
  const { data, isLoading } = useGetLastResults();

  return (
    <div className="main w-full flex flex-col gap-6">
      <section className="w-full rounded-card bg-white p-4">
        <div className="flex flex-col gap-6">
          <span className="px-4 py-2 bg-white rounded-lg w-fit">
            Para o Feed
          </span>
          <hr className="w-full h-[2px] text-LT-GRAY-200" />

          <div className="flex arial items-center gap-6 h-[500px] overflow-x-auto">
            {isLoading ? (
              <DownloadResultCardSkeleton />
            ) : data && data.results.length > 0 ? (
              <>
                {data.results.map((result) => (
                  <DownloadResultCard
                    name={result.name}
                    key={result.id}
                    result={result}
                  />
                ))}
                <DownloadAllResultsCard dailyResult={data!} />
              </>
            ) : (
              <EmptyState message="Não há resultados ainda." />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
