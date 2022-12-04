import React from "react";
import { Link } from "react-router-dom";
const Card = () => {
  return (
    <div class="card--other">
      <div class="card__header--other">
        <div class="card__picture--other">
          <div class="card__picture-overlay--other">&nbsp;</div>
          <img
            src={require("../../assets/img/tours/tour-1-cover.jpg")}
            alt="Tour 1"
            class="card__picture-img--other"
          />
        </div>

        <h3 class="heading-tertirary--other">
          <span>The Forest Hiker</span>
        </h3>
      </div>

      <div class="card__details--other">
        <h4 class="card__sub-heading--other">Easy 5-day tour</h4>
        <p class="card__text--other">
          Breathtaking hike through the Canadian Banff National Park
        </p>
        <div class="card__data--other">
          <svg class="card__icon--other">
            <use
              xlinkHref={require("../../assets/img/icons.svg#icon-map-pin")}
            ></use>
          </svg>
          <span>Banff, Canada</span>
        </div>
        <div class="card__data--other">
          <svg class="card__icon--other">
            <use xlinkHref="../../assets/img/icons.svg#icon-calendar"></use>
          </svg>
          <span>April 2021</span>
        </div>
        <div class="card__data--other">
          <svg class="card__icon--other">
            <use xlinkHref="../../assets/img/icons.svg#icon-flag"></use>
          </svg>
          <span>3 stops</span>
        </div>
        <div class="card__data--other">
          <svg class="card__icon--other">
            <use xlinkHref="../../assets/img/icons.svg#icon-user"></use>
          </svg>
          <span>25 people</span>
        </div>
      </div>

      <div class="card__footer--other">
        <p>
          <span class="card__footer-value--other">$297</span>
          <span class="card__footer-text--other">per person</span>
        </p>
        <p class="card__ratings--other">
          <span class="card__footer-value--other">4.9</span>
          <span class="card__footer-text--other">rating (21)</span>
        </p>
        <Link to="/package-details/1" class="btn btn--green btn--small">
          Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
