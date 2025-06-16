import { useAgencies } from "@/hooks/api";
import { GoogleMapConfigProps } from "./google-config";
import { GoogleMap } from "@react-google-maps/api";
import { useGoogleMaps } from "@/hooks/usseGoogleMaps";
import GoogleMapMarker from "./google-map-marker";
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
