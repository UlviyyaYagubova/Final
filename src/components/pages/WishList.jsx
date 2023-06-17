import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductItemTwo from "./common/ProductItemTwo";
import AOS from "aos";
import "aos/dist/aos.css";

const WishList = () => {
  const wishlist = useSelector((state) => state.wishlist);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      {wishlist.length !== 0 ? (
        <div className="shop-products">
          <div className="container">
            <div className="row">
              {wishlist?.map((item, index) => (
                <div className="col-lg-4 col-sm-12 col-md-4 p-5" key={index}>
                  <ProductItemTwo product={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="cart d-flex justify-content-center align-items-center flex-column">
          <h3 style={{ fontWeight: "bold" }}>Your wishlist is Empty</h3>{" "}
          <i className="fa-solid fa-heart"></i>
        </div>
      )}
    </>
  );
};

export default WishList;
