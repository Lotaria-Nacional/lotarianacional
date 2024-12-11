import { updateResults } from "@/api/results.api"
import { Button } from "../ui/button"
import { ChangeEvent, FormEvent, useState } from "react"
import { toast } from "react-toastify"

export type KeyProps =
  | "number_1"
  | "number_2"
  | "number_3"
  | "number_4"
  | "number_5"

type Props = {
  result: {
    id: string
    name: string
    hour: string
    number_1: number
    number_2: number
    number_3: number
    number_4: number
    number_5: number
  }
}

const ResultCardInput = ({ result }: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState({
    number_1: result.number_1,
    number_2: result.number_2,
    number_3: result.number_3,
    number_4: result.number_4,
    number_5: result.number_5,
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

  const handleUpdate = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const response = await updateResults(result.id, data)

      toast.success(response.message, { autoClose: 2000, position:"bottom-right" })
      console.log(response.message)
    } catch (error: any) {
      alert(error.message)
      console.log(error.message)
      toast.success(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleUpdate} className="w-full flex flex-col gap-4">
      <div className="loto-bg h-[119px] rounded-[13px] flex flex-col justify-center items-start gap-4 p-4">
        <div className="flex flex-col text-[15px] text-white">
          <span className="uppercase">{result.name}</span>
          <span>{result.hour}</span>
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
        {isLoading ? "Salvando..." : "Salvar alterações"}
      </Button>
    </form>
  )
}

export default ResultCardInput
