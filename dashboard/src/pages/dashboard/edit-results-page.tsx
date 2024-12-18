import NothingToShow from "@/components/common/nothing-to-show"
import { useLastDailyResult } from "@/hooks/useLastDailyResults"
import ResultCardInput from "@/components/result/result-card-input"
import EditResultsSkeleton from "@/components/skeletons/edit-results-skeleton"

const EditResultsPage = () => {
  const { isLoading, results: dailyResults } = useLastDailyResult()

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      {isLoading ? (
        <EditResultsSkeleton />
      ) : dailyResults && dailyResults.results.length > 0 ? (
        <div className="w-[588px] grid grid-cols-2 gap-[20px]">
          {dailyResults?.results.map((result) => (
            <div
              key={result.id}
              className="relative bg-white rounded-[20px] h-[270px] shadow-sm shadow-white/20 p-2 w-full flex flex-col justify-around"
            >
              <div className="w-full flex items-center justify-between">
                <span className="bg-yellow-500 text-black px-3 py-1 font-medium rounded-[10px] w-fit  uppercase">
                  {result.name}
                </span>
              </div>
              <ResultCardInput result={result} />
            </div>
          ))}
        </div>
      ) : (
        <NothingToShow />
      )}
    </div>
  )
}

export default EditResultsPage
