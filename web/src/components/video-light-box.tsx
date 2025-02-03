import { IoCloseOutline } from "react-icons/io5"
import { useEffect } from "react"

type Props = {
  handleClose: () => void
  videoURL: string
}

const VideoLightBox = ({ handleClose, videoURL }: Props) => {
  // Fechar o Lightbox ao pressionar a tecla "Esc"
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleClose])

  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 w-full h-full bg-black/80 flex items-center justify-center !z-[99999999]"
    >
      <div
        onClick={(e) => e.stopPropagation()} // Impedir que o Lightbox feche ao clicar no conteúdo
        className="flex flex-col w-full p-3 lg:p-0 lg:w-3/5 h-[350px] md:h-[450px] lg:h-2/3 gap-2 bg-black rounded-lg shadow-lg"
      >
        <div className="w-full flex justify-end">
          <button
            onClick={handleClose}
            className="flex items-center gap-1 bg-white text-black px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Fechar Lightbox"
          >
            Fechar
            <IoCloseOutline size={24} />
          </button>
        </div>
        <iframe
          src={videoURL}
          allowFullScreen
          className="rounded-lg w-full h-full"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          title="Vídeo"
        />
      </div>
    </div>
  )
}

export default VideoLightBox
