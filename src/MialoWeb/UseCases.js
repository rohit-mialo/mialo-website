import React, { useEffect } from "react";
import CustomNavbar from "./Navbar/Navbar";
import UseCasesPageBanner from "./UseCasesPageComponents/UseCasesPageBanner";
import UseCasesPageComponents from "./UseCasesPageComponents/UseCasesPageComponents";
import FooterOne from "./HomePageComponents/FooterThress";
import Slider from "./HomePageComponents/logoSlider";

function UseCases() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
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
    scrollToSection(id);
    window.history.pushState(null, "", `#${id}`); // Update the URL hash without reloading
  };

  return (
    <div>
      <CustomNavbar onNavigate={handleNavigate} />
      <UseCasesPageBanner />
      <Slider />
      <UseCasesPageComponents />
      <FooterOne />
    </div>
  );
}

export default UseCases;
