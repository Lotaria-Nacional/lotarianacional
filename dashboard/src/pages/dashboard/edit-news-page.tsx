import { isAxiosError } from "axios"
import { toast } from "react-toastify"
import { ICON } from "@/constants/assets"
import { getNewsById, updateNews } from "@/api/news.api"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useParams } from "react-router-dom"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"

const EditNewsPage = () => {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(true)

  const [title, setTitle] = useState("")
  const [image, setImage] = useState<any>()
  const [description, setDescription] = useState("")
  const [previewImg, setPreviewImg] = useState<string | null>(null)

  const handleSubmit = async () => {}

  useEffect(() => {
    const fetch = async () => {
      const data = await getNewsById(id!)
      setTitle(data.title)
      setImage(data.image)
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
              <Button type="submit" disabled={isLoading} className="bg-RED-200">
                {isLoading ? "Atualizando..." : "Atualizar"}
              </Button>
            </div>
          </div>

          <div className="bg-white p-4 rounded-[20px] flex flex-col gap-2 h-full">
            <span className="font-medium">Thumbnail</span>

            <img
              src={previewImg ?? image}
              alt="imagem de pré visualização"
              className="w-full h-[150px] object-contain rounded-[10px]"
            />

            <Input
              type="file"
              name="image"
              accept="image/*"
              // onChange={handleImage}
            />
          </div>
        </section>
      </form>
    </main>
  )
}

export default EditNewsPage
