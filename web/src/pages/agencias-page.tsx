import { IAgency } from "../interfaces"
import { useEffect, useState } from "react"
import Container from "../components/container"
import { getAgencies } from "../api/agencias.api"
import { useSearchParams } from "react-router-dom"
import AgencyCard from "../features/agencias/components/agency-card"
import AgencyFilter from "../features/agencias/components/agency-filter"
import GoogleMap from "../components/google-map"

const AgenciasPage = () => {
  const [filterValue, setFilterValue] = useSearchParams({ agencia: "" })
  const [agencies, setAgencies] = useState<IAgency[]>([])

  const selectedLetter = filterValue.get("agencia") || ""

  const filteredAgencies =
    selectedLetter === ""
      ? agencies
      : agencies.filter(
          (agency) => agency.name.charAt(0).toLowerCase() === selectedLetter
        )

  useEffect(() => {
    const fetch = async () => {
      const data = await getAgencies()
      setAgencies(data)
    }
    fetch()
  }, [])

  return (
    <>
      <Container className="lg:py-12 flex-col gap-4 min-h-screen">
        <AgencyFilter
          setFilter={setFilterValue}
          selectedLetter={selectedLetter}
        />

        {filteredAgencies.length > 0 ? (
          <section className="lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 w-full hidden">
            {filteredAgencies.map((agency, i) => (
              <AgencyCard key={i} agency={agency} />
            ))}
          </section>
        ) : (
          <span>Não há nada ainda.</span>
        )}
      </Container>
      <GoogleMap />
    </>
  )
}

export default AgenciasPage
