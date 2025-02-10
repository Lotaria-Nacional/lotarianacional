import { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Swiper as SwiperType } from "swiper"
import { ChevronLeft, ChevronRight } from "lucide-react"

import "swiper/swiper-bundle.css"

type Props = {
  data: {
    id: number
    image: string
    image_mobile: string
    title: string
    description: string
  }[]
}

const ComoJogarSwiperMobile = ({ data }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const swiperRef = useRef<SwiperType | null>(null)

  const handlePrev = () => swiperRef.current?.slidePrev()
  const handleNext = () => swiperRef.current?.slideNext()

  return (
    <div className="lg:hidden flex w-full h-[460px] flex-col gap-6">
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        className=" w-full h-[450px]"
      >
        {data.map((data, index) => (
          <SwiperSlide
            key={index}
            className="h-full flex flex-col items-center justify-between"
          >
            <h1 className="flex items-center edoSZ !text-[28px] gap-4 text-LT_RED-100">
              <span className="size-[30px] rounded-full bg-LT_RED-100 text-yellow-300 flex items-center justify-center">
                {data.id}
              </span>
              <span>Passo</span>
            </h1>

            <p className="text-[14px] md:text-lg my-4 text-center">
              {data.description}
            </p>
            <img
              src={data.image_mobile}
              className="h-[200px] w-full object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/**  SWIPER CONTROLS */}

      <div className="w-full flex items-center justify-between">
        <button
          onClick={handlePrev}
          className=" border border-zinc-300 bg-white rounded-full flex items-center justify-center size-[32px] text-zinc-300"
        >
          <ChevronLeft />
        </button>

        <div className="flex gap-1 items-center">
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
          className=" border border-zinc-300 bg-white rounded-full flex items-center justify-center size-[32px] text-zinc-300"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}

export default ComoJogarSwiperMobile
