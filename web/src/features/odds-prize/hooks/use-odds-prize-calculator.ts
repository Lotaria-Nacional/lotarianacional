import {
  useRef,
  useMemo,
  useState,
  useEffect,
  ChangeEvent,
  SetStateAction,
} from "react"
import { OddsPrizesCalculatorData } from "../@types/calculator-props.types"


type Props = {
  value: string
  chances: string[]
  selected: string | null
  isSelectMenuOpen: boolean
  handleSetChoice: (value: string) => void
  filteredTableContent: OddsPrizesCalculatorData | undefined
  handleValue: (e: ChangeEvent<HTMLInputElement>) => void
  selectDivRef: React.MutableRefObject<HTMLDivElement | null>
  setIsSelectMenuOpen: React.Dispatch<SetStateAction<boolean>>
}

export function useOddsPrizesCalculator(
  data: OddsPrizesCalculatorData[]
): Props {
  const [value, setValue] = useState("")
  const selectDivRef = useRef<HTMLDivElement | null>(null)
  const [selected, setSelected] = useState<string | null>(null)
  const [isSelectMenuOpen, setIsSelectMenuOpen] = useState(false)

  const chances = ["Chance 2", "Chance 3", "Chance 4", "Chance 5"]

  const handleSetChoice = (value: string) => {
    setSelected(value)
    if (isSelectMenuOpen) {
      setIsSelectMenuOpen(false)
    }
  }

  const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value

    if (val === "") {
      setValue("")
      return
    }

    const regex = /^[0-9]*$/

    if (regex.test(val)) {
      const numberVal = Number(val)

      if (numberVal <= 1000) {
        setValue(val)
      }
    }
  }

  const filteredTableContent = useMemo(() => {
    return data.find((item) => item.label === selected)
  }, [selected])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectDivRef.current &&
        !selectDivRef.current.contains(event.target as Node)
      ) {
        setIsSelectMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return {
    value,
    chances,
    selected,
    handleValue,
    selectDivRef,
    handleSetChoice,
    isSelectMenuOpen,
    setIsSelectMenuOpen,
    filteredTableContent,
  }
}
