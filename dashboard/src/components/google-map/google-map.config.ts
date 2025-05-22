import lotariaMarker from "@/assets/icons/lotaria.svg";
import arreiouMarker from "@/assets/icons/arreiou.svg";
import elephantMarker from "@/assets/icons/elephant-bet.svg";
import { AgencyEntity } from "@/features/agencies/types";

export const GOOGLE_CONFIG = {
    CONTAINER_STYLE : {
        width: "100%",
        height:"100%",
        borderRadius:"16px"
    },

    CENTER : {
        lat: -8.814095017206808,
        lng: 13.234881167766654,
    },

 mapOptions: {
    minZoom: 10, 
    maxZoom: 16,
    zoom: 12,
    styles: [
        {
        featureType: "all",
        elementType: "labels",
        stylers: [{ visibility: "on" }],
        },
        {
        featureType: "poi",
        stylers: [{ visibility: "off" }],
        },

        {
        featureType: "administrative",
        stylers: [{ visibility: "on" }],
        },
    ],

    disableDefaultUI: true,
    }

}
export const GOOGLE_CREDENTIALS = {
    id: import.meta.env.VITE_APP_API_GOOGLE_MAP_ID,
    googleMapsApiKey: import.meta.env.VITE_APP_API_GOOGLE_MAP_API,
  }

export const getGoogleMapIcon = (data:AgencyEntity)=> {
    // Define the icon based on the type of agency 
   return { 
    url: data.type === "lotaria-nacional"
        ? lotariaMarker
        : data.type === "elephant-bet"
        ? elephantMarker
        : data.type === "arreiou"
        ? arreiouMarker
        : lotariaMarker,
    origin: new window.google.maps.Point(0, 0),
    anchor: new window.google.maps.Point(16, 32),
    scaledSize: new window.google.maps.Size(40, 32)
}
  };
