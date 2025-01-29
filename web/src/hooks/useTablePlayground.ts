import { TablePlaygroundData } from "@/interfaces"
import { ChangeEvent, useMemo, useState } from "react"

type PlaygroundReturnProps = {
  value: string
  chances: string[]
  filteredTableContent: TablePlaygroundData | undefined
  handleValue: (e: ChangeEvent<HTMLInputElement>) => void
  handleSelect: (e: ChangeEvent<HTMLSelectElement>) => void
  selected: string | undefined
}

export function useTablePlayground(
  data: TablePlaygroundData[]
): PlaygroundReturnProps {
  const [value, setValue] = useState("")
  const [selected, setSelected] = useState("Chance")
  const chances = ["Chance 2", "Chance 3", "Chance 4", "Chance 5"]

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) =>
    setSelected(e.target.value)

  const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value

    // Se o campo estiver vazio, reseta o valor
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

  return {
    value,
    chances,
    selected,
    handleValue,
    handleSelect,
    filteredTableContent,
  }
}
