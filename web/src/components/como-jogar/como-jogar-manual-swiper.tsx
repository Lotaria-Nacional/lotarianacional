import { IoClose } from "react-icons/io5"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"

//@ts-ignore
import "swiper/css"
//@ts-ignore
import "swiper/css/navigation"
//@ts-ignore
import "swiper/css/pagination"
import { IMAGES } from "@/constants/assets"

type Props = {
  handleClose: () => void
}

const INSTRUCTION_IMAGES = [
  IMAGES.comojogar1,
  IMAGES.comojogar2,
  IMAGES.comojogar3,
  IMAGES.comojogar4,
  IMAGES.comojogar5,
  IMAGES.comojogar6,
  IMAGES.comojogar7,
  IMAGES.comojogar8,
  IMAGES.comojogar9,
  IMAGES.comojogar10,
]

const ComoJogarManualSwiper = ({ handleClose }: Props) => {
  const stopPropagation = (e: React.MouseEvent<Element>) => {
    e.stopPropagation()
  }
  return (
    <div
      onClick={handleClose}
      className="bg-black/60 flex items-center justify-center fixed flex-col gap-2 inset-0 w-full h-full z-[4000]"
    >
      <div
        onClick={stopPropagation}
        className="flex flex-col gap-2 w-full lg:w-[50%]"
      >
        <div className="w-full px-4 h-[450px] md:h-[700px]">
          <Swiper
            navigation
            pagination
            className="h-full w-full"
            modules={[Navigation, Pagination]}
          >
            <button
              onClick={handleClose}
              className="bg-white self-end rounded-full p-3"
            >
              <IoClose />
            </button>
            {INSTRUCTION_IMAGES.map((img, index) => (
              <SwiperSlide key={index} className="relative w-full h-full">
                <img
                  src={img}
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default ComoJogarManualSwiper
