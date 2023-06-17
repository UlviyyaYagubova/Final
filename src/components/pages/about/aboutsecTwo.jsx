import React from "react";
import AOS from "aos";
import about from "../../assets/img/about2.webp";
import "aos/dist/aos.css";
const aboutsecTwo = () => {
  return (
    <div className="aboutsec2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12" data-aos="fade-up">
            <div className="right3">
              <p>OUR VISION</p>
              <h2>The best of market!</h2>
              <h6>
              Our Company was established on September 21, 1894, by siblings Tomáš, Anna and Antonín Baťa – the eighth generation of Bata family shoemakers – in the rural town of Zlín, Czechoslovakia. They were innovators from the start, replacing the traditional one-man workshop with a 10-person enterprise.
              </h6>
              <div className="text-about">
                <p>
                  <i class="fa-solid fa-check"></i>  Credibly innovate granular
                  internal
                </p>
                <p>
                  <i class="fa-solid fa-check"></i>  Grantedly
                  underconstructions reloaded
                </p>
                <p>
                  <i class="fa-solid fa-check"></i>  Interactively procrastinate
                  high-payoff
                </p>
                <p>
                  <i class="fa-solid fa-check"></i>  Completely synergize
                  resource taxing relationships
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="left-img2">
              <img src={about} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutsecTwo;
