import Container from "../common/container"
import { Skeleton } from "../ui/skeleton"

const ResultsSkeleton = () => {
  return (
    <Container>
      <div className="w-full flex lg:items-center gap-2 lg:justify-start">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="flex flex-col gap-6 w-full">
            <div className="w-full h-[40px] flex flex-col gap-2 items-center justify-center">
              <Skeleton className="w-[100px] h-full" />
              <Skeleton className="w-[150px] h-full" />
            </div>

            <Skeleton className="w-full h-[115px]" />
            <Skeleton className="w-full h-[115px]" />
            <Skeleton className="w-full h-[115px]" />
            <Skeleton className="w-full h-[115px]" />
          </div>
        ))}
      </div>
    </Container>
  )
}

export default ResultsSkeleton
