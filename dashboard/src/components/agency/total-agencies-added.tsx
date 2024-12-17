import { useEffect, useState } from "react"
import { getAgencies } from "@/api/agency.api"
import TotalResultsAndAgenciesSkeleton from "../skeletons/total-results-and-agencies-skeleton"

const TotalAgenciesAdded = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [totalAgencies, setTotalAgencies] = useState<number | null>(null)

  useEffect(() => {
    const fetch = async () => {
      const data = await getAgencies()
      setTotalAgencies(data.length)
      setIsLoading(false)
    }

    fetch()
  }, [])

  if (isLoading) return <TotalResultsAndAgenciesSkeleton />

  return (
    <div className="w-full lg:w-[252px] mt-6 lg:mt-0 flex flex-col bg-white rounded-[20px] p-4">
      <span className="font-medium text-[14px]">Total de agências</span>
      {!totalAgencies ? (
        <span className="w-full h-full flex items-center justify-center">
          Não há nada ainda.
        </span>
      ) : (
        <span className="text-[64px] w-full h-full flex items-center justify-center font-medium text-RED-200">
          {totalAgencies}
        </span>
      )}
    </div>
  )
}

export default TotalAgenciesAdded
