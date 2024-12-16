import { IResult } from "@/interfaces"
import { useEffect, useState } from "react"
import { getLastDailyResult } from "@/api/results.api"
import { Skeleton } from "@/components/ui/skeleton"
import NothingToShow from "@/components/common/nothing-to-show"
import ResultCardInput from "@/components/result/result-card-input"

const EditResultsPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [results, setResults] = useState<IResult[]>()

  useEffect(() => {
    const fech = async () => {
      try {
        setIsLoading(true)
        const data = await getLastDailyResult()
        console.log(data)
        setResults(data.results)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    fech()
  }, [])

  if (isLoading)
    return (
      <div className="w-full flex flex-col items-center justify-center gap-4">
        <div className="w-[588px] grid grid-cols-2 gap-[20px]">
          <Skeleton className="h-[220px]" />
          <Skeleton className="h-[220px]" />
          <Skeleton className="h-[220px]" />
          <Skeleton className="h-[220px]" />
        </div>
      </div>
    )

  if (results?.length === 0) return <NothingToShow />

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <div className="w-[588px] grid grid-cols-2 gap-[20px]">
        {results?.map((result) => (
          <div
            key={result.id}
            className="bg-white rounded-[20px] h-[270px] shadow-sm shadow-white/20 p-2 w-full flex flex-col justify-around"
          >
            <span className="bg-yellow-500 text-black px-3 py-1 font-medium rounded-[10px] w-fit  uppercase">
              {result.name}
            </span>
            <ResultCardInput result={result} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default EditResultsPage
