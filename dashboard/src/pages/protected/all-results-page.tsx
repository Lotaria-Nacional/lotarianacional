import { useRef } from "react";
import { isValidArray } from "@/lib/utils";
import { Swiper as SwiperType } from "swiper";
import EmptyState from "@/components/empty-state";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "@/components/ui/lottary-button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ResultCard from "@/features/results/components/result-card";
import { useGetAllResults } from "@/features/results/hooks/query/index";
import AllResultsSkeleton from "@/features/results/components/skeletons/all-results-skeleton";

import "swiper/swiper-bundle.css";

export default function AllResultsPage() {
  const { data, isLoading } = useGetAllResults();

  const swiperRef = useRef<SwiperType | null>(null);

  const prevSlide = () => swiperRef.current?.slidePrev();
  const nexSlide = () => swiperRef.current?.slideNext();

  const breakpoints = {
    1940: { slidesPerView: 7 },
    1440: { slidesPerView: 5 },
    1024: { slidesPerView: 3 },
    430: { slidesPerView: 2 },
  };

  return (
    <div className="main w-full h-full">
      <section className="bg-white rounded-card h-full flex flex-col gap-4 flex-1">
        <div className="flex items-center justify-between w-full p-4">
          <span className="font-semibold">Histórico de resultados</span>
          <div className="flex items-center gap-2">
            <Button
              onClick={prevSlide}
              className="size-8 hover:opacity-70 transition-all ease-in duration-200"
            >
              <ChevronLeft />
            </Button>
            <Button
              onClick={nexSlide}
              className="size-8 hover:opacity-70 transition-all ease-in duration-200"
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
        {isLoading ? (
          <AllResultsSkeleton />
        ) : data && isValidArray(data) ? (
          <Swiper
            spaceBetween={1}
            breakpoints={breakpoints}
            initialSlide={data.length - 1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="w-full flex-1 items-center justify-center flex h-full"
          >
            {data.map((dailyResult, dailyResultIndex) => (
              <SwiperSlide
                key={dailyResultIndex}
                className="flex flex-col justify-between w-full h-full pl-2 pr-2 cursor-grab items-center"
              >
                <header className="w-full text-center">
                  <span>
                    {dailyResult.formatedDate.split(",").splice(1, 1)}
                  </span>
                </header>
                {dailyResult.results.map((result, resultIndex) => (
                  <ResultCard
                    result={result}
                    className="mt-2"
                    key={resultIndex}
                  />
                ))}
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <EmptyState message="Não há resultados ainda." />
        )}
      </section>
    </div>
  );
}
