import { ChangeEvent, useRef } from "react"
import { useSearchParams } from "react-router-dom"

const FilterResultPerDate = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [date, setDate] = useSearchParams({ date: "" })

  const dateValue = date.get("date")

  const handleClickInput = () => {
    if (inputRef.current) {
      inputRef.current.showPicker()
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value) {
      setDate((prev) => {
        prev.set("date", value)
        if (!value) {
          prev.delete("date")
        }
        return prev
      })
    }
  }
  return (
    <div className="relative border py-1 px-2 h-10 flex items-center justify-center rounded-lg gap-2">
      <label className="cursor-pointer" htmlFor="date">
        <span>Filtrar por data</span>
        <input
          type="date"
          id="date"
          ref={inputRef}
          onChange={handleChange}
          onClick={handleClickInput}
          value={dateValue?.toString()}
          className="absolute opacity-0 w-full h-full top-0 left-0 cursor-pointer"
        />
      </label>
    </div>
  )
}

export default FilterResultPerDate
