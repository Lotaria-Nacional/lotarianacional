import Container from "@/shared/components/common/container/container";
import RegulationTitle from "./components/regulamentation/regulation-title";
import RegulationContent from "./components/regulamentation/regulation-content";
import { ARTICLES } from "./constants/regulations";

export default function RegulamentationPage() {
  return (
    <main className="py-[50px] h-full">
      <Container className="flex-col gap-4">
        <h2 className="font-bold text-justify">
          REGULAMENTO QUE CRIA O JOGO LOTO 5/90 E ESTABELECE AS RESPECTIVAS
          NORMAS DE ORGANIZAÇÃO E FUNCIONAMENTO
        </h2>
        <div className="flex-col gap-4 mb-[30px]">
          <RegulationTitle>
            <h2>CAPÍTULO I</h2>
            <span className="font-bold">Disposições Gerais</span>
          </RegulationTitle>
        </div>

        {ARTICLES.map((article, index) => (
          <RegulationContent key={index} content={article} />
        ))}
      </Container>
    </main>
  );
}
