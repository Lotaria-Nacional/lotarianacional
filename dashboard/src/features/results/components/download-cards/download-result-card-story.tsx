import { useRef } from "react";
import { ResultEntity } from "../../types";
import { BsDownload } from "react-icons/bs";
import Button from "@/components/ui/lottary-button";
import { formatToNumbers } from "@/utils/date-format";
import { getResultNumbers } from "../../utils/get-result-numbers";
import { useDownloadResult } from "../../hooks/useDownloadResult";

type Props = {
  result: ResultEntity;
};

export default function DownloadResultCardStory({ result }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { handleDownload, isDownloading } = useDownloadResult({ ref });

  return (
    <div className="h-full flex flex-col gap-4 w-download-card-story shrink-0">
      <Button
        variant="yellow"
        onClick={handleDownload}
        disabled={isDownloading}
        className={`flex px-4 py-2 !text-black items-center gap-2 mr-3 cursor-pointer rounded-lg self-end ${
          isDownloading ? "opacity-70" : ""
        }`}
      >
        {isDownloading ? "Baixando..." : "Baixar"} <BsDownload />
      </Button>

      <div
        ref={ref}
        className="relative flex flex-col items-center justify-center w-full h-download-card-story bg-result-story"
      >
        <h1 className="absolute top-[140px] font-edoSz">{result.name}</h1>

        <div className="absolute top-[228px] flex flex-col gap-3">
          <header className=" flex flex-col items-center justify-center text-white">
            <span className="text-[11.5px] font-semibold">
              {formatToNumbers(result.createdAt)}{" "}
              <span className="text-LT-YELLOW">
                {result.hour.replace("H", ":")}
              </span>
            </span>
            <span className="text-[8.54px]">NÚMEROS SORTEADOS</span>
          </header>

          <div className="w-full flex items-center gap-[3px]">
            {getResultNumbers(result).map((number, index) => (
              <span
                key={index}
                className="size-[30px] bg-white rounded-full flex items-center font-bold justify-center text-center text-LT-RED-50 text-lg"
              >
                {number}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
