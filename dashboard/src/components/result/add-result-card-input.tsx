import {
  Dialog,
  DialogClose,
  DialogTitle,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogDescription,
} from "../ui/dialog"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Video } from "lucide-react"
import { isAxiosError } from "axios"
import { Button } from "../ui/button"
import { toast } from "react-toastify"
import { KeyProps } from "./result-card-input"
import { ChangeEvent, FormEvent, useState } from "react"
import { CreateDailyResult, createDailyResult } from "@/api/results.api"
import { SERVER_CONNECTION_ERROR, TRY_LATER_ERROR } from "@/constants/error"
import { extractYouTubeID } from "@/utils/youtube"

type Props = {
  name: "fezada" | "aqueceu" | "kazola" | "eskebra"
  hour: "10h00" | "13h00" | "16h00" | "19h00"
}

const AddResultCardInput = ({ hour, name }: Props) => {
  const [isLoading, setIsLoading] = useState(false)

  const [data, setData] = useState({
    number_1: "",
    number_2: "",
    number_3: "",
    number_4: "",
    number_5: "",
    videoURL: "",
  })

  // const currHour = new Date().getHours()
  // const targetHour = parseInt(hour.split("h")[0], 10) // Extrai a hora e converte para número
  // const canAddResult = currHour >= targetHour

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
      videoURL: data.videoURL,
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
      <div className="w-full flex items-center justify-between">
        <span className="bg-yellow-500 text-black px-3 py-1 font-medium rounded-[10px] w-fit  uppercase">
          {name}
        </span>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-fit" variant={"outline"}>
              <Video />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Adicionar Vídeo ao Resultado</DialogTitle>
              <DialogDescription>
                Insira o URL do vídeo do YouTube que deseja associar a este
                resultado.
              </DialogDescription>
            </DialogHeader>
            <Label className="flex gap-2 flex-col">
              <span>URL do video</span>
              <Input
                type="text"
                value={data.videoURL}
                placeholder="ex:https://youtube.com/watch?v=ffHiqRK1aBY"
                onChange={(e) => {
                  const youtubeEmbedURL = extractYouTubeID(e.target.value)
                  setData({ ...data, videoURL: youtubeEmbedURL })
                }}
              />
            </Label>
            <DialogFooter>
              <DialogClose asChild>
                <Button className="bg-RED-200">Confirmar</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full flex items-center flex-col gap-4"
      >
        <div className="loto-bg w-full lg:w-[180px] h-[115px] rounded-[13px] flex flex-col justify-center items-start gap-4 p-4">
          <div className="flex flex-col text-[15px] text-white">
            <span className="uppercase">{name}</span>
            <span>{hour}</span>
          </div>
          <div className="w-full mx-auto flex items-center justify-center gap-1">
            <input
              type="text"
              maxLength={2}
              inputMode="numeric"
              value={data.number_1}
              onChange={(e) => handleInputChange(e, "number_1")}
              className="size-[30px] bg-white text-center flex items-center justify-center rounded-[50px]"
            />
            <input
              type="text"
              maxLength={2}
              inputMode="numeric"
              value={data.number_2}
              onChange={(e) => handleInputChange(e, "number_2")}
              className="size-[30px] bg-white text-center flex items-center justify-center rounded-[50px]"
            />
            <input
              type="text"
              maxLength={2}
              inputMode="numeric"
              value={data.number_3}
              onChange={(e) => handleInputChange(e, "number_3")}
              className="size-[30px] bg-white text-center flex items-center justify-center rounded-[50px]"
            />
            <input
              type="text"
              maxLength={2}
              inputMode="numeric"
              value={data.number_4}
              onChange={(e) => handleInputChange(e, "number_4")}
              className="size-[30px] bg-white text-center flex items-center justify-center rounded-[50px]"
            />
            <input
              type="text"
              maxLength={2}
              inputMode="numeric"
              value={data.number_5}
              onChange={(e) => handleInputChange(e, "number_5")}
              className="size-[30px] bg-white text-center flex items-center justify-center rounded-[50px]"
            />
          </div>
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="bg-RED-200 w-full"
        >
          {isLoading ? "Salvando..." : "Salvar"}
        </Button>
      </form>
    </div>
  )
}

export default AddResultCardInput
