import { checkIsToday } from "../utils";
import { breakpoints } from "@/lib/swiper";
import { Mousewheel } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import { formatDate } from "@/shared/utils/date";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import LotteryResultCard from "./lottery-result-card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PageTitle from "@/shared/components/common/page-title";
import { lotteryButtonStyle } from "../styles/lottery-button.cva";
import { DailyLotteryResultEntity } from "../@types/lottery-result.types";
import LotteryResultCardPlaceholder from "./lottery-result-card-placeholder";

import "swiper/swiper-bundle.css";
import { PageHeader } from "@/shared/components/layout/page-header";

type Props = {
  data: DailyLotteryResultEntity[];
};

export default function DailyLotteryResultsListing({ data }: Props) {
  const INITIAL_SLIDE = data.length - 1;
  const swiperRef = useRef<SwiperType | null>(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [slideCount, setSlideCount] = useState(INITIAL_SLIDE);

  const handleSwiper = (direction: "left" | "right") => {
    if (swiperRef.current) {
      if (direction === "left") {
        swiperRef.current.slidePrev();
        setCanGoBack(true);
        setSlideCount((prev) => Math.max(prev - 1, 0));
      } else {
        swiperRef.current.slideNext();
        setSlideCount((prev) => Math.min(prev + 1, data.length - 1));
      }
    }
  };

  const handleGoBack = () => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(INITIAL_SLIDE);
      setSlideCount(INITIAL_SLIDE);
    }
    setCanGoBack(false);
  };

  useEffect(() => {
    if (slideCount === INITIAL_SLIDE) {
      setCanGoBack(false);
    }
    if (slideCount < INITIAL_SLIDE) {
      setCanGoBack(true);
    }
  }, [slideCount]);

  return (
    <section className="w-full flex flex-col gap-6">
      <PageHeader.Container>
        <PageHeader.Title>Resultados</PageHeader.Title>
        <div className="flex items-center gap-2">
          {canGoBack && (
            <button
              onClick={handleGoBack}
              className={lotteryButtonStyle({ intent: "secondary" })}
            >
              Últimos
            </button>
          )}
          <div className="flex items-center bg-zinc-200 rounded-full p-1 gap-4">
            <ChevronLeft
              onClick={() => handleSwiper("left")}
              className={lotteryButtonStyle({ intent: "primary" })}
            />
            <ChevronRight
              onClick={() => handleSwiper("right")}
              className={lotteryButtonStyle({ intent: "primary" })}
            />
          </div>
        </div>
      </PageHeader.Container>

      <Swiper
        modules={[Mousewheel]}
        className="w-full h-full"
        breakpoints={breakpoints}
        initialSlide={INITIAL_SLIDE}
        mousewheel={{ enabled: true, forceToAxis: true }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onActiveIndexChange={(swiper) => {
          setCanGoBack(swiper.activeIndex < INITIAL_SLIDE);
        }}
      >
        {data.map((dailyRes, dailyResIndex) => {
          const { isToday, placeholdersCount } = checkIsToday(dailyRes);
          const totalResults = dailyRes.results.length;

          return (
            <SwiperSlide
              key={dailyResIndex}
              className="w-full flex h-full items-center lg:items-start gap-2 flex-col cursor-grab"
            >
              <ul
                className={`${
                  isToday &&
                  "border-2 border-dashed w-fit border-LT_RED-100 bg-red-200 rounded-xl"
                } flex flex-col gap-2 p-1 items-center`}
              >
                <header className="flex flex-col items-center">
                  <h1 className="text-lg text-LT_RED-200 font-bold">
                    {dailyRes.formatedDate.split(",")[0]}
                  </h1>
                  <h4 className="bg-yellow-400 px-2 rounded-md">
                    {formatDate(dailyRes.date.toString())}
                  </h4>
                </header>

                <div className="h-full flex flex-col gap-2">
                  {dailyRes.results.map((res, resIndex) => (
                    <LotteryResultCard key={resIndex} result={res} />
                  ))}
                  {Array.from({ length: placeholdersCount }).map((_, i) => (
                    <LotteryResultCardPlaceholder
                      key={i}
                      index={i}
                      totalResults={totalResults}
                    />
                  ))}
                </div>
              </ul>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
