import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import PropTypes from "prop-types";

// Import the video
import bgVideo from "./HomeBannerVideo.mp4";

function HeaderTwo({ onButtonClick }) {
  const typedJSRef = useRef(null);

  useEffect(() => {
    const typedJS = new Typed(typedJSRef.current, {
      strings: ["AI-Powered Analytics", "Decision Intelligence"],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 200,
      startDelay: 500,
      loop: true,
    });

    return () => typedJS.destroy();
  }, []);

  return (
    <MKBox component="header" position="relative" height="100vh">
      {" "}
      {/* Use 100vh for full screen */}
      <MKBox component="nav" position="absolute" top="0.5rem" width="100%">
        <Container>
          <Grid container flexDirection="row" alignItems="center">
            <MKTypography
              component={Link}
              href="#"
              variant="button"
              color="white"
              fontWeight="regular"
              py={0.8125}
              mr={2}
            >
              Material Design
            </MKTypography>
            <MKButton
              variant="outlined"
              color="white"
              sx={{ display: { xs: "block", lg: "none" }, ml: "auto" }}
            >
              <MKBox component="i" color="white" className="fas fa-bars" />
            </MKButton>
            <MKBox
              component="ul"
              display={{ xs: "none", lg: "flex" }}
              p={0}
              my={0}
              mx="auto"
              sx={{ listStyle: "none" }}
            >
              <MKBox component="li">
                <MKTypography
                  component={Link}
                  href="#"
                  variant="button"
                  color="white"
                  fontWeight="regular"
                  p={1}
                  onClick={(e) => e.preventDefault()}
                >
                  Home
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography
                  component={Link}
                  href="#"
                  variant="button"
                  color="white"
                  fontWeight="regular"
                  p={1}
                  onClick={(e) => e.preventDefault()}
                >
                  About Us
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography
                  component={Link}
                  href="#"
                  variant="button"
                  color="white"
                  fontWeight="regular"
                  p={1}
                  onClick={(e) => e.preventDefault()}
                >
                  Contact Us
                </MKTypography>
              </MKBox>
            </MKBox>
            <MKBox
              component="ul"
              display={{ xs: "none", lg: "flex" }}
              p={0}
              m={0}
              sx={{ listStyle: "none" }}
            >
              <MKBox component="li">
                <MKTypography
                  component={Link}
                  href="#"
                  variant="button"
                  p={1}
                  onClick={(e) => e.preventDefault()}
                >
                  <MKBox component="i" color="white" className="fab fa-twitter" />
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography
                  component={Link}
                  href="#"
                  variant="button"
                  p={1}
                  onClick={(e) => e.preventDefault()}
                >
                  <MKBox component="i" color="white" className="fab fa-facebook" />
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography
                  component={Link}
                  href="#"
                  variant="button"
                  p={1}
                  onClick={(e) => e.preventDefault()}
                >
                  <MKBox component="i" color="white" className="fab fa-instagram" />
                </MKTypography>
              </MKBox>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <MKBox
        display="flex"
        alignItems="center"
        minHeight="100%"
        sx={{ position: "relative", overflow: "hidden" }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            // zIndex: -1,
          }}
        >
          <source src={bgVideo} type="video/mp4" className="img-fluid"/>
          Your browser does not support the video tag.
        </video>
        <Container>
          <Grid
            container
            itemzl
            xs={12}
            lg={8}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            mx="auto"
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
              style={{ zIndex: 1 }}
              className="banner"
            >
             Unlock a New Level of
              <br /> <span ref={typedJSRef} /> <br /> with Multimodal AI
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              mt={1}
              mb={6}
              px={{ xs: 3, lg: 6 }}
              style={{ zIndex: 1 }}
              className="subBanner"
            >
              Leverage multimodal AI for ‘X’ Analytics, integrating AI-driven intelligence, automation, and deep learning across various business workflows.
            </MKTypography>
            <div style={{ zIndex: 1 }}>
              {/* <MKButton color="white" style={{ marginRight: 10 }}>
                Book a Demo
              </MKButton> */}
              <MKButton color="white" onClick={()=>onButtonClick()}>
                Know More
              </MKButton>
            </div>
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

HeaderTwo.propTypes = {
  onButtonClick: PropTypes.func.isRequired, // Add this line
};

export default HeaderTwo;
