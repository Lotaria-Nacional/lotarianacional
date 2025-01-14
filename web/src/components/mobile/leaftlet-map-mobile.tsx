import L from "leaflet"
import pin from "/icons/pin.svg"
import "leaflet/dist/leaflet.css"
import { HiPhone } from "react-icons/hi"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import { IAgency } from "@/interfaces"

type AgencyMapProps = { agencies?: IAgency[] }
const LeafletMapMobile = ({ agencies }: AgencyMapProps) => {
  const mapIcon = new L.Icon({
    iconUrl: pin,
    iconRetinaUrl: pin,
    iconSize: new L.Point(25, 50),
    className: "bg-transparent ",
  })

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

      {/* Add a marker */}
      {agencies?.map((item, i) => (
        <Marker
          key={i}
          position={[item.latitude, item.longitude]}
          icon={mapIcon}
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
    </MapContainer>
  )
}

export default LeafletMapMobile
