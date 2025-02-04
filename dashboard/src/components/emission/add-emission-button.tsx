import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import { PlusIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "../ui/input"

const AddEmissionButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-YELLOW self-end m-4">
          <PlusIcon />
          <span>Adicionar</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="flex items-center justify-center">
        <form className="flex flex-col gap-2 w-full items-center justify-center">
          <div className="size-[150px] bg-RED-200" />
          <div className="flex flex-col gap-2 w-full">
            <Input placeholder="Insira a url do vídeo" />
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default AddEmissionButton
