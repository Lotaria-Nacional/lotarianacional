import { Autoplay } from "swiper/modules"
import { IMAGES } from "../constants/assets"
import { Swiper, SwiperSlide } from "swiper/react"

//@ts-ignore
import "swiper/css"
//@ts-ignore
import "swiper/css/autoplay"

const HeroSlider = () => {
  return (
    <Swiper className="h-full" modules={[Autoplay]} autoplay={{ delay: 2000 }}>
      <SwiperSlide className="relative">
        <img
          src={IMAGES.banner1}
          alt="lotaria banner 1"
          className="absolute inset-0 object-cover h-full w-full"
        />
      </SwiperSlide>
      <SwiperSlide className="relative">
        <img
          src={IMAGES.banner2}
          alt="lotaria banner 2"
          className="absolute inset-0 object-cover w-full h-full"
        />
      </SwiperSlide>
    </Swiper>
  )
}

export default HeroSlider
