import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import { DataStore } from "./DataStore";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Citypage from "./components/Citypage";


function App() {

  const [cityAdded, setCityAdded] = useState('')

  const [allCities, setAllCities] = useState([])

  async function getCitiesfromDb() {
    fetch('http://localhost:4000/city').then(data=>data.json()).then(data=>setAllCities(data));

  }

    useEffect(()=>{
      getCitiesfromDb()
    },[cityAdded])

  return (
    <div className="App">
      <DataStore.Provider value={{allCities, setAllCities, setCityAdded}}>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/city/:cityname" element={<Citypage/>} />
        </Routes>
      </DataStore.Provider>
    </div>
  );
}

export default App;
