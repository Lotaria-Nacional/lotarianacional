import { IMAGES } from "../constants/assets"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"

//@ts-ignore
import "swiper/css"
//@ts-ignore
import "swiper/css/autoplay"
//@ts-ignore
import "swiper/css/pagination"
import "./hero-slider.css"

const DesktopSwiper = () => {
  const renderSlide = (image: string, alt: string) => (
    <SwiperSlide className="relative">
      <img
        alt={alt}
        src={image}
        className="absolute inset-0 object-cover w-full h-full"
      />
    </SwiperSlide>
  )
  return (
    <Swiper
      pagination
      loop={true}
      autoplay={{ delay: 6000 }}
      className="h-full md:block hidden"
      modules={[Autoplay, Pagination]}
    >
      {renderSlide(IMAGES.banner3, "Banner default 1")}

      {renderSlide(IMAGES.banner1, "Banner default 2")}

      {renderSlide(IMAGES.banner2, "Banner default 3")}
    </Swiper>
  )
}

export default DesktopSwiper
