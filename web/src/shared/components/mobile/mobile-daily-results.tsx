import { formatDate } from "../../utils/date";
import fezada from "/placeholders/fezada.svg";
import kazola from "/placeholders/kazola.svg";
import eskebra from "/placeholders/eskebra.svg";
import aqueceu from "/placeholders/aqueceu.svg";
import Container from "../common/container/container";
import LotteryResultCard from "@/features/lottery-result/components/lottery-result-card";
import LotteryResultSkeletonMobile from "@/features/lottery-result/components/skeleton/lottery-result-skeleton-mobile";
import { useGetLastDailyLotteryResult } from "@/features/lottery-result/hooks/use-get-last-daily-lottery-result";

const MobileDailyResults = () => {
  const { data: lastDailyResult, isLoading } = useGetLastDailyLotteryResult();
  const PLACE_HOLDERS_IMGS = [fezada, aqueceu, kazola, eskebra];

  if (isLoading) {
    return <LotteryResultSkeletonMobile />;
  }

  if (!lastDailyResult) return;

  const TOTAL_RESULTS = 4;
  const resultsLength = lastDailyResult.results.length;
  const RESULTS_PLACEHOLDER = TOTAL_RESULTS - lastDailyResult.results.length;

  return (
    <Container className="flex-col gap-4 flex lg:hidden pl-6! px-0 w-full!">
      <header className="flex pr-6 items-center justify-between text-sm font-bold w-full uppercase">
        <h1 className="!text-[14px]">resultados diários</h1>
        <span className="px-2 font-normal rounded-md py-1 bg-yellow-500">
          {formatDate(lastDailyResult.date.toString())}
        </span>
      </header>

      <div className="w-full flex items-center pb-3 overflow-scroll gap-4">
        {lastDailyResult.results.map((result, index) => (
          <LotteryResultCard className="shrink-0" key={index} result={result} />
        ))}

        {Array.from({ length: RESULTS_PLACEHOLDER }).map((_, index) => (
          <div
            key={index}
            className="relative w-[180px] shrink-0 h-[115px] rounded-[13px]"
          >
            <img
              src={PLACE_HOLDERS_IMGS[index + resultsLength]}
              className="absolute inset-0 w-full h-full object-cover rounded-[13px]"
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default MobileDailyResults;
