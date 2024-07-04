import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import NoPage from "./pages/nopage/NoPage";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import MyState from "./context/myState";
import Signup from "./pages/registration/Signup";
import Login from "./pages/registration/Login";
import ProductInfo from "./pages/productInfo/ProductInfo";
import Cart from "./pages/cart/Cart";
import AddProduct from "./pages/AddProduct";
import UpdateProduct from "./pages/nopage/UpdateProduct";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardTab from "./pages/admin/dashboard/DashboardTab";

const App = () => {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={
            <ProtectedRoute>
              <Order />
            </ProtectedRoute>
          } />
          <Route path="/dashboard" element={
            <ProtectedRouteForAdmin>
              <Dashboard />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/dashboardtab" element={
            <ProtectedRouteForAdmin>
              <DashboardTab />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/addproduct" element={
            <ProtectedRouteForAdmin>
              <AddProduct />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/updateproduct" element={
            <ProtectedRouteForAdmin>
              <UpdateProduct />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </Router>
      <ToastContainer />
    </MyState>
  );
};

export default App;

// user
export const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

// Admin
const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));
  if (admin.user.email === "admin@gmail.com") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
