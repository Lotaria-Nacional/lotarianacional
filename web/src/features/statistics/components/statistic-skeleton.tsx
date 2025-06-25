import { Skeleton } from "@/shared/components/ui/skeleton";
import Container from "@/shared/components/common/container/container";

const StatisticSkeleton = () => {
  return (
    <Container className="flex flex-col gap-4 pt-6 pb-12">
      <div className="w-full flex items-center justify-between">
        <Skeleton className="w-[200px] h-[45px]" />
        <Skeleton className="w-[140px] h-[45px]" />
      </div>
      <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-10 xl:grid-cols-[repeat(15,1fr)] gap-4 w-full place-items-center">
        {Array.from({ length: 30 }).map((_, index) => (
          <Skeleton key={index} className="w-[58px] lg:w-[70px] h-[48px]" />
        ))}
      </div>
      <div className="w-full flex items-center h-[30px] mt-16 gap-20 justify-center">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex h-full items-cente gap-2">
            <Skeleton className="h-full w-[30px] rounded-full" />
            <Skeleton className="w-[200px] h-full" />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default StatisticSkeleton;
