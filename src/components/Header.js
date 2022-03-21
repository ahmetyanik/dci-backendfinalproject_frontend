import React, { useEffect, useState,useContext } from "react";
import { DataStore } from "../DataStore";

function Header() {

  const {cityAdded,setCityAdded} = useContext(DataStore);


  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const data = document.querySelector("#input");
      const value = await data.value;

      const result = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=67818b426d1cf9e2103d756347f88894`
      ).then((data) => data.json());

      if (result.name) {
        await fetch("http://localhost:4000/city", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ city: value }),
        });

        setCityAdded(result.name);
      } else {
        console.log("There is an error!!!");
      }
    } catch (err) {
      console.log("Fehlermeldung:", err);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <form  className="d-flex" onSubmit={submitHandler} >
            <input
              id="input"
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          
        </div>
      </div>
    </nav>
  );
}

export default Header;
