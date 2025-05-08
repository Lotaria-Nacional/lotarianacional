import { useRef } from "react";
import { BsDownload } from "react-icons/bs";
import { DailyResultEntity } from "../../types";
import Button from "@/components/ui/lottary-button";
import { formatToNumbers } from "@/utils/date-format";
import { useDownloadResult } from "../../hooks/useDownloadResult";
import { getResultNumbers } from "../../utils/get-result-numbers";

type Props = {
  dailyResult: DailyResultEntity;
};

export default function DownloadAllResultsCard({ dailyResult }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { handleDownload, isDownloading } = useDownloadResult({ ref });

  return (
    <div className="h-full flex flex-col gap-4 w-download-card-feed shrink-0">
      <Button
        variant="yellow"
        disabled={isDownloading}
        onClick={handleDownload}
        className="flex px-4 py-2 !text-black items-center gap-2 cursor-pointer rounded-lg self-end"
      >
        {isDownloading ? "Baixando" : "Baixar"} <BsDownload />
      </Button>

      <div
        ref={ref}
        className="relative flex flex-col items-center justify-center w-full h-download-card-feed bg-all-results-feed"
      >
        <div className="absolute top-[145px] pr-5 flex flex-col gap-5">
          <header className=" flex flex-col items-center justify-center text-white">
            <span className="text-[11.5px] font-semibold">
              {formatToNumbers(dailyResult.date)}
            </span>
            <span className="text-[8.54px]">NÚMEROS SORTEADOS</span>
          </header>
        </div>

        <section className="absolute top-[180px] h-[50px] p-2 w-1/2 mx-auto flex flex-col gap-[6px]">
          {dailyResult.results.map((result, resultIndex) => (
            <div key={resultIndex} className="flex flex-col gap-[1px] w-full">
              <span className="text-[8px] text-white font-bold uppercase">
                {result.name}
              </span>

              <div className="flex items-center gap-[6px] w-full">
                <span className="text-[10px] text-white">
                  {result.hour.replace("H", ":")}
                </span>
                <div className="flex items-center gap-[4px] justify-center text-white">
                  {getResultNumbers(result).map((number) => (
                    <div
                      key={number}
                      className="flex items-center justify-center rounded-full text-center bg-white size-[18px] text-[11px] text-LT-RED-50 font-bold"
                    >
                      {number}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
