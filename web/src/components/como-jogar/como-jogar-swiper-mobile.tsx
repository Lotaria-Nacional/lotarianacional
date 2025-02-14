import { useRef, useState } from "react"
import { Swiper as SwiperType } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import "swiper/swiper-bundle.css"

type Props = {
  data: {
    id: number
    image_mobile: string
    description: string
  }[]
}

const ComoJogarSwiperMobile = ({ data }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const swiperRef = useRef<SwiperType | null>(null)

  const handlePrev = () => swiperRef.current?.slidePrev()
  const handleNext = () => swiperRef.current?.slideNext()

  return (
    <div className="lg:hidden flex w-full h-full flex-col justify-between gap-4">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        className=" w-full relative [400px]"
      >
        {data.map((item) => (
          <SwiperSlide
            key={item.id}
            className="relative min-h-[350px] w-full flex flex-col items-center justify-end gap-2"
          >
            <div className="flex items-center gap-2 edoSZ !text-[32px]">
              <span className="size-[38px] text-yellow-400 flex items-center justify-center rounded-full bg-LT_RED-100">
                {item.id}
              </span>
              <span className="text-LT_RED-100"> Passo</span>
            </div>

            <div className="min-h-[95px] sm:h-[90px] w-full flex items-center justify-center">
              <span className="text-[14px] text-justify">
                {item.description}
              </span>
            </div>

            <img src={item.image_mobile} className="w-full  object-contain" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/**  SWIPER CONTROLS */}
      <div className="w-full  h-auto flex items-center justify-between">
        <button
          onClick={handlePrev}
          className="border  border-zinc-300 bg-white rounded-full flex items-center justify-center size-[36px] text-zinc-300"
        >
          <ChevronLeft />
        </button>
        <div className="flex gap-1 items-center self-center">
          {Array.from({ length: 7 }).map((_, i) => (
            <span
              key={i}
              className={`size-[10px] rounded-full ${
                i === currentSlide ? "bg-LT_RED-100" : "bg-zinc-200"
              }`}
            ></span>
          ))}
        </div>
        <button
          onClick={handleNext}
          className="border  border-zinc-300 bg-white rounded-full flex items-center justify-center size-[36px] text-zinc-300"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}

export default ComoJogarSwiperMobile
