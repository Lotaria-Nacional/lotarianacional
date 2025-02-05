import { useRef } from "react"
import { formatDate } from "@/utils/date"
import { breakpoints } from "@/lib/swiper"
import { IDailyResult } from "@/interfaces"
import { Swiper as SwiperType } from "swiper"
import { Mousewheel } from "swiper/modules"
import { checkIsToday } from "@/lib/daily-result"
import { Swiper, SwiperSlide } from "swiper/react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ResultadoCard from "@/components/resultados/resultado-card"
import ResultCardPlaceholder from "@/components/resultados/result-card-placeholder"

import "swiper/swiper-bundle.css"

type Props = {
  data: IDailyResult[]
}

const ResultadosListing = ({ data }: Props) => {
  const swiperRef = useRef<SwiperType | null>(null)

  const handleSwiper = (direction: "left" | "right") => {
    if (swiperRef.current) {
      if (direction === "left") {
        swiperRef.current.slidePrev()
      } else {
        swiperRef.current.slideNext()
      }
    }
  }

  const BUTTON_STYLE =
    "border border-zinc-300 bg-white size-8 p-2 text-zinc-500 rounded-full cursor-pointer hover:bg-zinc-100 transition-all duration-200 ease-in-out"
  const INITIAL_SLIDE = data.length - 1

  return (
    <section className="w-full  flex flex-col gap-6">
      <section className="w-full flex items-center justify-between lg:px-0 px-5">
        <h1 className="font-bold text-xl">Histórico de resultados</h1>
        <div className="flex items-center bg-zinc-200 rounded-full p-1 gap-4">
          <ChevronLeft
            className={BUTTON_STYLE}
            onClick={() => handleSwiper("left")}
          />
          <ChevronRight
            className={BUTTON_STYLE}
            onClick={() => handleSwiper("right")}
          />
        </div>
      </section>

      <Swiper
        modules={[Mousewheel]}
        className="w-full h-full"
        breakpoints={breakpoints}
        initialSlide={INITIAL_SLIDE}
        mousewheel={{ enabled: true, forceToAxis: true }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {data.map((dailyRes, dailyResIndex) => {
          const { isToday, placeholdersCount } = checkIsToday(dailyRes)
          const totalResults = dailyRes.results.length

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
                  <h4>{formatDate(dailyRes.date.toString())}</h4>
                </header>

                <div className="h-full flex flex-col gap-2">
                  {dailyRes.results.map((res, resIndex) => (
                    <ResultadoCard key={resIndex} result={res} />
                  ))}
                  {Array.from({ length: placeholdersCount }).map((_, i) => (
                    <ResultCardPlaceholder
                      key={i}
                      index={i}
                      totalResults={totalResults}
                    />
                  ))}
                </div>
              </ul>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}
export default ResultadosListing
