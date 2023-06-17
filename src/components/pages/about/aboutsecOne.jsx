import React, { useEffect } from "react";
import img from "../../assets/img/about1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const AboutsecOne = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="aboutsec1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="left-img2">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-12" data-aos="fade-up">
            <div className="right2">
              <p>OUR HISTORY</p>
              <h2>Fashion trends</h2>
              <h6>
              Our Company was established on September 21, 1894, by siblings Tomáš, Anna and Antonín Baťa – the eighth generation of Bata family shoemakers – in the rural town of Zlín, Czechoslovakia. They were innovators from the start, replacing the traditional one-man workshop with a 10-person enterprise. Bata was founded back in 1894 in Zlin, Czechoslovakia by Thomas Bata, a 9th generation shoemaker in his family. 
              </h6>
              <div className="number">
                <div className="number-one">
                  <span>12</span>
                  <p>Years Experience</p>
                </div>
                <div className="number-two">
                  <span>20K+</span>
                  <p>Happy Customers</p>
                </div>
                <div className="number-three">
                  <span>100%</span>
                  <p>Quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutsecOne;
