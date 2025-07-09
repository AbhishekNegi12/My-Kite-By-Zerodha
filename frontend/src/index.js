import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import HomePage from "./landling_page/home/HomePage";
// import Signup from "./landling_page/signup/Signup";
import AboutPage from "./landling_page/about/AboutPage";
import ProductsPage from "./landling_page/products/ProductsPage";
import PricingPage from "./landling_page/pricing/PricingPage";
import SupportPage from "./landling_page/support/SupportPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./landling_page/Navbar";
import Footer from "./landling_page/Footer";
import NotFound from "./landling_page/NotFound";

// import 'react-toastify/dist/ReactToastify.css'
import "react-toastify/ReactToastify.css";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./pages/PrivateRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      {/* path should match to attribute 'to' in each file */}

      <Route path="/" element={<HomePage />}></Route>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/products" element={<ProductsPage />}></Route>
      <Route path="/pricing" element={<PricingPage />}></Route>
      <Route path="/support" element={<SupportPage />}></Route>
      <Route path="/dashboard" element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      } />

      {/* if any other invalid slug is there it will redirect to notfound page */}
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
);
