import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { dispatch } from "../redux/store";
import { getUserBookings } from "../redux/slices/booking";
import { useSelector } from "react-redux";
import isEmpty from "../utils/isEmpty";

const Bookings = () => {
  const { user } = useSelector((state) => state.auth);
  const { bookings } = useSelector((state) => state.booking);
  useEffect(() => {
    if (!isEmpty(user)) {
      dispatch(getUserBookings(user._id));
    }
  }, []);

  return (
    <>
      <Header />
      <div>
        {bookings > 0 &&
          bookings.map((booking) => {
            return <div>{console.log("booking", booking)}</div>;
          })}
      </div>
      <Footer />
    </>
  );
};

export default Bookings;
