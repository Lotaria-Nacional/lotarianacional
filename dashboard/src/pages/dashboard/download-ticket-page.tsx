import { useLastDailyResult } from "@/hooks/useLastDailyResults"
import DownloadResultCard from "@/components/download-result-card"

const DownloadTicketPage = () => {
  const { results } = useLastDailyResult()
  return (
    <main className="w-full flex items-center justify-center min-h-screen">
      <div className="min-w-[588px] py-10 grid grid-cols-2 gap-2">
        {results?.results.map((result) => (
          <DownloadResultCard key={result.id} result={result} />
        ))}
      </div>
    </main>
  )
}

export default DownloadTicketPage
