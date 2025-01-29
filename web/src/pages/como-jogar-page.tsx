import Container from "../components/common/container"
import ComoJogarTopSection from "@/components/como-jogar/como-jogar-top-section"
import ComoJogarVideoContainer from "@/components/como-jogar/como-jogar-video-container"
import ComoJogarInstructionsSwiper from "@/components/como-jogar/como-jogar-instructions-swiper"

//@ts-ignore
import "swiper/css"
import "./como-jogar.css"

const ComoJogarPage = () => {
  return (
    <main className="py-6 lg:py-12 ">
      <Container className="h-full flex-col gap-4">
        <ComoJogarTopSection />

        <section className="grid grid-cols-1 lg:grid-cols-2 w-full py-8 min-h-[350px] gap-4">
          <ComoJogarInstructionsSwiper />
          <ComoJogarVideoContainer />
        </section>
        
      </Container>
    </main>
  )
}

export default ComoJogarPage
