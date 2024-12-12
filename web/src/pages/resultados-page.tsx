import { IDailyResult } from "../interfaces"
import { getResults } from "../api/result.api"
import Container from "../components/container"
import { useEffect, useRef, useState } from "react"
import ResultadosListing from "../features/resultados/components/resultados-listing"

const ResultadosPage = () => {
  const [results, setResults] = useState<IDailyResult[]>([])
  const inputRef = useRef<HTMLInputElement | null>(null)
  const handleClickInput = () => {
    if (inputRef.current) {
      inputRef.current.showPicker()
    }
  }

  useEffect(() => {
    const fetch = async () => {
      const data = await getResults()
      setResults(data)
    }
    fetch()
  }, [])

  return (
    <Container className="py-6 lg:py-12 flex-col gap-10 px-0 lg:px-8">
      <div className="flex px-6 lg:px-0 items-center justify-between w-full">
        <h1 className="font-bold text-base lg:text-xl">Resultados semanais!</h1>
        <div className="relative border py-1 px-2 h-10 flex items-center justify-center rounded-lg gap-2">
          <label className="cursor-pointer">Filtrar por data</label>
          <input
            type="date"
            ref={inputRef}
            onClick={handleClickInput}
            className="absolute opacity-0 w-full h-full top-0 left-0 cursor-pointer"
          />
        </div>
      </div>

      <div className="w-full  overflow-x-scroll lg:overflow-visible">
        <ResultadosListing resultsListing={results} />
      </div>
    </Container>
  )
}

export default ResultadosPage
