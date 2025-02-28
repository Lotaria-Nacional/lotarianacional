import { useEffect, useState } from "react"
import { getAgencies, IAgencyResponse } from "@/api/agency.api"

export function useAgencies(page?: number, pageSize?: number) {
  const [isLoading, setIsLoading] = useState(true)
  const [agencies, setAgencies] = useState<IAgencyResponse>({
    data: [],
    totalPages: 0,
    totalRecords: 0,
  })

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getAgencies(page, pageSize)
        setAgencies(data)
      } finally {
        setIsLoading(false)
      }
    }

    fetch()
  }, [page, pageSize])

  return { isLoading, agencies }
}
