import Container from "../components/common/container";
import EmptyState from "../components/common/empty-state";
import ResultsSkeleton from "@/components/resultados/results-skeleton";
import { useAllDailyResults } from "@/hooks/api/query/useAllDailyResults";
import ResultadosListing from "../components/resultados/resultados-listing";

const ResultadosPage = () => {
  const { isLoading, results } = useAllDailyResults();

  return (
    <Container className="py-6 lg:py-4 flex-col gap-7 px-0 lg:px-8">
      {isLoading ? (
        <ResultsSkeleton />
      ) : results.length === 0 ? (
        <EmptyState message="Não há resultados ainda." />
      ) : (
        <ResultadosListing data={results} />
      )}
    </Container>
  );
};

export default ResultadosPage;
