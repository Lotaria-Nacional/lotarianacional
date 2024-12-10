import { useEffect, useState } from "react"

import ResultCard from "./result-card"
import { IResult } from "../../interfaces"
import { getResults } from "../../api/results.api"
import NothingToShow from "../common/nothing-to-show"

const ResultCardListing = () => {
  const [isLoading, setIsLoading] = useState(true)

  const [dailyResults, setdailyResults] = useState<IResult[] | []>([])

  useEffect(() => {
    const fetch = async () => {
      const data = await getResults()

      setdailyResults(data[0].results)
      setIsLoading(false)
    }
    fetch()
  }, [])

  if (isLoading) return <span>Carregando...</span>

  return (
    <>
      {dailyResults ? (
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
