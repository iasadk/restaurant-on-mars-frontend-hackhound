import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";

const RoutesPro = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
};

export default RoutesPro;
