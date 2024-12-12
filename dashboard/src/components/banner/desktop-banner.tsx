import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { SERVER_CONNECTION_ERROR, TRY_LATER_ERROR } from "@/constants/error"
import { isAxiosError } from "axios"
import { FormEvent, useRef } from "react"
import { ChangeEvent, useState } from "react"
import { toast } from "react-toastify"

type KeyProps = "banner1" | "banner2" | "banner3"

const DesktopBanner = () => {
  const dBanner1Ref = useRef<HTMLInputElement | null>(null)
  const dBanner2Ref = useRef<HTMLInputElement | null>(null)
  const dBanner3Ref = useRef<HTMLInputElement | null>(null)

  const [destkTopBanners, setDestkTopBanners] = useState({
    banner1: "",
    banner2: "",
    banner3: "",
  })
  const [prevDestkTopBanners, setPrevDestkTopBanners] = useState({
    banner1: "",
    banner2: "",
    banner3: "",
  })

  const handleImage = async (
    e: ChangeEvent<HTMLInputElement>,
    key: KeyProps
  ) => {
    const value = e.target.files
    if (value) {
      const urlPreview = URL.createObjectURL(value[0])
      if (!urlPreview) {
        URL.revokeObjectURL(urlPreview)
      }

      setPrevDestkTopBanners({
        ...prevDestkTopBanners,
        [key]: urlPreview,
      })
      setDestkTopBanners({
        ...destkTopBanners,
        [key]: value[0],
      })
    }
  }
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      console.log(destkTopBanners)
    } catch (error) {
      if (isAxiosError(error)) {
        return toast.error(error.response?.data.message)
      }
      if (isAxiosError(error) && !error.response) {
        return toast.error(TRY_LATER_ERROR)
      }
      return toast.error(SERVER_CONNECTION_ERROR)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Accordion type="single" collapsible>
        <AccordionItem
          value="item-1"
          className="bg-GRAY-100 rounded-[10px] px-4"
        >
          <AccordionTrigger className="text-">Banner 1</AccordionTrigger>
          <AccordionContent className="flex items-center gap-4">
            <img
              alt=""
              src={prevDestkTopBanners.banner1}
              className="w-[300px] h-[250px] object-contain"
            />
            <div className="flex flex-col items-center gap-2">
              <input
                type="file"
                ref={dBanner1Ref}
                accept={"image/*"}
                style={{ display: "none" }}
                onChange={(e) => handleImage(e, "banner1")}
              />
              <Button
                className="bg-GRAY-300"
                onClick={() => dBanner1Ref.current?.click()}
              >
                Alterar banner
              </Button>

              <Button className="bg-RED-200">Eliminar banner</Button>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="bg-GRAY-100 rounded-[10px] my-2 px-4"
        >
          <AccordionTrigger className="text-">Banner 2</AccordionTrigger>
          <AccordionContent className="flex items-center gap-4">
            <img
              alt=""
              src={prevDestkTopBanners.banner2}
              className="w-[300px] h-[250px] object-contain"
            />
            <div className="flex flex-col items-center gap-2">
              <input
                type="file"
                ref={dBanner2Ref}
                accept={"image/*"}
                style={{ display: "none" }}
                onChange={(e) => handleImage(e, "banner2")}
              />
              <Button
                className="bg-GRAY-300"
                onClick={() => dBanner2Ref.current!.click()}
              >
                Alterar banner
              </Button>

              <Button className="bg-RED-200">Eliminar banner</Button>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="bg-GRAY-100 rounded-[10px] px-4"
        >
          <AccordionTrigger className="text-">Banner 3</AccordionTrigger>
          <AccordionContent className="flex items-center gap-4">
            <img
              alt=""
              src={prevDestkTopBanners.banner3}
              className="w-[300px] h-[250px] object-contain"
            />
            <div className="flex flex-col items-center gap-2">
              <input
                type="file"
                accept={"image/*"}
                ref={dBanner3Ref}
                style={{ display: "none" }}
                onChange={(e) => handleImage(e, "banner3")}
              />
              <Button
                className="bg-GRAY-300"
                onClick={() => dBanner3Ref.current!.click()}
              >
                Alterar banner
              </Button>

              <Button className="bg-RED-200">Eliminar banner</Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Button type="submit" className="bg-YELLOW mt-2 self-start w-fit">
        Salvar alterações
      </Button>
    </form>
  )
}

export default DesktopBanner
