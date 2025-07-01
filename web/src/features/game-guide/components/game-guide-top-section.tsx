import { MdClose } from "react-icons/md";
import { FaPlayCircle } from "react-icons/fa";
import usePopUp from "@/shared/hooks/usePopUp";
import Button from "@/shared/components/ui/button/button";

export default function GameGuideTopSection() {
  const { handleOpenPopUp, handleClosePopUp, isPopUpOpen } = usePopUp();

  return (
    <section className="w-full flex items-center justify-between pb-2 lg:pb-4">
      <Button onClick={handleOpenPopUp}>
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
              <source src="/game-guide/game-guide-video.mp4" />
            </video>
          </div>
        </div>
      )}
    </section>
  );
}
