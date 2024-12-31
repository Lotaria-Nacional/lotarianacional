import { useEffect, useState } from "react"
import { IDailyResult } from "../../../interfaces"
import { getDailyResults } from "../../../api/result.api"

type UseDailyResultResponse = {
  isLoading: boolean
  results: IDailyResult[] | []
}

export function useDailyResults(date?: string): UseDailyResultResponse {
  const [results, setResults] = useState<IDailyResult[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true)
      try {
        const data = await getDailyResults(date)
        setResults(data)
      } finally {
        setIsLoading(false)
      }
    }
    fetch()
  }, [date])

  return { isLoading, results }
}
