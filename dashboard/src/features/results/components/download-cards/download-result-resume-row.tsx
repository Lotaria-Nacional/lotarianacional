import { cn } from "@/lib/utils";
import { ResultEntity } from "../../types";

type Props = {
  result: ResultEntity | null;
  className?: string;
};

export default function DownloadResultResumeRow({ result, className }: Props) {
  const default_number = "";
  return (
    <div
      className={cn(
        "relative w-[135px] flex items-center justify-cente gap-[2px] h-2 text-[12px] text-LT-RED-50 font-bold",
        className
      )}
    >
      <span className="absolute left-[12.5px] h-4 w-[17px] text-center flex items-center justify-center">
        {result?.number_1 ?? default_number}
      </span>
      <span className="absolute left-[37px] h-4 w-[17px] text-center flex items-center justify-center">
        {result?.number_2 ?? default_number}
      </span>
      <span className="absolute left-[60.5px] h-4 w-[17px] text-center flex items-center justify-center">
        {result?.number_3 ?? default_number}
      </span>
      <span className="absolute left-[84px] h-4 w-[17px] text-center flex items-center justify-center">
        {result?.number_4 ?? default_number}
      </span>
      <span className="absolute left-[108px] h-4 w-[17px] text-center flex items-center justify-center">
        {result?.number_5 ?? default_number}
      </span>
    </div>
  );
}
