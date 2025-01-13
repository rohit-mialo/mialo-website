import React, { useState, useEffect } from "react";
import CustomNavbar from "./Navbar/Navbar";
import UseCasesPageBanner from "./UseCasesPageComponents/UseCasesPageBanner";
import UseCasesPageComponents from "./UseCasesPageComponents/UseCasesPageComponents";
import FooterOne from "./HomePageComponents/FooterThress";
import Slider from "./HomePageComponents/logoSlider";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";

function UseCases() {
  const navbarHeight = 90; // Adjust this value to match your navbar height

  const scrollToSection = (id) => {
    // Check if 'usecases' is part of the id and extract only the part after it
    const sectionId = id.includes("usecases#") ? id.split("usecases#")[1] : id;

    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionTop - navbarHeight, // Adjust for the navbar height
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const hash = window.location.hash; // Get the hash from the URL
 
    if (hash) {
      const id = hash.substring(1); // Remove the '#' from the hash
      setTimeout(() => {
        scrollToSection(id); // Scroll to the section after a short delay
      }, 0); // Ensure it runs after the page has rendered
    }
  }, []); // Run this effect on component mount

  const handleNavigate = (id) => {
    // Check if the 'id' already includes 'usecases'. If not, add it as a prefix.
    const prefixedId = id.includes("usecases") ? id : `/usecases#${id}`;

    // Scroll to the section using the modified ID
    scrollToSection(prefixedId);

    // Update the URL hash without reloading the page
    window.history.pushState(null, "", `#${prefixedId}`);
  };

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

  return (
    <div>
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
        <CustomNavbar onNavigate={handleNavigate} />
      )}
      <UseCasesPageBanner />
      <Slider />
      <UseCasesPageComponents />
      <FooterOne />
    </div>
  );
}

export default UseCases;
