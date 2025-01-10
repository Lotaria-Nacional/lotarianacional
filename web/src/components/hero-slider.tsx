//@ts-ignore
import "swiper/css"
//@ts-ignore
import "swiper/css/autoplay"
//@ts-ignore
import "swiper/css/pagination"
import "./hero-slider.css"
import MobileSwiper from "./mobile-swiper"
import DesktopSwiper from "./desktop-swiper"
import { useBanner } from "@/hooks/api/query/useBanner"

const HeroSlider = () => {
  const { banner, isLoading } = useBanner()

  if (isLoading)
    return (
      <div className="w-full h-[calc(100vh-160px)] bg-LT_RED-100 flex items-center justify-center">
        <span className="text-white">Carregando...</span>
      </div>
    )

  return (
    <>
      <DesktopSwiper banner={banner} />
      <MobileSwiper banner={banner} />
    </>
  )
}

export default HeroSlider
