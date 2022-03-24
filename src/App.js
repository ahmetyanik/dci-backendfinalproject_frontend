import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import { DataStore } from "./DataStore";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Citypage from "./components/Citypage";
import Register from "./components/Register";
import Login from "./components/Login";


function App() {

  const [cityAdded, setCityAdded] = useState('')

  const [allCities, setAllCities] = useState([])

  console.log("ALL CITIES:", allCities);
  console.log(cityAdded);



  return (
    <div className="App">
      <DataStore.Provider value={{allCities, setAllCities,cityAdded, setCityAdded}}>
        <Routes>
          <Route  path="/homepage" element={<Homepage />} />
          <Route  path="/city/:cityname" element={<Citypage/>} />
          <Route exact path="/" element={localStorage.weatherToken ? <Homepage/> : <Register/> } />
          <Route path="/login" element={<Login/>} />

        </Routes>
      </DataStore.Provider>
    </div>
  );
}

export default App;
