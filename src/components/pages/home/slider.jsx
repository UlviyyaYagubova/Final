import React from "react";
import { useTranslation } from "react-i18next";
import slider from "../../assets/img/slider2.png";

import watchnew from '../../assets/img/watchnew.png'
import apllewatch from '../../assets/img/applewatch.png'

import converse from '../../assets/img/converse.png'
import newbalance from '../../assets/img/newbalance.png'
import vans from '../../assets/img/vans.png'

const Slider = () => {
  const { t } = useTranslation();
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row mt-5">
            <div className="col-lg-6 col-12 col-left">
              <div className="content">
              <h1 className="txtt">{t("slider.1")}</h1>
              <p>
              "In a meat-eating world, wearing leather for shoes and even clothes, the discussion of fur is childish." {" "}   ~ Karl Lagerfeld
              </p>
              <div className="all-price">
                <span className="new-price">Sneakers on Sale</span>
              </div>
              <button>SHOP NOW</button>
              </div>
            </div>
            <div className="col-lg-6 col-12 col-right">
              <img className="shoe" src={vans} alt="#" />
            </div>
          </div>
        </div>

        <div className="carousel-item ">
          <div className="row mt-5">
            <div className="col-lg-6 col-12 col-left">
              <div className="content">
              <h1 className="txtt">Shoes Collection</h1>
              <p>
              "In a meat-eating world, wearing leather for shoes and even clothes, the discussion of fur is childish." {" "}   ~ Karl Lagerfeld
              </p>
              <div className="all-price">
              <span className="new-price">Sneakers on Sale</span>
              </div>
              <button>SHOP NOW</button>
              </div>
            </div>
            <div className="col-lg-6 col-12 col-right">
              <img className="shoe"  src={converse} alt="#" />
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
