import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion"
import { LOGOS } from "@/constants/assets"
import { Button } from "../ui/button"

const DesktopBanner = () => {
  return (
    <Accordion type="single">
      {Array.from({ length: 3 }).map((_, index) => (
        <AccordionItem
          className="bg-GRAY-100 my-2 rounded-[13px] px-4"
          value={`banner-${index}`}
        >
          <AccordionTrigger>Banner {index + 1}</AccordionTrigger>
          <AccordionContent className="grid grid-cols-2 gap-2 h-[250px] items-center justify-center">
            <div className="relative w-full h-full">
              <img
                src={LOGOS.red_logo}
                className="absolute inset-0 w-full h-full object-contain"
                alt=""
              />
            </div>

            <div className="h-full flex flex-col items-center gap-2 justify-center">
              <Button className="bg-GRAY-300">Alterar</Button>
              <Button className="bg-RED-200">Eliminar</Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default DesktopBanner
