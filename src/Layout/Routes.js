import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../Pages/Cart";
import Checkout1 from "../Pages/Checkout";
import Home from "../Pages/Home";
import ItemList from "../Pages/ItemList";
import Login from "../Pages/Login";
import Menu from "../Pages/Menu";
import Order from "../Pages/Order";
import SignUp from "../Pages/SignUp";
import Success from "../Pages/success";
import Failure from "../Pages/failure";

const RoutesPro = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/orders" element={<Order />} />
      <Route path="/:category" element={<ItemList />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout1 />} />
      <Route path="/success" element={<Success />} />
      <Route path="/failure" element={<Failure />} />
    </Routes>
  );
};

export default RoutesPro;
