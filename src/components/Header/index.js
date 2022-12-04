import React from "react";
import { Link } from "react-router-dom";
import logoWhite from "../../assets/img/logo-white.png";
import user from "../../assets/img/users/user-5.jpg";

const Header = () => {
  return (
    <header class="header__secondary">
      <nav class="nav nav--tours">
        <Link href="#" class="nav__el">
          All tours
        </Link>
        <form class="nav__search">
          <button class="nav__search-btn">
            <svg>
              <use xlinkHref="../../assets/img/icons.svg#icon-search"></use>
            </svg>
          </button>
          <input
            type="text"
            placeholder="Search tours"
            class="nav__search-input"
          />
        </form>
      </nav>
      <div class="header__secondary__logo">
        <img src={logoWhite} alt="Natours logo" height={40} width={"auto"} />
      </div>
      <nav class="nav nav--user">
        <Link href="#" class="nav__el">
          My bookings
        </Link>
        <Link href="#" class="nav__el">
          <img src={user} alt="User" class="nav__user-img" />
          <span>Jonas</span>
        </Link>

        <button class="nav__el">Log in</button>
        <button class="nav__el nav__el--cta">Sign up</button>
      </nav>
    </header>
  );
};

export default Header;
