import { useEffect, useState } from "react"
import { StatisticEntity } from "../@types/statistics.types"
import { getStatistics } from "@/features/statistics/services/statistics.services"

export function useStatistic() {
  const [isLoading, setIsLoading] = useState(true)
  const [stats, setStats] = useState<StatisticEntity | null>(null)

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getStatistics()
        setStats(data)
      } finally {
        setIsLoading(false)
      }
    }
    fetch()
  }, [])

  return { stats, isLoading }
}
