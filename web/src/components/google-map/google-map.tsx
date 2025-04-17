import { useAgencies } from "@/hooks/api";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GOOGLE_CONFIG } from "./google-config";
import { GoogleMap } from "@react-google-maps/api";
import { useGoogleMaps } from "@/hooks/usseGoogleMaps";
import GoogleMapMarkerTest from "./google-map-marker-test";
import GoogleMapMarkerDefault from "./google-map-marker-default";

export default function GMap() {
  const { pathname } = useLocation();
  const { agencies } = useAgencies();

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
    <div className="hidden lg:block">
      {isLoaded ? (
        <GoogleMap
          onLoad={onLoad}
          onUnmount={onUnmount}
          center={GOOGLE_CONFIG.CENTER}
          options={GOOGLE_CONFIG.mapOptions}
          mapContainerStyle={GOOGLE_CONFIG.CONTAINER_STYLE}
        >
          {agencies &&
            agencies.data.length > 0 &&
            agencies.data.map((item, index) => (
              <GoogleMapMarkerTest
                key={index}
                data={item}
                selectedMarker={selectedMarker}
                handleClick={setSelectedMarker}
              />
            ))}
          <GoogleMapMarkerDefault
            selectedMarker={selectedMarker}
            handleClick={setSelectedMarker}
          />
        </GoogleMap>
      ) : (
        <div>Carregando...</div>
      )}
    </div>
  );
}
