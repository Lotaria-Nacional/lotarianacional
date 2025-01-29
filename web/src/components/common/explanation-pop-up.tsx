import usePopUp from "@/hooks/usePopUp"
import { IoClose } from "react-icons/io5"

const ExplanationPopUp = () => {
  const { handleClosePopUp, isPopUpOpen } = usePopUp()

  return (
    <>
      {isPopUpOpen && (
        <div className="fixed top-0 left-0 z-[2000000] w-full h-screen flex items-center justify-center bg-black/70">
          <div className="relative w-[500px] h-[300px] rounded-lg bg-white flex items-center justify-center">
            <button
              onClick={handleClosePopUp}
              className="absolute top-3 right-3 text-2xl"
            >
              <IoClose />
            </button>
            <span>PopUp</span>
          </div>
        </div>
      )}
    </>
  )
}

export default ExplanationPopUp
