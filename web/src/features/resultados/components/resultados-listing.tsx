import { DAYS_OF_WEEK } from "../../../constants/days-of-week"
import ResultadoCard, { ResultProps } from "./resultado-card"

type ResultadosListingProps = {
  resultsListing: {
    date: string
    dayOfWeek: string
    result: ResultProps[]
  }[]
}

const ResultadosListing = ({ resultsListing }: ResultadosListingProps) => {
  const currentDay = new Date().getDay()
  const isToday = DAYS_OF_WEEK[currentDay]

  return (
    <div className="w-full flex flex-wrap lg:flex-nowrap items-center justify-center">
      {resultsListing.map((data, index) => (
        <div
          key={index}
          className={`flex items-center flex-col gap-2 p-1 rounded-2xl  ${
            isToday === data.dayOfWeek &&
            "border-2 border-dashed border-LT_RED-200 bg-red-200"
          }`}
        >
          <header className="flex flex-col gap-2 items-center">
            <h1 className="capitalize text-LT_RED-200 font-bold text-xl">
              {data.dayOfWeek}
            </h1>
            <span>{data.date}</span>
          </header>

          <div className="flex flex-col gap-4">
            {data.result.map((data, index) => (
              <ResultadoCard key={index} result={data} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ResultadosListing
