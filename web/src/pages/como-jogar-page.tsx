import { useRef, useState } from "react"
import { IMAGES } from "../constants/assets"
import Container from "../components/container"
import { Swiper, SwiperSlide } from "swiper/react"
import { Swiper as SwiperType } from "swiper/types"
import { HOW_TO_PLAY } from "../constants/how-to-play"
import { HiChevronLeft, HiChevronRight, HiDownload } from "react-icons/hi"

//@ts-ignore
import "swiper/css"
//@ts-ignore

const ComoJogarPage = () => {
  const swiperRef = useRef<SwiperType | null>(null)
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <main className="py-12">
      <Container className="flex-col gap-4">
        {/** COMO JOGAR TEXT */}
        <section className="w-full flex border-b pb-6 items-center justify-between">
          <h1 className="font-bold text-2xl capitalize">Como jogar</h1>
          <button className="px-4 py-2 flex items-center gap-3 rounded-xl text-white bg-LT_RED-200">
            <HiDownload/>
            Baixar manual
            </button>
        </section>

        {/** SLIDER */}
        <section className="grid grid-cols-2 w-full h-[350px] gap-4">
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

          <div className="relative w-full h-full pointer-events-none">
            <img
              alt="video thumbnail"
              src={IMAGES.videoThumbnail}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
          </div>
        </section>
      </Container>
    </main>
  )
}

export default ComoJogarPage
