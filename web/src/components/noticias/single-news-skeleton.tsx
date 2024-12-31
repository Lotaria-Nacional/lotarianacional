import { Skeleton } from "../ui/skeleton"

const SingleNewsSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Skeleton className="h-[200px] md:h-[400px] w-full rounded-xl" />
      <Skeleton className="h-[25px] w-[30%]" />
      <div className="flex flex-col my-2 gap-2">
        <Skeleton className="h-[25px] w-[70%]" />
        <Skeleton className="h-[25px] w-[50%]" />
      </div>

      <div className="flex flex-col gap-2">
        {Array.from({ length: 7 }).map((_, index) => (
          <Skeleton key={index} className="h-[25px] w-full" />
        ))}
      </div>
    </div>
  )
}

export default SingleNewsSkeleton
