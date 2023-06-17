import React, {useEffect} from "react";
import ProductItemTwo from "../common/ProductItemTwo";
import shopData from "../../data/dataThree";
import AOS from 'aos';
import "aos/dist/aos.css"

const ShopsecTwo = () => {

  useEffect(()=>{
    AOS.init({duration:1000})
  },[])

  return (
    <div className="shop-products">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <h1> Our Products </h1>
          </div>

          {shopData.shop.map((item, index) => {
            return (
             <div className="col-lg-3 col-md-6 col-sm-12 p-3" data-aos="flip-up"
             data-aos-duration="1000">
               <ProductItemTwo
                title={item.title}
                img={item.img}
                price={item.price}
                product={item}
              />
             </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShopsecTwo;
