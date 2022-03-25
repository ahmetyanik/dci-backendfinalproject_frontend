import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import registerImg from "../img.png"

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const USER_PATH = "https://weatherbackenddci.herokuapp.com/user/login/";

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await fetch(USER_PATH, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((data) => data.json());

    const result = response.token;

    if(result){
      
      localStorage.weatherToken = await result;
  
      navigate("/homepage");
    }

  };

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#004aad" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="col-lg-12 col-xl-11">
              <div
                className="card text-black my-5"
                style={{ borderRadius: "25px" }}
              >
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Login
                      </p>

                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Your Email
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Password
                            </label>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="button"
                            className="btn btn-primary btn-lg btn-color"
                            onClick={submitHandler}
                          >
                            Login
                          </button>
                          <Link
                            to={"/"}
                            type="button"
                            className="btn btn-danger btn-lg mx-3"
                          >
                            Register
                          </Link>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src={registerImg}
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
