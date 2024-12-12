import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import GoogleMapMobile from "./mobile/google-map-mobile"
import { APIProvider, Map } from "@vis.gl/react-google-maps"

const GOOGLE_API_KEY = "AIzaSyBzEhJqArNq2FQjT_kwB3JOKjTtWBvj4tM"

const GoogleMap = () => {
  const { pathname } = useLocation()
  const [isMobile, setIsMobile] = useState(window.innerWidth < 776)

  useEffect(() => {
    const handleScreenSize = () => {
      setIsMobile(window.innerWidth < 767)
    }

    window.addEventListener("resize", handleScreenSize)

    return () => window.removeEventListener("resize", handleScreenSize)
  }, [])

  if (pathname === "/agencias" && isMobile) return <GoogleMapMobile />

  return (
    <div className="relative w-full h-[350px]">
      <APIProvider apiKey={GOOGLE_API_KEY}>
        <Map
          defaultZoom={14}
          defaultCenter={{ lat: -8.838333, lng: 13.234444 }}
          className="absolute w-full h-full inset-0"
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        />
      </APIProvider>
    </div>
  )
}

export default GoogleMap
