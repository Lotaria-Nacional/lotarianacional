import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { useRef } from "react"
import { ChangeEvent, useState } from "react"

const MobileBanner = () => {
  const mBanner1Ref = useRef<HTMLInputElement | null>(null)
  const mBanner2Ref = useRef<HTMLInputElement | null>(null)
  const mBanner3Ref = useRef<HTMLInputElement | null>(null)

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

  const handleImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.files
    if (value) {
      const urlPreview = URL.createObjectURL(value[0])
      if (!urlPreview) {
        URL.revokeObjectURL(urlPreview)
      }
      setPrevDestkTopBanners({
        ...prevDestkTopBanners,
        banner1: urlPreview,
      })
    }
  }
  const handleSubmit = async () => {}

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1" className="bg-GRAY-100 px-4">
        <AccordionTrigger className="text-">Banner 1</AccordionTrigger>
        <AccordionContent className="flex items-center gap-4">
          <img src="banner-1.png" alt="" className="w-[350px]" />
          <div className="flex flex-col items-center gap-2">
            <input
              type="file"
              accept="image/*"
              ref={mBanner1Ref}
              style={{ display: "none" }}
            />
            <Button
              className="bg-GRAY-300"
              onClick={() => mBanner1Ref.current?.click()}
            >
              Alterar banner
            </Button>

            <Button className="bg-RED-200">Eliminar banner</Button>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="bg-GRAY-100 px-4">
        <AccordionTrigger className="text-">Banner 1</AccordionTrigger>
        <AccordionContent className="flex items-center gap-4">
          <img src="banner-1.png" alt="" className="w-[350px]" />
          <div className="flex flex-col items-center gap-2">
            <Button className="bg-GRAY-300">Alterar banner</Button>
            <Button className="bg-RED-200">Eliminar banner</Button>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default MobileBanner
