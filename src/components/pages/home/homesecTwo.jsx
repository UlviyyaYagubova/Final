import React from "react";
import carousel2 from "../../data/dataTwo";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import ProductItem from "../common/ProductItem";
import brendimg from "../../assets/img/brandimg.png";
import brendimg1 from "../../assets/img/brendimg1.png";
import brendimg2 from "../../assets/img/brendimg2.png";
import brendimg3 from "../../assets/img/brendimg3.png";
import brendimg4 from "../../assets/img/brendimg4.png";
import brendimg5 from "../../assets/img/brendimg5.png";

const homesec2 = () => {
  const options = {
    margin: 40,
    responsiveClass: true,
    nav: true,
    autoplay: true,
    items: 4,
    smartSpeed: 1000,
    autoplayTimeout: 3000,
    loop: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  };
  return (
    <div className="homesec2">
      <div className="carousel-main2">
        <h2>Most Viewed</h2>
        <div className="carousel">
          <OwlCarousel className="slider-items owl-carousel" {...options}>
            {carousel2.dataTwo.map((item, index) => {
              return (
                <ProductItem
                  img={item.img}
                  title={item.title}
                  price={item.price}
                  key={index}
                  product={item}
                />
              );
            })}
          </OwlCarousel>
        </div>
        <div className="brands-logo">
          <div className="section-ten">
            <div className="brend-title">Branding Partnership</div>
            <div className="brend-img">
              <img src={brendimg3} alt="#" />
              <img src={brendimg1} alt="#" />
              <img src={brendimg2} alt="#" />
              <img src={brendimg} alt="#" />
              <img src={brendimg4} alt="#" />
              <img src={brendimg5} alt="#" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default homesec2;
