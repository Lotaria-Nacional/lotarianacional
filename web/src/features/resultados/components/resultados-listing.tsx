import ResultadoCard from "./resultado-card"
import { IDailyResult } from "../../../interfaces"
import { DAYS_OF_WEEK } from "../../../constants/days-of-week"

type ResultadosListingProps = {
  resultsListing: IDailyResult[]
}

const ResultadosListing = ({ resultsListing }: ResultadosListingProps) => {
  const currentDay = new Date().getDay()
  const isToday = DAYS_OF_WEEK[currentDay]

  return (
    <div className="w-full flex lg:items-center gap-2 lg:justify-start">
      {resultsListing.map((data, index) => {
        return (
          <div
            key={index}
            className={`flex ${
              data.formatedDate.split(",")[0] === isToday &&
              "border-2 border-dashed border-LT_RED-200 bg-red-200"
            } items-center flex-col gap-2 p-1 rounded-2xl`}
          >
            <header className="flex flex-col gap-2 items-center">
              <h1 className="capitalize text-LT_RED-200 font-bold text-xl">
                {data.formatedDate.split(",")[0]}
              </h1>
              <span>
                {data.formatedDate
                  .split(",")[1]
                  .split(" ")
                  .join("")
                  .replace(/de/g, "/")}
              </span>
            </header>

            <div className="flex flex-col gap-4">
              {data.results.map((res, index) => (
                <ResultadoCard key={index} result={res} isTheSameDay={false} />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ResultadosListing
