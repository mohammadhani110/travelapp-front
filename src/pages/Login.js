import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
// import { authenticateUser } from "../redux/slices/user";

const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [isDisabled, setIsDisabled] = useState(false);
  const handleChange = (key, value) => {
    setUserData((prevState) => {
      return { ...prevState, [key]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDisabled(true);
    if (userData.email === "") {
      return;
    }

    if (userData.password === "") {
      return;
    }
    if (userData.email.length >= 7 && userData.password.length >= 7) {
      const data = {
        email: userData.email,
        password: userData.password,
      };
      try {
        console.log("data", data);
        // authenticateUser(data);
        setIsDisabled(false);
      } catch (e) {
        console.log(e);
        setIsDisabled(false);
      }
    }
  };
  return (
    <>
      {/* <header className="header">
        <nav className="nav nav--tours">
          <a className="nav__el" href="/">
            All tours
          </a>
        </nav>
        <div className="header__logo">
          <img src="/img/logo-white.png" alt="Natours logo" />
        </div>
        <nav className="nav nav--user">
          <a className="nav__el" href="/login">
            Log in
          </a>
          <a className="nav__el nav__el--cta" href="#">
            Sign up
          </a>
        </nav>
      </header> */}
      <main className="main">
        <div className="login-form">
          <h2 className="heading-secondary ma-bt-lg">Log into your account</h2>
          <form className="form form--login" onSubmit={handleSubmit}>
            <div className="form__group">
              <label className="form__label" for="email">
                Email address
              </label>
              <input
                className="form__input"
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                onChange={(e) => handleChange(e.target.id, e.target.value)}
              />
            </div>
            <div className="form__group ma-bt-md">
              <label className="form__label" for="password">
                Password
              </label>
              <input
                className="form__input"
                id="password"
                type="password"
                placeholder="••••••••"
                required
                onChange={(e) => handleChange(e.target.id, e.target.value)}
                minLength="7"
              />
            </div>
            <div className="form__group">
              <button
                className={`btn ${!isDisabled ? "btn--green" : ""}`}
                type={"submit"}
                disabled={isDisabled}
              >
                Login
              </button>
            </div>
            <p>
              Need an account? <Link to={"/register"}>Sign up</Link> here.
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Login;
