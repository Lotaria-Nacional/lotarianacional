import { useEffect, useState } from "react"
import { ICONS } from "../constants/assets"
import Container from "../components/container"
import ESTATISTICAS from "../features/estatísticas/db/estatísticas.json"
import ChartPopUp from "../features/estatísticas/components/chart-pop-up"

const EstatisticasPage = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false)

  const handleOpenPopUp = () => setIsPopUpOpen(true)
  const handleClosePopUp = () => setIsPopUpOpen(false)

  useEffect(() => {
    if (isPopUpOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isPopUpOpen])

  return (
    <Container className="flex-col pt-6 pb-12">
      <div className="bg-white w-full items-center flex rounded-lg flex-col gap-4">
        <div className="w-full flex items-center justify-end">
          <img
            src={ICONS.verGrafico}
            alt="ícone de gráfico"
            onClick={handleOpenPopUp}
            className="object-contain w-44 h-16 cursor-pointer hover:scale-[1.1] transform-scale duration-300 ease-in-out"
          />
          <div className="transition-all ease-in-out duration-200">
            {isPopUpOpen && <ChartPopUp closePopUp={handleClosePopUp} />}
          </div>
        </div>
        <h1 className="text-2xl font-medium text-center">
          Tabela de frequência de números da Lotaria
        </h1>

        {/** NUMBERS GRID DATA */}
        <div className="grid grid-cols-4 sm:grid-cols-7 md:grid-cols-10 xl:grid-cols-[repeat(15,1fr)] gap-4 w-full">
          {ESTATISTICAS.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm justify-center w-[70px] h-[48px] p-2 rounded-lg bg-[#EAEAEA]"
            >
              <span
                className={`h-6 w-6 p-2 text-white flex font-bold items-center justify-center ${
                  item.sortedTimes > 60 ? "bg-yellow-500" : "bg-LT_RED-200/90"
                } rounded-full`}
              >
                {item.sortedNumber}
              </span>
              <span className="text-black">{item.sortedTimes}</span>
            </div>
          ))}
        </div>

        {/** BOTTOM TEXTS */}
        <div className="flex items-center mt-8 justify-between w-full xl:w-2/5">
          <div className="flex flex-col text-center lg:flex-row items-center gap-3">
            <div className="size-3 rounded-full bg-LT_RED-100" />
            <span>Todos os números sorteados</span>
          </div>

          <div className="flex flex-col text-center lg:flex-row items-center gap-3">
            <div className="size-3 rounded-full bg-yellow-500" />
            <span>Números mais sorteados</span>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default EstatisticasPage
