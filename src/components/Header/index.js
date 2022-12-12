import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoWhite from "../../assets/img/logo-white.png";
import user from "../../assets/img/users/user-5.jpg";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <header className="header__secondary">
      <nav className="nav nav--tours">
        <Link to="/packages" className="nav__el">
          All tours
        </Link>
        <form className="nav__search">
          <button className="nav__search-btn">
            <svg>
              <use xlinkHref="../../assets/img/icons.svg#icon-search"></use>
            </svg>
          </button>
          <input
            type="text"
            placeholder="Search tours"
            className="nav__search-input"
          />
        </form>
      </nav>
      <div className="header__secondary__logo">
        <Link to="/">
          <img src={logoWhite} alt="Natours logo" height={40} width={"auto"} />
        </Link>
      </div>
      <nav className="nav nav--user">
        {isLoggedIn && (
          <>
            <Link href="#" className="nav__el">
              My bookings
            </Link>
            <Link href="#" className="nav__el">
              <img src={user} alt="User" className="nav__user-img" />
              <span>John</span>
            </Link>
          </>
        )}

        <button className="nav__el">Log in</button>
        <button className="nav__el nav__el--cta">Sign up</button>
      </nav>
    </header>
  );
};

export default Header;
