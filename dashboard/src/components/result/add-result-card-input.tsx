import { isAxiosError } from "axios"
import { Button } from "../ui/button"
import { KeyProps } from "./result-card-input"
import { ChangeEvent, FormEvent, useState } from "react"
import { toast } from "react-toastify"
import { SERVER_CONNECTION_ERROR, TRY_LATER_ERROR } from "@/constants/error"
import { CreateDailyResult, createDailyResult } from "@/api/results.api"

type Props = {
  name: "fezada" | "aqueceu" | "kazola" | "eskebra"
  hour: "10h30" | "13h30" | "16h30" | "19h30"
}

const AddResultCardInput = ({ hour, name }: Props) => {
  const [isLoading, setIsLoading] = useState(false)

  const [data, setData] = useState({
    number_1: "",
    number_2: "",
    number_3: "",
    number_4: "",
    number_5: "",
  })

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    key: KeyProps
  ) => {
    const value = e.target.value
    const regex = /^\d*$/

    if (regex.test(value)) {
      setData((prev) => ({
        ...prev,
        [key]: value === "" ? null : parseInt(value, 10),
      }))
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    const resultData: CreateDailyResult = {
      hour,
      name,
      number_1: parseInt(data.number_1),
      number_2: parseInt(data.number_2),
      number_3: parseInt(data.number_3),
      number_4: parseInt(data.number_4),
      number_5: parseInt(data.number_5),
    }
    try {
      const response = await createDailyResult(resultData)
      console.log({ name, hour, data })

      toast.success(response.message)
    } catch (error) {
      if (isAxiosError(error)) {
        return toast.error(error.response?.data.message)
      }
      if (isAxiosError(error) && !error.response) {
        return toast.error(TRY_LATER_ERROR)
      }
      return toast.error(SERVER_CONNECTION_ERROR)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div className="bg-white rounded-[20px] h-[270px] shadow-sm shadow-white/20 p-2 w-full flex flex-col justify-around">
      <span className="bg-yellow-500 text-black px-3 py-1 font-medium rounded-[10px] w-fit  uppercase">
        {name}
      </span>
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
        <div className="loto-bg h-[119px] rounded-[13px] flex flex-col justify-center items-start gap-4 p-4">
          <div className="flex flex-col text-[15px] text-white">
            <span className="uppercase">{name}</span>
            <span>{hour}</span>
          </div>
          <div className="w-full mx-auto flex items-center gap-3">
            <input
              type="text"
              maxLength={2}
              inputMode="numeric"
              value={data.number_1}
              onChange={(e) => handleInputChange(e, "number_1")}
              className="size-[35px] bg-white text-center flex items-center justify-center rounded-[50px]"
            />
            <input
              type="text"
              maxLength={2}
              inputMode="numeric"
              value={data.number_2}
              onChange={(e) => handleInputChange(e, "number_2")}
              className="size-[35px] bg-white text-center flex items-center justify-center rounded-[50px]"
            />
            <input
              type="text"
              maxLength={2}
              inputMode="numeric"
              value={data.number_3}
              onChange={(e) => handleInputChange(e, "number_3")}
              className="size-[35px] bg-white text-center flex items-center justify-center rounded-[50px]"
            />
            <input
              type="text"
              maxLength={2}
              inputMode="numeric"
              value={data.number_4}
              onChange={(e) => handleInputChange(e, "number_4")}
              className="size-[35px] bg-white text-center flex items-center justify-center rounded-[50px]"
            />
            <input
              type="text"
              maxLength={2}
              inputMode="numeric"
              value={data.number_5}
              onChange={(e) => handleInputChange(e, "number_5")}
              className="size-[35px] bg-white text-center flex items-center justify-center rounded-[50px]"
            />
          </div>
        </div>

        <Button disabled={isLoading} type="submit" className="bg-RED-200">
          {isLoading ? "Salvando..." : "Salvar"}
        </Button>
      </form>
    </div>
  )
}

export default AddResultCardInput
