import { IDailyResult } from "@/interfaces"
import { useEffect, useState } from "react"
import { getLastDailyResult } from "@/api/result.api"

type ResponseProps = {
  isLoading: boolean
  lastDailyResult: IDailyResult | null
}

export function useLastDailyResult(): ResponseProps {
  const [isLoading, setIsLoading] = useState(true)
  const [lastDailyResult, setLastDailyResult] = useState<IDailyResult | null>(null)

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
