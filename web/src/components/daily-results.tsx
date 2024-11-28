import Container from "../components/container"
import { DAYS_OF_WEEK } from "../constants/days-of-week"
import ResultadoCard from "../features/resultados/components/resultado-card"

import RESULTADOS from "../features/resultados/db/resultados.json"

const DailyResults = () => {
  const currentDay = new Date().getDay()
  const today = DAYS_OF_WEEK[currentDay]

  const DAILY_RESULTS = RESULTADOS.filter(
    (resultado) => resultado.dayOfWeek === today
  )

  return (
    <Container className="absolute hidden lg:flex h-full px-0 justify-end inset-0 w-full z-10">
      <div className="h-full w-[250px] flex flex-col justify-center gap-2 items-center">
        <header className="text-center text-yellow-500">
          <h1 className="text-LT_WHITE font-bold text-base uppercase">
            resultados diários
          </h1>
          <h2 className="text-lg">{DAILY_RESULTS[0].date}</h2>
        </header>

        {DAILY_RESULTS[0].result.map((result, index) => (
          <ResultadoCard result={result} key={index} />
        ))}
      </div>
    </Container>
  )
}

export default DailyResults
