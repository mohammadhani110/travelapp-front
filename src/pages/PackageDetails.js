import React from "react";
import "../assets/sass/pages/_otherPages.scss";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DetailsHeader from "../components/DetailsHeader";
import DetailsDescription from "../components/DetailsDescription";
import DetailsPictures from "../components/DetailsPictures";
import DetailsReviews from "../components/DetailsReviews";
import DetailsBanner from "../components/DetailsBanner";

const PackageDetails = () => {
  return (
    <>
      <Header />
      <DetailsHeader />
      <DetailsDescription />
      <DetailsPictures />
      <DetailsReviews />
      <DetailsBanner />
      <Footer />
    </>
  );
};

export default PackageDetails;
