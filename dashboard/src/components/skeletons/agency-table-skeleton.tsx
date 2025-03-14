import { Skeleton } from "../ui/skeleton"

const AgencyTableSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 w-[1128px] items-center justify-center">
      <div className="space-y-2 w-full">
        <Skeleton className="h-[60px] w-full" />
        <Skeleton className="h-[60px] w-full" />
      </div>
    </div>
  )
}

export default AgencyTableSkeleton
