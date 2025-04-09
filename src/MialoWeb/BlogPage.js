import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import routes from "routes";
import FormContext from "./HomePageComponents/FormContext";
import FooterThress from "./HomePageComponents/FooterThress";
import CustomNavbar from "./Navbar/Navbar";
import AboutUsBanner from "MialoWeb/blog-page/BlogBanner";
import BlogPostThree from "MialoWeb/blog-page/components/BlogPostThree";

// MUI components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import Breadcrumbs from "examples/Breadcrumbs";

function Blog() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (id) => {
    console.log(`Navigating to: ${id}`);
    navigate(`/usecases#${id}`);
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
      <div style={{ width: "100%" }}>
        {isMobile ? (
          <DefaultNavbar
            routes={routes}
            action={{
              type: "external",
              route: "#",
              label: "TALK TO US",
              color: "info",
              onclick: scrollToTestimonials,
            }}
            sticky
          />
        ) : (
          <CustomNavbar onNavigate={scrollToSection} onButtonClick={scrollToTestimonials} />
        )}
        <AboutUsBanner />
        <MKBox component="section" bgColor="white" py={3}>
          <Container>
            <Grid container spacing={2} item xs={12} lg={10} >
              <Grid item xs={12}>
                <Breadcrumbs
                  routes={[
                    { label: "Home", route: "/" },
                    { label: "Blog" },
                  ]}
                />
              </Grid>
            </Grid>
          </Container>
        </MKBox>

        {/* ✅ Blog section begins here */}
        <BlogPostThree />

        {/* Contact / Testimonials form */}
        <div ref={testimonialsRef}>
          <FormContext />
        </div>

        {/* Footer */}
        <FooterThress />
      </div>
    </>
  );
}

export default Blog;
