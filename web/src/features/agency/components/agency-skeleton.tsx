import { Skeleton } from "@/shared/components/ui/skeleton";

export default function AgencySkeleton() {
  return (
    <div className="flex w-full justify-between">
      {Array.from({ length: 4 }).map((_, index) => (
        <Skeleton
          key={index}
          className="w-full lg:w-[305px] h-[181px] rounded-[20px]"
        />
      ))}
    </div>
  );
}
