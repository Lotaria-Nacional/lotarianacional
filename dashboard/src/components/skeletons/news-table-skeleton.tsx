import { Skeleton } from "../ui/skeleton"

const NewsTableSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center w-[1128px] mx-auto">
      <Skeleton className="h-[45px] w-[100px] self-end" />
      <div className="flex flex-col gap-3 w-full">
        <Skeleton className="h-[60px] w-full" />
        <Skeleton className="h-[60px] w-full" />
      </div>
    </div>
  )
}

export default NewsTableSkeleton
