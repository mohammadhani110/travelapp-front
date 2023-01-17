import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { dispatch } from "../redux/store";
import { getUserBookings } from "../redux/slices/booking";
import { useSelector } from "react-redux";
import isEmpty from "../utils/isEmpty";
import BookingCardList from "../components/BookingCardList";

const Bookings = () => {
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!isEmpty(user)) {
      dispatch(getUserBookings(user._id));
    }
  }, []);

  return (
    <>
      <Header />
      <div>
        <BookingCardList />
      </div>
      <Footer />
    </>
  );
};

export default Bookings;
