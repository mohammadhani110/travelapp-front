import React from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Bookings from "../pages/Bookings";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import TourDetails from "../pages/TourDetails";
import Tours from "../pages/Tours";
import Register from "../pages/Register";
import Success from "../pages/Success";
import Signin from "../pages/Signin";
// import useAuth from "../hooks/useAuth";
import isEmpty from "../utils/isEmpty";
import { useSelector } from "react-redux";

const Router = () => {
  // const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/:id" element={<TourDetails />} />

        <Route path="/success" element={<Success />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/register" element={<Register />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/bookings" element={<Bookings />} />
        </Route>
        {/* <Route path="*" element={<Navigate to="/not-found" />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

const ProtectedRoute = ({ redirectPath = "/login" }) => {
  // const { isAuthenticated } = useAuth();
  const user = useSelector((state) => state.user.user);
  if (isEmpty(user)) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};
