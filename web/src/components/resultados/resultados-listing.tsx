import ResultadoCard from "./resultado-card"
import fezada from "/placeholders/fezada.svg"
import kazola from "/placeholders/kazola.svg"
import eskebra from "/placeholders/eskebra.svg"
import aqueceu from "/placeholders/aqueceu.svg"
import { IDailyResult } from "../../interfaces"
import { MONTHS_MAP } from "@/constants/months"

type ResultadosListingProps = {
  resultsListing: IDailyResult[]
}

const ResultadosListing = ({ resultsListing }: ResultadosListingProps) => {
  const currentDate = new Date()
  const formattedToday = `${currentDate
    .getDate()
    .toString()
    .padStart(2, "0")}/${(currentDate.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${currentDate.getFullYear()}`

  const PLACE_HOLDERS_IMG = [fezada, aqueceu, kazola, eskebra]
  const TOTAL_RESULTS = 4

  return (
    <div className="w-full flex lg:items-center gap-8 lg:justify-start">
      {resultsListing.map((data, index) => {
        const totalResults = data.results.length
        const placeHoldersCount = TOTAL_RESULTS - totalResults

        const parts = data.formatedDate.split(",")[1].trim().split(" ")
        const day = parts[0].padStart(2, "0")
        const month = MONTHS_MAP[parts[2]]
        const year = parts[4]
        const formattedDataDate = `${day}/${month}/${year}`

        const isToday = formattedDataDate === formattedToday

        return (
          <div
            key={index}
            className={`flex ${
              isToday && "border-2 border-dashed border-LT_RED-200 bg-red-200"
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

            <div className="flex w-full flex-col gap-4">
              {data.results.map((res, index) => {
                return <ResultadoCard key={index} result={res} />
              })}
              {Array.from({ length: placeHoldersCount }).map((_, index) => (
                <div
                  key={index}
                  className="relative w-[180px] h-[115px] p-2 rounded-[13px]"
                >
                  <img
                    src={PLACE_HOLDERS_IMG[index + totalResults]}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ResultadosListing
