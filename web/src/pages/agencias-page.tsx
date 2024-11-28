import Container from "../components/container"
import { useSearchParams } from "react-router-dom"
import AgencyCard from "../features/agencias/components/agency-card"
import AgencyFilter from "../features/agencias/components/agency-filter"

import AGENCIAS from "../features/agencias/db/agencias.json"

const AgenciasPage = () => {
  const [filterValue, setFilterValue] = useSearchParams({ agencia: "" })

  const selectedLetter = filterValue.get("agencia") || ""

  const filteredAgencies =
    selectedLetter === ""
      ? AGENCIAS
      : AGENCIAS.filter(
          (agency) =>
            agency.agencyName.charAt(0).toLowerCase() === selectedLetter
        )

  return (
    <Container className="py-12 flex-col gap-4">
      <AgencyFilter
        setFilter={setFilterValue}
        selectedLetter={selectedLetter}
      />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 w-full">
        {filteredAgencies.map((agency, i) => (
          <AgencyCard key={i} agency={agency} />
        ))}
      </section>
    </Container>
  )
}

export default AgenciasPage
