import { Skeleton } from "@/shared/components/ui/skeleton";

function UpdateNewsPageSkeleton() {
  return (
    <div className="main w-full h-screen grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Skeleton className="h-full w-full" />
      <div className="grid grid-cols-1 gap-6">
        <Skeleton className="h-full w-full" />
        <Skeleton className="h-full w-full" />
      </div>
    </div>
  );
}

export default UpdateNewsPageSkeleton;
