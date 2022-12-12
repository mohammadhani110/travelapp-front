import { Navigate, BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./assets/sass/main.scss";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PackageDetails from "./pages/PackageDetails";
import Packages from "./pages/Packages";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/package-details/:id" element={<PackageDetails />} />

        <Route path="/login" element={<Login />} />
        {/* <Route path="*" element={<Navigate to="/not-found" />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
