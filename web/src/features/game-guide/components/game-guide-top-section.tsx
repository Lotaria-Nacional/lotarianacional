import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/shared/components/ui/dialog"
import { FaPlayCircle } from "react-icons/fa"
import Button from "@/shared/components/ui/button/button"

export default function GameGuideTopSection() {
  return (
    <section className="w-full flex items-center justify-between pb-2 lg:pb-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            <FaPlayCircle />
            Ver o tutorial
          </Button>
        </DialogTrigger>
        <DialogContent className="p-0">
          <video
            controls
            autoPlay
            className="w-full h-full object-cover object-center rounded-[10px]"
          >
            <source src="/game-guide/game-guide-video.mp4" />
          </video>
        </DialogContent>
      </Dialog>
    </section>
  )
}
