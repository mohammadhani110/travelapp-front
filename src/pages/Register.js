import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { registerUser } from "../redux/slices/auth";
import { useDispatch } from "../redux/store";
import isEmpty from "../utils/isEmpty";

const styles = {
  border: "1px solid tomato",
  color: "tomato",
  padding: "1rem",
  borderRadius: "0.5rem",
  background: "rgb(255 179 166 / 50%)",
  fontSize: "1rem",
};
const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isDisabled, setIsDisabled] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const { login } = useAuth();
  const handleChange = (key, value) => {
    setUserData((prevState) => {
      return { ...prevState, [key]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDisabled(true);
    if (userData.name === "") {
      return;
    }
    if (userData.email === "") {
      return;
    }

    if (userData.password === "") {
      return;
    }
    if (userData.confirmPassword === "") {
      return;
    }
    if (
      userData.name.length >= 3 &&
      userData.email.length >= 7 &&
      userData.password === userData.confirmPassword
    ) {
      const data = {
        name: userData.name,
        email: userData.email,
        password: userData.password,
      };
      console.log("data", data);
      async function registerAPI() {
        const { error } = await dispatch(registerUser(data));
        console.log("res", error);
        if (!isEmpty(error)) {
          setError(error.message);
          setIsDisabled(false);
          return;
        }
        const returnUrl = localStorage.getItem("pathname");
        console.log("returnUrl", returnUrl);
        if (returnUrl) navigate(returnUrl);
      }
      registerAPI();
      // if (response?.error) {
      //   setError(response?.error);
      // }
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
          <h2 className="heading-secondary ma-bt-lg">Register your account</h2>
          {error.length > 0 && <div style={styles}>{error}</div>}

          <form className="form form--login" onSubmit={handleSubmit}>
            <div className="form__group">
              <label className="form__label" for="email">
                Name
              </label>
              <input
                className="form__input"
                id="name"
                type="text"
                placeholder="john"
                required
                onChange={(e) => handleChange(e.target.id, e.target.value)}
              />
            </div>
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
                minLength="8"
                onChange={(e) => handleChange(e.target.id, e.target.value)}
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
                onChange={(e) => handleChange(e.target.id, e.target.value)}
              />
            </div>
            <div className="form__group">
              <button
                className={`btn ${!isDisabled ? "btn--green" : ""}`}
                type={"submit"}
                disabled={isDisabled}
              >
                Register
              </button>
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
