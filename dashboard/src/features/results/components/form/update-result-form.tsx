import { toast } from "sonner"
import Icon from "@/components/ui/icon"
import { ResultEntity } from "../../types"
import { handleFormError } from "@/lib/error"
import { UpdateResultRequest } from "../../api"
import Button from "@/components/ui/lottary-button"
import { FormEvent, useEffect, useState } from "react"
import { useUpdateResult } from "../../hooks/mutation"
import UpdateResultCardInput from "./update-result-card-input"

type Props = {
  result: ResultEntity
}

export default function UpdateResultForm({ result }: Props) {
  const { mutateAsync, isPending } = useUpdateResult()
  const [data, setData] = useState<UpdateResultRequest>({
    ...result,
    videoURL: result.videoURL as string,
  })
  const [canUpdateResult, setCanUpdateResult] = useState(true)

  useEffect(() => {
    const now = new Date().getTime()
    const createdAtTime = new Date(result.createdAt).getTime()
    const timeDifferenceInSeconds = (now - createdAtTime) / 1000

    if (timeDifferenceInSeconds > 900) {
      setCanUpdateResult(false)
    }
  }, [result.createdAt])

  const handleUpdateResult = async (e: FormEvent) => {
    e.preventDefault()

    if (!canUpdateResult) {
      toast.error(
        "O tempo para editar o resultado expirou. Não é possível salvar alterações."
      )
      return
    }

    try {
      const response = await mutateAsync(data)
      toast.success(response.message)
    } catch (error) {
      handleFormError(error)
    }
  }

  return (
    <form
      onSubmit={handleUpdateResult}
      className="w-full h-full flex items-center justify-center flex-col gap-6 bg-white rounded-card p-5 md:p-[60px]"
    >
      <UpdateResultCardInput data={data} setData={setData} />

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
                value={data.videoURL ?? ""}
                onChange={(e) => setData({ ...data, videoURL: e.target.value })}
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
          className="w-full"
          disabled={isPending || !canUpdateResult}
        >
          {isPending
            ? "Atualizando..."
            : !canUpdateResult
            ? "Bloqueado"
            : "Atualizar resultado"}
        </Button>
      </div>
    </form>
  )
}
