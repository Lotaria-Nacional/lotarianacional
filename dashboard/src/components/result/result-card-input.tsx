import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Trash2, Video } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Button } from "../ui/button"
import { toast } from "react-toastify"
import { updateResults } from "@/api/results.api"
import { ChangeEvent, FormEvent, useState } from "react"

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
    videoURL: string
    number_3: number
    number_4: number
    number_5: number
    createdAt: Date
  }
}

const ResultCardInput = ({ result }: Props) => {
  const [isLoading, setIsLoading] = useState(false)

  const [data, setData] = useState({
    name: result.name,
    hour: result.hour,
    number_1: result.number_1,
    number_2: result.number_2,
    number_3: result.number_3,
    number_4: result.number_4,
    number_5: result.number_5,
    videoURL: result.videoURL,
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

    const now = new Date().getTime()
    const createdAtTime = new Date(result.createdAt).getTime()
    const timeDifferenceInSeconds = (now - createdAtTime) / 1000

    if (timeDifferenceInSeconds > 900) {
      toast.error(
        "O tempo para editar o resultado expirou. Não é possível salvar alterações."
      )
      return
    }

    setIsLoading(true)
    try {
      const response = await updateResults(result.id, data)

      console.log(data)

      toast.success(response.message, {
        autoClose: 2000,
        position: "bottom-right",
      })
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
    <form
      onSubmit={handleUpdate}
      className="w-full flex items-center flex-col gap-4"
    >
      <Dialog>
        <DialogTrigger asChild className="absolute top-3 right-2">
          <Button variant={"outline"}>
            <Video />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Atualize a url do video para este resultado.
            </DialogTitle>
          </DialogHeader>

          <Label htmlFor="video" className="flex flex-col gap-2 mt-4">
            <span>Youtube videoURL</span>
            <Input
              id="video"
              name="video"
              value={data.videoURL}
              onChange={(e) => {
                const youtubeEmbedURL = e.target.value.replace(
                  "watch?v=",
                  "embed/"
                )

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

      <div className="loto-bg w-full lg:w-[180px] h-[115px] rounded-[13px] flex flex-col justify-center items-start gap-4 p-2">
        <div className="flex flex-col text-[15px] text-white">
          <input
            type="text"
            value={data.name}
            className="bg-transparent uppercase outline-none border-none"
            onChange={(e) => setData({ ...data, name: e.target.value.trim() })}
          />
          <input
            type="text"
            value={data.hour}
            className="bg-transparent uppercase outline-none border-none"
            onChange={(e) => setData({ ...data, hour: e.target.value.trim() })}
          />
        </div>

        <div className="w-full mx-auto flex items-center gap-1">
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
      <div className="flex items-center justify-between w-full gap-2">
        <Button
          type="submit"
          disabled={isLoading}
          className="bg-RED-200 w-full"
        >
          {isLoading ? "Salvando..." : "Salvar alterações"}
        </Button>
        <Button
          type="submit"
          className="border"
          disabled={isLoading}
          variant={"secondary"}
        >
          <Trash2 />
        </Button>
      </div>
    </form>
  )
}

export default ResultCardInput
