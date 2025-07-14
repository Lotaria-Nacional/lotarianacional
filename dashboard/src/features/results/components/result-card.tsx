import { ICON } from "@/assets";
import { useEffect } from "react";
import { ResultEntity } from "../types";
import { twMerge } from "tailwind-merge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/components/ui/tooltip";
import EditResultCard from "./form/edit-result-card";

type Props = {
  className?: string;
  result: ResultEntity;
};

export default function ResultCard({ result, className }: Props) {
  let timeoutId: NodeJS.Timeout | null = null;

  const numbers = [
    result.number_1,
    result.number_2,
    result.number_3,
    result.number_4,
    result.number_5,
  ];

  useEffect(() => {
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);
  return (
    <div
      className={twMerge(
        "relative group flex card-background flex-col items-start justify-around p-2 rounded-card h-mobile-card w-mobile-card md:h-card md:w-card",
        className
      )}
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger
            className={`absolute -top-0 -right-2 ${
              result.videoURL ? "hidden" : "flex"
            } z-40`}
          >
            <img alt="warning" src={ICON.warning} />
          </TooltipTrigger>
          <TooltipContent>
            <p>
              A emissão deste sorteio ainda não foi inserida.
              <br /> Por favor, insira-a assim que estiver concluída.
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <header className="flex text-base flex-col w-full text-white">
        <span className="font-edoSz-normal !text-[20px] uppercase">
          {result.name}
        </span>
        <span>{result.hour}</span>
      </header>

      <div className="w-full flex items-center gap-[4px] md:gap-1">
        {numbers.map((number, index) => (
          <span
            key={index}
            className="size-[30px] md:size-[38px] flex text-lg font-bold text-LT-RED-200 items-center justify-center bg-white rounded-full"
          >
            {number}
          </span>
        ))}
      </div>

      <EditResultCard
        result_info={{
          id: result.id,
          videoURL: result.videoURL,
        }}
      />
    </div>
  );
}
