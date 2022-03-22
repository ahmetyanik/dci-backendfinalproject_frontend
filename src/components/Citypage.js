import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

function Citypage() {
  const params = useParams();
  const city = params.cityname;

  const [selectedCity, setSelectedCity] = useState({weather:[{description:""}]});
  const [condition,setCondition] = useState("");

  console.log(selectedCity);
  

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c9691a6409a4f0aa1a1e0eba2d123e0b`
    )
      .then((data) => data.json())
      .then((data) => data)
      .then((data) => setSelectedCity(data));
  }, []);

  console.log(selectedCity.weather[0].description);

  async function getWetterCondition(){

    

    if(selectedCity.weather[0].description === "clear sky"){
        setCondition("clear")
    }else if(selectedCity.weather[0].description === "few clouds"){
        setCondition("fewClouds");
    
    }else if(selectedCity.weather[0].description === "scattered clouds"){
        setCondition("scatteredClouds")
    
    }else if(selectedCity.weather[0].description === "broken clouds"){
        setCondition("brokenClouds");
    
    }else if(selectedCity.weather[0].description === "scattered clouds"){
        setCondition("scatteredClouds");
    
    }else if(selectedCity.weather[0].description === "shower rain"){
        setCondition("showerRain");
    
    }else if(selectedCity.weather[0].description === "rain"){
        setCondition("rain");
    
    }else if(selectedCity.weather[0].description === "thunderstorm"){
        setCondition("thunderstorm");
    
    }else if(selectedCity.weather[0].description === "snow"){
        setCondition("snow");
    
    }else if(selectedCity.weather[0].description === "mist"){
        setCondition("mist");
    }else{
        setCondition("other");
    }

  }

  useEffect(()=>{
      getWetterCondition();
  });

  console.log("CONDITION:",condition);

  return (
    <div>
      <Header />

      <div style={{minHeight: "100vh"}} className={condition}>
        <div
         className="text-light bg-dark bg-opacity-25" style={{ fontSize: "5rem"}}
          
        >
          {selectedCity.name}
        </div>
      </div>
    </div>
  );
}

export default Citypage;
