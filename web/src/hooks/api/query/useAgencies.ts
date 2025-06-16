import { IAgency } from "@/interfaces"
import { useEffect, useState } from "react"
import { getAgencies } from "../../../api/agencias.api"

export function useAgencies() {
  const [isLoading, setIsLoading] = useState(true)
  const [agencies, setAgencies] = useState<IAgency[]>([])

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
