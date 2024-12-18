import { IAgency } from "@/interfaces"
import { useEffect, useState } from "react"
import { getAgencies } from "@/api/agency.api"

export function useAgencies() {
  const [isLoading, setIsLoading] = useState(true)
  const [agencies, setAgencies] = useState<IAgency[]>([])

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getAgencies()
        setAgencies(data)
      } finally {
        setIsLoading(false)
      }
    }

    fetch()
  }, [])

  return { isLoading, agencies }
}
