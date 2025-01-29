import { useRef, useState } from "react"
import { Swiper as SwiperType } from "swiper"
import { buttonStyle } from "./como-jogar-style"
import { Swiper, SwiperSlide } from "swiper/react"
import { HOW_TO_PLAY } from "../../constants/how-to-play"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"

//@ts-ignore
import "swiper/css"

const ComoJogarInstructionsSwiper = () => {
  const swiperRef = useRef<SwiperType | null>(null)
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <div className="flex flex-col justify-between h-[450px] md:h-[450px] lg:h-full p-8 w-full border border-neutral-200 rounded-xl ">
      <Swiper
        spaceBetween={50}
        className="w-full"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
      >
        {HOW_TO_PLAY.map((item, index) => (
          <SwiperSlide
            key={index}
            className="h-full flex justify-center items-center px-3"
          >
            <div className="flex flex-col gap-8 w-full mx-auto items-center justify-center">
              <span className="flex items-center justify-center text-xl font-bold size-12 rounded-full bg-LT_RED-200 text-white">
                {item.id}
              </span>
              <p className="text-lg text-center lg:text-xl lg:text-start w-full">
                {item.text}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <hr className="w-full bg-[#D9D9D9] mt-5" />

      <div className="w-full flex items-center justify-between pt-6">
        <div className="flex items-center gap-2 ">
          {HOW_TO_PLAY.map((_, index) => (
            <span
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`size-3 cursor-pointer ${
                activeSlide === index ? "bg-LT_RED-200" : "bg-LT_RED-200/40"
              } rounded-full`}
            />
          ))}
        </div>

        <div className="flex items-center gap-4">
          <HiChevronLeft
            onClick={() => swiperRef.current?.slidePrev()}
            className={buttonStyle}
          />
          <HiChevronRight
            onClick={() => swiperRef.current?.slideNext()}
            className={buttonStyle}
          />
        </div>
      </div>
    </div>
  )
}

export default ComoJogarInstructionsSwiper
