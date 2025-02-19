import { Skeleton } from "../ui/skeleton"

const DownloadTicketPostSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 mt-16">
      <div className="w-full flex items-center gap-4 overflow-hidden">
        <Skeleton className="h-[450px] w-[300px]" />
        <Skeleton className="h-[450px] w-[300px]" />
        <Skeleton className="h-[450px] w-[300px]" />
        <Skeleton className="h-[450px] w-[300px]" />
      </div>
      <div className="w-full flex items-center gap-4 overflow-hidden">
        <Skeleton className="h-[450px] w-[300px]" />
        <Skeleton className="h-[450px] w-[300px]" />
        <Skeleton className="h-[450px] w-[300px]" />
        <Skeleton className="h-[450px] w-[300px]" />
      </div>
    </div>
  )
}

export default DownloadTicketPostSkeleton
