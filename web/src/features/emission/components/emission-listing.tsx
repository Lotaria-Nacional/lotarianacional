import EmissoesSlider from "./emission-slider";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { isValidArray } from "@/shared/utils/array-validation";
import EmptyState from "@/shared/components/common/empty-state";
import { useEmission } from "@/features/emission/hooks/useEmission";

import "swiper/swiper-bundle.css";
import "./emission-slider-nav.css";

export default function EmissionListing() {
  const { emissions, isLoading } = useEmission();
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
      ) : isValidArray(emissions) ? (
        <EmissoesSlider emissions={emissions} />
      ) : (
        <EmptyState className="h-[150px]" message="Não há emissões ainda." />
      )}
    </>
  );
}
