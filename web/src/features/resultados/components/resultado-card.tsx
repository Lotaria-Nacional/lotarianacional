import { useState } from "react"
import { twMerge } from "tailwind-merge"
import { MdPlayCircleOutline } from "react-icons/md"

export type ResultProps = {
  name: string
  startHour: string
  sortedNumbers: number[]
}

export type ResultCardProps = {
  result: ResultProps
  className?: string
}

const ResultadoCard = ({ result, className }: ResultCardProps) => {
  const [hoverOnCard, setHoverOnCard] = useState(false)

  return (
    <div
      onMouseOver={() => setHoverOnCard(true)}
      onMouseLeave={() => setHoverOnCard(false)}
      className={twMerge(
        "bg-[url('/banner/card-loto.webp')] w-[180px] h-[115px] bg-center bg-cover bg-no-repeat flex flex-col gap-4 p-3 rounded-2xl text-LT_WHITE uppercase text-sm font-bold hover:transition-transform duration-200 ease-in-out transform",
        className
      )}
    >
      {!hoverOnCard ? (
        <>
          <header className="flex flex-col gap-2">
            <h1>{result.name}</h1>
            <span>{result.startHour}</span>
          </header>

          <div className="flex w-full gap-1 items-center">
            {result.sortedNumbers.map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="size-7 bg-white flex items-center justify-center text-LT_RED-200 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <MdPlayCircleOutline size={64} className="cursor-pointer" />
        </div>
      )}
    </div>
  )
}

export default ResultadoCard
