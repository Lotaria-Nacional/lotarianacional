import { Navigation } from "swiper/modules"
import { IMAGES } from "../constants/assets"
import { Swiper, SwiperSlide } from "swiper/react"

//@ts-ignore
import "swiper/css"
//@ts-ignore
import "swiper/css/navigation"

import "./emissoes-slider-nav.css"

const Emissoes = () => {
  return (
    <>
      <Swiper
        navigation
        modules={[Navigation]}
        className="w-full h-[250px] lg:h-[511px]"
      >
        {Array.from({ length: 3 }).map((_, index) => (
          <SwiperSlide key={index} className="relative w-full">
            <iframe
              src="https://www.youtube.com/embed/4OGRJetsPts"
              className="abolute inset-0 object-cover w-full h-full rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hidden flex-row w-full gap-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="relative h-[187px] w-full flex items-center justify-center"
          >
            <img
              src={IMAGES.videoThumbnail}
              alt="Lotaria video thumbnail"
              className="abolute inset-0 object-cover w-full h-full rounded-xl"
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default Emissoes
