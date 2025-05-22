import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GoogleMap as Gmap } from "@react-google-maps/api";
import { GOOGLE_CONFIG } from "./google-map.config";
import { useGoogleMaps } from "@/hooks/use-google-map";
import { useGetAllAgencies } from "@/features/agencies/hooks/query";
import GoogleMapMarker from "./google-map-marker";

export default function GoogleMap() {
  const { pathname } = useLocation();
  const { data: agencies } = useGetAllAgencies({ page: 1 });

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { isLoaded, onLoad, onUnmount, selectedMarker, setSelectedMarker } =
    useGoogleMaps();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (pathname === "/agencias" && windowWidth < 767) return null;

  return (
    <div className="h-full rounded-card">
      {isLoaded ? (
        <Gmap
          onLoad={onLoad}
          onUnmount={onUnmount}
          center={GOOGLE_CONFIG.CENTER}
          options={GOOGLE_CONFIG.mapOptions}
          mapContainerStyle={GOOGLE_CONFIG.CONTAINER_STYLE}
        >
          {agencies &&
            agencies.data.length > 0 &&
            agencies.data.map((item, index) => (
              <GoogleMapMarker
                key={index}
                data={item}
                selectedMarker={selectedMarker}
                handleClick={setSelectedMarker}
              />
            ))}
        </Gmap>
      ) : (
        <div>Carregando...</div>
      )}
    </div>
  );
}
