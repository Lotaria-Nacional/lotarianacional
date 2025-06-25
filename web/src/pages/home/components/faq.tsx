import { SiWhatsapp } from "react-icons/si";
import { ICONS } from "@/app/constants/assets";
import QuestionsDropdown from "./questions-dropdown";
import Button from "../../../shared/components/ui/button/button";
import Container from "../../../shared/components/common/container/container";

export default function FAQ() {
  const supportNumber = "+244942185667";

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
        <a target="_blank" href={`https://wa.me/${supportNumber}`}>
          <Button variant="red">
            Alguma pergunta?
            <SiWhatsapp />
          </Button>
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
  );
}
