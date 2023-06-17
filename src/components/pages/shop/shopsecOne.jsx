import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
const ShopsecOne = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const { t } = useTranslation();
  return (
    <>
      <div className="shopsec1">
        <div className="shop-main" data-aos="flip-down">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 d-flex justify-content-center">
              </div>
              <div className="col-lg-12 d-flex justify-content-center"></div>
              <div className="col-lg-12 d-flex justify-content-center">
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopsecOne;
