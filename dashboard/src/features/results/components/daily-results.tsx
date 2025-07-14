import { isValidArray } from "@/lib/utils";
import EmptyState from "@/shared/components/common/empty-state";
import { useGetLastResults } from "../hooks/query/index";
import DailyDesultsSkeleton from "./skeletons/daily-results-skeleton";
import ResultCard from "@/features/results/components/result-card";
import { IMAGE } from "@/assets";

export default function DailyResults() {
  const { data, isLoading } = useGetLastResults();

  const PLACEHOLDERS = [
    IMAGE.fezada,
    IMAGE.aqueceu,
    IMAGE.kazola,
    IMAGE.eskebra,
  ];

  const TOTAL_RESULTS = 4;
  const dailyResultLength = !isLoading && data ? data.results.length : 0;
  const PLACEHOLDERS_TO_SHOW = TOTAL_RESULTS - dailyResultLength;

  return (
    <div className="w-full h-full lg:overflow-hidden py-4 lg:py-0 flex lg:grid grid-cols-1 justify-start items-center place-items-center gap-4 lg:gap-3">
      {isLoading ? (
        <DailyDesultsSkeleton />
      ) : data && isValidArray(data.results) ? (
        <div className="flex flex-col gap-4 w-full items-center h-full justify-start">
          <div className="w-full flex items-center justify-between lg:justify-end">
            <div className="flex lg:hidden lg:justify-normal w-full lg:w-fit justify-between items-center gap-1">
              <span className="font-semibold text-[12px]">
                Resultados diários
              </span>

              <span className="font-normal bg-LT-YELLOW px-3 py-1 rounded-md text-[12px]">
                {data.date
                  .toString()
                  .split("T")[0]
                  .split("-")
                  .reverse()
                  .join("-")}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-6 flex-1 w-full items-center">
            <div className="lg:flex hidden items-center gap-2 flex-col">
              <span className="font-semibold">Resultados diários</span>
              <span className="font-normal bg-LT-YELLOW px-3 py-1 rounded-md  text-[12px]">
                {data.date
                  .toString()
                  .split("T")[0]
                  .split("-")
                  .reverse()
                  .join("-")}
              </span>
            </div>
            <div className="flex lg:justify-start justify-start h-fit lg:h-full flex-row lg:flex-col items-center lg:overflow-x-hidden overflow-x-scroll gap-6 pb-3 w-full">
              {data.results.map((result) => (
                <ResultCard key={result.id} result={result} />
              ))}
              {Array.from({ length: PLACEHOLDERS_TO_SHOW }).map((_, index) => (
                <div
                  key={index}
                  className="relative shrink-0 md:w-card md:h-card w-mobile-card h-mobile-card rounded-card"
                >
                  <img
                    alt="Placeholder"
                    src={PLACEHOLDERS[index + dailyResultLength]}
                    className="absolute inset-0 object-cover w-full h-full rounded-card"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <EmptyState message="Não há resultados ainda." />
      )}
    </div>
  );
}
