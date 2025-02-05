import Container from "../components/common/container"
import ComoJogarTopSection from "@/components/como-jogar/como-jogar-top-section"
import ComoJogarVideoContainer from "@/components/como-jogar/como-jogar-video-container"
// import ComoJogarInstructionsSwiper from "@/components/como-jogar/como-jogar-instructions-swiper"

import "swiper/swiper-bundle.css"
import "./como-jogar.css"

const ComoJogarPage = () => {
  return (
    <main className="py-6 lg:py-12 ">
      <Container className="h-full flex-col gap-4">
        <ComoJogarTopSection />

        <section className="flex w-full py-8 gap-4">
          {/* <ComoJogarInstructionsSwiper /> */}
          <ComoJogarVideoContainer />
        </section>
      </Container>
    </main>
  )
}

export default ComoJogarPage
