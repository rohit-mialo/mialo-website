// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React from "react";
// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/mialo/about_us.png";

function AboutUsBanner() {
  return (
    <MKBox component="header" position="relative">
      <MKBox
        display="flex"
        alignItems="center"
        justifyContent="center" // Center content horizontally
        minHeight="78vh"
        sx={{
          backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.1),
              rgba(gradients.dark.state, 0.1)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <Grid container spacing={3} justifyContent="center" alignItems="center">
            {" "}
            <Grid
              item
              xs={12}
              md={6}
              lg={6}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              textAlign="center" // Center text inside the Grid item
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
                About Us
              </MKTypography>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

export default AboutUsBanner;
