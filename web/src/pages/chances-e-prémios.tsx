import PageTitle from "@/components/page-title"
import PlayGroundTable from "./playground-table"
import Container from "@/components/common/container"

const ChancesEPremiosPage = () => {
  return (
    <main>
      <Container className="flex flex-col gap-[40px] py-[40px]">
        <header className="flex flex-col gap-4">
          <PageTitle className="edoSZ !text-[28px] lg:!text-[38px]">
            CHANCES E PRÉMIOS
          </PageTitle>

          <p className="text-center text-[16px] w-full">
            Use a tabela abaixo para simular os prémios com base no valor
            apostado e nas diferentes chances.
          </p>
        </header>
        <PlayGroundTable />
      </Container>
    </main>
  )
}

export default ChancesEPremiosPage
