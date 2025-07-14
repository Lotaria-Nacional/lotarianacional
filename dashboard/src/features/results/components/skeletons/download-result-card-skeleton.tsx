import { Skeleton } from "@/shared/components/ui/skeleton";

export function DownloadResultCardSkeleton() {
  return (
    <div className="flex gap-6 w-full overflow-x-auto">
      <Skeleton className="shrink-0 w-download-card-feed h-download-card-feed" />
      <Skeleton className="shrink-0 w-download-card-feed h-download-card-feed" />
      <Skeleton className="shrink-0 w-download-card-feed h-download-card-feed" />
      <Skeleton className="shrink-0 w-download-card-feed h-download-card-feed" />
    </div>
  );
}
