import { HiPhone } from "react-icons/hi";
import { AgencyEntity } from "../@types/agency.type";

type Props = {
  agency: AgencyEntity;
};

export default function AgencyCard({
  agency: { name, location_text, phone },
}: Props) {
  return (
    <div className="w-full lg:w-[305px] h-[181px] p-5 rounded-xl shrink-0 lottery-radial-gradient flex flex-col items-start justify-between">
      <header className="flex flex-col text-white gap-2 items-start">
        <h1 className="text-xl font-bold">Agência - {name}</h1>
        <span className="text-base">{location_text}</span>
      </header>

      <div className="w-full flex items-center justify-between text-base">
        <a
          href={`tel:${phone}`}
          className="flex bg-white text-LT_RED-200 border hover:bg-transparent hover:text-white hover:border-white transition-all duration-300 ease-in-out items-center gap-2 px-2 rounded-lg h-[30px]"
        >
          <HiPhone size={24} />
          Ligar
        </a>
      </div>
    </div>
  );
}
