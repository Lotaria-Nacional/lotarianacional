import { Skeleton } from "@/shared/components/ui/skeleton";

export default function DailyDesultsSkeleton() {
  return (
    <div className="w-full h-full lg:overflow-hidden py-4 lg:py-0 flex lg:grid grid-cols-1 justify-start items-center place-items-center gap-4 lg:gap-3">
      <section className="flex flex-col gap-4 flex-1 h-full w-full">
        <div className="flex flex-col gap-6 w-full items-center h-full justify-start">
          <div className="w-card flex flex-col h-[64px] items-center gap-4">
            <Skeleton className="w-full py-3 h-full" />
            <Skeleton className="w-full py-3 h-full" />
          </div>

          <div className="flex flex-row w-full gap-4 items-center justify-start lg:justify-center pb-3 lg:pb-0 lg:overflow-x-hidden overflow-x-auto lg:flex-col">
            <Skeleton className="shrink-0 w-card h-card !rounded-card" />
            <Skeleton className="shrink-0 w-card h-card !rounded-card" />
            <Skeleton className="shrink-0 w-card h-card !rounded-card" />
            <Skeleton className="shrink-0 w-card h-card !rounded-card" />
          </div>
        </div>
      </section>
    </div>
  );
}
