import { Skeleton } from "./ui/skeleton"

export default function TotalCardSkeleton() {
  return (
    <div className="w-full flex gap-2 flex-col lg:h-full items-center justify-center h-[180px]">
      <Skeleton className="w-full h-full" />
    </div>
  )
}
