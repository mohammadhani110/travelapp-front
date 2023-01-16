import React from "react";
import { dispatch } from "../redux/store";
import "../assets/sass/pages/_otherPages.scss";

import CardList from "../components/CardList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { getAllTours } from "../redux/slices/tour";
import { getAllBookings } from "../redux/slices/booking";

const Tours = () => {
  React.useEffect(() => {
    // if (localStorage.getItem("redux-root")) {
    //   let { tour } = JSON.parse(localStorage.getItem("redux-root"));
    //   tour = JSON.parse(tour);
    //   console.log("root?.tour?.tours", tour);
    //   if (tour?.tours.length > 0) {
    //     return;
    //   }
    // }
    dispatch(getAllTours());
    dispatch(getAllBookings());
  }, []);
  return (
    <>
      <Header />
      <CardList />
      <Footer />
    </>
  );
};

export default Tours;
