import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import { useState } from "react";
import { DataStore } from "./DataStore";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";

// api adress: https://api.openweathermap.org/data/2.5/weather?q=Ankara&appid=a7ccf39f58624360e151dce17c818ef3

function App() {
  return (
    <div className="App">
      <DataStore.Provider>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
        </Routes>
      </DataStore.Provider>
    </div>
  );
}

export default App;
