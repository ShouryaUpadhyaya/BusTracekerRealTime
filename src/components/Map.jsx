import React, { useEffect, useRef } from "react";
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
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDHYX_OWuy-Ts6V3XurRwnhR1ATYY8zLIw",
  });
  const styleMap = {
    width: "100%",
    height: "100vh",
  };
  if (!isLoaded) {
    return <h1>Error map not loaded</h1>;
  }
  return (
    <>
      <h1>map here</h1>
      <GoogleMap
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
        {/* {display markers for user and bus} */}
      </GoogleMap>
    </>
  );
}

export default Map;
