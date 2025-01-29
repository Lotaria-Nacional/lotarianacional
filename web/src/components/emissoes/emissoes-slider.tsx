import { Swiper as SwiperType } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Thumbs } from "swiper/modules"

//@ts-ignore
import "swiper/css"
//@ts-ignore
import "swiper/css/navigation"
//@ts-ignore
import "swiper/css/thumbs"

import { useState } from "react"
import { IEmission } from "@/interfaces"

type EmissionProps = {
  emissions: IEmission[]
}

const EmissoesSlider = ({ emissions }: EmissionProps) => {
  const [activeIndex, setActiveIndex] = useState(0) // Índice do vídeo principal
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)

  return (
    <div className="w-full flex flex-col gap-2 h-full">
      {/* Slider principal (vídeo ativo com navegação) */}
      <Swiper
        navigation
        slidesPerView={1}
        spaceBetween={20}
        modules={[Navigation, Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="h-[200px] lg:h-[500px] w-full flex rounded-xl items-center justify-center relative"
      >
        {emissions.map(
          (slide, index) =>
            index === activeIndex && ( // Apenas renderiza o vídeo ativo
              <SwiperSlide
                key={`main-${index}`}
                className="relative w-full rounded-xl"
              >
                <iframe
                  loading="lazy"
                  allowFullScreen
                  src={slide.url + "?rel=0&autoplay=0&controls=0"}
                  className="absolute inset-0 object-cover w-full h-full rounded-xl"
                ></iframe>
              </SwiperSlide>
            )
        )}
      </Swiper>

      {/* Slider com thumbnails (navegação e clique para mudar o vídeo principal) */}
      <Swiper
        navigation
        slidesPerView={3}
        spaceBetween={10}
        modules={[Navigation, Thumbs]}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        className="h-[100px] lg:h-[200px] w-full"
      >
        {emissions.map((slide, index) => (
          <SwiperSlide
            key={`thumb-${index}`}
            onClick={() => setActiveIndex(index)} // Atualiza o índice ativo
            className={`cursor-pointer relative flex items-center justify-center text-sm font-medium rounded-xl`}
          >
            {index === activeIndex && (
              <div className="absolute inset-0 w-full h-full text-white bg-black/70 flex items-center justify-center rounded-xl">
                <span>Em reprodução</span>
              </div>
            )}
            <img
              src={generateVideoThumbnail(slide.url)}
              alt={`Thumbnail ${index}`}
              className="object-cover w-full h-full rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

// Ajuste na função para extrair corretamente o videoID e gerar a thumbnail
const generateVideoThumbnail = (url: string): string => {
  // Extrair o videoId de diferentes tipos de URL do YouTube
  const urlParams = new URLSearchParams(new URL(url).search)
  const videoID = urlParams.get("v") || url.split("/")[4] // Suporta URLs do tipo "https://www.youtube.com/watch?v=VIDEO_ID"
  const videoThumbnail = `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`
  return videoThumbnail
}

export default EmissoesSlider
