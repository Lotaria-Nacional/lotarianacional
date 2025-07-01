import EmissoesSlider from "./emission-slider";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { isValidArray } from "@/shared/utils/array-validation";
import EmptyState from "@/shared/components/common/empty-state";
import { useFetchManyEmission } from "@/features/emission/hooks/use-fetch-many-emission";

import "swiper/swiper-bundle.css";
import "./emission-slider-nav.css";

export default function EmissionListing() {
  const { data: emissions, isLoading } = useFetchManyEmission();
  return (
    <>
      {isLoading ? (
        <div className="w-full flex flex-col gap-2">
          <Skeleton className="h-[350px] w-full" />
          <div className="w-full flex gap-2">
            {Array.from({ length: 3 }).map((_, index) => (
              <Skeleton key={index} className="h-[200px] w-full" />
            ))}
          </div>
        </div>
      ) : emissions && isValidArray(emissions) ? (
        <EmissoesSlider emissions={emissions} />
      ) : (
        <EmptyState className="h-[150px]" message="Não há emissões ainda." />
      )}
    </>
  );
}
