import { useLastDailyResult } from "@/hooks/useLastDailyResults"
import DownloadResultCard from "@/components/download-result-card"

const DownloadTicketPage = () => {
  const { results } = useLastDailyResult()
  return (
    <main className="w-full flex items-center justify-center h-full">
      <div className="w-[588px] grid grid-cols-2 gap-[20px]">
        {results?.results.map((result) => (
          <DownloadResultCard key={result.id} result={result} />
        ))}
      </div>
    </main>
  )
}

export default DownloadTicketPage
