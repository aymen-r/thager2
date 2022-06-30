import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="f-container">
          <div className="f-left f-section">
            <h2>About Us</h2>
            <div className="content">
              <p>
                “Thaghr Al-Rafidain” was established in Dubai – United Arab
                Emirates in 2006, to work in areas that provide opportunities to
                contribute to the development of the business sector, trade and
                industry, including the transition to clean solar energy and
                renewable energy projects are implementing fully solar-powered
                urban complexes.
              </p>
              <div className="social">
                <a href="/">
                  <span className="fab fa-facebook-f"></span>
                </a>
                <a href="#/">
                  <span className="fab fa-instagram"></span>
                </a>
                <a href="#/">
                  <span className="fab fa-twitter"></span>
                </a>
                <a href="#/">
                  <span className="fab fa-linkedin"></span>
                </a>
              </div>
            </div>
          </div>

          <div className="center f-section">
            <h2>Contact Us</h2>
            <div className="content">
              <div className="place">
                <span className="fas fa-map-marker-alt"></span>
                <span className="text"> Dubai, UAE</span>
              </div>
              <div className="phone">
                <span className="fas fa-phone-alt"></span>
                <span className="text"> +971 423 463 74</span>
              </div>
              <div className="email">
                <span className="fas fa-envelope"></span>
                <span className="text"> info@Thageralrafedain.ae</span>
                <span className="text"> sales@thageralrafedain.ae</span>
              </div>
            </div>
          </div>

          <div className="right f-section">
            <h2>Subscribe</h2>
            <div className="content">
              <form action="#">
                <div className="email">
                  <div className="text">Email*</div>
                </div>
                <input type="email" required />
                <div className="btn">
                  <button type="submit">SUBSCRIBE</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <center>
            <div>
              <span>Powered By © 2022 | All Rights Reserved | Made By</span>
            </div>
          </center>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
