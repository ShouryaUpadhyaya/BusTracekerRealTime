import { useState } from "react";
import "./App.css";
import Map from "./components/Map";
function App() {
  const [userLatitude, setUserLatitude] = useState(null);
  const [userLongitude, setUserLongiitude] = useState(null);
  const [duration, setDuration] = useState("loading");
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
        {userLongitude} duration: {duration}
      </h4>
      <Map
        userLatitude={parseFloat(userLatitude)}
        userLongitude={parseFloat(userLongitude)}
        duration={duration}
        setDuration={setDuration}
      />
    </>
  );
}

export default App;
