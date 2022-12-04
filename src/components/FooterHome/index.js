import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/img/logo-green-small-1x.png";
import img1_2x from "../../assets/img/logo-green-small-2x.png";
import img2 from "../../assets/img/logo-green-1x.png";
import img2_2x from "../../assets/img/logo-green-2x.png";

const FooterHome = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <picture className="footer__logo">
          <source
            srcSet={`${img1} 1x, ${img1_2x} 2x`}
            media="(max-width: 37.5em)"
          />
          <img
            srcSet={`${img2} 1x, ${img2_2x} 2x`}
            alt="Full logo"
            src="img/logo-green-2x.png"
          />
        </picture>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <Link href="#" className="footer__link">
                  Company
                </Link>
              </li>
              <li className="footer__item">
                <Link href="#" className="footer__link">
                  Contact us
                </Link>
              </li>
              <li className="footer__item">
                <Link href="#" className="footer__link">
                  Carrers
                </Link>
              </li>
              <li className="footer__item">
                <Link href="#" className="footer__link">
                  Privacy policy
                </Link>
              </li>
              <li className="footer__item">
                <Link href="#" className="footer__link">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built by{" "}
            <Link href="#" className="footer__link">
              Hani
            </Link>{" "}
            &{" "}
            <Link href="#" className="footer__link">
              Sameer
            </Link>
            . Copyright © 2022.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterHome;
