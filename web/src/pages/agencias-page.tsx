import LeafletMap from "../components/map"
import Pagination from "@/components/pagination"
import { useSearchParams } from "react-router-dom"
import { usePagination } from "@/hooks/usePagination"
import Container from "../components/common/container"
import EmptyState from "../components/common/empty-state"
import AgencyCard from "../components/agencia/agency-card"
import { useAgencies } from "../hooks/api/query/useAgencies"
import AgencyFilter from "../components/agencia/agency-filter"
import { filterAgenciesBySearchParams } from "../utils/agency"
import AgencySkeleton from "@/components/agencia/agency-skeleton"
import LeafletMapMobile from "../components/mobile/leaftlet-map-mobile"

const AgenciasPage = () => {
  const { currentPage, setSearch } = usePagination()
  const [searchParams, setSearchParams] = useSearchParams({ agencia: "" })
  const paramsValue = searchParams.get("agencia") || ""

  const { agencies, isLoading } = useAgencies(currentPage)

  const filteredAgencies = filterAgenciesBySearchParams(
    paramsValue,
    agencies?.data
  )

  return (
    <>
      <Container className="lg:py-12 hidden lg:flex flex-col gap-4">
        <AgencyFilter
          setFilter={setSearchParams}
          selectedLetter={paramsValue}
        />

        {isLoading ? (
          <AgencySkeleton />
        ) : filteredAgencies && filteredAgencies.length > 0 ? (
          <>
            <section className="lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 w-full hidden">
              {filteredAgencies.map((agency, i) => (
                <AgencyCard key={i} agency={agency} />
              ))}
            </section>
            <Pagination
              setSearch={setSearch}
              currentPage={currentPage}
              pages={agencies?.totalPages}
            />
          </>
        ) : (
          <EmptyState message="Não há nenhuma agência ainda." />
        )}
      </Container>

      <LeafletMap />
      <LeafletMapMobile agencies={agencies?.data} />
    </>
  )
}

export default AgenciasPage
