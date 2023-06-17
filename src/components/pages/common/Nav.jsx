import React from "react";
import { NavLink } from "react-router-dom";
import Theme from "./Theme";
import Lang from "./Lang";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";

const Nav = () => {
  const { items } = useCart();
  const wishlist = useSelector((state) => state.wishlist);
  const { t } = useTranslation();
  const history = useNavigate();
  const handleLogoutClick = () => {
    localStorage.clear();
    history("/login");
  };
  const getEmail = localStorage.getItem("emailData");
  const getPassword = localStorage.getItem("passwordData");
  const authButton = () => {
    if (getEmail == "Ulviyya") {
  history('/');
    } else {
    history('/Login');
    }
  };
  const logOut = () => {
    if (getEmail == "Ulviyya") {
      localStorage.removeItem("emailData");
      history("/")
        } else {
        }
  }

  console.log(getEmail);
  return (
    <div className="fregmant">
      <nav>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 p-1 length ">
              <div className="left">
                <div className="left-box">
                  <p>{t("nav.0")}</p>
                </div>
                <div className="left-box1">
                  <p>{t("nav.10")}</p>
                </div>
                <div className="left-box2">
                  
                  <i class="fa-brands fa-facebook-f"></i>
                  <i class="fa-brands fa-instagram"></i>
                  <i class="fa-brands fa-twitter"></i>    
                  <i class="fa-brands fa-pinterest-p"></i>    
                          </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 p-1 d-flex iconss">
              <div className="icons">
                <Lang />
                <Theme /> 
                <button onClick={authButton}>{(getEmail == "Ulviyya") ? getEmail : `${t("nav.12")}` }</button>
                <span>/</span>
                <button onClick={logOut} >{t("nav.13")}</button>
              </div>
            </div>
            <div className="line"></div>
          </div>
        </div>
      </nav>



      <header>
        <div className="header-main">
          <div className="container">
            <div className="main-header-two">
              <div className="menu">
                <ul className="links">
                  <li>
                    <NavLink className= "active" to="/">{t("nav.4")}</NavLink>
                  </li>
                  <li>
                    <NavLink className= "active" to="/about">{t("nav.5")}</NavLink>
                  </li>
                  <li>
                    <NavLink className= "active" to="/shop">{t("nav.6")}</NavLink>
                  </li>
                  <li>
                    <NavLink className= "active" to="/blogs">{t("nav.7")}</NavLink>
                  </li>
                  <li>
                    <NavLink className= "active" to="/contact">{t("nav.8")}</NavLink>
                  </li>
                </ul>
              </div>
              <div className="cart" >
              <div className="login d-flex">
              <div className="wishlistLength">
                  <span>{wishlist.length}</span>
                  <NavLink to="/wishlist">
                    <i class="fa-solid fa-heart"></i>
                  </NavLink>
                </div>
                <div className="wishlistLength">
                <span>{items.length}</span>
                  <NavLink to="/cart">
                    <i class="fa-solid fa-basket-shopping"></i>
                  </NavLink>
                </div>
                <NavLink to="/search">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </NavLink>
              </div>
              </div>
              <div className="btn-canvas">
                <a class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                  <i className="fa-solid fa-bars"></i>
                </a>
              </div>
            </div>
            <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Menu</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
              <div className="menu-mobile">
                <ul className="links-mobile">
                  <li>
                    <NavLink className= "active" to="/">{t("nav.4")}</NavLink>
                  </li>
                  <li>
                    <NavLink className= "active" to="/about">{t("nav.5")}</NavLink>
                  </li>
                  <li>
                    <NavLink className= "active" to="/shop">{t("nav.6")}</NavLink>
                  </li>
                  <li>
                    <NavLink className= "active" to="/blogs">{t("nav.7")}</NavLink>
                  </li>
                  <li>
                    <NavLink className= "active" to="/contact">{t("nav.8")}</NavLink>
                  </li>
                </ul>
              </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Nav;
