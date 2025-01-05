import { Skeleton } from "../ui/skeleton"

const StatisticsSkeleton = () => {
  return (
    <div className="w-full lg:w-[576px] flex flex-col gap-3 p-3">
      <Skeleton className="w-[150px] h-14 self-end" />
      <Skeleton className="w-full h-full" />
    </div>
  )
}

export default StatisticsSkeleton
