import { toast } from "sonner"
import Icon from "@/components/ui/icon"
import { FormEvent, useState } from "react"
import { handleFormError } from "@/lib/error"
import { CreateResultRequest } from "../../api"
import Button from "@/components/ui/lottary-button"
import { useCreateResult } from "../../hooks/mutation"
import AddResultCardInput from "./add-result-card-input"
import { CreateResult, ResultHour, ResultName } from "../../types"
import { getYouTubeEmbedURL } from "../../utils/get-youtube-embed"
import { useIsPublishingAllowed } from "../../hooks/useIsPublishingAllowed"

type Props = {
  name: ResultName
  hour: ResultHour
}

export default function AddResultForm({ name, hour }: Props) {
  const { mutateAsync: createResult, isPending } = useCreateResult()
  const { isAllowed } = useIsPublishingAllowed(hour)

  const [data, setData] = useState<CreateResult>({
    hour,
    name,
    videoURL: "",
    numbers: [],
  })

  const handleSaveResult = async (e: FormEvent) => {
    e.preventDefault()

    if (!isAllowed) {
      return toast.error("Só é permitido publicar dentro do horário correto!")
    }

    const [number_1, number_2, number_3, number_4, number_5] = data.numbers

    try {
      const requestData: CreateResultRequest = {
        name: data.name,
        hour: data.hour,
        videoURL: data.videoURL,
        number_1,
        number_2,
        number_3,
        number_4,
        number_5,
      }

      const response = await createResult(requestData)

      toast.success(response.message)
    } catch (error) {
      handleFormError(error)
    }
  }

  return (
    <form
      onSubmit={handleSaveResult}
      className="w-full h-full flex items-center justify-center flex-col gap-6 bg-white rounded-card p-5 md:p-[60px]"
    >
      <AddResultCardInput
        name={name}
        hour={hour}
        data={data}
        setData={setData}
      />

      <div className="w-full flex flex-col gap-4">
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="" className="font-medium text-sm">
            URL da Emissão
          </label>
          <div className="flex items-center gap-2">
            <div className="border border-LT-GRAY-200 rounded-lg w-full px-3 py-2">
              <input
                type="text"
                placeholder="https://youtube.com?watch=6tkebf13f"
                className="bg-transparent w-full h-full outline-none"
                value={data.videoURL}
                onChange={(e) => {
                  setData({
                    ...data,
                    videoURL: getYouTubeEmbedURL(e.target.value),
                  })
                }}
              />
            </div>
            <a
              href="https://www.youtube.com/@LotariaNacionalAO/videos"
              target="_blank"
            >
              <Button type="button" variant="ghost">
                <Icon name="youtube" />
              </Button>
            </a>
          </div>
        </div>
        <Button
          type="submit"
          disabled={isPending || !isAllowed}
          className="w-full"
        >
          {isPending ? "Publicando..." : isAllowed ? "Publicar" : "Bloqueado"}
        </Button>
      </div>
    </form>
  )
}
