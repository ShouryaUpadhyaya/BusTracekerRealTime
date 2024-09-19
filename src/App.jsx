import { useState } from "react";
import "./App.css";
import Map from "./components/Map";
function App() {
  const [userLatitude, setUserLatitude] = useState(null);
  const [userLongitude, setUserLongiitude] = useState(null);

  let geo = navigator.geolocation;
  let CurrentLocation = geo.watchPosition((position) => {
    setUserLatitude(position.coords.latitude);
    setUserLongiitude(position.coords.longitude);
    console.log(Number(userLatitude), Number(userLongitude));
  });

  return (
    <>
      <h4>
        Current location: latitude = {userLatitude} , longitude ={" "}
        {userLongitude}{" "}
      </h4>
      <Map
        userLatitude={parseFloat(userLatitude)}
        userLongitude={parseFloat(userLongitude)}
      />
    </>
  );
}

export default App;
