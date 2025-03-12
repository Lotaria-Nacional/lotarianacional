import arreiouMarker  from "../../assets/icons/arreiou-marker.png"
import lotariaMarker from "../../assets/icons/lotaria-marker.png"
import elephantBetMarker from "../../assets/icons/elephat-bet-marker.png"
import sedeMarker from "../../assets/icons/sede.png"

import L from "leaflet"

const LotariaMarket = new L.Icon({
  iconUrl: lotariaMarker,
  iconRetinaUrl: lotariaMarker,
  iconSize: new L.Point(32, 42),
  className: "bg-transparent",
})

const ElephantBetMarket = new L.Icon({
  iconUrl: elephantBetMarker,
  iconRetinaUrl: elephantBetMarker,
  iconSize: new L.Point(42, 42),
  className: "bg-transparent",
})

const ArreiouMarket = new L.Icon({
  iconUrl: arreiouMarker,
  iconRetinaUrl: arreiouMarker,
  iconSize: new L.Point(32, 42),
  className: "bg-transparent",
})

const CentralMarket = new L.Icon({
  iconUrl: sedeMarker,
  iconRetinaUrl: sedeMarker,
  iconSize: new L.Point(42, 42),
  className: "bg-transparent",
})

export { LotariaMarket, ElephantBetMarket, ArreiouMarket, CentralMarket }
