
import { useEffect, useState } from "react"
import { getLastDailyResult } from "../services/lottery-result.services"
import { DailyLotteryResultEntity } from "../@types/lottery-result.types"

type ResponseProps = {
  isLoading: boolean
  lastDailyResult: DailyLotteryResultEntity | null
}

export function useLastDailyResult(): ResponseProps {
  const [isLoading, setIsLoading] = useState(true)
  const [lastDailyResult, setLastDailyResult] = useState<DailyLotteryResultEntity | null>(null)

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getLastDailyResult()
        setLastDailyResult(data)
      } finally {
        setIsLoading(false)
      }
    }
    fetch()
  }, [])

  return { isLoading, lastDailyResult }
}
