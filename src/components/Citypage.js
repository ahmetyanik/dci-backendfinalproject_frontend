import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../logoweather.svg"

function Citypage() {
  const params = useParams();
  const city = params.cityname;

  const [selectedCity, setSelectedCity] = useState({ weather: [0], main: { temp: 0 } });
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

  console.log(selectedCity.weather[0].main);
  console.log(selectedCity.weather[0].description);

  async function getWetterCondition() {
    const weatherStatus = selectedCity.weather[0].main.toLowerCase();

    const weatherDescription = selectedCity.weather[0].description;

    if (weatherStatus === "clear") {
      setCondition("clear")

    } else if (weatherDescription === "few clouds") {
      setCondition("fewClouds");

    } else if (weatherDescription === "scattered clouds") {
      setCondition("scatteredClouds")

    } else if (weatherDescription === "broken clouds") {
      setCondition("brokenClouds");
    }
    else if (weatherStatus === "clouds") {
      setCondition("brokenClouds")

    } else if (weatherDescription === "shower rain") {
      setCondition("showerRain");

    } else if (weatherDescription === "rain") {
      setCondition("rain");

    } else if (weatherStatus === "rain") {
      setCondition("rain");

    } else if (weatherStatus === "thunderstorm") {
      setCondition("thunderstorm");

    } else if (weatherStatus === "snow") {
      setCondition("snow");

    } else if (weatherStatus === "mist") {
      setCondition("mist");
    } else {
      setCondition("other");
    }

  }

  useEffect(() => {
    getWetterCondition();
  });

  console.log("CONDITION:", condition);

  function upperCase(param) {
    const array = param.split(' ');

    for (let i = 0; i < array.length; i++) {
      array[i] = array[i][0].toUpperCase() + array[i].substr(1);
    }
    return array.join(" ");
  }
  console.log(upperCase("carol vargas"));


  return (
    <div style={{ minHeight: "100vh" }} className={`${condition} pt-5`}>
      <div className="container-logo-search pb-4 pt-1 mb-5">
        <img src={Logo} className="logo p-3"></img>
        <Link to={"/homepage"} className="" href="#">
          <button className="btn btn-danger mx-2">Go Home</button>
        </Link>
      </div>

      <div className="d-flex flex-column">
        <h2
          className="text-dark bg-light bg-opacity-50 box-citypage p-2" style={{ fontSize: "3rem" }}>{selectedCity.name}</h2>

        <div className="align-items-center text-citypage box-citypage bg-light bg-opacity-50 mt-2">
          <div className="d-flex flex-colum p-3">
            <label className='pe-3'>Temp</label>
            {(selectedCity.main.temp + -272.15).toFixed(1) + '°'}
          </div>
          <div className="d-flex p-3">
            <label className='pe-3'>Feels Like</label>
            {(selectedCity.main.feels_like + -272.15).toFixed(1) + '°'}
          </div>
          <div className="align-items-end">
            <label className='pe-3'>{/* {upperCase(selectedCity.weather[0].description)} */}{(selectedCity.weather[0].description)}</label>

            <img src={`http://openweathermap.org/img/wn/${selectedCity.weather[0].icon}@2x.png`} className="card-img-top weather-icon m-auto" alt="weather icon" />
          </div>
        </div>
        <div className={`${condition} img-weather mt-2`} ></div>
      </div>


    </div>
  );
}

export default Citypage;
