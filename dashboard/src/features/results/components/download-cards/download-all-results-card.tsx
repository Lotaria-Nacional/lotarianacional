import { useRef } from "react";
import { BsDownload } from "react-icons/bs";
import { DailyResultEntity } from "../../types";
import Button from "@/shared/components/ui/lottary-button";
import { useDownloadResult } from "../../hooks/useDownloadResult";
import DownloadResultResumeRow from "./download-result-resume-row";
import bgResultsResume from "/public/results/background-2/RESUMO.png";

type Props = {
  dailyResult: DailyResultEntity;
};

export default function DownloadAllResultsCard({ dailyResult }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { handleDownload, isDownloading } = useDownloadResult({ ref });

  const date = dailyResult.date
    .toString()
    .split("T")[0]
    .split("-")
    .reverse()
    .join("/");

  const fezada = dailyResult.results[0];
  const aqueceu = dailyResult.results[1];
  const kazola = dailyResult.results[2];
  const eskebra = dailyResult.results[3];

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
        className="relative flex flex-col items-center justify-center w-full h-download-card-feed"
      >
        <img src={bgResultsResume} alt="resumo dos resultados" />

        <div className="absolute text-[14px] top-[138px] left-[128px] arial-medium h-4 w-[200px] text-white">
          {date}
        </div>

        <DownloadResultResumeRow
          result={fezada}
          className="absolute top-[204px] left-[110px]"
        />
        <DownloadResultResumeRow
          result={aqueceu}
          className="absolute top-[243px] left-[110px]"
        />
        <DownloadResultResumeRow
          result={kazola}
          className="absolute top-[282px] left-[110px]"
        />
        <DownloadResultResumeRow
          result={eskebra}
          className="absolute top-[320px] left-[109.8px]"
        />
      </div>
    </div>
  );
}
