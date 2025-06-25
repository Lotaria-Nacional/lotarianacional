import GameGuideRow from "../components/game-guide-row";
import Container from "@/shared/components/common/container/container";
import GameGuideTopSection from "../components/game-guide-top-section";
import GameGuideSwiperMobile from "../components/game-guide-swiper-mobile";
import { GAME_GUIDE_CONTENT } from "@/features/game-guide/constants/game-guide-content";

import "../game-guide-styles.css";

export default function GameGuidePage() {
  return (
    <main className="pt-4 lg:py-[40px] pb-[30px]">
      <Container className="h-full flex-col gap-1 lg:gap-10">
        <GameGuideTopSection />

        <section className="lg:flex w-full gap-[40px] flex-col">
          {GAME_GUIDE_CONTENT.map((data, index) => (
            <GameGuideRow reverse={index % 2 === 0} key={data.id} data={data} />
          ))}
        </section>

        <GameGuideSwiperMobile data={GAME_GUIDE_CONTENT} />
      </Container>
    </main>
  );
}
