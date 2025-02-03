import { twMerge } from "tailwind-merge"
import { IResult } from "../../interfaces"
import { useModal } from "@/context/modal-provider"

export type ResultCardProps = {
  result: IResult
  className?: string
}

const ResultadoCard = ({ result, className }: ResultCardProps) => {
  const { openModal } = useModal()

  const sortedNumbers = [
    result.number_1,
    result.number_2,
    result.number_3,
    result.number_4,
    result.number_5,
  ]

  return (
    <div
      onClick={() => openModal(result.videoURL)}
      className={twMerge(
        "relative bg-[url('/banner/card-loto.webp')] w-[180px] h-[115px] bg-center bg-cover bg-no-repeat flex flex-col gap-4 p-2 rounded-2xl text-LT_WHITE uppercase text-sm font-bold cursor-pointer",
        className
      )}
    >
      <header className="flex flex-col text-[15px] gap-2">
        <h1 className="edoSZ !text-sm">{result.name}</h1>
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
    </div>
  )
}

export default ResultadoCard
