import { useAgencies } from "@/hooks/api";
import GoogleMapMarker from "./google-map-marker";
import { useCallback, useState } from "react";
import arreiouMarker from "../../assets/icons/arreiou-marker.png";
import lotariaMarker from "../../assets/icons/lotaria-marker.png";
import elephantMarker from "../../assets/icons/elephat-bet-marker.png";
import { MarkerF, GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import { GOOGLE_CONFIG, GOOGLE_CREDENTIALS } from "./google-config";

export default function GMapMobile() {
  const { agencies } = useAgencies();

  const [selectedMarker, setSelectedMarker] = useState<number | null>(null);

  const [_map, setMap] = useState<google.maps.Map | null>(null);

  const { isLoaded } = useJsApiLoader(GOOGLE_CREDENTIALS);

  const onLoad = useCallback((map: google.maps.Map) => {
    const bound = new window.google.maps.LatLngBounds(GOOGLE_CONFIG.CENTER);
    map.fitBounds(bound);

    setMap(map);
  }, []);

  const onUnmount = useCallback((_map: google.maps.Map) => {
    setMap(null);
  }, []);

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
              ></MarkerF>
            ))}

          <GoogleMapMarker
            iconURL={lotariaMarker}
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
