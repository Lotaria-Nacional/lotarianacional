import { Skeleton } from "../ui/skeleton"

const NewsTableSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 w-[1128px] p-4">
      <div className="flex flex-col items-center justify-center gap-3">
        <Skeleton className="h-[60px] w-full" />
        <Skeleton className="h-[60px] w-full" />
      </div>
    </div>
  )
}

export default NewsTableSkeleton
