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
    <div className="relative w-full lg:w-[235px] h-[130px] lg:h-[119px] text-white p-3 flex flex-col justify-between">
      <img
        src={CARD.card_loto}
        alt="card loto 5/90"
        className="absolute z-0 inset-0 w-full h-full object-cover rounded-[13px]"
      />

      <header className="flex flex-col z-10">
        <span className="text-[15px] uppercase font-medium">{result.name}</span>
        <span className="text-[15px] uppercase font-medium">{result.hour}</span>
      </header>
      <div className="flex items-center w-full justify-between z-10">
        {numbers.map((number, index) => (
          <span
            key={index}
            className="size-[45px] lg:size-[35px] rounded-full bg-white flex items-center justify-center text-[24px] lg:text-[15px] font-bold text-RED-200"
          >
            {number}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ResultCard
