import { forwardRef } from "react"
import { Swiper as SwiperType } from "swiper"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Container from "@/shared/components/common/container/container"

export default function LotteryResultSwiperControls() {
  return forwardRef<SwiperType | null>((_, swiperRef) => {
    const BUTTON_STYLE =
      "border border-zinc-300 bg-white size-8 p-2 text-zinc-500 rounded-full cursor-pointer hover:bg-zinc-100 transition-all duration-200 ease-in-out"

    const handleSwiper = (direction: "left" | "right") => {
      if (
        swiperRef &&
        typeof swiperRef === "object" &&
        "current" in swiperRef
      ) {
        if (direction === "left") {
          swiperRef.current?.slidePrev()
        } else {
          swiperRef.current?.slideNext()
        }
      }
    }

    return (
      <Container className="w-full flex items-center justify-between px-10">
        <h1 className="font-bold ">Histórico de resultados</h1>
        <div className="flex items-center bg-zinc-200 rounded-full p-1 gap-4">
          <ChevronLeft
            className={BUTTON_STYLE}
            onClick={() => handleSwiper("left")}
          />
          <ChevronRight
            className={BUTTON_STYLE}
            onClick={() => handleSwiper("right")}
          />
        </div>
      </Container>
    )
  })
}
