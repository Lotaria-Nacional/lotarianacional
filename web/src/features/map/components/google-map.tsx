import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import GoogleMapMarker from "./google-map-marker";
import { GoogleMapConfigProps } from "@/lib/google-map";
import { useGoogleMaps } from "@/shared/hooks/usseGoogleMaps";
import GoogleMapMarkerDefault from "./google-map-marker-default";
import { GoogleMap as GOOGLE_MAP } from "@react-google-maps/api";
import { useAgencies } from "@/features/agency/hooks/useAgencies";

export default function GoogleMap() {
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
        <GOOGLE_MAP
          onLoad={onLoad}
          onUnmount={onUnmount}
          center={GoogleMapConfigProps.center}
          options={GoogleMapConfigProps.options}
          mapContainerStyle={GoogleMapConfigProps.mapContainerStyle}
        >
          {agencies &&
            agencies.length > 0 &&
            agencies.map((item, index) => (
              <GoogleMapMarker
                key={index}
                data={item}
                // @ts-ignore
                index={index}
                selectedMarker={selectedMarker}
                handleClick={setSelectedMarker}
              />
            ))}

          <GoogleMapMarkerDefault
            selectedMarker={selectedMarker}
            handleClick={setSelectedMarker}
          />
        </GOOGLE_MAP>
      ) : (
        <div>Carregando...</div>
      )}
    </div>
  );
}
