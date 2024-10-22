import React from "react";
import "./Footer.css"; // You can write the CSS inline or use a separate file for styles.
import img from "assets/images/mialo/Logo_Mialo.png";
import { Link } from "react-router-dom";

const FooterThress = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h2 className="footer-logo">
            <img src={img} alt="mialo logo" style={{ height: "90px", width: "150px" }} />
          </h2>
          <p className="footer-tagline">Enabling Human Senses in Machines with Multimodal AI</p>
          <div className="social-links">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="">Career</Link>
            </li>
            <li>
              <Link to="/contactUs">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Platform</h3>
          <ul>
            <li>
              <Link to="/platform">Mialo.AI</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Solutions</h3>
          <ul>
            <li>
              <Link to="/solutions">Shopper Analytics</Link>
            </li>
            <li>
              <Link to="/solutions">Smart Parking</Link>
            </li>
            <li>
              <Link to="/solutions">Smart Security</Link>
            </li>
            <li>
              <Link to="/solutions">Access Control</Link>
            </li>
            <li>
              <Link to="/solutions">Document Processing</Link>
            </li>
            <li>
              <Link to="/solutions">Gen AI & Conversational AI</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column contact-info">
          <h3>Contact Us</h3>
          <div style={{ display: "flex" }}>
            <i
              className="fas fa-map-marker-alt"
              style={{ float: "left", marginTop: "15px", marginRight: "8px" }}
            />
            <p>
              Nasscom CoE IoT & AI, 3rd Floor, K-Tech, 29/A (E), 27th Main, 7th Cross Rd, Sector 1,
              HSR Layout,Bengaluru, Karnataka 560102
            </p>
          </div>
          <p>
            <i className="fas fa-phone" />
            Phone: (+91) 96866 00130
          </p>
          <p>
            <i className="fas fa-envelope" />
            Email: <Link to="mailto:info@mialotech.com">info@mialotech.com</Link>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Mialo Technologies.</p>
      </div>
    </footer>
  );
};

export default FooterThress;
