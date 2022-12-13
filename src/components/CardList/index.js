import React from "react";
import { useSelector } from "../../redux/store";
import Card from "../Card";

const CardList = () => {
  const tours = useSelector((state) => state.tour.tours);
  return (
    <main class="main">
      <div class="card-container">
        {tours.length > 0 && tours.map((tour) => <Card tour={tour} />)}
      </div>
    </main>
  );
};

export default CardList;
