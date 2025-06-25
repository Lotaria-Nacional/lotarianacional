import TermsContent from "./components/terms/terms-content";
import { GENERAL_TERMS } from "@/pages/legal/constants/terms";
import PageTitle from "@/shared/components/common/page-title";
import Container from "@/shared/components/common/container/container";

export default function TermsPage() {
  return (
    <main className="py-[50px] flex flex-col gap-[30px]">
      <Container className="flex-col items-start gap-10 relative">
        <div className="w-full flex items-center justify-center">
          <PageTitle>TERMOS E CONDIÇÕES GERAIS</PageTitle>
        </div>
        <section className="flex flex-col gap-4 w-full">
          {GENERAL_TERMS.map((term, index) => (
            <TermsContent term_id={term.id} terms={term} key={index} />
          ))}
        </section>
      </Container>
    </main>
  );
}
