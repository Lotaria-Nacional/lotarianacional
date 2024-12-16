import { Autoplay, Pagination } from "swiper/modules"
import { IMAGES } from "../constants/assets"
import { Swiper, SwiperSlide } from "swiper/react"

//@ts-ignore
import "swiper/css"
//@ts-ignore
import "swiper/css/autoplay"
//@ts-ignore
import "swiper/css/pagination"
import "./hero-slider.css"

const HeroSlider = () => {
  return (
    <Swiper
      loop={true}
      className="h-full"
      autoplay={{ delay: 2000 }}
      modules={[Autoplay, Pagination]}
      pagination
    >
      <SwiperSlide className="relative ">
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
      <SwiperSlide className="relative">
        <img
          src={IMAGES.banner3}
          alt="lotaria banner 3"
          className="absolute inset-0 object-cover w-full h-full"
        />
      </SwiperSlide>
    </Swiper>
  )
}

export default HeroSlider
