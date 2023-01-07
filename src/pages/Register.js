import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Register = () => {
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
          <h2 className="heading-secondary ma-bt-lg">Register your account</h2>
          <form className="form form--login">
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
                minLength="8"
              />
            </div>
            <div className="form__group ma-bt-md">
              <label className="form__label" for="confirmPassword">
                Confirm Password
              </label>
              <input
                className="form__input"
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                required
                minLength="8"
              />
            </div>
            <div className="form__group">
              <button className="btn btn--green">Register</button>
            </div>
            <p>
              Already have an account? <Link to={"/login"}>Sign in</Link> here.
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Register;
