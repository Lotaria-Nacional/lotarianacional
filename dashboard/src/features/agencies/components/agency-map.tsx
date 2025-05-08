import {
  LotariaMarket,
  ArreiouMarket,
  CentralMarket,
  ElephantBetMarket,
} from "./map-marker"
import { isValidArray } from "@/lib/utils"
import { useGetAllAgencies } from "../hooks/query"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

const mapUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

function AgencyMap() {
  const { data } = useGetAllAgencies({ page: 1, pageSize: 20 })

  return (
    <MapContainer
      zoom={13}
      scrollWheelZoom={false}
      center={[-8.8252968, 13.2330273, 14]}
      className="absolute inset-0 w-full h-full rounded-card"
    >
      <TileLayer url={mapUrl} />
      {data && isValidArray(data.data) ? (
        data.data.map((agency) => (
          <Marker
            key={agency.id}
            icon={
              agency.type === "lotaria-nacional"
                ? LotariaMarket
                : agency.type === "elephant-bet"
                ? ElephantBetMarket
                : ArreiouMarket
            }
            position={[agency.latitude, agency.longitude]}
          >
            <Popup>{agency.name}</Popup>
          </Marker>
        ))
      ) : (
        <Marker
          icon={CentralMarket}
          position={[-8.813967936136919, 13.235062319673238]}
        >
          <Popup>Lotaria Nacional</Popup>
        </Marker>
      )}
    </MapContainer>
  )
}

export default AgencyMap
