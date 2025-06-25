//@ts-ignore
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "./hero-slider.css";
import "swiper/swiper-bundle.css";

const HeroSlider = () => {
  const BANNERS = [
    "banner/banner-1.webp",
    "banner/banner-2.webp",
    "banner/banner-5.png",
  ];

  return (
    <Swiper
      loop={true}
      autoplay={{ delay: 10000 }}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination]}
      className="h-full absolute w-full"
    >
      {BANNERS.map((img, index) => (
        <SwiperSlide key={index} className="relative w-full h-full">
          <img
            src={img}
            alt={"banner-" + index}
            className="absolute inset-0 object-cover w-full h-full"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
