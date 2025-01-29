import Container from "./common/container"
import { ICONS } from "../constants/assets"

import { SiWhatsapp } from "react-icons/si"
import QuestionsDropdown from "./questions-dropdown"

const FAQ = () => {
  const supportNumber = "+244923190007"
  return (
    <Container className="lg:items-start lg:flex-row flex-col gap-8 lg:gap-12 justify-center">
      {/** REGULAMENTO SECTION */}
      <div className="flex-1 flex flex-col gap-4">
        <h1 className="font-bold text-[24px] lg:text-[34px] uppercase">
          PERGUNTAS FREQUENTES
        </h1>
        <p>
          A nossa equipe de especialistas está pronta para responder a todas as
          suas perguntas sobre apostas e outras soluções para aumentar suas
          chances de ganhar!
        </p>
        <a
          target="_blank"
          href={`https://wa.me/${supportNumber}`}
          className="rounded-full w-fit px-10 py-2 bg-LT_RED-100 text-center text-white flex items-center justify-center gap-3"
        >
          Alguma pergunta?
          <SiWhatsapp />
        </a>
      </div>

      {/** LINHA VERTICAL DESKTOP */}
      <img
        src={ICONS.verticalLine}
        alt="ícone de uma linha vermelha vertical"
        className="h-auto w-3 object-contain hidden lg:block"
      />
      {/** LINHA VERTICAL TABLET & MOBILE */}
      <div className="w-full mt-8 h-[1px] bg-LT_RED-100 block lg:hidden" />
      <div className="flex-1 flex flex-col gap-4 w-full">
        <QuestionsDropdown />
      </div>
    </Container>
  )
}

export default FAQ
