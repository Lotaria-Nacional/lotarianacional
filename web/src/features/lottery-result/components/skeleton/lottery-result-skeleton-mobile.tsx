import { Skeleton } from "@/shared/components/ui/skeleton";
import Container from "@/shared/components/common/container/container";

export default function LotteryResultSkeletonMobile() {
  return (
    <Container className="lg:hidden flex flex-col gap-4">
      <div className="w-full flex items-center justify-between">
        <Skeleton className="w-[150px] h-[30px]" />
        <Skeleton className="w-[100px] h-[30px]" />
      </div>
      <div className="flex w-full gap-[10px] overflow-auto">
        <Skeleton className="shrink-0 w-[180px] h-[115px] p-2 rounded-2xl" />
        <Skeleton className="shrink-0 w-[180px] h-[115px] p-2 rounded-2xl" />
        <Skeleton className="shrink-0 w-[180px] h-[115px] p-2 rounded-2xl" />
        <Skeleton className="shrink-0 w-[180px] h-[115px] p-2 rounded-2xl" />
      </div>
    </Container>
  );
}
