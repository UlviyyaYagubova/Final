import React, { useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';
import AOS from "aos";
import "aos/dist/aos.css";
const AboutsecThree = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_s8yz2gs', 'template_ab6l1dp ', form.current, 'AQsMv-8_cmq4-hJbf')
      .then((result) => {
          console.log(result.text); 
      }, (error) => {
          console.log(error.text);
      });
  };
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="aboutsec3">
      <div
        className="about-main"
        data-aos="fade-bottom"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-12 h-100">
              <div className="email-bg">
                <div className="txt-left">
                  <h3>Newsletter & Get Updates</h3>
                  <p>Sign up for our newsletter to get up-to-date from us </p>
                </div>
                <form className="form" ref={form} onSubmit={sendEmail}>
                  <input onChange={e =>(e.target.value.trim())} type="text" placeholder="Your email address" id="email"  name="user_email" />
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutsecThree;


