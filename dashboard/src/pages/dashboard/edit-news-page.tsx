import { isAxiosError } from "axios"
import { toast } from "react-toastify"
import { ICON } from "@/constants/assets"
import { useParams } from "react-router-dom"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { getNewsById, updateNews } from "@/api/news.api"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { SERVER_CONNECTION_ERROR, TRY_LATER_ERROR } from "@/constants/error"

const EditNewsPage = () => {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [isUpdating, setIsUpdating] = useState(false)

  const [title, setTitle] = useState("")
  const [image, setImage] = useState<any>()
  const [currentImage, setCurrentImage] = useState("")
  const [description, setDescription] = useState("")
  const [previewImg, setPreviewImg] = useState<string | null>(null)

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files
    if (file) {
      const previewImgURL = URL.createObjectURL(file[0])
      if (!previewImgURL) {
        URL.revokeObjectURL(previewImgURL)
      }
      setPreviewImg(previewImgURL)
      setImage(file[0])
    }
  }
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsUpdating(true)
    try {
      let formData = new FormData()
      formData.append("title", title)
      formData.append("image", image)
      formData.append("description", description)

      const response = await updateNews(id!, formData)
      toast.success(response.message)
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        return toast.error(error.response?.data.message)
      }
      if (isAxiosError(error) && !error.response) {
        return toast.error(TRY_LATER_ERROR)
      }
      return toast.error(SERVER_CONNECTION_ERROR)
    } finally {
      setIsUpdating(false)
    }
  }

  const handleResetImage = () => {
    if (previewImg) {
      URL.revokeObjectURL(previewImg)
    }
    setPreviewImg(null)
    setImage(currentImage)
  }

  useEffect(() => {
    const fetch = async () => {
      const data = await getNewsById(id!)
      setTitle(data.title)
      setImage(data.image)
      setCurrentImage(data.image)
      setDescription(data.description)
      setIsLoading(false)
    }
    fetch()
  }, [])

  if (isLoading) return <span>Carregando...</span>

  return (
    <main className="flex items-center justify-center w-full h-full">
      <form
        onSubmit={handleSubmit}
        className="w-[1103px] grid grid-cols-3 gap-4 h-[533.7px]"
      >
        <div className="bg-white flex flex-col p-4 rounded-[20px] col-span-2 outline-none resize-none">
          <input
            type="text"
            value={title}
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
            className="placeholder:text-2xl text-2xl font-bold py-3 placeholder:font-bold outline-none border-b w-full"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full h-full outline-none py-3 resize-none"
          />
        </div>

        <section className="flex flex-col gap-4 w-full">
          <div className="bg-white p-4 flex flex-col w-full gap-1 rounded-[20px] h-full">
            <span className="font-medium py-2 border-b">Publicar</span>
            <ul className="flex flex-col py-2 gap-1 border-b">
              <li className="w-full flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <img src={ICON.file} alt="" />
                  <p>
                    Status: <span className="font-bold">Rascunho</span>
                  </p>
                </div>
                <Button variant="ghost">Editar</Button>
              </li>
              <li className="w-full flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <img src={ICON.eye} alt="" />
                  <p>
                    Visibilidade: <span className="font-bold">Público</span>
                  </p>
                </div>
                <Button variant="ghost">Editar</Button>
              </li>
            </ul>
            <div className="flex items-center py-2 justify-end gap-2">
              <Button variant={"outline"}>Salvar rascunho</Button>
              <Button
                type="submit"
                disabled={isUpdating}
                className="bg-RED-200"
              >
                {isUpdating ? "Atualizando..." : "Atualizar"}
              </Button>
            </div>
          </div>

          <div className="bg-white p-4 rounded-[20px] flex flex-col gap-2 h-full">
            <div className="w-full flex justify-between items-center">
              <span className="font-medium">Thumbnail</span>
              {previewImg && (
                <Button variant={"ghost"} onClick={handleResetImage}>
                  Remover
                </Button>
              )}
            </div>

            <img
              src={previewImg ?? image}
              alt="imagem de pré visualização"
              className="w-full h-[150px] object-contain rounded-[10px]"
            />

            <Input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImage}
            />
          </div>
        </section>
      </form>
    </main>
  )
}

export default EditNewsPage
