import NothingToShow from "@/components/common/nothing-to-show"
import { useLastDailyResult } from "@/hooks/useLastDailyResults"
import DownloadTodaysResultCard from "@/components/download-todays-result-card"
// import DownloadTodaysResultCardStory from "@/components/download-todays-result-card-story"
import DownloadTicketTodaysResultsSkeleton from "@/components/skeletons/download-ticket-todays-results-skeleton"
import DownloadTodaysResultCardStory from "@/components/download-todays-result-card-story"

const TodaysResults = () => {
  const { results, isLoading } = useLastDailyResult()

  if (isLoading) {
    return <DownloadTicketTodaysResultsSkeleton />
  }

  if (!results || results.results.length === 0) {
    return <NothingToShow />
  }

  return (
    <div className="py-2 flex gap-9 flex-col">
      <div className="w-[1200px] flex gap-8 pb-2 lotaria-scroll-bar overflow-x-scroll">
        <DownloadTodaysResultCard data={results} />
        <DownloadTodaysResultCardStory data={results} />
      </div>
    </div>
  )
}

export default TodaysResults
