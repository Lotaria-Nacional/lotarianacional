import { IAgency } from "@/interfaces"
import { useEffect, useState } from "react"
import { getAgencyById } from "@/api/agency.api"

export function useAgencyById(id: string) {
  const [agency, setAgency] = useState<IAgency>({} as IAgency)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getAgencyById(id!)
        setAgency(data)
      } finally {
        setIsLoading(false)
      }
    }
    fetch()
  }, [id])

  return { isLoading, agency }
}
