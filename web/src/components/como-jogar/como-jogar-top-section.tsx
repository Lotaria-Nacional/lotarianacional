import usePopUp from "@/hooks/usePopUp"
import { MdClose } from "react-icons/md"
import Button from "../ui/button/button"
import { FaPlayCircle } from "react-icons/fa"

const ComoJogarTopSection = () => {
  const { handleOpenPopUp, handleClosePopUp, isPopUpOpen } = usePopUp()
  return (
    <section className="w-full flex items-center justify-between border-b pb-4">
      <h1 className="text-[18px] lg:text-[20px] font-bold">
        Como jogar o Loto5/90
      </h1>

      <Button onClick={handleOpenPopUp} variant="red">
        <FaPlayCircle />
        <span className="hidden lg:block cursor-pointer">Ver o tutorial</span>
      </Button>
      {isPopUpOpen && (
        <div
          onClick={handleClosePopUp}
          className="fixed inset-0 w-full h-full bg-black/70 flex items-center justify-center z-[10000]"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-[90%] h-[300px]  md:w-[40%] md:h-[78%] rounded-[10px]"
          >
            <button
              onClick={handleClosePopUp}
              className="absolute z-[22] flex items-center justify-center -right-4 bg-white size-[40px] rounded-full -top-4"
            >
              <MdClose />
            </button>

            <video
              controls
              autoPlay
              className="absolute inset-0 w-full h-full object-cover object-center rounded-[10px]"
            >
              <source src="/como_jogar/video-como-jogar.mp4" />
            </video>
          </div>
        </div>
      )}
    </section>
  )
}

export default ComoJogarTopSection
