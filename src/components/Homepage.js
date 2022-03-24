import React, { useContext, useEffect } from "react";
import { DataStore } from "../DataStore";
import Card from "./Card";
import Header from "./Header";

export default function Homepage() {
  const { allCities, setAllCities, cityAdded } = useContext(DataStore);

  async function getCitiesfromDb() {
    const response = await fetch("http://localhost:4000/city", {
      method: "GET",
      Accept: "application/json",
      headers: {
        Authorization: `Bearer ${localStorage.weatherToken}`,
      },
    })
      .then((data) => data.json())
      .then((data) => setAllCities(data));
  }

  useEffect(() => {
    getCitiesfromDb();
  }, [cityAdded]);

  return (
    <div className="homepage">
      <Header />
      <div
        style={{ minHeight: "40vh" }}
        className="container d-flex flex-wrap justify-content-center align-items-center"
      >
        {allCities.map((city,index) => {
          return <Card key={index} name={city} />;
        })}
      </div>
    </div>
  );
}
