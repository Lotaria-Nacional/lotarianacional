import { ICONS, IMAGES } from "../constants/assets"
import Container from "../components/common/container"

const SobreNosPage = () => {
  return (
    <>
      <main className="min-h-screen">
        <section className="relative flex items-center justify-center w-full h-auto py-8 lg:h-[280px]">
          <img
            src={IMAGES.trevoBg}
            alt="background-vermelho"
            className="absolute h-full w-full inset-0 object-cover"
          />
          <Container className="flex flex-col items-start text-white gap-4 z-10">
            <h1 className="text-[24px] lg:text-[34px] font-bold">Quem somos</h1>
            <p className="text-[20px]">
              A Lotaria Nacional é a entidade oficial encarregada de gerir e
              organizar os jogos de lotaria em Angola, oferecendo aos seus
              participantes a oportunidade de transformar os seus sonhos em
              realidade. Com uma longa tradição no mercado, A Lotaria Nacional
              promove um ambiente de jogo responsável e seguro, sempre com o
              compromisso de apoiar causas sociais e o desenvolvimento de várias
              comunidades em Angola.
            </p>
          </Container>
        </section>

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 text-black py-12 gap-4">
            {/* MISSÃO */}
            <div className="shadow-[0px_0px_6px_2px_#d9d9d9] rounded-xl items-center w-full bg-white flex p-8">
              <div className="flex w-full flex-col md:flex-row items-center lg:items-start gap-4">
                <img src={ICONS.target} className="size-10" alt="icone" />
                <div className="flex flex-col gap-2 md:items-start items-center">
                  <h1 className="capitalize font-bold text-[24px] lg:text-[28px]">
                    missão
                  </h1>
                  <p>
                    Oferecer os melhores produtos de lotaria no ambiente mais
                    seguro possível para todos.
                  </p>
                </div>
              </div>
            </div>

            {/* ÉTICA */}
            <div className="shadow-[0px_0px_6px_2px_#d9d9d9] rounded-xl lg:row-span-2 items-center lg:items-start w-full bg-white flex p-8">
              <div className="flex w-full flex-col md:flex-row items-center md:items-start gap-4">
                <img src={ICONS.target} className="size-10" alt="icone" />
                <div className="flex flex-col gap-2 items-center md:items-start ">
                  <h1 className="capitalize font-bold text-[24px] lg:text-[28px]">
                    ética
                  </h1>
                  <p>
                    Estamos comprometidos com princípios de transparência,
                    responsabilidade social e protecção dos participantes.
                    Valorizamos a confiança que os nossos jogadores depositam em
                    nós e trabalhamos com rigor para garantir que todas as
                    operações são realizadas de forma justa e segura.
                  </p>
                  <ul className="flex flex-col gap-4">
                    <li>
                      <span className="font-bold mr-1">
                        Responsabilidade Social:
                      </span>
                      Encorajamos o jogo responsável e disponibilizamos
                      ferramentas para ajudar os jogadores a controlar os seus
                      hábitos de jogo. Promovemos a conscientização sobre os
                      riscos do jogo excessivo e oferecemos suporte a quem
                      necessitar.
                    </li>

                    <li>
                      <p>
                        <span className="font-bold mr-1">
                          Proteção ao Jogador:
                        </span>
                        Respeitamos a privacidade e os dados pessoais dos nossos
                        jogadores, através de medidas rigorosas que protegem
                        todas as informações coletadas. Além disso, asseguramos
                        que apenas pessoas maiores de idade podem participar dos
                        nossos jogos.
                      </p>
                    </li>

                    <li>
                      <p>
                        <span className="font-bold mr-1">
                          Justiça e Integridade:
                        </span>
                        Comprometemo-nos a manter a imparcialidade em todos os
                        sorteios. As nossas máquinas e algoritmos são
                        regularmente auditados por entidades independentes para
                        garantir a justiça dos resultados.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* VISÃO */}
            <div className="shadow-[0px_0px_6px_2px_#d9d9d9] rounded-xl items-center w-full bg-white flex p-8">
              <div className="flex flex-col md:flex-row w-full items-center md:items-start gap-4">
                <img src={ICONS.valores} className="size-10" alt="icone" />
                <div className="flex flex-col gap-2 md:items-start items-center">
                  <h1 className="capitalize font-bold text-[24px] lg:text-[28px]">
                    visão
                  </h1>
                  <ul className="flex flex-col gap-4">
                    <li className="flex flex-col">
                      <h4 className="text-lg font-bold">Integridade</h4>
                      <p>
                        Honestidade e transparência em todas as nossas ações.
                      </p>
                    </li>
                    <li className="flex flex-col">
                      <h4 className="text-lg font-bold">Responsabilidade</h4>
                      <p>Se dizemos, fazemos. Garantimos, pagamos.</p>
                    </li>
                    <li className="flex flex-col">
                      <h4 className="text-lg font-bold">Acessibilidade</h4>
                      <p>
                        Não é caro, grande rede de vendedores. Fácil de jogar.
                      </p>
                    </li>
                    <li className="flex flex-col">
                      <h4 className="text-lg font-bold">Entretenimento</h4>
                      <p>Os nosso produtos sõo divertidos.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </>
  )
}

export default SobreNosPage
