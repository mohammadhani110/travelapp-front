import React from "react";

const DetailsHeader = () => {
  return (
    <section class="section-header--other">
      <div className="header__hero--other">
        <div className="header__hero-overlay--other"></div>
        <img
          src={require("../../assets/img/tours/tour-1-cover.jpg")}
          height="100%"
          alt="Tour 1"
          class="header__hero-img--other"
        />
      </div>

      <div class="heading-box--other">
        <h1 class="heading-primary--other">
          <span>
            The Park <br />
            Camper Tour
          </span>
        </h1>
        <div class="heading-box__group--other">
          <div class="heading-box__detail--other">
            <svg class="heading-box__icon--other">
              <use xlinkHref="../../assets/img/icons.svg#icon-clock"></use>
            </svg>
            <span class="heading-box__text--other">10 days</span>
          </div>
          <div class="heading-box__detail--other">
            <svg class="heading-box__icon--other">
              <use xlinkHref="../../assets/img/icons.svg#icon-map-pin"></use>
            </svg>
            <span class="heading-box__text--other">Las Vegas, USA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsHeader;
