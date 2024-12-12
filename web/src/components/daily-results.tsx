import { useEffect, useState } from "react"

import { formatDate } from "../utils/date"
import { IDailyResult } from "../interfaces"
import { getResults } from "../api/result.api"
import Container from "../components/container"
import ResultadoCard from "../features/resultados/components/resultado-card"

const DailyResults = () => {
  const [results, setResults] = useState<IDailyResult>()

  useEffect(() => {
    const fetch = async () => {
      const data = await getResults()
      setResults(data[data.length - 1])
    }
    fetch()
  }, [])

  if (!results) return <span>Não há nada para mostrar.</span>

  return (
    <Container className="absolute hidden lg:flex h-full px-0 justify-end inset-0 w-full z-10">
      <div className="h-full w-[250px] flex flex-col justify-center gap-2 items-center">
        <header className="text-center text-yellow-500">
          <h1 className="text-LT_WHITE font-bold text-base uppercase">
            resultados diários
          </h1>
          <h2 className="text-lg">{formatDate(results.date.toString())}</h2>
        </header>

        {results.results.map((result, index) => (
          <ResultadoCard result={result} key={index} />
        ))}
      </div>
    </Container>
  )
}

export default DailyResults
