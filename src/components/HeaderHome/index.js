import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/img/logo-white.png";
const HeaderHome = () => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src={img} alt="Logo" className="header__logo" />
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Outdoors</span>
          <span className="heading-primary--sub">is where life happens</span>
        </h1>
        <Link to="/packages" className="btn btn--white btn--animated">
          Discover our tours
        </Link>
      </div>
    </header>
  );
};
export default HeaderHome;
