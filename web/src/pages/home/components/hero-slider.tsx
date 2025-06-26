//@ts-ignore
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/swiper-bundle.css";
import "./hero-slider.styles.css";

const HeroSlider = () => {
  const BANNERS = [
    "banner/banner-05.png",
    "banner/banner-02.webp",
    "banner/banner-04.webp",
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
