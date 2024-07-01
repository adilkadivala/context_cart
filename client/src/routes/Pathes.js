import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import Product from "../pages/admin/Product";
import SignIn from "../pages/auth/SignIn";
import Hero from "../pages/public/Hero";
import { useItemData } from "../store/ProductData";

const PrivateRoute = ({ element }) => {
  const { user } = useItemData();
  return user ? element : <Navigate to="/login" />;
};

const Pathes = () => {
  const { user } = useItemData();

  return (
    <Routes>
      <Route
        path="/dashboard"
        element={<PrivateRoute element={<Dashboard />} />}
      />
      <Route path="/product" element={<PrivateRoute element={<Product />} />} />
      <Route
        path="/login"
        element={user ? <Navigate to="/dashboard" /> : <SignIn />}
      />
      <Route path="/" element={<Hero />} />
    </Routes>
  );
};

export default Pathes;
