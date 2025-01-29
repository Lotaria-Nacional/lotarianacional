import usePopUp from "@/hooks/usePopUp"
import { IMAGES } from "@/constants/assets"
import ComoJogarVideo from "./como-jogar-video"
import { PiPlayCircleThin } from "react-icons/pi"

const ComoJogarVideoContainer = () => {
  const { handleClosePopUp, handleOpenPopUp, isPopUpOpen } = usePopUp()
  return (
    <>
      <div className="relative w-full h-[300px] md:h-[450px] lg:h-full">
        <img
          alt="video thumbnail"
          src={IMAGES.videoThumbnail}
          className="w-full h-[350px] object-cover rounded-[10px]"
        />
        <button
          onClick={handleOpenPopUp}
          className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-40"
        >
          <PiPlayCircleThin size={120} color="#ccc" />
        </button>
      </div>
      {isPopUpOpen && <ComoJogarVideo handleClose={handleClosePopUp} />}
    </>
  )
}

export default ComoJogarVideoContainer
