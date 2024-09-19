import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
function Map({ userLatitude, userLongitude, BusLatitude, BusLongitude }) {
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
        {/* {display markers for user and bus} */}
      </GoogleMap>
    </>
  );
}

export default Map;
