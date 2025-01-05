import BarChart from "./bar-chart"
import { IStats } from "@/interfaces"
import { IoCloseOutline } from "react-icons/io5"

type Props = {
  closePopUp: () => void
  statsData?: IStats[]
}

const ChartPopUp = ({ statsData, closePopUp }: Props) => {
  return (
    <div
      onClick={closePopUp}
      className="z-[10000] w-full h-full p-5 fixed inset-0 bg-LT_BLACK/70 transition-all ease-in-out duration-200 flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full xl:w-3/4 h-auto xl:h-[650px] flex flex-col gap-2 bg-white rounded-xl p-4"
      >
        <div className="w-full flex justify-end text-LT_GRAY-200">
          <IoCloseOutline
            size={32}
            onClick={closePopUp}
            className="cursor-pointer"
          />
        </div>

        <div className="flex-1">
          <BarChart stats={statsData} />
        </div>
      </div>
    </div>
  )
}

export default ChartPopUp
