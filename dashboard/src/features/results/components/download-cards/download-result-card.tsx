import { useRef } from "react";
import { cn } from "@/lib/utils";
import { ResultEntity } from "../../types";
import { BsDownload } from "react-icons/bs";
import Button from "@/components/ui/lottary-button";
import { formatDateToNumber } from "@/utils/date-format";
import fezada from "/public/results/background-2/FEZADA.png";
import kazola from "/public/results/background-2/kazola.png";
import aqueceu from "/public/results/background-2/AQUECEU.png";
import eskebra from "/public/results/background-2/eskebra.png";
import { useDownloadResult } from "../../hooks/useDownloadResult";

type Props = {
  result?: ResultEntity;
  name: string;
};

const DownloadResultCard = ({ result, name }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { handleDownload, isDownloading } = useDownloadResult({ ref });

  const resultName: Record<string, string> = {
    fezada,
    aqueceu,
    kazola,
    eskebra,
  };

  const hourBasedOnResultName =
    name === "fezada"
      ? "10:00"
      : name === "aqueceu"
      ? "13:00"
      : name === "kazola"
      ? "16:00"
      : "19:00";

  return (
    <div className="h-full flex flex-col gap-4 w-download-card-feed shrink-0">
      <Button
        variant="yellow"
        disabled={isDownloading}
        onClick={handleDownload}
        className={`flex px-4 py-2 !text-black items-center gap-2 cursor-pointer rounded-lg self-end ${
          isDownloading ? "opacity-70" : ""
        }`}
      >
        {isDownloading ? "Baixando..." : "Baixar"} <BsDownload />
      </Button>

      <div
        ref={ref}
        className={cn(
          "relative flex flex-col items-center justify-center w-full h-download-card-feed"
        )}
      >
        <img src={resultName[name]} alt={name} />

        <header className="absolute bottom-[162px] text-[12px] font-bold space-x-1">
          <span className="text-white arial-medium">
            {formatDateToNumber(result?.createdAt ?? new Date())}
          </span>
          <span className="text-LT-YELLOW arial-medium">
            {hourBasedOnResultName ?? "Esperando..."}
          </span>
        </header>

        <div className="absolute left-[78.5px] bottom-[110.3px] w-[185px] flex items-center justify-between h-3 text-[22px] arial-medium text-LT-RED-50">
          <span className="p-1 relative -left-[1px] w-full flex items-center justify-center text-center">
            {result?.number_1 ?? ""}
          </span>
          <span className="p-1 w-full relative  flex items-center justify-center text-center">
            {result?.number_2 ?? ""}
          </span>
          <span className="p-1 w-full relative -left-[1px] flex items-center justify-center text-center">
            {result?.number_3 ?? ""}
          </span>
          <span className="p-1 w-full relative -left-[1px] flex items-center justify-center text-center">
            {result?.number_4 ?? ""}
          </span>
          <span className="p-1 w-full flex relative -left-[2px] items-center justify-center text-center">
            {result?.number_5 ?? ""}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DownloadResultCard;
