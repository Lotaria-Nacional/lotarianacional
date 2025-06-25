import { IMAGES } from "../constants/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "./hero-slider.css";
import "swiper/swiper-bundle.css";

const DesktopSwiper = () => {
  const renderSlide = (image: string, alt: string) => (
    <SwiperSlide className="relative w-full">
      <img
        alt={alt}
        src={image}
        className="absolute inset-0 object-cover w-full h-full"
      />
    </SwiperSlide>
  );
  return (
    <Swiper
      loop={true}
      pagination={true}
      autoplay={{ delay: 10000 }}
      modules={[Autoplay, Pagination]}
      className="h-full md:block hidden"
    >
      {renderSlide(IMAGES.banner4, "Banner default 4")}
      {renderSlide(IMAGES.banner2, "Banner default 2")}
      {renderSlide(IMAGES.banner3, "Banner default 3")}
    </Swiper>
  );
};

export default DesktopSwiper;
