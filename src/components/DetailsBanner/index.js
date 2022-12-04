import React from "react";

const DetailsBanner = () => {
  return (
    <section class="section-cta--other">
      <div class="cta--other">
        <div class="cta__img--other cta__img--logo--other">
          <img
            src={require("../../assets/img/logo-white.png")}
            alt="Natours logo"
            class=""
          />
        </div>
        <img
          src={require("../../assets/img/tours/tour-5-2.jpg")}
          alt=""
          class="cta__img--other cta__img--1"
        />
        <img
          src={require("../../assets/img/tours/tour-5-1.jpg")}
          alt=""
          class="cta__img--other cta__img--2"
        />

        <div class="cta__content--other">
          <h2 class="heading-secondary--other">What are you waiting for?</h2>
          <p class="cta__text--other">
            10 days. 1 adventure. Infinite memories. Make it yours today!
          </p>
          <button class="btn btn--green span-all-rows">Book tour now!</button>
        </div>
      </div>
    </section>
  );
};

export default DetailsBanner;
