import FAQ from "./components/faq"
import LinkCard from "./components/link-card"
import HeroSlider from "./components/hero-slider"
import CountDownCard from "./components/count-down-card"
import GoogleMap from "@/features/map/components/google-map"
import { LINK_CARDS_NAVIGATION } from "@/app/router/navigation"
import NewsListing from "@/features/news/components/news-listing"
import Container from "@/shared/components/common/container/container"
import EmissionListing from "@/features/emission/components/emission-listing"
import MobileDailyResults from "@/shared/components/mobile/mobile-daily-results"
import PlayGroundTable from "../../features/odds-prize/components/calculator-table"
import { useScrollToChancesSection } from "@/shared/hooks/use-scroll-to-chances-section"
import DailyLotteryResultListing from "@/features/lottery-result/components/daily-lottery-result"

const HomePage = () => {
  const { chancesSectionRef } = useScrollToChancesSection()
  return (
    <>
      <main className="flex gap-8 lg:gap-20 flex-col">
        <section className="w-full flex justify-end relative lg:h-[calc(100vh-160px)] md:h-[40vh] h-[20vh]">
          <HeroSlider />
          <DailyLotteryResultListing />
        </section>
        <MobileDailyResults />
        <Container className=" grid grid-cols-1 text-neutral-700 items-start mb-8 lg:mb-0 md:grid-cols-3 gap-8">
          <LinkCard
            item={LINK_CARDS_NAVIGATION[0]}
            className="lg:h-[220px] lg:mt-[8px] mt-[10px] h-[170px]"
          />
          <CountDownCard />
          <LinkCard
            item={LINK_CARDS_NAVIGATION[2]}
            className="lg:h-[220px] h-[170px] mt-[12px] lg:mt-[10px]"
          />
        </Container>
        <section
          id="chances"
          ref={chancesSectionRef}
          className="bg-LT_GRAY-100/30 flex h-auto py-[50px] lg:py-[50px] items-center justify-center"
        >
          <Container className="flex-col gap-8 items-center justify-center lg:gap-[40px]">
            <header className="flex flex-col w-full gap-[16px] lg:gap-[24px] items-center justify-center min-h-[92px]">
              <h1 className="font-bold font-edo-sz leading-8! text-center text-[24px] lg:text-[34px] uppercase">
                CHANCES E PRÉMIOS
              </h1>
              <p className="text-center w-full">
                Use a tabela abaixo para simular os prémios com base no valor
                apostado e nas diferentes chances.
              </p>
            </header>
            <PlayGroundTable />
          </Container>
        </section>
        <Container className="flex-col gap-8">
          <h1 className="font-bold text-[24px] lg:text-[34px] uppercase">
            últimas emissões
          </h1>
          <EmissionListing />
        </Container>
        <Container className="flex-col gap-8">
          <h1 className="font-bold text-[24px] lg:text-[34px] uppercase">
            últimas notícias
          </h1>
          <NewsListing />
        </Container>
        <section className="py-10 bg-LT_GRAY-100/30">
          <FAQ />
        </section>
      </main>
      <GoogleMap />
    </>
  )
}

export default HomePage
