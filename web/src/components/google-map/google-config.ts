export const GOOGLE_CONFIG = {
    CONTAINER_STYLE : {
        width: "100%",
        height: "500px",
    },

    CENTER : {
        lat: -8.814095017206808,
        lng: 13.234881167766654,
    },

 mapOptions: {
    minZoom: 6, 
    maxZoom: 17,
    zoom:13,
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