import { APIProvider, Map } from "@vis.gl/react-google-maps"

const GoogleMap = () => {
  const GOOGLE_API_KEY = "AIzaSyBzEhJqArNq2FQjT_kwB3JOKjTtWBvj4tM"
  return (
    <APIProvider apiKey={GOOGLE_API_KEY}>
      <Map
        defaultZoom={14}
        defaultCenter={{ lat: -8.838333, lng: 13.234444 }}
        className="absolute w-full h-full inset-0"
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      />
    </APIProvider>
  )
}

export default GoogleMap
