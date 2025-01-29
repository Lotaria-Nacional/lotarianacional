import { useRef } from "react"
import { useSearchParams } from "react-router-dom"
import Container from "../components/common/container"
import EmptyState from "../components/common/empty-state"
import { useDailyResults } from "../hooks/api/query/useDailyResults"
import FilterResultPerDate from "../components/filter-result-per-date"
import ResultsSkeleton from "@/components/resultados/results-skeleton"
import ResultadosListing from "../components/resultados/resultados-listing"

const ResultadosPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const filteredDate = searchParams.get("date") || ""
  const { isLoading, results } = useDailyResults(filteredDate)

  const resultsRef = useRef<HTMLDivElement | null>(null)

  return (
    <Container className="py-6 lg:py-4 flex-col gap-7 px-0 lg:px-8">
      <div className="flex px-6 lg:px-0 items-center justify-between w-full">
        <h1 className="font-bold text-base lg:text-xl">Resultados semanais!</h1>
        <FilterResultPerDate date={searchParams} setDate={setSearchParams} />
      </div>

      {isLoading ? (
        <ResultsSkeleton />
      ) : results.length === 0 ? (
        <EmptyState message="Não há resultados ainda." />
      ) : (
        <div
          ref={resultsRef}
          className="w-full overflow-x-scroll lg:overflow-visible"
        >
          <ResultadosListing resultsListing={results} />
        </div>
      )}
    </Container>
  )
}

export default ResultadosPage
