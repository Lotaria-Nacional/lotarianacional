import GameGuideRow from "../components/game-guide-row"
import { PageBody } from "@/shared/components/layout/page-body"
import { PageHeader } from "@/shared/components/layout/page-header"
import GameGuideTopSection from "../components/game-guide-top-section"
import GameGuideSwiperMobile from "../components/game-guide-swiper-mobile"
import { GAME_GUIDE_CONTENT } from "@/features/game-guide/constants/game-guide-content"

import "../game-guide-styles.css"

export default function GameGuidePage() {
  return (
    <PageBody.Container>
      <PageHeader.Container>
        <PageHeader.Title>Como jogar o Loto5/90</PageHeader.Title>
        <PageHeader.Actions>
          <GameGuideTopSection />
        </PageHeader.Actions>
      </PageHeader.Container>

      <section className="lg:flex w-full gap-[40px] flex-col">
        {GAME_GUIDE_CONTENT.map((data, index) => (
          <GameGuideRow reverse={index % 2 === 0} key={data.id} data={data} />
        ))}
      </section>

      <GameGuideSwiperMobile data={GAME_GUIDE_CONTENT} />
    </PageBody.Container>
  )
}
