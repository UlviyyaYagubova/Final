import React from 'react'
const Contact = () => {
  return (
    <div className='all-contact'>
 <section className="contact-sec sec-pad">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="contact-detail">
                <h1 className="section-title">Contact us</h1>
                <ul className="contact-ul">
                  <li><i className="fa fa-location-dot" />Baku,Azerbaijan</li>
                  <li>
                    <i className="fa fa-phone" />
                    <a href="tel:08510004495"><b>+994 77 603 02 22</b></a>
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope" />
                    <a href="mailto:yagubova.ulviyya@gmail.com"><b>yagubova.ulviyya@gmail.com</b></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <form action="#" className="contFrm" method="POST">
                <div className="row">
                  <div className="col-sm-6">
                    <input type="text" name="name" placeholder="Your Name" className="inptFld" required />
                  </div>
                  <div className="col-sm-6">
                    <input type="email" name="email" placeholder="Email Address" className="inptFld" required />
                  </div>
                  <div className="col-sm-6">
                    <input type="tel" name="phone" placeholder="Phone Number" className="inptFld" required />
                  </div>
                  <div className="col-sm-6">
                    <input type="text" name="sub" placeholder="Subject" className="inptFld" required />
                  </div>
                  <div className="col-12">
                    <textarea className="inptFld" rows cols placeholder="Your Message..." required defaultValue={""} />
                  </div>
                  <div className="col-12">
                    <input type="submit" name="submit" defaultValue="SUBMIT" className="inptBtn" />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div style={{textAlign: 'center', marginTop: '20px'}}>
            
          </div>
        </div>
      </section>
      
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.476185507483!2d49.82713381524776!3d40.37613766603143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d4ec5fe0f83%3A0x805256f8d1c1ec75!2sMatrix%20Training%20Center!5e0!3m2!1sru!2s!4v1674041867261!5m2!1sru!2s" width="100%" height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    </div>
  )
}

export default Contact
