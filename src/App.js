import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import { useState,useEffect } from "react";
import { DataStore } from "./DataStore";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";



function App() {

  const [allCities, setAllCities] = useState([]);
  const [cityAdded,setCityAdded] = useState("");

  const getAllCitiesFromDatabase = async () => {
    fetch("http://localhost:4000/city")
      .then((data) => data.json())
      .then((data) => setAllCities(data));
  };

  useEffect(() => {
    getAllCitiesFromDatabase();
  }, [cityAdded]);


  return (
    <div className="App">
      <DataStore.Provider value={{allCities,setAllCities,cityAdded,setCityAdded}}>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
        </Routes>
      </DataStore.Provider>
    </div>
  );
}

export default App;
