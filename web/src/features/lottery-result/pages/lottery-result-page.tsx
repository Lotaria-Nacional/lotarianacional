import EmptyState from "@/shared/components/common/empty-state";
import Container from "@/shared/components/common/container/container";
import LotteryResultSkeleton from "../components/skeleton/lottery-result-skeleton";
import DailyLotteryResultsListing from "../components/daily-lottery-results-listing";
import { useFetchManyDailyLotteryResults } from "../hooks/use-fetch-many-daily-lottery-results";
import { renderContent } from "@/shared/utils/render-content";

export default function DailyLotteryResultPage() {
  const { data: results, isLoading } = useFetchManyDailyLotteryResults();

  // const renderContent = () => {
  //   if (isLoading) return <LotteryResultSkeleton />;
  //   if (!results || results.length === 0)
  //     return <EmptyState message="Não há resultados ainda." />;
  //   return <DailyLotteryResultsListing data={results} />;
  // };

  const content = renderContent({
    data: results,
    emptyState: <EmptyState message="Não há resultados ainda." />,
    isLoading,
    listing: <DailyLotteryResultsListing data={results!} />,
    skeleton: <LotteryResultSkeleton />,
  });

  return (
    <Container className="py-6 lg:py-4 flex-col gap-7 px-0 lg:px-8">
      {content}
    </Container>
  );
}
