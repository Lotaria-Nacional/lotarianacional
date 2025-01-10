import { IMAGES } from "../constants/assets"
import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

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

const MobileSwiper = ({ banner }: Props) => {
  return (
    <Swiper
      pagination
      loop={true}
      autoplay={{ delay: 6000 }}
      modules={[Autoplay, Pagination]}
      className="h-full lg:hidden block"
    >
      <SwiperSlide className="relative ">
        <img
          src={banner?.mob_banner_1 || IMAGES.banner1}
          alt="lotaria banner 1"
          className="absolute inset-0 object-cover h-full w-full"
        />
      </SwiperSlide>
      <SwiperSlide className="relative">
        <img
          src={banner?.mob_banner_2 || IMAGES.banner2}
          alt="lotaria banner 2"
          className="absolute inset-0 object-cover w-full h-full"
        />
      </SwiperSlide>
      <SwiperSlide className="relative">
        <img
          src={banner?.mob_banner_3 || IMAGES.banner3}
          alt="lotaria banner 3"
          className="absolute inset-0 object-cover w-full h-full"
        />
      </SwiperSlide>
    </Swiper>
  )
}

export default MobileSwiper
