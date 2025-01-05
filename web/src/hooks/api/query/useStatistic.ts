import { getStatistics } from "@/api/estatisticas"
import { IStatistic } from "@/interfaces"
import { useEffect, useState } from "react"

export function useStatistic() {
  const [isLoading, setIsLoading] = useState(true)
  const [stats, setStats] = useState<IStatistic | null>(null)

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
