import {
  HOW_TO_PLAY_DESKTOP,
  HOW_TO_PLAY_MOBILE,
} from "@/constants/how-to-play"
import Container from "../components/common/container"
import ComoJogarRow from "@/components/como-jogar/como-jogar-row"
import ComoJogarTopSection from "@/components/como-jogar/como-jogar-top-section"
import ComoJogarSwiperMobile from "@/components/como-jogar/como-jogar-swiper-mobile"

import "./como-jogar.css"

const ComoJogarPage = () => {
  return (
    <main className="pt-4 lg:py-[40px] pb-[30px]">
      <Container className="h-full flex-col gap-1 lg:gap-10">
        <ComoJogarTopSection />

        <section className="lg:flex w-full gap-[40px] flex-col">
          {HOW_TO_PLAY_DESKTOP.map((data, index) => (
            <ComoJogarRow reverse={index % 2 === 0} key={data.id} data={data} />
          ))}
        </section>

        <ComoJogarSwiperMobile data={HOW_TO_PLAY_MOBILE} />
      </Container>
    </main>
  )
}

export default ComoJogarPage
