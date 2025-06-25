import { useEffect, useState } from "react"
import { getDailyResults } from "../services/lottery-result.services"
import { DailyLotteryResultEntity } from "../@types/lottery-result.types"

type UseDailyResultResponse = {
  isLoading: boolean
  results: DailyLotteryResultEntity[] | []
}

export function useDailyResults(date?: string): UseDailyResultResponse {
  const [results, setResults] = useState<DailyLotteryResultEntity[]>([])
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
