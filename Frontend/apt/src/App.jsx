import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import LoginPage from "./components/LoginPage.jsx";
import RegisterPage from "./components/RegisterPage.jsx";
import ProductDetailPage from "./components/ProductDetailPage";
import CheckoutPage from "./components/CheckoutPage.jsx";
import OrderConfirmationPage from "./components/OrderConfirmationPage.jsx";


import "./App.css";
import SellerDashboard from "./components/SellerDashboard";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Contactus from "./components/Contact.jsx";
import { Faqs } from "./components/Faq.jsx";
import Products from "./components/Product.jsx";

function App() {
  return (
    <>
      
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/sellerDash" element={<SellerDashboard />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />{" "}
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
       {/* Product Detail Route */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
