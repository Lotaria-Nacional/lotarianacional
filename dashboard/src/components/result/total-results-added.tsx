import { useEffect, useState } from "react"
import { getResults } from "@/api/results.api"
import TotalResultsAndAgenciesSkeleton from "../skeletons/total-results-and-agencies-skeleton"

const TotalResultsAdded = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [totalResults, setTotalResults] = useState<number>(0)

  useEffect(() => {
    const fetch = async () => {
      const data = await getResults()
      setTotalResults(data.total)
      setIsLoading(false)
    }

    fetch()
  }, [])

  if (isLoading) return <TotalResultsAndAgenciesSkeleton />

  return (
    <div className="w-full lg:w-[252px] flex items-center justify-start flex-col bg-white rounded-[20px] p-4">
      <span className="font-medium text-[14px]">
        Total de resultados Registados
      </span>
      {!totalResults ? (
        <span className="w-full h-full flex items-center justify-center">
          Não há anda ainda.
        </span>
      ) : (
        <span className="text-[64px] w-full h-full flex items-center justify-center font-medium text-RED-200">
          {totalResults}
        </span>
      )}
    </div>
  )
}

export default TotalResultsAdded
