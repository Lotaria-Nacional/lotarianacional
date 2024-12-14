import { Skeleton } from "../ui/skeleton"

const UserTableSkeleton = () => {
  return (
    <div className="w-[1128px] mx-auto flex flex-col gap-4">
      <Skeleton className="w-[120px] h-[40px] self-end" />
      <Skeleton className="w-full h-[70px]" />
      <Skeleton className="w-full h-[70px]" />
    </div>
  )
}

export default UserTableSkeleton
