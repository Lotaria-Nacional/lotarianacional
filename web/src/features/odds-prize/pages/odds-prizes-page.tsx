import CalculatorTable from "../components/calculator-table";
import PageTitle from "@/shared/components/common/page-title";
import Container from "@/shared/components/common/container/container";

export default function OddsPrizesPage() {
  return (
    <main>
      <Container className="flex flex-col gap-[40px] py-[40px]">
        <header className="flex flex-col gap-4">
          <PageTitle className="font-edo-sz font-light text-[28px] lg:text-[38px]">
            CHANCES E PRÉMIOS
          </PageTitle>

          <p className="text-center text-[16px] w-full">
            Use a tabela abaixo para simular os prémios com base no valor
            apostado e nas diferentes chances.
          </p>
        </header>
        <CalculatorTable />
      </Container>
      <p className="text-center font-edo-sz text-4xl">Paulo Luguenda</p>
    </main>
  );
}
