import { Skeleton } from "../ui/skeleton"

const DailyResultSkeleton = () => {
  return (
    <div className="h-full w-[250px] flex flex-col justify-start gap-2 items-center">
      <div className="flex flex-col items-center gap-2">
        <Skeleton className="w-[180px] h-[15px]" />
        <Skeleton className="w-[150px] h-[15px]" />
      </div>
      {Array.from({ length: 4 }).map((_, index) => (
        <Skeleton key={index} className="w-[180px] h-[115px]" />
      ))}
    </div>
  )
}

export default DailyResultSkeleton
