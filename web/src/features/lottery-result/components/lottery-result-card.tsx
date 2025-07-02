import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { FaPlayCircle } from "react-icons/fa";
import { useModal } from "@/app/context/modal-provider";
import { LotteryResultEntity } from "../@types/lottery-result.types";

export type Props = {
  result: LotteryResultEntity;
  className?: string;
};

export default function LotteryResultCard({ result, className }: Props) {
  const { openModal } = useModal();
  const [isOver, setIsOVer] = useState(false);

  const sortedNumbers = [
    result.number_1,
    result.number_2,
    result.number_3,
    result.number_4,
    result.number_5,
  ];

  const handleMouseOver = () => setIsOVer(true);
  const handleMouseLeave = () => setIsOVer(false);

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onClick={result.videoURL ? () => openModal(result.videoURL) : () => {}}
      className={twMerge(
        "relative lottery-result-card-image w-[180px] h-[115px] bg-center bg-cover bg-no-repeat flex flex-col gap-4 p-2 rounded-2xl text-LT_WHITE uppercase text-sm font-bold cursor-pointer",
        className
      )}
    >
      <header className="flex flex-col text-[15px] gap-2">
        <h1 className="font-edo-sz text-sm">{result.name}</h1>
        <span className="text-white font-normal">{result.hour}</span>
      </header>

      <div className="flex w-full gap-1 items-center">
        {sortedNumbers.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="size-[30px] bg-white flex items-center justify-center text-LT_RED-200 rounded-full text-base font-bold"
          >
            {item}
          </span>
        ))}
      </div>

      <div
        className={` ${
          isOver ? "flex" : "hidden"
        } absolute bg-LT_RED-200 rounded-2xl items-center justify-center z-20 inset-0 w-full h-full`}
      >
        <FaPlayCircle fill="#fff" size={38} />
      </div>
    </div>
  );
}
