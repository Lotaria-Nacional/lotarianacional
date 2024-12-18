import { useDebounce } from "../hooks/useDebounce"
import { SetURLSearchParams } from "react-router-dom"
import { ChangeEvent, useEffect, useRef, useState } from "react"

type Props = {
  setDate: SetURLSearchParams
  date: URLSearchParams
}

const FilterResultPerDate = ({ date, setDate }: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [tempDate, setTempDate] = useState<string>(date.get("date") || "")
  const debouncedDate = useDebounce(tempDate, 400)

  useEffect(() => {
    setDate((prev) => {
      if (debouncedDate) {
        prev.set("date", debouncedDate)
      } else {
        prev.delete("date")
      }
      return prev
    })
  }, [debouncedDate, setDate])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTempDate(e.target.value)
  }

  const handleClickInput = () => {
    inputRef.current?.showPicker()
  }

  return (
    <div className="relative border py-1 px-2 h-10 flex items-center justify-center rounded-lg gap-2">
      <label htmlFor="date" className="cursor-pointer">
        <span>Filtrar por data</span>
        <input
          id="date"
          type="date"
          ref={inputRef}
          value={tempDate}
          onChange={handleChange}
          onClick={handleClickInput}
          className="absolute opacity-0 w-full h-full top-0 left-0 cursor-pointer"
        />
      </label>
    </div>
  )
}

export default FilterResultPerDate
