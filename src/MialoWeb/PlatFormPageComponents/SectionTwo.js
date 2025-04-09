// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import React from "react";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
// import bgImage from "assets/images/bg-coworking.jpeg";
import { Box } from "@mui/material";
// import MialoImage from "assets/images/Mialo.A.png";
import MialoVideo from "assets/videos/Section_two_video.mp4";
import { Link } from "react-router-dom";

function SectionTwo() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <MKBox
        component="header"
        position="relative"
        sx={{
          padding:"30px",
          backgroundColor: "white",
          overflow: "hidden", // Prevents content from going outside
        }}
      >
        <Container>
          <Grid
            container
            spacing={3}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              minHeight: "75vh",
            }}
          >
            {/* Text Section */}
            <Grid
              item
              xs={12}
              md={6}
              lg={6}
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <MKTypography
                className="content-header"
                variant="h2"
                color="light"
                mb={3}
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["3xl"],
                  },
                })}
              >
                Transform Multimodal Data into a Reusable Asset
              </MKTypography>
                <MKTypography
                
                  className="content-body"
                  variant="body2"
                  color="light"
                  opacity={0.8}
                  pr={4}
                  sx={{ textAlign: 'justify'}}
                >
                Unlock AI-powered, multi-modal data for ‘X’ analytics with Mialo.AI, a full stack AI
                platform. By leveraging cutting-edge technologies like AIoT, Deep Learning, Computer
                Vision, Natural Language Processing, and Speech Recognition, the platform provides
                businesses with a comprehensive approach to data, empowering them to navigate today’s
                complex landscape-easily and efficiently.
              </MKTypography>
              <Stack direction="row" spacing={1} mt={3}>
                <MKButton color="info" component={Link} to="/contactUs">
                  GET IN TOUCH
                </MKButton>
              </Stack>
            </Grid>
  
            {/* Video Section */}
            <Grid
              item
              xs={12}
              md={6}
              lg={6}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                component="video"
                autoPlay
                loop
                muted
                sx={{
                  width: "70%", // Makes the video responsive within its container
                  height: "100%", // Ensures the video does not overflow
                  maxHeight: "50vh", // Prevents the video from exceeding the box height
                  objectFit: "fill", // Maintains aspect ratio and fills the box
                  borderRadius: 2, // Optional: for rounded corners
                }}
              >
                <source src={MialoVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </Box>
            </Grid>

          </Grid>
        </Container>
      </MKBox>
    </div>
  );
  
}

export default SectionTwo;
