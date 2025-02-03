import { useEffect, useState } from "react"
import { IDailyResult } from "../../../interfaces"
import { getAllDailyResults } from "../../../api/result.api"

type UseDailyResultResponse = {
  isLoading: boolean
  results: IDailyResult[]
}

export function useAllDailyResults(): UseDailyResultResponse {
  const [results, setResults] = useState<IDailyResult[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true)
      try {
        const data = await getAllDailyResults()
        setResults(data)
      } finally {
        setIsLoading(false)
      }
    }
    fetch()
  }, [])

  return { isLoading, results }
}
