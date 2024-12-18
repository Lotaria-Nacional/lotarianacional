import { getLastDailyResult } from "@/api/results.api"
import { IDailyResult } from "@/interfaces"
import { useEffect, useState } from "react"

type PropsResponse = {
  isLoading: boolean
  results: IDailyResult | null
}

export function useLastDailyResult(): PropsResponse {
  const [results, setResults] = useState<IDailyResult | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getLastDailyResult()
        setResults(data)
      } finally {
        setIsLoading(false)
      }
    }
    fetch()
  }, [])

  return { isLoading, results }
}
