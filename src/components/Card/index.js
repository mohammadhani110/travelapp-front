import React from "react";
import { Link } from "react-router-dom";
import fallback from "../../assets/img/tours/tour-1-cover.jpg";
const Card = ({ tour }) => {
  const img = tour?.imageCover || fallback;
  return (
    <div className="card--other">
      <div className="card__header--other">
        <div className="card__picture--other">
          <div className="card__picture-overlay--other">&nbsp;</div>
          <img src={img} alt="Tour 1" className="card__picture-img--other" />
        </div>

        <h3 className="heading-tertirary--other">
          <span>{tour?.name || "The Forest Hiker"}</span>
        </h3>
      </div>

      <div className="card__details--other">
        <h4 className="card__sub-heading--other">
          {tour?.difficulty || "Easy"}{" "}
          {" " + (tour?.duration || 5) + "-day tour"}
        </h4>
        <p className="card__text--other">
          {tour?.summary ||
            "Breathtaking hike through the Canadian Banff National Park"}
        </p>
        <div className="card__data--other">
          <svg className="card__icon--other">
            <use
              xlinkHref={require("../../assets/img/icons.svg#icon-map-pin")}
            ></use>
          </svg>
          <span>Banff, Canada</span>
        </div>
        <div className="card__data--other">
          <svg className="card__icon--other">
            <use xlinkHref="../../assets/img/icons.svg#icon-calendar"></use>
          </svg>
          <span>April 2021</span>
        </div>
        <div className="card__data--other">
          <svg className="card__icon--other">
            <use xlinkHref="../../assets/img/icons.svg#icon-flag"></use>
          </svg>
          <span>3 stops</span>
        </div>
        <div className="card__data--other">
          <svg className="card__icon--other">
            <use xlinkHref="../../assets/img/icons.svg#icon-user"></use>
          </svg>
          <span>{(tour?.maxGroupSize || 25) + " people"}</span>
        </div>
      </div>

      <div className="card__footer--other">
        <p>
          <span className="card__footer-value--other">
            ${tour?.price || 295}{" "}
          </span>
          <span className="card__footer-text--other">per person</span>
        </p>
        <p className="card__ratings--other">
          <span className="card__footer-value--other">
            {tour?.ratingsAverage || "4.9"}{" "}
          </span>
          <span className="card__footer-text--other">
            rating ({tour?.ratingsQuantity || "21"})
          </span>
        </p>
        <Link
          to={`/tours/${tour?._id}`}
          onClick={localStorage.setItem("pathname", `/tours/${tour?._id}`)}
          className="btn btn--green btn--small"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
