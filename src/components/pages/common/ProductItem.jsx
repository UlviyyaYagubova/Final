import React from "react";
import { useCart } from "react-use-cart";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import WishListIcon from "./WishListIcon";

const ProductItem = ({ product }) => {
  const { addItem, items } = useCart();
  const { t } = useTranslation();
  return (
    <div className="box" key={product.id}>
      <div className="box-img">
        <img src={product.img} alt="" />
      </div>
      <div className="box-content">
        <h4>{t(product.title)}</h4>
      <div>
      <h6>{product.price}$</h6>
          <button
            onClick={() => {
              addItem(product);
              toast.success("Product was added successfully");
            }}
            className="button "
            disabled={items.find((a) => a.id === product.id)}
          >
            {items.find((a) => a.id === product.id)
              ? "Added to cart"
              : "Add to cart"}{" "}
          </button>
          <WishListIcon productItem={product} />
      </div>
      
      </div>
    </div>
  );
};

export default ProductItem;
