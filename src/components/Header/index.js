import React from "react";
import { Link } from "react-router-dom";
import logoWhite from "../../assets/img/logo-white.png";
import userImg from "../../assets/img/users/user-5.jpg";
import isEmpty from "../../utils/isEmpty";
import { dispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { logoutUser } from "../../redux/slices/auth";

const Header = () => {
  const user = useSelector((state) => state.auth?.user);
  // const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <header className="header__secondary">
      <nav className="nav nav--tours">
        <Link to="/tours" className="nav__el">
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
        {!isEmpty(user) && (
          <>
            <Link to="/bookings" className="nav__el">
              My bookings
            </Link>
            <div class="dropdown">
              <button className="dropbtn nav__el">
                <img src={userImg} alt="User" className="nav__user-img" />
                <span>{user?.name || "John"}</span>
              </button>
              <div className="dropdown-content">
                <button className="nav__el dropbtn " onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>
          </>
        )}
        {isEmpty(user) && (
          <>
            <button className="nav__el">
              <Link
                to={"/login"}
                style={{ textDecoration: "none", color: "white" }}
              >
                log in
              </Link>
            </button>
            <button className="nav__el nav__el--cta">
              <Link
                to={"/register"}
                style={{ textDecoration: "none", color: "white" }}
              >
                Register
              </Link>
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
