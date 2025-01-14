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
import { IBanner } from "@/interfaces"

type Props = {
  banner: IBanner | null
}

const DesktopSwiper = ({ banner }: Props) => {
  return (
    <Swiper
      pagination
      loop={true}
      autoplay={{ delay: 6000 }}
      className="h-full lg:block hidden"
      modules={[Autoplay, Pagination]}
    >
      <SwiperSlide className="relative ">
        <img
          src={banner?.desk_banner_1 || IMAGES.banner1}
          alt="lotaria banner 1"
          className="absolute inset-0 object-cover h-full w-full"
        />
      </SwiperSlide>
      <SwiperSlide className="relative">
        <img
          src={banner?.desk_banner_2 || IMAGES.banner2}
          alt="lotaria banner 2"
          className="absolute inset-0 object-cover w-full h-full"
        />
      </SwiperSlide>
      <SwiperSlide className="relative">
        <img
          src={banner?.desk_banner_3 || IMAGES.banner3}
          alt="lotaria banner 3"
          className="absolute inset-0 object-cover w-full h-full"
        />
      </SwiperSlide>
    </Swiper>
  )
}

export default DesktopSwiper
