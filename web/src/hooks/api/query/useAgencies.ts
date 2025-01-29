import { useEffect, useState } from "react"
import { getAgencies, IAgencyResponse } from "../../../api/agencias.api"

export function useAgencies(page?: number) {
  const [isLoading, setIsLoading] = useState(true)
  const [agencies, setAgencies] = useState<IAgencyResponse>({
    data: [],
    totalPages: 0,
    totalRecords: 0,
  })

  useEffect(() => {
    const fetch = async () => {
      const data = await getAgencies(page)
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
