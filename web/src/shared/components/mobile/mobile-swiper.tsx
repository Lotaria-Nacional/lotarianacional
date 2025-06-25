import { IMAGES } from "@/app/constants/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "./hero-slider.css";
import "swiper/swiper-bundle.css";

const MobileSwiper = () => {
  const renderSlide = (image: string, alt: string) => (
    <SwiperSlide className="relative">
      <img
        alt={alt}
        src={image}
        className="absolute inset-0 object-cover w-full h-full"
      />
    </SwiperSlide>
  );

  return (
    <Swiper
      pagination
      loop={true}
      autoplay={{ delay: 6000 }}
      modules={[Autoplay, Pagination]}
      className="h-full md:hidden block"
    >
      {renderSlide(IMAGES.banner4, "Banner default 4")}
      {renderSlide(IMAGES.banner2, "Banner default 2")}
      {renderSlide(IMAGES.banner3, "Banner default 3")}
    </Swiper>
  );
};

export default MobileSwiper;
