import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {  useRef } from "react";
import { toast } from "react-toastify";
const Signin = ({ user, setUser }) => {
  const { t } = useTranslation();
  const history = useNavigate();
  const name = useRef();
  const password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.current.value === "Ulviyya" &&
      password.current.value === "Ulviyya123"
    ) {
      localStorage.setItem("emailData", "Ulviyya");
      localStorage.setItem("passwordData", "Ulviyya123");
      history("/");
      
      window.location.reload();
      console.log(name.current.value);
    }
    else{
      toast.warning('Please fill all the places')
    }
  };
  return (
    
       <div className="bachround-mode">
        
        <div className="section-code">
          <div className="container-code">
            <div className="row full-height justify-content-center">
              <div className="col-12 text-center align-self-center py-5">
                <div  className="section pb-5 pt-5 pt-sm-2 text-center">
                  <h6 style={{color: "#dc3545", fontSize: "25px", margin:"0px", padding: "0px"}}><span>Log In </span></h6>
                  <div className="card-3d-wrap mx-auto">
                    <div className="card-3d-wrapper">
                      <div className="card-front">
                        <form  onSubmit={handleSubmit}  className="center-wrap">
                          <div className="section text-center">
                            <div className="form-group">
                              <input type="text"   ref={name} className="form-style" placeholder="Your Email" id="name"  />
                              <i className="input-icon uil uil-at" />
                            </div>	
                            <div className="form-group mt-2">
                              <input type="password"  ref={password} className="form-style" placeholder="Your Password" id="password"  />
                              <i className="input-icon uil uil-lock-alt" />
                            </div>
                            <button className="btn mt-4 btn btn-danger" type="submit" >submit</button>
                            <p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Signin;
