import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer--other">
      <div className="footer__logo--other">
        <Link to={"/"}>
          <img
            src={require("../../assets/img/logo-green-large.png")}
            alt="Natours logo"
          />
        </Link>
      </div>
      <ul className="footer__nav--other">
        <li>
          <Link href="#">About us</Link>
        </li>
        <li>
          <Link href="#">Download apps</Link>
        </li>
        <li>
          <Link href="#">Become a guide</Link>
        </li>
        <li>
          <Link href="#">Careers</Link>
        </li>
        <li>
          <Link href="#">Contact</Link>
        </li>
      </ul>
      <p className="footer__copyright--other">
        &copy; by Hani & Sameer. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
