import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { DataStore } from "../DataStore";

function Card({ name }) {

  const {setCityAdded} = useContext(DataStore)

  const [cityDatas, setCityDatas] = useState({ main: { temp: 0 }, weather: [0]});

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=c9691a6409a4f0aa1a1e0eba2d123e0b`
    )
      .then((data) => data.json())
      .then((data) => data)
      .then((data) => setCityDatas(data));
  }, []);

  async function deleteCard(){

    console.log("BURASI CALISTI...");

     const response = await fetch(`https://weatherbackenddci.herokuapp.com/city/delete/${name}`,{
      method: 'PUT',
      Accept: "application/json",
      headers: {
        'Content-type': 'application/json' ,
        Authorization: `Bearer ${localStorage.weatherToken}`
    }})  
    
    
    setCityAdded("Deleted: "+name);
  }



  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <img src={`http://openweathermap.org/img/wn/${cityDatas.weather[0].icon}@2x.png`} className="card-img-top weather-icon m-auto" alt="weather icon" />
      <div className="card-body">
        <h5 className="card-title">{name.toUpperCase()}</h5>
        <p className="card-text">
          {(cityDatas.main.temp + -272.15).toFixed(1)+'°'}
        </p>
        <Link to={`/city/${name}`} className="btn btn-dark">
          More
        </Link>
        <button className="btn btn-danger mx-2" onClick={deleteCard}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Card;
