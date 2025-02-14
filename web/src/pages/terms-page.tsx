import Container from "@/components/common/container"
import PageTitle from "@/components/page-title"
import TermsContent from "@/components/terms/terms-content"
import { GENERAL_TERMS } from "@/constants/terms"

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
  )
}
