import { useEffect, useState } from "react"

import ResultCard from "./result-card"
import { IResult } from "../../interfaces"
import { getLastDailyResult } from "../../api/results.api"
import NothingToShow from "../common/nothing-to-show"
import ResultCardSkeleton from "../skeletons/result-card-skeleton"

const ResultCardListing = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [dailyResults, setdailyResults] = useState<IResult[] | []>([])

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getLastDailyResult()
        setdailyResults(data.results)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetch()
  }, [])

  if (isLoading) return <ResultCardSkeleton />

  if (dailyResults.length === 0)
    return (
      <div className="flex items-center justify-center w-full h-full">
        <span>Não há resultados ainda.</span>
      </div>
    )

  return (
    <>
      {dailyResults && dailyResults.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {dailyResults?.map((result) => (
            <ResultCard key={result.id} result={result} />
          ))}
        </div>
      ) : (
        <NothingToShow />
      )}
    </>
  )
}

export default ResultCardListing
