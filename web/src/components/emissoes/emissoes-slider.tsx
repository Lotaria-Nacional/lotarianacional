import { useState } from "react"
import { IEmission } from "@/interfaces"
import { Navigation } from "swiper/modules"
import { formatRawDate } from "@/utils/date"
import { FaPlayCircle } from "react-icons/fa"
import { Swiper, SwiperSlide } from "swiper/react"
import { generateVideoThumbnail } from "@/utils/youtube"

import "swiper/swiper-bundle.css"

type EmissionProps = {
  emissions: IEmission[]
}

const EmissoesSlider = ({ emissions }: EmissionProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [frameLoad, setFrameLoad] = useState(true)

  const breakpoints = {
    560: {
      slidesPerView: 3,
    },
    300: {
      slidesPerView: 2,
    },
  }

  return (
    <div className="w-full flex flex-col gap-2 h-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="h-[200px] lg:h-[500px] w-full flex rounded-xl items-center justify-center relative"
      >
        {frameLoad && (
          <div className="w-full h-full absolute inset-0 flex items-center justify-center">
            <span className="animate-spin border-LT_RED-100 size-8 border-4 border-t-transparent rounded-full" />
          </div>
        )}
        {emissions.map(
          (slide, index) =>
            index === activeIndex && (
              <SwiperSlide
                key={`main-${index}`}
                className="relative w-full rounded-xl"
              >
                <iframe
                  loading="lazy"
                  allowFullScreen
                  onLoad={() => setFrameLoad(false)}
                  src={slide.url + "?rel=0&autoplay=0&controls=0"}
                  className="absolute inset-0 object-cover w-full h-full rounded-xl"
                ></iframe>
              </SwiperSlide>
            )
        )}
      </Swiper>

      <Swiper
        navigation
        slidesPerView={3}
        spaceBetween={10}
        modules={[Navigation]}
        breakpoints={breakpoints}
        className="h-[100px] lg:h-[200px] w-full"
      >
        {emissions.map((slide, index) => (
          <SwiperSlide
            key={`thumb-${index}`}
            onClick={() => setActiveIndex(index)}
            className={`cursor-pointer relative flex items-center justify-center text-sm font-medium rounded-xl`}
          >
            {index === activeIndex ? (
              <div className="absolute inset-0 w-full h-full text-white bg-black/70 flex items-center justify-center rounded-xl">
                <span>Em reprodução</span>
              </div>
            ) : (
              <div className="absolute capitalize inset-0  w-full h-full text-white flex text-xs items-end p-2 justify-start">
                <div className="rounded-md px-1 md:px-2 bg-LT_RED-100 text-[10px] md:text-sm lg:text-base flex gap-1  items-center">
                  <span className="py-1">{slide.description}</span>
                  <span>-</span>
                  <span className="py-1">{formatRawDate(slide.createdAt)}</span>
                </div>
                <div className="absolute hidden lg:flex left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <FaPlayCircle
                    size={42}
                    className="hover:scale-[1.10] transition-all duration-300 ease"
                  />
                </div>
              </div>
            )}
            <img
              src={generateVideoThumbnail(slide.url) || ""}
              alt={`Thumbnail ${index}`}
              className="object-cover w-full h-full rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default EmissoesSlider
