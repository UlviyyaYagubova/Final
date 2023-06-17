import React from "react";
import ShopsecOne from "./shop/shopsecOne";
import ShopsecTwo from "./shop/shopsecTwo";
import AboutsecThree from "../pages/about/aboutsecThree";
import { useTranslation } from "react-i18next";
const Shop = () => {
  const { t } = useTranslation();
  return (
    <>
      <ShopsecOne />
      <ShopsecTwo />
    </>
  );
};

export default Shop;
