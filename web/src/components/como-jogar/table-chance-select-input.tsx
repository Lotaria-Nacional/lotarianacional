import { ChangeEvent } from "react"

type Props = {
  handleSelect: (e: ChangeEvent<HTMLSelectElement>) => void
  chances: string[]
  selected: string
}

const TableChanceSelectInput = ({ selected, handleSelect, chances }: Props) => {
  return (
    <div className="flex items-center relative text-[12px] lg:text-[16px] justify-center px-4 gap-4 rounded-r-[10px] h-full w-full bg-LT_RED-300 text-white">
      <select
        name="select-input"
        value={selected}
        onChange={(e) => handleSelect(e)}
        className="lg:rounded-none z-1 cursor-pointer w-full outline-none border-none bg-inherit text-white text-center"
      >
        <option defaultValue="Chance" disabled className="normal-case">
          Chance
        </option>
        {chances.map((chance, index) => (
          <option
            value={chance}
            className="capitalize"
            key={`Chance - ${index}`}
          >
            {chance}
          </option>
        ))}
      </select>
    </div>
  )
}

export default TableChanceSelectInput
