// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React from "react";
// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Images
// import bgImage from "assets/images/mialo/about_us.png";

import bgVideo from "assets/images/blogImage/bannerVideo.mp4"; // adjust this path accordingly

function BlogBanner() {
  return (
    <MKBox component="header" position="relative">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay (optional gradient) */}
      <MKBox
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        sx={({ palette: { gradients }, functions: { linearGradient, rgba } }) => ({
          background: linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
          ),
          zIndex: 0,
        })}
      />

      {/* Content */}
      <MKBox
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="78vh"
        position="relative"
        zIndex={1}
      >
        <Container>
          <Grid container spacing={3} justifyContent="center" alignItems="center">
            <Grid
              item
              xs={12}
              md={6}
              lg={6}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              textAlign="center"
            >
              <MKTypography
                variant="h1"
                color="white"
                mb={3}
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["3xl"],
                  },
                })}
                className="banner"
              >
                Blogs
              </MKTypography>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}


export default BlogBanner;
