import { getResults } from "@/api/results.api"
import { useEffect, useState } from "react"

const TotalResultsAdded = () => {
  // const [isLoading, setIsLoading] = useState(true)
  const [totalResults, setTotalResults] = useState<number | null>(null)

  useEffect(() => {
    const fetch = async () => {
      const data = await getResults()
      const total = data
        .map((result) => result.results.length)
        .reduce((total, result) => total + result, 0)

      setTotalResults(total)
      // setIsLoading(false)
    }

    fetch()
  }, [])

  return (
    <div className="w-[252px] flex items-center justify-start flex-col bg-white rounded-[20px] p-4">
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
