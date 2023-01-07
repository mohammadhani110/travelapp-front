import React from "react";

const DetailsPictures = () => {
  return (
    <section className="section-pictures--other">
      <div className="picture-box--other">
        <img
          className="picture-box__img--other picture-box__img--1"
          src={require("../../assets/img/tours/tour-5-1.jpg")}
          alt="The Park Camper Tour 1"
        />
      </div>
      <div className="picture-box--other">
        <img
          className="picture-box__img--other picture-box__img--2"
          src={require("../../assets/img/tours/tour-5-2.jpg")}
          alt="The Park Camper Tour 1"
        />
      </div>
      <div className="picture-box--other">
        <img
          className="picture-box__img--other picture-box__img--3"
          src={require("../../assets/img/tours/tour-5-3.jpg")}
          alt="The Park Camper Tour 1"
        />
      </div>
    </section>
  );
};

export default DetailsPictures;
