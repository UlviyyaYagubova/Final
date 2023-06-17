import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="brands">
      <footer className="pb-5">
        <div className="footer-title">
          <h1>Shoe Shop</h1>
        </div>
        <div className="footer-text">
          <div className="footer-text-left">
            <div className="left-text-in">
              <h3>Any Questions?</h3>
              <h3>Contact us 7/24</h3>
              <h4>[+994] 77 603 02 22</h4>
              <p>© Copyright 2023 | created by <span><a href="mailto:yagubova.ulviyya@gmail.com">Ulviyya Yagubova</a></span></p>
              <p>Baku, Azerbaijan</p>
              <button className="footer-btn">
                <a href="https://www.google.com/maps/place/Matrix+Training+Center/@40.3781041,49.8308959,16.8z/data=!4m5!3m4!1s0x40307d4ec5fe0f83:0x805256f8d1c1ec75!8m2!3d40.37614!4d49.8293198">
                  View on map
                </a>
              </button>
            </div>
            
          </div>
          <div className="footer-text-right">
            <div className="right-inside-left">
              <strong>Help & Information</strong>
              <ul>
                <li>Pagination</li>
                <li>Term & Conditions</li>
                <li>Contact</li>
                <li>Home Page</li>
                <li>Term of us</li>
                <li>FAQS</li>
              </ul>
            </div>
            <div className="right-inside-rightt">
              <strong> Our Stores</strong>
              <ul>
                <li>Azerbaijan</li>
                <li>New York</li>
                <li>London</li>
                <li>Los Angeles</li>
                <li>Chicago</li>
                <li>Las Vegas</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
