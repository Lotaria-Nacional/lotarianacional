import { Skeleton } from "../ui/skeleton"

const EditResultsSkeleton = () => {
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
}

export default EditResultsSkeleton
