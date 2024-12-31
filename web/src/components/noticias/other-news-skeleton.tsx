import { Skeleton } from "../ui/skeleton"

const OtherNewsSkeleton = () => {
  return (
    <ul className="flex flex-col gap-8">
      {Array.from({ length: 4 }).map((_, index) => (
        <li
          key={index}
          className="flex lg:flex-row flex-col items-center gap-4 w-full"
        >
          <Skeleton className="h-[180px] md:h-[150px] w-[350px] lg:w-full" />
          <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-col gap-2 w-full">
              <Skeleton className="w-full h-[20px]" />
              <Skeleton className="w-[90%] h-[20px]" />
              <Skeleton className="w-[80%] h-[20px]" />
            </div>
            <Skeleton className="w-[50%] h-[20px]" />
            <Skeleton className="w-[30%] h-[20px]" />
          </div>
        </li>
      ))}
    </ul>
  )
}

export default OtherNewsSkeleton
