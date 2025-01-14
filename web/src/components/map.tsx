import "leaflet/dist/leaflet.css"

import L from "leaflet"
import pin from "/icons/pin.svg"
import { HiPhone } from "react-icons/hi"
import { useAgencies } from "@/hooks/api"
import { useLocation } from "react-router-dom"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import { useEffect, useState } from "react"

const LeafletMap = () => {
  const { pathname } = useLocation()
  const { agencies } = useAgencies()

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (pathname === "/agencias" && windowWidth < 767) return null

  const mapIcon = new L.Icon({
    iconUrl: pin,
    iconRetinaUrl: pin,
    iconSize: new L.Point(25, 50),
    className: "bg-transparent ",
  })

  return (
    <MapContainer
      zoom={10}
      className="h-[400px] lg:h-[500px] lg:block hidden w-full"
      center={[-8.817223708289081, 13.231914368768138]}
    >
      {/* Add a tile layer */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Add a marker */}
      {agencies?.data.map((item) => (
        <Marker
          key={item.id}
          icon={mapIcon}
          position={[item.latitude, item.longitude]}
        >
          <Popup>
            <div className="w-[320px] lg:w-[305px] h-[181px] p-2 rounded-xl flex flex-col items-start justify-between">
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

export default LeafletMap
