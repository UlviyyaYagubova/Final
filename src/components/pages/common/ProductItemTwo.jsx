import React from "react";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";
import WishListIcon from "./WishListIcon";
const ProductItem2 = ({ product }) => {
  const { addItem, items } = useCart();
  return (
    <>
      <div className="shop-item">
        <div className="item-img">
          <img src={product.img} alt="" />
        </div>
        <div className="item-info">
          <h4 className="h5 text-center">{product.title}</h4>
          <h5 className="h5 text-center">
            Price: <span>{product.price}$</span>
          </h5>
          <div className=" d-flex justify-content-center align-items-center">
            <button
              onClick={() => {
                addItem(product);
                toast.success("Product was added successfully");
              }}
              className="button btn btn-warning btn-sm"
              disabled={items.find((a) => a.id === product.id)}
            >
              {items.find((a) => a.id === product.id)
                ? "Added to cart"
                : "Add to cart"}
            </button>
            <WishListIcon productItem={product} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem2;
