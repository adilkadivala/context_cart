import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import Product from "../pages/admin/Product";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignIn";
import Hero from "../pages/public/Hero";

const Pathes = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/dashboard"
          element={
            <>
              <Dashboard />
            </>
          }
        ></Route>
        <Route
          exact
          path="/product"
          element={
            <>
              <Product />
            </>
          }
        ></Route>
        <Route
          exact
          path="/signup"
          element={
            <>
              <SignUp />
            </>
          }
        ></Route>
        <Route
          exact
          path="/login"
          element={
            <>
              <SignIn />
            </>
          }
        ></Route>

        {/* client */}
        <Route
          exact
          path="/"
          element={
            <>
              <Hero />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default Pathes;
