import React from "react";

const DetailsHeader = () => {
  return (
    <section className="section-header--other">
      <div className="header__hero--other">
        <div className="header__hero-overlay--other"></div>
        <img
          src={require("../../assets/img/tours/tour-1-cover.jpg")}
          height="100%"
          alt="Tour 1"
          className="header__hero-img--other"
        />
      </div>

      <div className="heading-box--other">
        <h1 className="heading-primary--other">
          <span>
            The Park <br />
            Camper Tour
          </span>
        </h1>
        <div className="heading-box__group--other">
          <div className="heading-box__detail--other">
            <svg className="heading-box__icon--other">
              <use xlinkHref="../../assets/img/icons.svg#icon-clock"></use>
            </svg>
            <span className="heading-box__text--other">10 days</span>
          </div>
          <div className="heading-box__detail--other">
            <svg className="heading-box__icon--other">
              <use xlinkHref="../../assets/img/icons.svg#icon-map-pin"></use>
            </svg>
            <span className="heading-box__text--other">Las Vegas, USA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsHeader;
