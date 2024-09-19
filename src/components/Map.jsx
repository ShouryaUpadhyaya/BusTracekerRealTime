import React, { useState, useEffect, useRef } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";
import busIcon from "./assets/bus.png";
function Map({
  userLatitude,
  userLongitude,
  BusLatitude = 12.974097955600998,
  BusLongitude = 79.16401539898179,
}) {
  const mapRef = useRef(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDHYX_OWuy-Ts6V3XurRwnhR1ATYY8zLIw",
  });
  const styleMap = {
    width: "100%",
    height: "100vh",
  };
  useEffect(() => {
    if (
      isLoaded &&
      userLatitude &&
      userLongitude &&
      BusLatitude &&
      BusLongitude
    ) {
      const directionsService = new window.google.maps.DirectionsService();
      let request = {
        origin: {
          lat: parseFloat(userLatitude),
          lng: parseFloat(userLongitude),
        },
        destination: {
          lat: parseFloat(BusLatitude),
          lng: parseFloat(BusLongitude),
        },
        travelMode: window.google.maps.TravelMode.DRIVING,
      };
      const calculateRoute = () => {
        directionsService.route(request, (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            setDirectionsResponse(result);
          } else {
            console.error(`Error fetching directions ${status}`);
          }
        });
      };

      calculateRoute(); // Call function to calculate route
    }
  }, [isLoaded, userLatitude, userLongitude, BusLatitude, BusLongitude]);

  if (!isLoaded) {
    return <h1>Error map not loaded</h1>;
  }
  return (
    <>
      <h1>map here</h1>
      <GoogleMap
        onLoad={(map) => (mapRef.current = map)}
        center={{
          lat: userLatitude,
          lng: userLongitude,
        }}
        zoom={30}
        mapContainerStyle={styleMap}
      >
        {userLatitude && userLongitude && (
          <Marker
            position={{ lat: userLatitude, lng: userLongitude }}
            label="user"
          />
        )}
        {BusLatitude && BusLongitude && (
          <Marker
            position={{ lat: BusLatitude, lng: BusLongitude }}
            label="bus"
            icon={{
              url: busIcon,
              scaledSize: new window.google.maps.Size(40, 40),
            }}
          />
        )}
        {directionsResponse && (
          <DirectionsRenderer directions={directionsResponse} />
        )}
      </GoogleMap>
    </>
  );
}

export default Map;
