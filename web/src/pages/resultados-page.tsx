import { IDailyResult } from "../interfaces"
import { getDailyResults } from "../api/result.api"
import Container from "../components/container"
import { useEffect, useState } from "react"
import ResultadosListing from "../features/resultados/components/resultados-listing"
import FilterResultPerDate from "../components/filter-result-per-date"

const ResultadosPage = () => {
  const [results, setResults] = useState<IDailyResult[]>([])

  useEffect(() => {
    const fetch = async () => {
      const data = await getDailyResults()
      setResults(data)
    }
    fetch()
  }, [])

  if (results.length === 0) {
    return (
      <div className="flex items-center justify-center w-full h-[400px]">
        <span>Não há resultados ainda.</span>
      </div>
    )
  }

  return (
    <Container className="py-6 lg:py-12 flex-col gap-10 px-0 lg:px-8">
      <div className="flex px-6 lg:px-0 items-center justify-between w-full">
        <h1 className="font-bold text-base lg:text-xl">Resultados semanais!</h1>

        <FilterResultPerDate />
      </div>

      {/* <div className="flex flex-row w-full gap-2 items-start">
        {results.map((res) => (
          <div key={res.id} className="flex flex-col w-[200px]">
            <div>
              <h1>{res.formatedDate.split(",")[0]}</h1>
            </div>
            <ul className="gap-2 flex flex-col">
              {res.results.map((result) => (
                <li
                  key={result.id}
                  className="flex flex-col w-full p-2 bg-LT_RED-200"
                >
                  <div className="flex flex-col gap-1">
                    <span>{result.name}</span>
                    <span>{result.hour}</span>
                  </div>
                  <ul className="flex flex-row items-center gap-2 w-full">
                    <span>{result.number_1}</span>
                    <span>{result.number_2}</span>
                    <span>{result.number_3}</span>
                    <span>{result.number_4}</span>
                    <span>{result.number_5}</span>
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div> */}

      <div className="w-full  overflow-x-scroll lg:overflow-visible">
        <ResultadosListing resultsListing={results} />
      </div>
    </Container>
  )
}

export default ResultadosPage
