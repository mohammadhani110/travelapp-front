import React from "react";
import { dispatch } from "../redux/store";
import "../assets/sass/pages/_otherPages.scss";

import CardList from "../components/CardList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { getAllTours } from "../redux/slices/tour";

const Tours = () => {
  React.useEffect(() => {
    dispatch(getAllTours());
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
