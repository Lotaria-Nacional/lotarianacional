import { ICONS, IMAGES } from "../constants/assets";
import Container from "../components/common/container";
import { SlEye } from "react-icons/sl";

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
            <p className="text-[16px] text-justify lg:text-start md:text-[20px]">
              A Lotaria Nacional é a entidade oficial encarregada de gerir e
              organizar os jogos de lotaria em Angola. Com uma longa tradição no
              mercado, A Lotaria Nacional promove um ambiente de jogo
              responsável e seguro, sempre com o compromisso de apoiar causas
              sociais e o desenvolvimento de várias comunidades em Angola.
            </p>
          </Container>
        </section>

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 text-black py-12 gap-4">
            {/* MISSÃO */}
            <div className="shadow-[0px_0px_6px_2px_#d9d9d9] rounded-xl items-center w-full bg-white flex p-8">
              <div className="flex w-full flex-col md:flex-row items-center lg:items-start gap-4">
                <img src={ICONS.target} className="size-10" alt="icone" />
                <div className="flex text-justify lg:text-start flex-col gap-2 md:items-start items-center">
                  <h1 className="capitalize font-bold text-[24px] lg:text-[28px]">
                    missão
                  </h1>
                  <p>
                    A Mota Tavares & Jogos dedica-se a oferecer experiências de
                    jogo emocionantes e seguras, proporcionando diversão ao
                    público. O nosso compromisso é operar com ética e
                    responsabilidade, assegurando que os jogos sociais sejam uma
                    força positiva para a sociedade.
                  </p>
                </div>
              </div>
            </div>

            {/* VALORES */}
            <div className="shadow-[0px_0px_6px_2px_#d9d9d9] rounded-xl items-center w-full bg-white flex p-8">
              <div className="flex flex-col md:flex-row w-full items-center md:items-start gap-4">
                <img src={ICONS.valores} className="size-10" alt="icone" />
                <div className="flex flex-col gap-2 md:items-start items-center">
                  <h1 className="capitalize font-bold text-[24px] lg:text-[28px]">
                    valores
                  </h1>
                  <ul className="flex flex-col gap-4 list-disc">
                    <li className="list-item flex-col">
                      Diversidade e Inclusão
                    </li>
                    <li className="list-item flex-col">Responsabilidade</li>
                    <li className="list-item flex-col">
                      Transparência e Ética
                    </li>
                    <li className="list-item flex-col">
                      Colaboração e Trabalho em Equipa
                    </li>
                    <li className="list-item flex-col">
                      Resiliência e Adaptabilidade
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* VISÃO */}
            <div className="shadow-[0px_0px_6px_2px_#d9d9d9] rounded-xl min-h-[260px] lg:col-span-2 items-center lg:items-center w-full bg-white flex p-8">
              <div className="flex w-full flex-col md:flex-row items-center md:items-start gap-4">
                <SlEye size={50} className="self-start text-LT_RED-200" />
                <div className="flex text-justify lg:text-start flex-col gap-2 items-center md:items-start ">
                  <h1 className="capitalize font-bold text-[24px] lg:text-[28px]">
                    visão
                  </h1>
                  <p>
                    Ser a principal operadora de jogos sociais em Angola,
                    reconhecida pela inovação, transparência e impacto social
                    positivo, promovendo um ambiente de entretenimento
                    responsável, sustentável e comprometido com o
                    desenvolvimento da comunidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
};

export default SobreNosPage;
