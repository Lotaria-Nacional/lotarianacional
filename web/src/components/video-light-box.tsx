import { IoCloseOutline } from "react-icons/io5"

type Props = {
  handleClose: () => void
  videoURL: string
}

const VideoLightBox = ({ handleClose, videoURL }: Props) => {
  return (
    <div
      onClick={handleClose}
      className="fixed bg-black/70 w-full h-full inset-0 flex items-center justify-center z-[2000]"
    >
      <div className="flex flex-col w-full p-3 lg:p-0 lg:w-3/5 h-[350px] md:h-[450px] lg:h-2/3 gap-2">
        <div className="w-full flex justify-end ">
          <button
            onClick={handleClose}
            className="flex items-center gap-1 bg-white text-black px-3 py-2 rounded-lg"
          >
            Fechar
            <IoCloseOutline size={24} />
          </button>
        </div>
        <iframe
          allowFullScreen
          onClick={(e) => e.stopPropagation()}
          className="rounded-lg w-full h-full"
          // src="https://www.youtube.com/embed/YPmQ1zglaGg"
          src={videoURL}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </div>
  )
}

export default VideoLightBox
