import LeafletMap from "../components/map"
import { ICONS } from "../constants/assets"
import LinkCard from "../components/link-card"
import { LINK_CARDS } from "../constants/links"
import HeroSlider from "../components/hero-slider"
import Container from "../components/common/container"
import Emissoes from "../components/emissoes/emissoes"
import { PERGUNTAS_FREQUENTES } from "../constants/faq"
import CountDownCard from "../components/count-down-card"
import DailyResults from "../components/resultados/daily-results"
import ListingNoticias from "../components/noticias/listing-noticias"
import MobileDailyResults from "../components/mobile/mobile-daily-results"
import PlayGroundTable from "./playground-table"

const HomePage = () => {
  return (
    <>
      <main className="flex gap-8 lg:gap-20 flex-col">
        {/* <ExplanationPopUp /> */}
        {/** HERO SECTION */}
        <section className="relative lg:h-[calc(100vh-165px)] h-[25vh]">
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
        <section className="bg-LT_GRAY-100/30 flex h-auto py-[50px] lg:py-[100px] items-center justify-center">
          <Container className="flex-col gap-8 lg:gap-[40px]">
            <header className="flex flex-col w-full gap-[16px] lg:gap-2 items-center justify-center h-[92px]">
              <h1 className="font-bold text-[24px] lg:text-[34px] uppercase">
                CHANCES E PRÉMIOS
              </h1>
              <p className="text-[#818181] text-[14px] lg:text-[16px] text-center lg:text-left">
                Use a tabela abaixo para simular os prémios com base no valor
                apostado e nas diferentes chances
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
          <Container className="lg:items-start lg:flex-row flex-col gap-12 justify-center h-full">
            <div className="flex-1 flex flex-col gap-4">
              <h1 className="font-bold text-[24px] lg:text-[34px] uppercase">
                PERGUNTAS FREQUENTES
              </h1>
              {PERGUNTAS_FREQUENTES.map((item) => (
                <details open={item.id === 1} key={item.id}>
                  <summary className="cursor-pointer text-[20px] font-bold ">
                    {item.summary}
                  </summary>
                  <p className="pt-4 text-base">{item.text}</p>
                </details>
              ))}
            </div>

            {/** LINHA VERTICAL DESKTOP */}
            <img
              src={ICONS.verticalLine}
              className="h-full w-3 object-contain hidden lg:block"
              alt="ícone de uma linha vermelha vertical"
            />

            {/** LINHA VERTICAL TABLET & MOBILE */}
            <div className="w-full h-[1px] bg-LT_RED-100 block lg:hidden" />

            {/** REGULAMENTO SECTION */}
            <div className="flex-1 flex flex-col gap-4">
              <h1 className="font-bold text-[24px] lg:text-[34px] text-wrap uppercase">
                REGULAMENTO OFICIAL INFORMAÇÕES LEGAIS
              </h1>

              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <h1 className="font-bold text-[20px]">
                    Política de Privacidade
                  </h1>
                  <p className="text-base">
                    A Lotaria Nacional respeita a privacidade dos seus
                    utilizadores e compromete-se a proteger todas as informações
                    pessoais recolhidas. Os dados pessoais serão utilizados
                    apenas para fins de prestação de serviços, conforme descrito
                    na nossa Política de Privacidade.
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <LeafletMap />
    </>
  )
}

export default HomePage
