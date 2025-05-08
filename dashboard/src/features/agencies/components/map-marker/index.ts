import { ICON } from "@/assets"
import L from "leaflet"

const IconPoint = {
  left: 25,
  right: 31,
}

const LotariaMarket = new L.Icon({
  iconUrl: ICON.lotariaMarker,
  iconRetinaUrl: ICON.lotariaMarker,
  iconSize: new L.Point(IconPoint.left, IconPoint.right),
  className: "bg-transparent",
})

const ElephantBetMarket = new L.Icon({
  iconUrl: ICON.elephantBetMarker,
  iconRetinaUrl: ICON.elephantBetMarker,
  iconSize: new L.Point(IconPoint.left, IconPoint.right),
  className: "bg-transparent",
})

const ArreiouMarket = new L.Icon({
  iconUrl: ICON.arreiouMarker,
  iconRetinaUrl: ICON.arreiouMarker,
  iconSize: new L.Point(IconPoint.left, IconPoint.right),
  className: "bg-transparent",
})

const CentralMarket = new L.Icon({
  iconUrl: ICON.sedeMarker,
  iconRetinaUrl: ICON.sedeMarker,
  iconSize: new L.Point(30, 30),
  className: "bg-transparent",
})

export { LotariaMarket, ElephantBetMarket, ArreiouMarket, CentralMarket }
