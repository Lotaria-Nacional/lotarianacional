import EmptyState from "@/shared/components/common/empty-state";
import { useAllDailyResults } from "../hooks/useAllDailyResults";
import Container from "@/shared/components/common/container/container";
import LotteryResultSkeleton from "../components/lottery-result-skeleton";
import DailyLotteryResultsListing from "../components/daily-lottery-results-listing";

const ResultadosPage = () => {
  const { isLoading, results } = useAllDailyResults();

  return (
    <Container className="py-6 lg:py-4 flex-col gap-7 px-0 lg:px-8">
      {isLoading ? (
        <LotteryResultSkeleton />
      ) : results.length === 0 ? (
        <EmptyState message="Não há resultados ainda." />
      ) : (
        <DailyLotteryResultsListing data={results} />
      )}
    </Container>
  );
};

export default ResultadosPage;
