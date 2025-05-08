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

export default function DownloadAllResultsCardStory({ dailyResult }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { handleDownload, isDownloading } = useDownloadResult({ ref });

  return (
    <div className="h-full flex flex-col gap-4 w-download-card-story shrink-0">
      <Button
        variant="yellow"
        disabled={isDownloading}
        onClick={handleDownload}
        className={`flex px-4 py-2 !text-black items-center mr-3 gap-2 cursor-pointer rounded-lg self-end ${
          isDownloading ? "opacity-70" : ""
        }`}
      >
        {isDownloading ? "Baixando..." : "Baixar"} <BsDownload />
      </Button>

      <div
        ref={ref}
        className="relative flex flex-col items-center justify-center w-full h-download-card-story bg-all-results-story"
      >
        <div className="absolute top-[161px] pr-5 flex flex-col gap-3">
          <header className=" flex flex-col items-center justify-center text-white">
            <span className="text-[11.5px] font-semibold">
              {formatToNumbers(dailyResult.date)}
            </span>
            <span className="text-[8.54px]">NÚMEROS SORTEADOS</span>
          </header>
        </div>

        <div className="absolute top-[189px] p-4 mx-auto flex flex-col gap-[3px]">
          {dailyResult.results.map((result, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-start"
            >
              <span className="text-[8px] text-white font-bold uppercase">
                {result.name}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-white">
                  {result.hour.replace("H", ":")}
                </span>
                <div className="flex items-center gap-[3px]">
                  {getResultNumbers(result).map((number, i) => (
                    <span
                      key={i}
                      className="size-[20px] bg-white rounded-full flex items-center justify-center text-center font-bold text-[10px] text-LT-RED-50"
                    >
                      {number}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
