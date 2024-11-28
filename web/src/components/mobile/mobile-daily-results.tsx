import Container from "../container"
import { DAYS_OF_WEEK } from "../../constants/days-of-week"
import ResultadoCard from "../../features/resultados/components/resultado-card"

import RESULTADOS from "../../features/resultados/db/resultados.json"

const MobileDailyResults = () => {
  const currentDay = new Date().getDay()
  const today = DAYS_OF_WEEK[currentDay]

  const DAILY_RESULTS = RESULTADOS.filter(
    (resultado) => resultado.dayOfWeek === today
  )

  return (
    <Container className="pt-10 flex-col gap-4 flex lg:hidden !pl-6 px-0 !w-full">
      <header className="flex pr-6 items-center justify-between text-sm font-bold w-full uppercase">
        <h1>resultados diários</h1>
        <span className="px-2 font-normal rounded-md py-1 bg-yellow-500">
          {DAILY_RESULTS[0].date}
        </span>
      </header>
      <div className="w-full flex items-center pb-3 overflow-scroll gap-4">
        {DAILY_RESULTS[0].result.map((result, index) => (
          <ResultadoCard className="shrink-0" key={index} result={result} />
        ))}
      </div>
    </Container>
  )
}

export default MobileDailyResults
