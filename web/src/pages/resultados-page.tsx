import Container from "../components/container"
import RESULTADOS from "../features/resultados/db/resultados.json"
import ResultadosListing from "../features/resultados/components/resultados-listing"

const ResultadosPage = () => {
  return (
    <Container className="py-12 flex-col gap-10">
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-between w-full">
        <h1 className="font-bold text-xl">
          Resultados semanais, vê se a sorte está do teu lado!
        </h1>

        <input type="date" />
      </div>

      <ResultadosListing resultsListing={RESULTADOS} />
    </Container>
  )
}

export default ResultadosPage
