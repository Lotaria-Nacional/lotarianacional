import { useEffect, useState } from "react"
import { AgencyEntity } from "../@types/agency.type"
import { getAgencies } from "../services/agency.services"

export function useAgencies() {
  const [isLoading, setIsLoading] = useState(true)
  const [agencies, setAgencies] = useState<AgencyEntity[]>([])

  useEffect(() => {
    const fetch = async () => {
      const data = await getAgencies()
      setAgencies(data)
      try {
      } finally {
        setIsLoading(false)
      }
    }
    
    fetch()
  }, [])

  return { isLoading, agencies }
}
