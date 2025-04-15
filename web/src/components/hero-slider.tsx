//@ts-ignore
import "swiper/css";
//@ts-ignore
import "swiper/css/autoplay";
//@ts-ignore
import "swiper/css/pagination";
import "./hero-slider.css";
import MobileSwiper from "./mobile-swiper";
import DesktopSwiper from "./desktop-swiper";
// import { useBanner } from "@/hooks/api/query/useBanner"

const HeroSlider = () => {
  return (
    <>
      <DesktopSwiper />
      <MobileSwiper />
    </>
  );
};

export default HeroSlider;
