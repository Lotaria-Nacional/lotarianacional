import fezada from "/placeholders/fezada.svg"
import kazola from "/placeholders/kazola.svg"
import eskebra from "/placeholders/eskebra.svg"
import aqueceu from "/placeholders/aqueceu.svg"

type Props = {
  totalResults: number
  index: number
}
const ResultCardPlaceholder = ({ index, totalResults }: Props) => {
  const PLACE_HOLDERS_IMG = [fezada, aqueceu, kazola, eskebra]
  return (
    <div className="relative w-[180px] h-[115px] p-2 rounded-[13px]">
      <img
        src={PLACE_HOLDERS_IMG[index + totalResults]}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  )
}

export default ResultCardPlaceholder
