import React, { useState, useEffect,useContext } from "react";
import { DataStore } from "../DataStore";
import Card from "./Card";
import Header from "./Header";

export default function Homepage() {

  const {allCities,setAllCities} = useContext(DataStore);

  return (
    <div>
      <Header />

      <div className="d-flex justify-content-center flex-wrap">
        {allCities.map((city) => {
          return <Card key={city._id} name={city.cityName} />;
        })}
      </div>
    </div>
  );
}
