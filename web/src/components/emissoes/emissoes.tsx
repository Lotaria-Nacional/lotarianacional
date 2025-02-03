import { Skeleton } from "../ui/skeleton"
import EmissoesSlider from "./emissoes-slider"
import EmptyState from "../common/empty-state"
import { isValidArray } from "@/utils/array-validation"
import { useEmission } from "@/hooks/api/query/useEmission"

import "swiper/swiper-bundle.css"
import "./emissoes-slider-nav.css"
const Emissoes = () => {
  const { emissions, isLoading } = useEmission()

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
  )
}

export default Emissoes
