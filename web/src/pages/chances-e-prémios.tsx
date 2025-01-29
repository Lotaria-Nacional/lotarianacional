import PlayGroundTable from "./playground-table"
import Container from "@/components/common/container"

const ChancesEPremiosPage = () => {
  return (
    <main>
      <Container className="flex flex-col gap-[40px] min-h-screen py-[32px]">
        <div className="bg-LT_RED-100 w-full  rounded-[20px] h-auto md:h-[426px] grid grid-cols-1 lg:grid-cols-2 place-items-center px-4 lg:px-32 lg:py-0 py-10">
          {/** LEFT SIDE  */}
          <div className="flex flex-col text-center items-center w-full lg:w-[377px] lg:text-start lg:h-[234px] gap-[30px]">
            <h1 className="edoSZ w-full !text-[50px] lg:!text-[80px] text-white uppercase leading-[1]">
              Chances <br /> <span className="text-yellow-400">e prêmios</span>
            </h1>
            <p className="text-white">
              Use a tabela abaixo para simular os prémios com
              <br className="hidden lg:block" /> base no valor apostado e nas
              diferentes chances.
            </p>
          </div>
          {/**  RIGHT SIDE */}
          <div className="hidden lg:block relative w-[777px] h-full">
            <img
              src="/banner/premios_e_chances.webp"
              className="absolute w-full h-full object-contain inset-0"
            />
          </div>
        </div>
        <PlayGroundTable />
      </Container>
    </main>
  )
}

export default ChancesEPremiosPage
