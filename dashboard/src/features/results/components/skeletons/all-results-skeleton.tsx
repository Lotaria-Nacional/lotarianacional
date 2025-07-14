import { Skeleton } from "@/shared/components/ui/skeleton";

export default function AllResultsSkeleton() {
  return (
    <div className="w-full grid grid-cols-1 place-items-center md:grid-cols-3 lg:grid-cols-5 h-full p-4">
      <div className="lg:flex hidden flex-col gap-2">
        <Skeleton className="w-card h-card" />
        <Skeleton className="w-card h-card" />
        <Skeleton className="w-card h-card" />
        <Skeleton className="w-card h-card" />
      </div>
      <div className="md:flex hidden flex-col gap-2">
        <Skeleton className="w-card h-card" />
        <Skeleton className="w-card h-card" />
        <Skeleton className="w-card h-card" />
        <Skeleton className="w-card h-card" />
      </div>
      <div className="md:flex hidden flex-col gap-2">
        <Skeleton className="w-card h-card" />
        <Skeleton className="w-card h-card" />
        <Skeleton className="w-card h-card" />
        <Skeleton className="w-card h-card" />
      </div>
      <div className="lg:flex hidden flex-col gap-2">
        <Skeleton className="w-card h-card" />
        <Skeleton className="w-card h-card" />
        <Skeleton className="w-card h-card" />
        <Skeleton className="w-card h-card" />
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton className="w-card h-card" />
        <Skeleton className="w-card h-card" />
        <Skeleton className="w-card h-card" />
        <Skeleton className="w-card h-card" />
      </div>
    </div>
  );
}
