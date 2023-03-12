import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import ShopDetails from "../pages/ShopDetails";
import Shops from "../pages/Shops";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SearchResultList from "../pages/SearchResultList";
import Thankyou from "../pages/Thankyou";
const Routers = () => {
  return(
  <Routes>
    <Route path="/" element={<Navigate to="/home" />}/>
      <Route path="/home" element={<Home />} />
      <Route path="/shops" element={<Shops />} />
      <Route path="/shops/:id" element={<ShopDetails />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="/thank-you" element={<Thankyou />} />

      <Route path="/shops/search" element={<SearchResultList />} />
  </Routes>
  );
};

export default Routers;
