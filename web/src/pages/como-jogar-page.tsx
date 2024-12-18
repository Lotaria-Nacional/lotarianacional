import { useEffect, useRef, useState } from "react"
import { IMAGES } from "../constants/assets"
import Container from "../components/common/container"
import { FaFileDownload } from "react-icons/fa"
import { Swiper, SwiperSlide } from "swiper/react"
import { Swiper as SwiperType } from "swiper/types"
import { HOW_TO_PLAY } from "../constants/how-to-play"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"
import { PiPlayCircleThin } from "react-icons/pi"
import UI from "../components/ui/index"

//@ts-ignore
import "swiper/css"

const ComoJogarPage = () => {
  const swiperRef = useRef<SwiperType | null>(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false)

  const handleOpenLightBox = () => setIsLightBoxOpen(true)
  const handleCloseLightBox = () => setIsLightBoxOpen(false)

  useEffect(() => {
    if (isLightBoxOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [isLightBoxOpen])

  return (
    <main className="py-6 lg:py-12 ">
      <Container className="h-full flex-col gap-4">
        {/** COMO JOGAR TEXT */}
        <section className="w-full flex border-b pb-6 items-center justify-between">
          <h1 className="font-bold text-[18px] lg:text-[34px] capitalize">
            Como jogar
          </h1>
          <a href="/public/pdf/doc.pdf" target="_blank" download={true}>
            <UI.Button btn="red">
              <FaFileDownload />
              Baixar manual
            </UI.Button>
          </a>
        </section>

        {/** SLIDER */}
        <section className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-[350px] gap-4">
          <div className="flex flex-col h-full p-8 w-full bg-white border border-neutral-200 rounded-xl ">
            <Swiper
              spaceBetween={50}
              className="w-full"
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
            >
              {HOW_TO_PLAY.map((item, index) => (
                <SwiperSlide
                  className="h-full flex justify-center items-center"
                  key={index}
                >
                  <div className="flex flex-col gap-8 w-5/6 mx-auto items-center justify-center">
                    <span className="flex items-center justify-center text-xl font-bold size-12 rounded-full bg-LT_RED-200 text-white">
                      {item.id}
                    </span>
                    <span className="text-xl w-full">{item.text}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <hr className="w-full bg-[#D9D9D9] mt-5" />

            <div className="w-full flex items-center justify-between pt-6">
              <div className="flex items-center gap-2 ">
                {HOW_TO_PLAY.map((_, index) => (
                  <span
                    onClick={() => setActiveSlide(index)}
                    className={`size-3 cursor-pointer ${
                      activeSlide === index
                        ? "bg-LT_RED-200"
                        : "bg-LT_RED-200/40"
                    } rounded-full`}
                  ></span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <HiChevronLeft
                  onClick={() => swiperRef.current?.slidePrev()}
                  className="rounded-full cursor-pointer border border-[#D6D6D6] size-7 flex items-center justify-center text-[#D6D6D6]"
                />
                <HiChevronRight
                  onClick={() => swiperRef.current?.slideNext()}
                  className="rounded-full cursor-pointer border border-[#D6D6D6] size-7 flex items-center justify-center text-[#D6D6D6]"
                />
              </div>
            </div>
          </div>

          <div className="relative w-full h-[200px] lg:h-full">
            <img
              alt="video thumbnail"
              src={IMAGES.videoThumbnail}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none rounded-[10px]"
            />
            <button
              onClick={handleOpenLightBox}
              className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-40"
            >
              <PiPlayCircleThin size={120} color="#ccc" />
            </button>
          </div>
        </section>
      </Container>
      {isLightBoxOpen && (
        <div
          className="fixed top-0 w-full h-full bg-black/70 z-[40000] flex items-center justify-center"
          onClick={handleCloseLightBox}
        >
          <iframe
            onClick={(e) => e.stopPropagation()}
            className="w-2/3 h-2/3"
            src="https://www.youtube.com/embed/4OGRJetsPts"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      )}
    </main>
  )
}

export default ComoJogarPage
