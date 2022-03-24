import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../logoweather.svg"

function Citypage() {
  const params = useParams();
  const city = params.cityname;

  const [selectedCity, setSelectedCity] = useState({ weather: [{ description: "" }], main: { temp: 0 } });
  const [condition, setCondition] = useState("");

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

  async function getWetterCondition() {



    if (selectedCity.weather[0].description === "clear sky") {
      setCondition("clear")
    } else if (selectedCity.weather[0].description === "few clouds") {
      setCondition("fewClouds");

    } else if (selectedCity.weather[0].description === "scattered clouds") {
      setCondition("scatteredClouds")

    } else if (selectedCity.weather[0].description === "broken clouds") {
      setCondition("brokenClouds");

    } else if (selectedCity.weather[0].description === "scattered clouds") {
      setCondition("scatteredClouds");

    } else if (selectedCity.weather[0].description === "shower rain") {
      setCondition("showerRain");

    } else if (selectedCity.weather[0].description === "rain") {
      setCondition("rain");

    } else if (selectedCity.weather[0].description === "thunderstorm") {
      setCondition("thunderstorm");

    } else if (selectedCity.weather[0].description === "snow") {
      setCondition("snow");

    } else if (selectedCity.weather[0].description === "mist") {
      setCondition("mist");
    } else {
      setCondition("other");
    }

  }

  useEffect(() => {
    getWetterCondition();
  });

  console.log("CONDITION:", condition);

  return (
    <div style={{ minHeight: "100vh" }} className={condition}>
      <div className="container-logo-search pb-4 pt-1 mb-5">
        <img src={Logo} className="logo p-3"></img>
        <Link to={"/homepage"} className="" href="#">
         <button className="btn btn-danger mx-2">Go Home</button>
        </Link>
      </div>

      <div>
        <div
          className="text-light bg-dark bg-opacity-25 box-citypage" style={{ fontSize: "4rem" }}

        >
          {selectedCity.name}
          <div className="d-flex flex-column align-items-center fs-1">
            <div className="d-flex p-3">
              <label className='pe-3'>Temp</label>
              {(selectedCity.main.temp + -272.15).toFixed(1) + '°'}
            </div>
            <div className="d-flex p-3">
              <label className='pe-3'>Feels Like</label>
              {(selectedCity.main.feels_like + -272.15).toFixed(1) + '°'}
            </div>
            <div>
            <label className='pe-3'>{(selectedCity.weather[0].main)}</label>
            
            <img src={`http://openweathermap.org/img/wn/${selectedCity.weather[0].icon}@2x.png`} className="card-img-top weather-icon m-auto" alt="weather icon" />
              
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Citypage;
