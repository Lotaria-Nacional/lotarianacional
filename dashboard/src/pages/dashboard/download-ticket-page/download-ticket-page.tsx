import NothingToShow from "@/components/common/nothing-to-show"
import DownloadResultCard from "@/components/download-result-card"
import DownloadResultCardStory from "@/components/download-result-card-story"
import DownloadTodaysResultCard from "@/components/download-todays-result-card"
import DownloadTodaysResultCardStory from "@/components/download-todays-result-card-story"
import DownloadTicketPostSkeleton from "@/components/skeletons/download-ticket-post-skeleton"
import { useLastDailyResult } from "@/hooks/useLastDailyResults"

const DownloadTicketPage = () => {
  const { results, isLoading } = useLastDailyResult()

  if (isLoading) {
    return <DownloadTicketPostSkeleton />
  }

  if (!results || results.results.length === 0) {
    return <NothingToShow />
  }
  return (
    <main className="w-full flex items-end justify-start min-h-screen flex-col gap-4">
      <div className="py-2 flex gap-9 flex-col">
        <section className="w-full flex flex-col gap-3">
          <span className="font-bold w-full border-b border-b-zinc-300">
            Para o feed
          </span>
          <div className="w-[1200px] flex gap-8 pb-2 lotaria-scroll-bar overflow-x-scroll">
            {results?.results.map((result) => (
              <DownloadResultCard key={result.id} result={result} />
            ))}
            <DownloadTodaysResultCard data={results} />
          </div>
        </section>

        <section className="w-full flex flex-col gap-4">
          <span className="font-bold w-full border-b border-b-zinc-300">
            Para os stories
          </span>
          <div className="w-[1200px] flex gap-8 overflow-x-scroll lotaria-scroll-bar pb-3">
            {results?.results.map((result) => (
              <DownloadResultCardStory key={result.id} result={result} />
            ))}
            <DownloadTodaysResultCardStory data={results} />
          </div>
        </section>
      </div>
    </main>
  )
}

export default DownloadTicketPage
