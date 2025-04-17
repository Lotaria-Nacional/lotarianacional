import { SetStateAction } from "react";
import { HiPhone } from "react-icons/hi";
import { MarkerF, OverlayViewF } from "@react-google-maps/api";

type Props = {
  iconURL: any;
  selectedMarker: number | null;
  handleClick: React.Dispatch<SetStateAction<number | null>>;
};

function GoogleMapMarker({ iconURL, handleClick, selectedMarker }: Props) {
  const googleMapIcon = {
    url: iconURL,
    origin: new window.google.maps.Point(0, 0),
    anchor: new window.google.maps.Point(16, 32),
    scaledSize: new window.google.maps.Size(24, 32),
  };

  return (
    <MarkerF
      icon={googleMapIcon}
      onClick={() => handleClick(1)}
      position={{ lat: -8.814095017206808, lng: 13.234881167766654 }}
    >
      {selectedMarker === 1 && (
        <OverlayViewF
          mapPaneName={"overlayMouseTarget"}
          position={{ lat: -8.814095017206808, lng: 13.234881167766654 }}
        >
          <div className="w-[250px] h-[160px] lg:w-[305px] lg:h-[181px] bg-LT_RED-100 p-4 rounded-xl flex flex-col items-start justify-between">
            <button
              onClick={() => handleClick(null)}
              className="absolute top-1 right-2 text-white p-1 text-lg"
            >
              ✕
            </button>

            <header className="flex flex-col text-white gap-2 items-start">
              <h1 className="text-base mg:text-xl font-bold">
                Sede - Lotaria Nacional
              </h1>
              <span className="text-sm lg:text-base">
                Mutamba, Rua Rainha Ginga 79
              </span>
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
        </OverlayViewF>
      )}
    </MarkerF>
  );
}

export default GoogleMapMarker;
