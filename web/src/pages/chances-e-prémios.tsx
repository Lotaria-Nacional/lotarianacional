import PlayGroundTable from "./playground-table"
import Container from "@/components/common/container"

const ChancesEPremiosPage = () => {
  return (
    <main>
      <Container className="flex flex-col gap-[40px] py-[50px]">
        <header className="flex flex-col gap-4">
          <h1 className="text-center edoSZ-38 font-bold uppercase !text-[38px]">
            CHANCES E PRÉMIOS
          </h1>

          <p className="text-center w-full">
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
