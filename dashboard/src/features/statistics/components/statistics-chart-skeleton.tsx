import { Skeleton } from "@/shared/components/ui/skeleton";

export default function StatisticsChartSkeleton() {
  return (
    <div className="w-full h-full p-4">
      <Skeleton className="w-full h-full !rounded-card" />
    </div>
  );
}
