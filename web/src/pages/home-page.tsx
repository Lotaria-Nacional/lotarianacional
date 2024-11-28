import { ICONS } from "../constants/assets"
import Emissoes from "../components/emissoes"
import LinkCard from "../components/link-card"
import Container from "../components/container"
import { LINK_CARDS } from "../constants/links"
import HeroSlider from "../components/hero-slider"
import DailyResults from "../components/daily-results"
import { PERGUNTAS_FREQUENTES } from "../constants/faq"
import NoticiaCard from "../features/noticias/components/noticia-card"
import MobileDailyResults from "../components/mobile/mobile-daily-results"

import NOTICIAS from "../features/noticias/db/noticias.json"

const HomePage = () => {
  const NOTICIAS_SLICED = NOTICIAS.slice(0, 3)

  return (
    <main className="flex flex-col">
      {/** HERO SECTION */}
      <section className="relative lg:h-[calc(100vh-165px)] h-[20vh]">
        <HeroSlider />
        <DailyResults />
      </section>
      {/** LINK CARDS SECTION */}

      {/** MOBILE DAILY SECTION */}
      <MobileDailyResults />

      <Container className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {LINK_CARDS.map((item) => (
          <LinkCard key={item.id} item={item} />
        ))}
      </Container>
      {/** FAQ SECTION */}
      <section className="py-12 bg-LT_GRAY-100/30">
        <Container className="lg:items-start lg:flex-row flex-col gap-12 justify-center h-full">
          <div className="flex-1 flex flex-col gap-4">
            <h1 className="font-bold text-4xl uppercase">
              PERGUNTAS FREQUENTES
            </h1>
            {PERGUNTAS_FREQUENTES.map((item) => (
              <details open={item.id === 1} key={item.id}>
                <summary className="cursor-pointer text-xl font-bold ">
                  {item.summary}
                </summary>
                <p className="pt-4">{item.text}</p>
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
            <h1 className="font-bold text-4xl text-wrap uppercase">
              REGULAMENTO OFICIAL INFORMAÇÕES LEGAIS
            </h1>

            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="flex flex-col gap-4">
                <h1 className="font-bold text-xl">Política de Privacidade</h1>
                <p>
                  A Lotaria Nacional respeita a privacidade dos seus
                  utilizadores e compromete-se a proteger todas as informações
                  pessoais recolhidas. Os dados pessoais serão utilizados apenas
                  para fins de prestação de serviços, conforme descrito na nossa
                  Política de Privacidade.
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      {/** FAQ SECTION */}
      <Container className="flex-col gap-8 py-12">
        <h1 className="font-bold text-3xl uppercase">últimos resultados</h1>

        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NOTICIAS_SLICED.map((data, index) => (
            <NoticiaCard key={index} noticia={data} />
          ))}
        </div>
      </Container>
      {/** EMISSÕES SECTION */}
      <Container className="flex-col gap-6 py-12">
        <h1 className="font-bold text-3xl uppercase">últimas emissões</h1>
        <Emissoes />
      </Container>
    </main>
  )
}

export default HomePage
