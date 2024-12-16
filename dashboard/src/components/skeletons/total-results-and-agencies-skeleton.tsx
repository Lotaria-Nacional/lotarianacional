import { Skeleton } from "../ui/skeleton"

const TotalResultsAndAgenciesSkeleton = () => {
  return (
    <div className="w-[252px] flex flex-col">
      <Skeleton className="w-full h-full rounded-[20px]" />
    </div>
  )
}

export default TotalResultsAndAgenciesSkeleton
