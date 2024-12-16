import Container from "../container"

import { useEffect, useState } from "react"
import { formatDate } from "../../utils/date"
import { IDailyResult } from "../../interfaces"
import { getLastDailyResult } from "../../api/result.api"
import ResultadoCard from "../../features/resultados/components/resultado-card"
const MobileDailyResults = () => {
  const [results, setResults] = useState<IDailyResult>()

  useEffect(() => {
    const fetch = async () => {
      const data = await getLastDailyResult()
      setResults(data)
    }
    fetch()
  }, [])

  if (!results) return
  return (
    <Container className="flex-col gap-4 flex lg:hidden !pl-6 px-0 !w-full">
      <header className="flex pr-6 items-center justify-between text-sm font-bold w-full uppercase">
        <h1>resultados diários</h1>
        <span className="px-2 font-normal rounded-md py-1 bg-yellow-500">
          {formatDate(results.date.toString())}
        </span>
      </header>
      <div className="w-full flex items-center pb-3 overflow-scroll gap-4">
        {results.results.map((result, index) => (
          <ResultadoCard className="shrink-0" key={index} result={result} />
        ))}
      </div>
    </Container>
  )
}

export default MobileDailyResults
