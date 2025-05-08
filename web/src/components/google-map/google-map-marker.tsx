import { IAgency } from "@/interfaces";
import { SetStateAction } from "react";
import { HiPhone } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { MarkerF, InfoWindowF } from "@react-google-maps/api";
import arreiouMarker from "../../assets/icons/google-map/arreiou.svg";
import elephantMarker from "../../assets/icons/google-map/elephant-bet.svg";
import lotariaMarker from "../../assets/icons/google-map/lotaria.svg";

type Props = {
  selectedMarker: number | null;
  handleClick: React.Dispatch<SetStateAction<number | null>>;
  data: IAgency;
};

function GoogleMapMarker({ handleClick, selectedMarker, data }: Props) {
  const googleMapIcon = {
    url:
      data.type === "lotaria-nacional"
        ? lotariaMarker
        : data.type === "elephant-bet"
        ? elephantMarker
        : data.type === "arreiou"
        ? arreiouMarker
        : lotariaMarker,
    origin: new window.google.maps.Point(0, 0),
    anchor: new window.google.maps.Point(16, 32),
    scaledSize: new window.google.maps.Size(40, 32),
  };

  return (
    <MarkerF
      icon={googleMapIcon}
      onClick={() => handleClick(Number(data.id))}
      position={{ lat: data.latitude, lng: data.longitude }}
    >
      {selectedMarker === Number(data.id) && (
        <InfoWindowF position={{ lat: data.latitude, lng: data.longitude }}>
          <div className="w-[250px] h-[160px] lg:w-[305px] lg:h-[181px] bg-LT_RED-100 p-4 rounded-xl flex flex-col items-start justify-between">
            <button
              onClick={() => handleClick(null)}
              className="absolute top-1 right-2 text-white p-1 text-lg"
            >
              <MdClose />
            </button>

            <header className="flex flex-col text-white gap-2 items-start">
              <h1 className="text-base mg:text-xl font-bold">{data.name}</h1>
              <span className="text-sm lg:text-base">{data.location_text}</span>
            </header>

            <div className="w-full flex items-center justify-between text-base">
              <a
                href={`${data.phone}`}
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
        </InfoWindowF>
      )}
    </MarkerF>
  );
}

export default GoogleMapMarker;
