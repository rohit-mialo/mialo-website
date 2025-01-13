import React, { useState, useEffect, useRef} from "react";
import FormContext from "./HomePageComponents/FormContext";
import FooterOne from "./HomePageComponents/FooterThress";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import { useNavigate } from "react-router-dom";
import CustomNavbar from "./Navbar/Navbar";


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

  const testimonialsRef = useRef(null);
  const scrollToTestimonials = () => {
    if (testimonialsRef.current) {
      const targetPosition =
        testimonialsRef.current.getBoundingClientRect().top + window.scrollY + 250;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
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
        <CustomNavbar onNavigate={scrollToSection} onButtonClick={scrollToTestimonials} />
      )}
      <div style={{ paddingTop: "90px" }}>
        <div>
          <FormContext />
        </div>
      </div>
      <FooterOne />
    </>
  );
}

export default ContactUs;
