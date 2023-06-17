import React from "react";
import { useTranslation } from "react-i18next";
import middle1 from "../../assets/img/middle1.webp";
import middle2 from "../../assets/img/middle2.webp";
import middle3 from "../../assets/img/middle3.webp";
const HomeSecOne = () => {
  const { t } = useTranslation();
  return (
    <section className="section-fifteen">
      <div className="middle">
        <div className="title-blog">
          <h3>{t("nav.14")}</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 mt-3">
            <img src={middle1} alt="#" />
            <h4>{t("nav.15")}</h4>
            <p>Finding the right shoe can be difficult for pretty much anyone, but if you also have wide feet.</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 mt-3">
            <img src={middle2} alt="#" />
            <h4>{t("nav.16")}</h4>
            <p>Finding comfortable shoes when your feet are wider than the average might not be always an easy task.  </p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 mt-3">
            <img src={middle3} alt="#" />
            <h4>{t("nav.17")}</h4>
            <p>Most of the people that walk through our door are very self-conscious about the size of their feet.  </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSecOne;
