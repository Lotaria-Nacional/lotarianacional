import ResultadoCard from "./resultado-card"
import { IDailyResult } from "../../../interfaces"
import { DAYS_OF_WEEK } from "../../../constants/days-of-week"
import { formatDate, formatWeekDay } from "../../../utils/date"

type ResultadosListingProps = {
  resultsListing: IDailyResult[]
}

const ResultadosListing = ({ resultsListing }: ResultadosListingProps) => {
  const currentDay = new Date().getDay()
  const isToday = DAYS_OF_WEEK[currentDay]

  return (
    <div className="w-full flex lg:items-center lg:justify-start">
      {resultsListing.map((data, index) => (
        <div
          key={index}
          className={`flex ${
            formatWeekDay(data.date.toString()) === isToday &&
            "border-2 border-dashed border-LT_RED-200 bg-red-200"
          } items-center flex-col gap-2 p-1 rounded-2xl`}
        >
          <header className="flex flex-col gap-2 items-center">
            <h1 className="capitalize text-LT_RED-200 font-bold text-xl">
              {formatWeekDay(data.date.toString())}
            </h1>
            <span>{formatDate(data.date.toString())}</span>
          </header>

          <div className="flex flex-col gap-4">
            {data.results.map((data, index) => (
              <ResultadoCard key={index} result={data} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ResultadosListing
