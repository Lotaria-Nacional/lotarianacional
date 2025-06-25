import { Skeleton } from "@/shared/components/ui/skeleton";

export default function NewsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:grid-cols-3 gap-8">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="flex flex-col gap-2 w-full">
          <Skeleton className="w-full h-[200px] rounded-[20px]" />
          <div className="flex flex-col gap-2">
            <Skeleton className="w-[100px] h-[15px]" />
            <div className="flex flex-col gap-2">
              <Skeleton className="w-full h-[15px]" />
              <Skeleton className="w-[80%] h-[15px]" />
              <Skeleton className="w-[60%] h-[15px]" />
            </div>
            <Skeleton className="w-[100px] h-[40px]" />
          </div>
        </div>
      ))}
    </div>
  );
}
