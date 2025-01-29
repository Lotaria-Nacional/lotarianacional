import UI from "../ui/index"
import usePopUp from "@/hooks/usePopUp"
import { FaFileDownload } from "react-icons/fa"
import ComoJogarManualSwiper from "./como-jogar-manual-swiper"

const ComoJogarTopSection = () => {
  const { handleClosePopUp, handleOpenPopUp, isPopUpOpen } = usePopUp()

  return (
    <section className="w-full flex border-b pb-6 items-center justify-between">
      <h1 className="font-bold text-[18px] lg:text-[34px] capitalize">
        Como jogar
      </h1>
      <UI.Button onClick={handleOpenPopUp} btn="red">
        <FaFileDownload />
        Ver manual
      </UI.Button>

      {isPopUpOpen && <ComoJogarManualSwiper handleClose={handleClosePopUp} />}
    </section>
  )
}

export default ComoJogarTopSection
