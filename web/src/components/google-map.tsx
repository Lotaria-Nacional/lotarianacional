import { useCallback, useEffect, useState } from "react";
import arreiouMarker from "../assets/icons/arreiou-marker.png";
import lotariaMarker from "../assets/icons/lotaria-marker.png";
import elephantMarker from "../assets/icons/elephat-bet-marker.png";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { useLocation } from "react-router-dom";
import { useAgencies } from "@/hooks/api";

const CONTAINER_STYLE = {
  width: "100%",
  height: "500px",
};

const CENTER = {
  lat: -8.8150184385013,
  lng: 13.228683091857294,
};

// const _mapOptions = {
//   center: { lat: -8.8150184385013, lng: 13.228683091857294 },
//   zoom: 12,
//   styles: [
//     {
//       featureType: "all",
//       elementType: "labels",
//       stylers: [{ visibility: "off" }],
//     },
//     {
//       featureType: "poi",
//       stylers: [{ visibility: "off" }],
//     },
//     {
//       featureType: "road",
//       stylers: [{ visibility: "off" }],
//     },
//     {
//       featureType: "transit",
//       stylers: [{ visibility: "off" }],
//     },
//     {
//       featureType: "administrative",
//       stylers: [{ visibility: "off" }],
//     },
//   ],
// };

export default function GMap() {
  const { pathname } = useLocation();
  const { agencies } = useAgencies();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (pathname === "/agencias" && windowWidth < 767) return null;

  const [_map, setMap] = useState<google.maps.Map | null>(null);

  const { isLoaded } = useJsApiLoader({
    id: "",
    googleMapsApiKey: "",
  });

  const onLoad = useCallback((map: google.maps.Map) => {
    const bound = new window.google.maps.LatLngBounds(CENTER);
    map.fitBounds(bound);

    setMap(map);
  }, []);

  const onUnmount = useCallback((_map: google.maps.Map) => {
    setMap(null);
  }, []);

  return (
    <>
      {isLoaded ? (
        <GoogleMap
          zoom={15}
          onLoad={onLoad}
          onUnmount={onUnmount}
          center={CENTER}
          mapContainerStyle={CONTAINER_STYLE}
        >
          {agencies &&
            agencies.data.length > 0 &&
            agencies.data.map((item) => (
              <MarkerF
                key={item.id}
                icon={{
                  url:
                    item.type === "arreiou"
                      ? arreiouMarker
                      : item.type === "elephant-bet"
                      ? elephantMarker
                      : lotariaMarker,
                  scaledSize: new window.google.maps.Size(24, 32),
                  origin: new window.google.maps.Point(0, 0),
                  anchor: new window.google.maps.Point(16, 32),
                }}
                position={{ lat: -8.816059353857066, lng: 13.235186532472495 }}
              >
                <></>
                <></>
              </MarkerF>
            ))}
          <MarkerF
            icon={{
              url: lotariaMarker,
              scaledSize: new window.google.maps.Size(24, 32),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(16, 32),
            }}
            position={{ lat: -8.813747300833915, lng: 13.234881167766654 }}
          >
            <></>
          </MarkerF>
        </GoogleMap>
      ) : (
        <div>Carregando...</div>
      )}
    </>
  );
}
