import { useEffect, useState } from "react"

import ResultCard from "./result-card"
import { IDailyResult } from "../../interfaces"
import NothingToShow from "../common/nothing-to-show"
import { getLastDailyResult } from "../../api/results.api"
import ResultCardSkeleton from "../skeletons/result-card-skeleton"

const ResultCardListing = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [dailyResults, setdailyResults] = useState<IDailyResult | null>(null)

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getLastDailyResult()
        setdailyResults(data)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetch()
  }, [])

  if (isLoading) return <ResultCardSkeleton />

  if (dailyResults?.results.length === 0)
    return (
      <div className="flex items-center justify-center w-full h-full">
        <span>Não há resultados ainda.</span>
      </div>
    )

  return (
    <>
      {dailyResults?.results && dailyResults.results.length > 0 ? (
        <div className="flex flex-col gap-2">
          <span className="text-RED-200 font-medium">
            {dailyResults.formatedDate.split(",")[1]}
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {dailyResults?.results.map((result) => (
              <ResultCard key={result.id} result={result} />
            ))}
          </div>
        </div>
      ) : (
        <NothingToShow />
      )}
    </>
  )
}

export default ResultCardListing
