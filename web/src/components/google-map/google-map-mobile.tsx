import { useAgencies } from "@/hooks/api";
import { GOOGLE_CONFIG } from "./google-config";
import { GoogleMap } from "@react-google-maps/api";
import { useGoogleMaps } from "@/hooks/usseGoogleMaps";
import GoogleMapMarkerTest from "./google-map-marker-test";
import GoogleMapMarkerDefault from "./google-map-marker-default";

export default function GMapMobile() {
  const { agencies } = useAgencies();

  const { isLoaded, onLoad, onUnmount, selectedMarker, setSelectedMarker } =
    useGoogleMaps();

  return (
    <div className="lg:hidden block">
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
