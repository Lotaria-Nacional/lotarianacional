import { Skeleton } from "../ui/skeleton"

const AgencySkeleton = () => {
  return (
    <div className="lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 w-full hidden">
      {Array.from({ length: 12 }).map((_, index) => (
        <Skeleton
          key={index}
          className="w-full lg:w-[305px] h-[181px] rounded-[20px]"
        />
      ))}
    </div>
  )
}

export default AgencySkeleton
