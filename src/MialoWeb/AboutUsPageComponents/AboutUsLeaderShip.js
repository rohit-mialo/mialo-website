import React from "react";
// react-router-dom components
// import { Link } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Box from "@mui/material/Box";
import VinodImg from "assets/images/mialo/vindo2.png";

function AboutUsLeaderShip() {
  return (
    <div style={{ paddingTop: "50px", paddingBottom: "50px" }}>
      <MKBox component="section" py={6}>
        <Container>
          <Grid container item xs={12} lg={12} flexDirection="column">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <MKTypography className="content-header"  variant="h2" mt={3} mb={1} color="black">
                Our Leadership
              </MKTypography>
            </div>
          </Grid>
          <Grid container spacing={3} mt={3} alignItems="center">
            <Grid item xs={12} lg={6}>
              <Stack justifyContent="center" alignItems="center">
                {/* Add responsive image */}
                <Box
                  component="img"
                  src={VinodImg}
                  alt="Something went wrong"
                  sx={{
                    width: "100%",
                    height: "auto", // Ensure the height is auto to maintain aspect ratio
                    maxWidth: "400px", // Optional: limit max width of the image
                  }}
                />
              </Stack>
            </Grid>
            <Grid item xs={12} lg={6} container justifyContent="center">
              <div
                style={{
                  backgroundColor: "white",
                  border: "2px solid black",
                  borderRadius: "8px",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <MKTypography className="content-sub-header" variant="h4" color="black" mb={1}>
                  Vinod Bhawnani
                </MKTypography>
                <MKTypography className="content-body" variant="body2" color="text" mb={1}>
                  Founder & CEO
                </MKTypography>
                <MKTypography className="content-body" variant="body2" color="text" mb={2}>
                  Mialo Technologies Pvt. Ltd.
                </MKTypography>
                <MKTypography className="content-body" variant="body2" color="text" mb={2}>
                  Vinod Bhawnani is a visionary leader with over 20 years of experience driving
                  innovation in global enterprise and mobile solutions. As a seasoned tech expert
                  and former Chief Architect, CTO, and COO at Digimaker, he has shaped cutting-edge,
                  scalable architectures that fuel business growth. With a deep passion for solving
                  complex challenges, Vinod continues to lead Mialo Technologies in empowering
                  businesses to thrive in an AI-first, data-driven world.
                </MKTypography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </div>
  );
}

export default AboutUsLeaderShip;
