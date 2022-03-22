import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Card({ name }) {
  const [cityDatas, setCityDatas] = useState({ main: { temp: 0 } });

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=c9691a6409a4f0aa1a1e0eba2d123e0b`
    )
      .then((data) => data.json())
      .then((data) => data)
      .then((data) => setCityDatas(data));
  }, []);

  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          {(cityDatas.main.temp + -272.15).toFixed(1)}
        </p>
        <Link to={`/city/${name}`} className="btn btn-dark">
          Go somewhere
        </Link>
      </div>
    </div>
  );
}

export default Card;
