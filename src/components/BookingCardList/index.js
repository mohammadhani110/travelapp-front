import React from "react";
import { useSelector } from "react-redux";
import BookingCard from "../BookingCard";

const BookingCardList = () => {
  const { bookings } = useSelector((state) => state.booking);
  return (
    <main className="main">
      <div className="card-container-row">
        {bookings &&
          bookings.length > 0 &&
          bookings.map((booking) => <BookingCard booking={booking} />)}
      </div>
    </main>
  );
};

export default BookingCardList;
