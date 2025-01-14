import { IResult } from "../../interfaces"
import { CARD } from "../../constants/assets"

type Props = {
  result: IResult
}

const ResultCard = ({ result }: Props) => {
  const numbers = [
    result.number_1,
    result.number_2,
    result.number_3,
    result.number_4,
    result.number_5,
  ]

  return (
    <div className="relative w-full lg:w-[180px] h-[115px] text-white gap-4 p-2 flex flex-col justify-between">
      <img
        src={CARD.card_loto}
        alt="card loto 5/90"
        className="absolute z-0 inset-0 w-full h-full object-cover rounded-[13px]"
      />

      <header className="flex flex-col z-10">
        <span className="text-[15px] uppercase font-medium">{result.name}</span>
        <span className="text-[15px] uppercase font-medium">{result.hour}</span>
      </header>
      
      <div className="flex items-center gap-1 w-full justify-between z-10">
        {numbers.map((number, index) => (
          <span
            key={index}
            className="size-[30px] rounded-full bg-white flex items-center justify-center text-[24px] lg:text-[15px] font-bold text-RED-200"
          >
            {number}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ResultCard
