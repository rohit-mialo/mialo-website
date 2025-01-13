import React from "react";
import "./Footer.css"; // You can write the CSS inline or use a separate file for styles.
import img from "assets/images/mialo/Footer-logo.png";
import { Link } from "react-router-dom";

const FooterForService = () => {
  const navbarHeight = 90; // Adjust this value to match your navbar height

  const scrollToSection = (id) => {
    const sectionId = extractSectionId(id, "#"); // Use '#' as the default delimiter
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionTop - navbarHeight, // Adjust for the navbar height
        behavior: "smooth",
      });
    }
  };

  const extractSectionId = (id, delimiter = "#") => {
    const parts = id.split(delimiter);
    return parts.length > 1 ? parts[1] : id;
  };


  return (
    <footer className="footer">
      <div className="footer-container">
        <div className=" footer-logo-container">
          <h2 className="footer-logo">
            <img src={img} alt="mialo logo" style={{ height: "90px" }} />
          </h2>
          <div className="social-links">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
        <div className="footer-column-links">
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li>
                <Link to="/aboutus">About us</Link>
              </li>
              {/* <li>
              <Link to="">Career</Link>
            </li> */}
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
                <Link to="/solutions#shopper-analytics" 
                onClick={(e) => { e.preventDefault(); scrollToSection("solutions#shopper-analytics"); }}

                >Shopper Analytics</Link>
              </li>
              <li>
                <Link
                  onClick={(e) => { e.preventDefault(); scrollToSection("solutions#smart-parking"); }}

                  to="/solutions#smart-parking">Smart Parking</Link>
              </li>
              <li>
                <Link
                  onClick={(e) => { e.preventDefault(); scrollToSection("solutions#smart-security"); }}
                  to="/solutions#smart-security">Smart Security</Link>
              </li>
              <li>
                <Link 
                 onClick={(e) => { e.preventDefault(); scrollToSection("solutions#access-control"); }}
                to="/solutions#access-control">Access Control</Link>
              </li>
              <li>
             
                <Link 
                 onClick={(e) => { e.preventDefault(); scrollToSection("solutions#document-processing"); }}
                to="/solutions#document-processing">Document Processing</Link>
              </li>
              <li>

                <Link 
                onClick={(e) => { e.preventDefault(); scrollToSection("solutions#generative-ai"); }}
                to="/solutions#generative-ai">Gen & Conversational AI</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Industries</h3>
            <ul>
              <li>
                <Link to="/IndustriesUseCase?industry=Retail">Retail</Link>
              </li>
              <li>
                <Link to="/IndustriesUseCase?industry=BFSI">BFSI</Link>
              </li>
              <li>
                <Link to="/IndustriesUseCase?industry=Infrastructure">Infrastructure</Link>
              </li>
              <li>
                <Link to="/IndustriesUseCase?industry=Logistics">Logistics</Link>
              </li>
              <li>
                <Link to="/IndustriesUseCase?industry=Security">Security</Link>
              </li>
              <li>
                <Link to="/IndustriesUseCase?industry=Healthcare">Healthcare</Link>
              </li>
              <li>
                <Link to="/IndustriesUseCase?industry=Hospitality">Hospitality</Link>
              </li>
              <li>
                <Link to="/IndustriesUseCase?industry=Agriculture">Agriculture</Link>
              </li>
              <li>
                <Link to="/IndustriesUseCase?industry=Manufacturing">Manufacturing</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column contact-info">
            <h3>Contact Us</h3>
            <div style={{ display: "flex" }}>
              {/* <i
              className="fas fa-map-marker-alt"
              style={{ float: "left", marginTop: "15px", marginRight: "8px" }}
            /> */}
              <p>
                Nasscom CoE IoT & AI, 3rd Floor, K-Tech, 29/A (E), 27th Main, 7th Cross Rd, Sector 1,
                HSR Layout,Bengaluru, Karnataka 560102
              </p>
            </div>
            <p>
              {/* <i className="fas fa-phone" /> */}
              Phone: (+91) 96866 00130
            </p>
            <p>
              {/* <i className="fas fa-envelope" /> */}
              Email: <Link to="mailto:info@mialotech.com">info@mialotech.com</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Mialo Technologies.</p>
      </div>
    </footer>
  );
};

export default FooterForService;