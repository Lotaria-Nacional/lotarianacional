import { IDailyResult } from "@/interfaces"
import ResultadoCard from "./resultado-card"

type Props = {
  resultsListing: IDailyResult[] | []
}

const ResultadosListingMobile = ({ resultsListing }: Props) => {
  const result = resultsListing[resultsListing.length - 2]
  console.log("ResultadosListingMobile ~ result", result)
  return (
    <div className="md:hidden block">
      <ul className="flex mx-auto rounded-2xl flex-col items-center w-fit p-2 border-2 border-dashed border-LT_RED-200 bg-red-200 justify-center gap-2">
        <header className="flex flex-col gap-2 items-center">
          <h1 className="capitalize text-LT_RED-200 font-bold text-xl">
            {result.formatedDate.split(",")[0]}
          </h1>
          <span>
            {result.formatedDate
              .split(",")[1]
              .split(" ")
              .join("")
              .replace(/de/g, "/")}
          </span>
        </header>
        {result.results.map((res) => (
          <ResultadoCard key={res.id} result={res} />
        ))}
      </ul>
    </div>
  )
}

export default ResultadosListingMobile
