import React, { useState, useEffect } from "react";
import FormContext from "./HomePageComponents/FormContext";
import FooterOne from "./HomePageComponents/FooterThress";
import CustomNavbarForPlatformPage from "./Navbar/NavbarForPlatformPage";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import { useNavigate } from "react-router-dom";

function ContactUs() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Adjust the breakpoint as needed

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const scrollToSection = (id) => {
    console.log(`Navigating to: ${id}`);
    navigate(`/usecases#${id}`); // Navigate to /usecases with the section ID
  };

  return (
    <>
      {isMobile ? (
        <DefaultNavbar
          routes={routes}
          action={{
            type: "external",
            route: "#",
            label: "TALK TO US",
            color: "info",
          }}
          sticky
        />
      ) : (
        <CustomNavbarForPlatformPage onNavigate={scrollToSection} />
      )}
      <div style={{ paddingTop: "70px" }}>
        <FormContext />
      </div>
      <FooterOne />
    </>
  );
}

export default ContactUs;
