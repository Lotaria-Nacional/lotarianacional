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

  const desktopBanners = banner.filter((ban) => ban.device === "desktop")
  const mobileBanners = banner.filter((ban) => ban.device === "mobile")

  if (isLoading)
    return (
      <div className="w-full h-[180px] lg:h-[calc(100vh-160px)] bg-LT_RED-100 flex items-center justify-center">
        <span className="text-white">Carregando...</span>
      </div>
    )

  return (
    <>
      <DesktopSwiper banner={desktopBanners} />
      <MobileSwiper banner={mobileBanners} />
    </>
  )
}

export default HeroSlider
