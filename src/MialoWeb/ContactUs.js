import React from "react";
import FormContext from "./HomePageComponents/FormContext";
import FooterOne from "./HomePageComponents/FooterThress";
import CustomNavbarForPlatformPage from "./Navbar/NavbarForPlatformPage";

function ContactUs() {
  return (
    <div>
      <CustomNavbarForPlatformPage />
      <FormContext />
      <FooterOne />
    </div>
  );
}

export default ContactUs;
