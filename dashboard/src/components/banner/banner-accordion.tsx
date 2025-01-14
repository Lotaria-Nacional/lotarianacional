import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "../ui/dialog"
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { toast } from "react-toastify"
import { LOGOS } from "@/constants/assets"
import { ChangeEvent, useState } from "react"
import { AddBannerType } from "./desktop-banner"
import { DeviceType, IBanner } from "@/interfaces"
import { useDeleteBanner } from "@/hooks/useDeleteBanner"

type Props = {
  banner: IBanner
  value: string
  isLoading: boolean
  device: DeviceType
  save: (data: AddBannerType) => void
}

const BannerAccordion = ({ value, save, device, banner, isLoading }: Props) => {
  const { handleDeleteBanner, isDeleting } = useDeleteBanner()
  const [previewImg, setPreviewImg] = useState<string | null>(null)
  const [file, setFile] = useState<File | null>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const preview = URL.createObjectURL(file)
      setPreviewImg(preview)
      setFile(file)
    }
  }

  const handleDelete = async () => {
    try {
      await handleDeleteBanner(banner.id)
      window.location.reload()
    } catch (error: any) {
      toast.error(error)
    }
  }

  const handleSave = async () => save({ image: file!, device })

  return (
    <AccordionItem
      className="bg-GRAY-100 my-2 rounded-[13px] px-4"
      value={value}
    >
      <AccordionTrigger>Banner {value}</AccordionTrigger>
      <AccordionContent className="grid grid-cols-2 gap-2 h-[250px] items-center justify-center">
        <div className="relative w-full h-full">
          <img
            alt="banner"
            src={banner?.image || LOGOS.red_logo}
            className="absolute inset-0 w-full h-full object-contain"
          />
        </div>

        <div className="h-full flex flex-col items-center gap-2 justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-GRAY-300">
                {banner?.image ? "Alterar" : "Adicionar"}
              </Button>
            </DialogTrigger>
            <DialogContent>
              {previewImg && (
                <img
                  src={previewImg}
                  className="w-[250px] h-[250px] object-contain"
                />
              )}
              <form>
                <Input type="file" accept="image/*" onChange={handleChange} />
              </form>
              <DialogFooter>
                <Button
                  disabled={isLoading}
                  variant={"destructive"}
                  onClick={handleSave}
                >
                  {isLoading ? "Salvando..." : "Salvar"}
                </Button>
                <DialogClose asChild>
                  <Button type="button" variant={"outline"}>
                    Cancelar
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button className="bg-RED-200" onClick={handleDelete}>
            {isDeleting ? "Eliminando..." : "Eliminar"}
          </Button>
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}

export default BannerAccordion
