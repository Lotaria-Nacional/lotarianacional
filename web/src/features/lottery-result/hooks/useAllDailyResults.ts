import { useEffect, useState } from "react"
import { DailyLotteryResultEntity } from "../@types/lottery-result.types"
import { getAllDailyResults } from "../services/lottery-result.services"

type UseDailyResultResponse = {
  isLoading: boolean
  results: DailyLotteryResultEntity[]
}

export function useAllDailyResults(): UseDailyResultResponse {
  const [results, setResults] = useState<DailyLotteryResultEntity[]>([])
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
