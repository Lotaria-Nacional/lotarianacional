import { IStatistic } from "@/interfaces"
import { useEffect, useState } from "react"
import { getStatistics } from "@/api/statistics"

type UseStatisticsResponse = {
  isLoading: boolean
  stats: IStatistic | null
}

export function useStatistics(): UseStatisticsResponse {
  const [isLoading, setIsLoading] = useState(true)
  const [stats, setStats] = useState<IStatistic | null>(null)

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getStatistics()
        console.log(data)
        setStats(data)
      } finally {
        setIsLoading(false)
      }
    }

    fetch()
  }, [])

  return { stats, isLoading }
}
