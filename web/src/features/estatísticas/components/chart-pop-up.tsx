import BarChart from "./bar-chart"
import { HiXCircle } from "react-icons/hi"

type Props = {
  closePopUp: () => void
}

const ChartPopUp = ({ closePopUp }: Props) => {
  return (
    <div className="z-[2000000] w-full h-full p-5 fixed inset-0 bg-LT_BLACK/70 transition-all ease-in-out duration-200 flex items-center justify-center">
      <div className="w-full xl:w-3/4 h-60 xl:h-[650px] flex flex-col gap-2 bg-white rounded-xl p-4">
        <div className="w-full flex justify-end">
          <HiXCircle
            size={32}
            onClick={closePopUp}
            className="cursor-pointer"
          />
        </div>

        <div className="flex-1">
          <BarChart />
        </div>
      </div>
    </div>
  )
}

export default ChartPopUp
