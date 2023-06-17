import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "../pages/common/Nav";
import Footer from "../pages/common/Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Login from "../pages/Signin";
import Blogs from "../pages/Blogs";
import Shop from "../pages/Shop";
import Search from "../pages/Search";
import { CartProvider } from "react-use-cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useSelector } from "react-redux";
import Admin from "../pages/Admin";
import Contact from "../pages/contact/Contact";
import WishList from "../pages/WishList";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <ToastContainer pauseOnHover={false} autoClose={1000} />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/wishlist" element={<WishList />}></Route>
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
