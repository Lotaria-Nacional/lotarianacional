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
  banner: IBanner[] | []
}

const MobileSwiper = ({ banner }: Props) => {
  const hasBanners = banner.length > 0
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
          alt="lotaria banner 1"
          src={hasBanners ? banner[0].image : IMAGES.banner1}
          className="absolute inset-0 object-cover h-full w-full"
        />
      </SwiperSlide>
      <SwiperSlide className="relative">
        <img
          alt="lotaria banner 2"
          src={hasBanners ? banner[1].image : IMAGES.banner2}
          className="absolute inset-0 object-cover w-full h-full"
        />
      </SwiperSlide>
      <SwiperSlide className="relative">
        <img
          alt="lotaria banner 3"
          src={hasBanners ? banner[2].image : IMAGES.banner3}
          className="absolute inset-0 object-cover w-full h-full"
        />
      </SwiperSlide>
    </Swiper>
  )
}

export default MobileSwiper
