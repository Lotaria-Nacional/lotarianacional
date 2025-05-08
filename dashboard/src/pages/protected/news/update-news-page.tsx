import { Dispatch, useState, FormEvent, useEffect, SetStateAction } from "react"
import { toast } from "sonner"
import { Eye, File } from "lucide-react"
import { useParams } from "react-router-dom"
import { handleFormError } from "@/lib/error"
import Tiptap from "@/components/tiptap/tiptap"
import { NewsEntity } from "@/features/news/types"
import Button from "@/components/ui/lottary-button"
import { useGetNewsById } from "@/features/news/hooks/query"
import { useUpdateNews } from "@/features/news/hooks/mutation"
import UpdateNewsImageInput from "@/features/news/components/form/update-news-image-input"
import UpdateNewsPageSkeleton from "@/features/news/components/update-news-page-skeleton"

export type UpdateNewsRequestProps = { image: string | File } & Omit<
  Partial<NewsEntity>,
  "image"
>

export type UpdateNewsStateProps = {
  data: UpdateNewsRequestProps
  setData: Dispatch<SetStateAction<UpdateNewsRequestProps>>
}

export default function UpdateNewsPage() {
  const { id } = useParams()

  const { mutateAsync, isPending } = useUpdateNews()
  const { data: news, isLoading } = useGetNewsById(id as string)

  const [data, setData] = useState<UpdateNewsRequestProps>({
    id: "",
    title: "",
    image: "",
    description: "",
  })

  useEffect(() => {
    if (news) {
      setData({
        id: news.id,
        title: news.title,
        description: news.description,
        image: news.image,
      })
    }
  }, [news])

  if (isLoading) {
    return <UpdateNewsPageSkeleton/>
  }

  const handleUpdateNews = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const formData = new FormData()
      formData.append("title", data.title!)
      formData.append("image", data.image!)
      formData.append("description", data.description!)

      const response = await mutateAsync({ id: data.id!, data: formData })
      toast.success(response.message)
    } catch (error) {
      handleFormError(error)
    }
  }

  return (
    <div className="w-full h-full flex flex-col gap-4 main">
      <form
        onSubmit={handleUpdateNews}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full "
      >
        <div className="bg-white rounded-card flex flex-col flex-1 col-span-2 py-4">
          <div className="w-full border-b border-b-LT-GRAY-100">
            <input
              type="text"
              placeholder="Título da notícia"
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
              className="px-6 py-3 placeholder:text-xl text-xl placeholder:font-semibold font-semibold w-full outline-none"
            />
          </div>
          <Tiptap data={data} setData={setData} />
        </div>

        <div className="lg:grid grid-cols-1 flex flex-col-reverse gap-6">
          <div className="bg-white rounded-card py-4 flex flex-col">
            <span className="text-xl font-semibold px-4 pb-4">Publicar</span>
            <hr className="w-full text-LT-GRAY-200" />

            <div className="lg:flex-1 flex flex-col p-4 gap-4">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <File />
                  <header>
                    <span>Status:</span>
                    <span className="font-semibold">Rascunho</span>
                  </header>
                </div>
                <Button className="!bg-transparent !text-LT-RED-200">
                  Editar
                </Button>
              </div>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Eye />
                  <header>
                    <span>Visibilidade:</span>
                    <span className="font-semibold">Público</span>
                  </header>
                </div>
                <Button className="!bg-transparent !text-LT-RED-200">
                  Editar
                </Button>
              </div>
            </div>

            <hr className="w-full text-LT-GRAY-200 pb-3" />
            <div className="flex items-center py-2 gap-3 justify-end px-4">
              <Button className="!text-LT-GRAY-200" variant="ghost">
                Salvar rascunho
              </Button>
              <Button disabled={isPending} type="submit">
                {isPending ? "Salvando..." : "Salvar"}
              </Button>
            </div>
          </div>

          <UpdateNewsImageInput data={data} setData={setData} />
        </div>
      </form>
    </div>
  )
}
