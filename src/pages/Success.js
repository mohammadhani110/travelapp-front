import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div
      style={{
        heigh: "100vh",
        display: "flex",
        flexDirection: "column",
        align: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ textAlign: "center", fontSize: "2.5rem", fontWeight: 800 }}>
        Payment is Successfull
      </h1>
      <Link
        to="/tours"
        style={{ textDecoration: "none", color: "black", fontSize: "1.5rem" }}
      >
        Back to Tours
      </Link>
    </div>
  );
};

export default Success;
