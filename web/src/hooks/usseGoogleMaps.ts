import { useState,  useCallback } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import { GOOGLE_CREDENTIALS, GoogleMapConfigProps } from "@/components/google-map/google-config";

export type UseGoogleMapsReturn = {
    isLoaded:boolean
    map:google.maps.Map | null
    selectedMarker: number | null 
    onLoad:(map:google.maps.Map)=> void
    onUnmount:(map:google.maps.Map)=> void
    setSelectedMarker:React.Dispatch<React.SetStateAction<number | null>>
}

export function useGoogleMaps():UseGoogleMapsReturn{
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [selectedMarker, setSelectedMarker] = useState<number | null>(null);

  const { isLoaded } = useJsApiLoader(GOOGLE_CREDENTIALS);

  const onLoad = useCallback((map: google.maps.Map) => {
    const bound = new window.google.maps.LatLngBounds(GoogleMapConfigProps.center);
    map.fitBounds(bound);

    setMap(map);
  }, []);

  const onUnmount = useCallback((_map: google.maps.Map) => {
    setMap(null);
  }, []);

  return { isLoaded,map,onLoad,onUnmount,selectedMarker,setSelectedMarker }
}