import GoogleMapMarker from "./google-map-marker";
import { GoogleMap } from "@react-google-maps/api";
import { GoogleMapConfigProps } from "@/lib/google-map";
import { useGoogleMaps } from "@/shared/hooks/usseGoogleMaps";
import GoogleMapMarkerDefault from "./google-map-marker-default";
import { useFetchManyAgencies } from "@/features/agency/hooks/use-fetch-many-agencies";

export default function GoogleMapMobile() {
  const { data: agencies } = useFetchManyAgencies();

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
