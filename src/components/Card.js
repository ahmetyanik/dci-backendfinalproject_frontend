import React,{useState,useEffect,useContext} from "react";
import { DataStore } from "../DataStore";

function Card({ name }) {

  const [cityDatas,setCityDatas] = useState({});



  useEffect(()=>{
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=67818b426d1cf9e2103d756347f88894`
    )
      .then((data) => data.json())
      .then((data) => data.main)
      .then((data) => setCityDatas(data));

 
  },[])

  return (
    <div className="card m-1" style={{ width: "18rem" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
        {(cityDatas.temp + (-272.15)).toFixed(1)}
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default Card;
