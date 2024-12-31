import LeafletMap from "../components/map"
import { useAgencies } from "../hooks/api/query/useAgencies"
import { useSearchParams } from "react-router-dom"
import Container from "../components/common/container"
import EmptyState from "../components/common/empty-state"
import AgencyCard from "../components/agencia/agency-card"
import AgencyFilter from "../components/agencia/agency-filter"
import { filterAgenciesBySearchParams } from "../utils/agency"
import AgencySkeleton from "@/components/agencia/agency-skeleton"
import LeafletMapMobile from "../components/mobile/leaftlet-map-mobile"

const AgenciasPage = () => {
  const { agencies, isLoading } = useAgencies()
  const [searchParams, setSearchParams] = useSearchParams({ agencia: "" })
  const paramsValue = searchParams.get("agencia") || ""

  const filteredAgencies = filterAgenciesBySearchParams(paramsValue, agencies)

  return (
    <>
      <Container className="lg:py-12 hidden lg:flex flex-col gap-4 min-h-screen">
        <AgencyFilter
          setFilter={setSearchParams}
          selectedLetter={paramsValue}
        />

        {isLoading ? (
          <AgencySkeleton />
        ) : filteredAgencies.length > 0 ? (
          <section className="lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 w-full hidden">
            {filteredAgencies.map((agency, i) => (
              <AgencyCard key={i} agency={agency} />
            ))}
          </section>
        ) : (
          <EmptyState message="Não há nenhuma agência ainda." />
        )}
      </Container>

      <LeafletMap />
      <LeafletMapMobile />
    </>
  )
}

export default AgenciasPage
