import React from "react";

const DetailsDescription = () => {
  return (
    <section className="section-description--other">
      <div className="overview-box--other">
        <div>
          <div className="overview-box__group--other">
            <h2 className="heading-secondary--other ma-bt-lg">Quick facts</h2>
            <div className="overview-box__detail--other">
              <svg className="overview-box__icon--other">
                <use xlinkHref="../../assets/img/icons.svg#icon-calendar"></use>
              </svg>
              <span className="overview-box__label--other">Next date</span>
              <span className="overview-box__text--other">August 2021</span>
            </div>
            <div className="overview-box__detail--other">
              <svg className="overview-box__icon--other">
                <use xlinkHref="../../assets/img/icons.svg#icon-trending-up"></use>
              </svg>
              <span className="overview-box__label--other">Difficulty</span>
              <span className="overview-box__text--other">Medium</span>
            </div>
            <div className="overview-box__detail--other">
              <svg className="overview-box__icon--other">
                <use xlinkHref="../../assets/img/icons.svg#icon-user"></use>
              </svg>
              <span className="overview-box__label--other">Participants</span>
              <span className="overview-box__text--other">10 people</span>
            </div>
            <div className="overview-box__detail--other">
              <svg className="overview-box__icon--other">
                <use
                  xlinkHref={require("../../assets/img/icons.svg#icon-star")}
                ></use>
              </svg>
              <span className="overview-box__label--other">Rating</span>
              <span className="overview-box__text--other">4.9 / 5</span>
            </div>
          </div>

          <div className="overview-box__group--other">
            <h2 className="heading-secondary--other ma-bt-lg">
              Your tour guides
            </h2>

            <div className="overview-box__detail--other">
              <img
                src={require("../../assets/img/users/user-19.jpg")}
                alt="Lead guide"
                className="overview-box__img--other"
              />
              <span className="overview-box__label--other">Lead guide</span>
              <span className="overview-box__text--other">Steven Miller</span>
            </div>
            <div className="overview-box__detail--other">
              <img
                src={require("../../assets/img/users/user-18.jpg")}
                alt="Tour guide"
                className="overview-box__img--other"
              />
              <span className="overview-box__label--other">Tour guide</span>
              <span className="overview-box__text--other">Lisa Brown</span>
            </div>
            <div className="overview-box__detail--other">
              <img
                src={require("../../assets/img/users/user-17.jpg")}
                alt="Intern"
                className="overview-box__img--other"
              />
              <span className="overview-box__label--other">Intern</span>
              <span className="overview-box__text--other">Max Smith</span>
            </div>
          </div>
        </div>
      </div>

      <div className="description-box--other">
        <h2 className="heading-secondary--other ma-bt-lg">
          About the park camper tour
        </h2>
        <p className="description__text--other">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <p className="description__text--other">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum!
        </p>
      </div>
    </section>
  );
};

export default DetailsDescription;
