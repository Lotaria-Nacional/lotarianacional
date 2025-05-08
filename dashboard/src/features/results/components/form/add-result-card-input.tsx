import { ChangeEvent, SetStateAction } from "react"
import { CreateResult, ResultHour, ResultName } from "../../types"

type Props = {
  name: ResultName
  hour: ResultHour
  data: CreateResult
  setData: React.Dispatch<SetStateAction<CreateResult>>
}

export default function AddResultCardInput({
  name,
  hour,
  data,
  setData,
}: Props) {
  const handleInputChange = (
    index: number,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const invalidCharacterRegex = /\D/g
    let inputValue = e.target.value.replace(invalidCharacterRegex, "")

    if (inputValue.length > 2) {
      inputValue = inputValue.slice(0, 2)
    }

    e.target.value = inputValue

    const updatedNumbers = [...data.numbers]
    updatedNumbers[index] = inputValue ? parseInt(inputValue) : NaN

    setData({
      ...data,
      numbers: updatedNumbers,
    })
  }

  return (
    <div className="flex card-background flex-col items-start justify-between p-[14px] rounded-card h-input-card w-input-card">
      <header className="flex flex-col gap-[1px] text-white">
        <span className="capitalize font-edoSz-normal text-[24px]">{name}</span>
        <span>{hour}</span>
      </header>
      <div className="w-full flex items-center justify-center gap-[4px] md:gap-[6px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <input
            type="text"
            key={index}
            maxLength={2}
            onChange={(e) => handleInputChange(index, e)}
            className="size-[41px] bg-white text-LT-RED-200 text-lg font-bold rounded-full flex items-center justify-center text-center focus:outline-LT-RED-200"
          />
        ))}
      </div>
    </div>
  )
}
