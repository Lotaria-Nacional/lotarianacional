import { useAgencies } from "@/hooks/api";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import GoogleMapMarker from "./google-map-marker";
import { GoogleMap } from "@react-google-maps/api";
import { GoogleMapConfigProps } from "./google-config";
import { useGoogleMaps } from "@/hooks/usseGoogleMaps";
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
        </GoogleMap>
      ) : (
        <div>Carregando...</div>
      )}
    </div>
  );
}
