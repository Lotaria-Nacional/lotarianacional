import usePopUp from "@/hooks/usePopUp"
import { IMAGES } from "@/constants/assets"
import ComoJogarVideo from "./como-jogar-video"
import { FaPlayCircle } from "react-icons/fa"

const ComoJogarVideoContainer = () => {
  const { handleClosePopUp, handleOpenPopUp, isPopUpOpen } = usePopUp()
  return (
    <>
      <div className="relative w-full h-[230px] md:h-[550px]">
        <img
          alt="video thumbnail"
          src={IMAGES.videoThumbnail}
          className="w-full h-full object-cover rounded-[10px]"
        />
        <button
          onClick={handleOpenPopUp}
          className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-40"
        >
          <FaPlayCircle
            className="text-[60px] hover:scale-[0.94] ease duration-200 transition-all lg:text-[90px]"
            color="#fff"
          />
        </button>
      </div>
      {isPopUpOpen && <ComoJogarVideo handleClose={handleClosePopUp} />}
    </>
  )
}

export default ComoJogarVideoContainer
