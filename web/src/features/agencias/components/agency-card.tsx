import { HiPhone } from "react-icons/hi"
import { MdLocationPin } from "react-icons/md"

export type TAgency = {
  agencyName: string
  locationInText: string
  phoneNumber: string
  geoLocation: {
    latitude: number
    longitude: number
  }
}

type Props = {
  agency: TAgency
}

const AgencyCard = ({
  agency: { agencyName, locationInText, phoneNumber },
}: Props) => {
  return (
    <div className="w-full lg:w-[305px] h-[181px] p-5 rounded-xl radialGradient flex flex-col items-start justify-between">
      <header className="flex flex-col text-white gap-2 items-start">
        <h1 className="text-xl font-bold">Agência - {agencyName}</h1>
        <span className="text-base">{locationInText}</span>
      </header>

      <div className="w-full flex items-center justify-between text-base">
        <button className="flex text-white items-center gap-2 transition-all duration-300 ease-in-out hover:scale-[1.1] hover:bg-white hover:text-LT_RED-200 px-1 py-1 rounded-lg">
          <MdLocationPin size={24} />
          Ver no map
        </button>

        <a
          href={`tel:${phoneNumber}`}
          className="flex bg-white text-LT_RED-200 border hover:bg-transparent hover:text-white hover:border-white transition-all duration-300 ease-in-out items-center gap-2 px-2 rounded-lg h-[30px]"
        >
          <HiPhone size={24} />
          Ligar
        </a>
      </div>
    </div>
  )
}

export default AgencyCard
