import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import isEmpty from "../../utils/isEmpty";
const DetailsBanner = () => {
  const tours = useSelector((state) => state.tour.tours);
  const user = useSelector((state) => state.user.user);
  const [disabled, setDisabled] = React.useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const handleCheckout = async () => {
    const tourId = pathname.split("/")[2];
    const tour = tours.find((tour) => tour._id === tourId);
    console.log("tour", tour);
    if (isEmpty(user)) {
      navigate("/login");
      return;
    } else if (tourId.length > 2 && !isEmpty(tour) && !isEmpty(user)) {
      setDisabled(true);
      fetch("http://localhost:5000/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: tour.name,
          price: tour.price,
          image: tour.imageCover,
          // items: [
          //   { id: 1, quantity: 3 },
          //   { id: 2, quantity: 1 },
          // ],
        }),
      })
        .then((res) => {
          if (res.ok) return res.json();
          return res.json().then((json) => Promise.reject(json));
        })
        .then(({ url }) => {
          window.location = url;
          setDisabled(false);
        })
        .catch((e) => {
          console.error(e.error);
          setDisabled(false);
        });
    }
    return;
  };
  return (
    <section className="section-cta--other">
      <div className="cta--other">
        <div className="cta__img--other cta__img--logo--other">
          <img
            src={require("../../assets/img/logo-white.png")}
            alt="Natours logo"
            className=""
          />
        </div>
        <img
          src={require("../../assets/img/tours/tour-5-2.jpg")}
          alt=""
          className="cta__img--other cta__img--1"
        />
        <img
          src={require("../../assets/img/tours/tour-5-1.jpg")}
          alt=""
          className="cta__img--other cta__img--2"
        />

        <div className="cta__content--other">
          <h2 className="heading-secondary--other">
            What are you waiting for?
          </h2>
          <p className="cta__text--other">
            10 days. 1 adventure. Infinite memories. Make it yours today!
          </p>
          <button
            className="btn btn--green span-all-rows"
            disabled={disabled}
            onClick={handleCheckout}
          >
            Book tour now!
          </button>
        </div>
      </div>
    </section>
  );
};

export default DetailsBanner;
