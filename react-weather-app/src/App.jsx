import React, { useState } from "react";
import CityList from "./component/cityList";
import CityForecast from "./component/cityForecast";
import './App.css'


function App() {
  const [selectedCity, setSelectedCity] = useState("");


  return (
    <div>
      <h1>Weather Forecast App</h1>
      <CityList selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
      {selectedCity && <CityForecast city={selectedCity} />}
    </div>
  )
}

export default App;
