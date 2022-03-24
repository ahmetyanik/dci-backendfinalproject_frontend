import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataStore } from "../DataStore";
import Logo from "../logoweather.svg";

function Header() {
  const navigate = useNavigate();

  const { setCityAdded } = useContext(DataStore);

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const data = document.querySelector("#input");
      const value = await data.value;

      const result = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=c9691a6409a4f0aa1a1e0eba2d123e0b`
      ).then((data) => data.json());

      if (result.name) {
        await fetch("http://localhost:4000/city", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.weatherToken}`
          },
          body: JSON.stringify({ city: value }),
        });
        console.log("SEHIR EKLEME");
        setCityAdded(result.name);
      } else {
        console.log("There is an error!!!");
      }
    } catch (err) {
      console.log("Fehlermeldung:", err);
    }
  };

  return (
    <nav className="pt-5 pb-5">
      <div className="container-logo-search d-flex flex-column align-items-center">
        <Link to={"/"} className="" href="#">
          <img src={Logo} className="logo pt-4"></img>
        </Link>

        <div>
          <form className="" onSubmit={submitHandler}>
            <input
              id="input"
              className="form-control me-2 city mt-5"
              type="search"
              placeholder="City"
              aria-label="Search"
            />
            <button className="btn btn-outline-success m-3" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
      <button
        onClick={() => {
          localStorage.removeItem("weatherToken");
          navigate("/login");
        }}
      >
        Log Out
      </button>
    </nav>
  );
}

export default Header;
