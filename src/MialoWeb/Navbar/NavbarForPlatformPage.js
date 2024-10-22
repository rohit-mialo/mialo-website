import React, { useState, useRef, useEffect } from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomDropdown from "./CustomDropdown"; // Import the custom dropdown
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import MKButton from "components/MKButton";
import Logo from "assets/images/mialo/Logo_Mialo.png";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Custom hook to get window size
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

const CustomNavbarForPlatformPage = ({ onNavigate, onButtonClick }) => {
  const [showDropdown, setShowDropdown] = useState(false); // State to manage custom dropdown visibility
  const [showPlatformDropdown, setShowPlatformDropdown] = useState(false);
  const [showIndustriesDropdown, setShowIndustriesDropdown] = useState(false);
  const dropdownRef = useRef(null); // Ref to track the custom dropdown
  const { width } = useWindowSize();

  // Close dropdown if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  console.log(width);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: "#000620", // Light transparent background
        // backdropFilter: "blur(15px)", // Blurred background
        width: "100%", // Centered width
        // margin: "15px auto", // Space from top
        // borderRadius: "10px", // Optional border radius
        // border: "1px solid black", // Optional border for more styling
        position: "fixed", // Fixes the navbar to the top
        // top: "10px", // Adds space from the top of the screen
        // left: "50%", // Aligns the navbar in the center horizontally
        // transform: "translateX(-50%)", // Centers the navbar
        zIndex: 1000, // Ensures it stays on top of other components
        padding: "10px",
        transition: "background-color 0.5s ease",
      }}
    >
      <Container fluid>
        <Navbar.Brand
          as={Link}
          to="/"
          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          <img src={Logo} alt="Mialo.AI Logo" style={{ height: "45.25px" }} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{ display: "flex", alignItems: "center" }}>
            {/* Simple Dropdown for Platform */}
            <Dropdown
              show={showPlatformDropdown}
              onMouseEnter={() => setShowPlatformDropdown(true)}
              onMouseLeave={() => setShowPlatformDropdown(false)}
            >
              <Dropdown.Toggle
                variant="link"
                id="platform-dropdown"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "18px",
                  lineHeight: "1.5",
                }}
              >
                Platform
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/platform" style={{ color: "black" }}>
                  Mialo.AI
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* <Nav.Link
              href="/#/platform"
              style={{ color: "white", textDecoration: "none", fontSize: "18px" }}
            >
              Platform
            </Nav.Link> */}

            {/* Solutions Dropdown */}
            {/* Trigger to show the custom dropdown */}
            <Nav.Link
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                cursor: "pointer",
                color: showDropdown ? "#5ce1e6" : "white",
                textDecoration: "none",
                fontSize: "18px",
              }}
              as={Link}
              to="/solutions"
            >
              Solutions
            </Nav.Link>
            <ArrowDropDownIcon fontSize="medium" style={{ marginLeft: "-10px", color: "white" }} />

            {/* Render the CustomDropdown if showDropdown is true */}
            {showDropdown && (
              <div
                ref={dropdownRef} // Attach the ref to the custom dropdown container
                style={{ position: "absolute", right: "10px", top: "60px", zIndex: 1000 }}
                onMouseEnter={handleMouseEnter} // Keep dropdown open on hover
                onMouseLeave={handleMouseLeave} // Hide dropdown on mouse leave
              >
                <CustomDropdown onNavigate={onNavigate} />
              </div>
            )}

            <Dropdown
              show={showIndustriesDropdown}
              onMouseEnter={() => setShowIndustriesDropdown(true)}
              onMouseLeave={() => setShowIndustriesDropdown(false)}
            >
              <Dropdown.Toggle
                variant="link"
                id="platform-dropdown"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "18px",
                  lineHeight: "1.5",
                }}
              >
                Industries
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/platform" style={{ color: "black" }}>
                  Retail
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/platform" style={{ color: "black" }}>
                  BFSI
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/platform" style={{ color: "black" }}>
                  Infrastructure
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/platform" style={{ color: "black" }}>
                  Logistics
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/platform" style={{ color: "black" }}>
                  Security
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/platform" style={{ color: "black" }}>
                  Healthcare
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/platform" style={{ color: "black" }}>
                  Hospitality
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/platform" style={{ color: "black" }}>
                  Agriculture
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/platform" style={{ color: "black" }}>
                  Manufacturing
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link
              as={Link}
              to="/aboutus"
              style={{ color: "white", textDecoration: "none", fontSize: "18px" }}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contactUs"
              style={{ color: "white", textDecoration: "none", fontSize: "18px" }}
            >
              Contact Us
            </Nav.Link>

            {/* Simple Dropdown for Products */}
            {/* <Dropdown>
              <Dropdown.Toggle
                variant="link"
                id="products-dropdown"
                style={{ color: "black", textDecoration: "none" }}
              >
                Products
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#product1" style={{ color: "black" }}>
                  Product 1
                </Dropdown.Item>
                <Dropdown.Item href="#product2" style={{ color: "black" }}>
                  Product 2
                </Dropdown.Item>
                <Dropdown.Item href="#product3" style={{ color: "black" }}>
                  Product 3
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
            <button
              style={{
                position: "relative",
                fontSize: "14px",
                padding: "10px",
                background: "white",
                border: "1px solid transparent",
                borderRadius: "10px",
                color: "black", // Default text color
                cursor: "pointer",
                overflow: "hidden",
                outline: "none",
              }}
              onClick={onButtonClick}
              onMouseEnter={(e) => {
                const background = e.currentTarget.querySelector("span:first-child");
                const text = e.currentTarget.querySelector("span:last-child");
                background.style.left = "0"; // Move the blue background into view
                text.style.color = "white"; // Change text color to white
              }}
              onMouseLeave={(e) => {
                const background = e.currentTarget.querySelector("span:first-child");
                const text = e.currentTarget.querySelector("span:last-child");
                background.style.left = "-100%"; // Move the blue background out of view
                text.style.color = "black"; // Change text color back to black
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: 0,
                  left: "-100%",
                  height: "100%",
                  width: "100%",
                  backgroundColor: "#007AFF",
                  transition: "left 0.5s ease",
                  zIndex: 0,
                }}
              />
              <span
                style={{
                  position: "relative",
                  zIndex: 1,
                }}
              >
                TALK TO US
              </span>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

CustomNavbarForPlatformPage.propTypes = {
  onNavigate: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default CustomNavbarForPlatformPage;
