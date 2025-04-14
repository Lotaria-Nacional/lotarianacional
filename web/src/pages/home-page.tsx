import FAQ from "@/components/faq";
import LeafletMap from "../components/map";
import LinkCard from "../components/link-card";
import { LINK_CARDS } from "../constants/links";
import PlayGroundTable from "./playground-table";
import HeroSlider from "../components/hero-slider";
import Container from "../components/common/container";
import Emissoes from "../components/emissoes/emissoes";
import CountDownCard from "../components/count-down-card";
import DailyResults from "../components/resultados/daily-results";
import ListingNoticias from "../components/noticias/listing-noticias";
import MobileDailyResults from "../components/mobile/mobile-daily-results";
import { useScrollToChancesSection } from "@/hooks/useScrollToChancesSection";

const HomePage = () => {
  const { chancesSectionRef } = useScrollToChancesSection();

  return (
    <>
      <main className="flex gap-8 lg:gap-20 flex-col">
        {/* <ExplanationPopUp /> */}

        {/** HERO SECTION */}
        <section className="relative md:h-[calc(100vh-465px)] lg:h-[calc(100vh-165px)] h-[24vh]">
          <HeroSlider />
          <DailyResults />
        </section>

        {/** MOBILE DAILY SECTION */}
        <MobileDailyResults />

        {/** LINK CARDS SECTION */}
        <Container className=" grid grid-cols-1 text-neutral-700 items-start mb-8 lg:mb-0 md:grid-cols-3 gap-8">
          <LinkCard
            item={LINK_CARDS[0]}
            className="lg:h-[220px] lg:mt-[8px] mt-[10px] h-[170px]"
          />

          <CountDownCard />

          <LinkCard
            item={LINK_CARDS[2]}
            className="lg:h-[220px] h-[170px] mt-[12px] lg:mt-[10px]"
          />
        </Container>

        {/** PLAYGROUND TABLE SECTION */}

        <section
          id="chances"
          ref={chancesSectionRef}
          className="bg-LT_GRAY-100/30 flex h-auto py-[50px] lg:py-[50px] items-center justify-center"
        >
          <Container className="flex-col gap-8 items-center justify-center lg:gap-[40px]">
            <header className="flex flex-col w-full gap-[16px] lg:gap-[24px] items-center justify-center min-h-[92px]">
              <h1 className="font-bold edoSZ-38 !leading-8 text-center text-[24px] lg:text-[34px] uppercase">
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

        {/** EMISSÕES SECTION */}
        <Container className="flex-col gap-8">
          <h1 className="font-bold text-[24px] lg:text-[34px] uppercase">
            últimas emissões
          </h1>

          <Emissoes />
        </Container>

        {/** ÚLTIMAS NOTICIAS SECTION */}
        <Container className="flex-col gap-8">
          <h1 className="font-bold text-[24px] lg:text-[34px] uppercase">
            últimas notícias
          </h1>

          <ListingNoticias />
        </Container>

        {/** FAQ SECTION */}
        <section className="py-10 bg-LT_GRAY-100/30">
          <FAQ />
        </section>
      </main>
      <LeafletMap />
    </>
  );
};

export default HomePage;
