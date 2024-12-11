import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ICON } from "@/constants/assets"
import { ChangeEvent, FormEvent, useState } from "react"

const AddNewsPage = () => {
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")
  const [previewImg, setPreviewImg] = useState<string | null>(null)

  const handlePreviewImage = (e: ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files
    if (image) {
      const previewImgURL = URL.createObjectURL(image[0])
      setPreviewImg(previewImgURL)
    }
  }

  const handleSubmit = (e: FormEvent) => {}

  return (
    <main className="flex items-center justify-center w-full h-full">
      <form className="w-[1103px] grid grid-cols-3 gap-4 h-[533.7px]">
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
              <Button className="bg-RED-200">Publicar</Button>
            </div>
          </div>

          <div className="bg-white p-4 rounded-[20px] flex flex-col gap-2 h-full">
            <span className="font-medium">Thumbnail</span>
            {previewImg && (
              <img
              // src={"banner-1.png"}
              src={previewImg}
              alt="imagem de pré visualização"
                className="w-full rounded-[10px]"
              />
            )}
            <Input type="file" />
          </div>
        </section>
      </form>
    </main>
  )
}

export default AddNewsPage
