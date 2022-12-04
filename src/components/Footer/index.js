import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div class="footer--other">
      <div class="footer__logo--other">
        <img
          src={require("../../assets/img/logo-green-large.png")}
          alt="Natours logo"
        />
      </div>
      <ul class="footer__nav--other">
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
      <p class="footer__copyright--other">
        &copy; by Hani & Sameer. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
