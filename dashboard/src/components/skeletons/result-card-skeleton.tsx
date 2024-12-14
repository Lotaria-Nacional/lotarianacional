import { Skeleton } from "../ui/skeleton"

const ResultCardSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
      {Array.from({ length: 4 }).map((_, i) => (
        <div className="w-full flex gap-6 flex-col" key={i}>
          <Skeleton className="w-full lg:w-[235px] h-[130px] lg:h-[119px]" />
        </div>
      ))}
    </div>
  )
}

export default ResultCardSkeleton
