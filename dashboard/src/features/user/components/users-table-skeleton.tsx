import { Skeleton } from "@/shared/components/ui/skeleton";

export default function UsersTableSkeleton() {
  return (
    <div className="flex flex-col w-full h-full pt-5 gap-3">
      {Array.from({ length: 10 }).map((_, index) => (
        <Skeleton key={index} className="py-5 w-full" />
      ))}
    </div>
  );
}
