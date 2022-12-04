import React from "react";
import Navigation from "../components/Navigation";
import Header from "../components/HeaderHome";
import About from "../components/About";
import Tours from "../components/Tours";
import Features from "../components/Features";
import Stories from "../components/Stories";
import Footer from "../components/FooterHome";
import Book from "../components/Book";

const Home = () => {
  return (
    <>
      <Navigation />
      <Header />
      <main>
        <About />
        <Features />
        <Tours />
        <Stories />
        <Book />
      </main>
      <Footer />
    </>
  );
};

export default Home;
