import {
  LotariaMarket,
  ArreiouMarket,
  ElephantBetMarket,
} from "@/features/agency/components/agency-marker";
import { HiPhone } from "react-icons/hi";
import yellowPin from "/icons/yellow-pin.svg";
import { AgencyEntity } from "@/features/agency/@types/agency.type";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

type AgencyMapProps = { agencies?: AgencyEntity[] };
const LeafletMapMobile = ({ agencies }: AgencyMapProps) => {
  const lotariaIcon = new L.Icon({
    iconUrl: yellowPin,
    iconRetinaUrl: yellowPin,
    iconSize: new L.Point(50, 70),
    className: "bg-transparent",
  });

  return (
    <MapContainer
      zoom={10}
      center={[-8.817223708289081, 13.231914368768138]}
      className="h-[70vh] w-full lg:hidden block"
    >
      {/* Add a tile layer */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {agencies &&
        agencies.length > 0 &&
        agencies?.map((item, i) => (
          <Marker
            key={i}
            position={[item.latitude, item.longitude]}
            icon={
              item.type === "lotaria-nacional"
                ? LotariaMarket
                : item.type === "elephant-bet"
                ? ElephantBetMarket
                : ArreiouMarket
            }
          >
            <Popup>
              <div className="w-[320px] h-[181px] p-2 rounded-xl flex flex-col items-start justify-between">
                <header className="flex flex-col text-white gap-2 items-start">
                  <h1 className="text-xl font-bold">Agência - {item.name}</h1>
                  <span className="text-base">{item.location_text}</span>
                </header>

                <div className="w-full flex items-center justify-between text-base">
                  <a
                    href={`tel:${item.phone}`}
                    className="flex bg-white border group hover:border-white hover:bg-transparent transition-all duration-300 ease-in-out items-center gap-2 px-2 rounded-lg h-[30px]"
                  >
                    <HiPhone
                      size={24}
                      className="text-LT_RED-200 group-hover:text-white"
                    />
                    <span className="text-LT_RED-200 group-hover:text-white">
                      Ligar
                    </span>
                  </a>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      <Marker
        icon={lotariaIcon}
        position={[-8.813747300833915, 13.234881167766654]}
      >
        <Popup>
          <div className="w-[320px] lg:w-[305px] h-[181px] p-2 rounded-xl flex flex-col items-start justify-between">
            <header className="flex flex-col text-white gap-2 items-start">
              <h1 className="text-xl font-bold">Sede - Lotaria Nacional</h1>
              <span className="text-base">Mutamba, Rua Rainha Ginga 79</span>
            </header>

            <div className="w-full flex items-center justify-between text-base">
              <a
                href={"tel:+244923190007"}
                className="flex bg-white border group hover:border-white hover:bg-transparent transition-all duration-300 ease-in-out items-center gap-2 px-2 rounded-lg h-[30px]"
              >
                <HiPhone
                  size={24}
                  className="text-LT_RED-200 group-hover:text-white"
                />
                <span className="text-LT_RED-200 group-hover:text-white">
                  Ligar
                </span>
              </a>
            </div>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMapMobile;
