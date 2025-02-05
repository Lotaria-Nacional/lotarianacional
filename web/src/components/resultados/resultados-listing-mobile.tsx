import { formatDate } from "@/utils/date"
import ResultadoCard from "./resultado-card"
import { IDailyResult } from "@/interfaces"
import { checkIsToday } from "@/lib/daily-result"
import { Swiper, SwiperSlide } from "swiper/react"
import ResultCardPlaceholder from "./result-card-placeholder"

import "swiper/swiper-bundle.css"

type Props = {
  data: IDailyResult[]
}

const ResultadosListingMobile = ({ data }: Props) => {
  const INITIAL_SLIDE = data.length - 1
  return (
    <Swiper
      slidesPerView={1.8}
      spaceBetween={10}
      centeredSlides={true}
      initialSlide={INITIAL_SLIDE}
      className="w-full h-full block lg:hidden"
    >
      {data.map((dailyRes, dailyResIndex) => {
        const { isToday, placeholdersCount } = checkIsToday(dailyRes)
        const totalResults = dailyRes.results.length

        return (
          <SwiperSlide
            key={dailyResIndex}
            className="w-full flex h-full items-center lg:items-start flex-col cursor-grab"
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
  )
}

export default ResultadosListingMobile
