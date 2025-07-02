import fezada from "/placeholders/fezada.svg";
import kazola from "/placeholders/kazola.svg";
import aqueceu from "/placeholders/aqueceu.svg";
import eskebra from "/placeholders/eskebra.svg";
import ResultadoCard from "./lottery-result-card";
import DailyResultSkeleton from "./skeleton/daily-lottery-result-skeleton";
import { useGetLastDailyLotteryResult } from "@/features/lottery-result/hooks/use-get-last-daily-lottery-result";

export default function DailyLotteryResultListing() {
  const { data: lastDailyResult, isLoading } = useGetLastDailyLotteryResult();
  const PLACEHOLDERS = [fezada, aqueceu, kazola, eskebra];

  if (!lastDailyResult || lastDailyResult.results.length === 0) return;

  const TOTAL_RESULTS = 4;
  const results_length = lastDailyResult.results.length;
  const PLACEHOLDERS_TO_SHOW = TOTAL_RESULTS - results_length;

  return (
    <div className="z-10 absolute hidden lg:flex px-0 justify-end py-4 top-1/2 -translate-y-1/2 daily-lottery-result-hero">
      {isLoading ? (
        <DailyResultSkeleton />
      ) : (
        <div className="h-full w-[250px] flex flex-col justify-center gap-6 items-center">
          <header className="text-center text-black flex-col flex gap-4 items-center justify-center">
            <h1 className="text-LT_WHITE font-bold text-base uppercase">
              resultados diários
            </h1>
            <h2 className="bg-yellow-400 px-2 rounded-md py-1 w-fit">
              {lastDailyResult.date
                .toString()
                .split("T")[0]
                .split("-")
                .reverse()
                .join("-")}
            </h2>
          </header>
          <div className="flex flex-col gap-2">
            {lastDailyResult.results.map((result, index) => (
              <ResultadoCard result={result} key={index} />
            ))}

            {Array.from({ length: PLACEHOLDERS_TO_SHOW }).map((_, index) => (
              <div
                key={index}
                className="relative w-[180px] h-[115px] rounded-[13px]"
              >
                <img
                  src={PLACEHOLDERS[index + results_length]}
                  className="absolute inset-0 w-full h-full object-cover rounded-[13px]"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
