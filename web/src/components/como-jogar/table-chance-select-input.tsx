import { ChevronDown } from "lucide-react"
import { forwardRef, SetStateAction } from "react"

type Props = {
  chances: string[]
  selected: string | null
  isSelectMenuOpen: boolean
  handleSetChoice: (value: string) => void
  ref: React.MutableRefObject<HTMLDivElement | null>
  setIsSelectMenuOpen: React.Dispatch<SetStateAction<boolean>>
}

const TableChanceSelectInput = forwardRef<HTMLDivElement, Props>(
  (
    {
      chances,
      selected,
      handleSetChoice,
      isSelectMenuOpen,
      setIsSelectMenuOpen,
    },
    ref
  ) => {
    const toggleSelectMenu = () => setIsSelectMenuOpen((prev) => !prev)
    return (
      <div
        ref={ref}
        className="relative flex flex-col text-center gap-3 w-[220px] lg:w-[400px]"
      >
        <button
          onClick={toggleSelectMenu}
          className="bg-LT_RED-300 text-white py-2 rounded-[10px] border-none flex gap-2 items-center justify-center"
        >
          {selected ? selected : "Chance"}
          <ChevronDown />
        </button>
        {isSelectMenuOpen && (
          <ul className="absolute fade-in-text z-[20] rounded-t-[10px] rounded-b-[10px] -bottom-[170px] flex flex-col bg-white shadow-[0px_0px_3px_1px_#ccc] w-full">
            {chances.map((item, index) => (
              <li
                key={`${index} - ${item}`}
                onClick={() => handleSetChoice(item)}
                className={`border-b ${
                  index === 0
                    ? "rounded-t-[10px]"
                    : index === chances.length - 1
                    ? "rounded-b-[10px]"
                    : ""
                } border-b-zinc-300 py-2 w-full cursor-pointer hover:bg-LT_RED-300 hover:text-white text-black transition-all duration-300 ease-in-out`}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
)

export default TableChanceSelectInput
