// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import React from "react";
// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import PropTypes from "prop-types";

// Images
// import bgImage from "assets/images/mialo/platformBanner.png";
// import bgImage from "assets/images/mialo/platformBanner1.png";
// import bgImage from "assets/images/mialo/platformBanner2.png";
import bgImage from "assets/images/mialo/platformBanner3.png";


// import { Box } from "@mui/material";
// import MialoImage from "../../assets/images/Mialo.A.png";

function HeaderOne({ onButtonClick }) {
  return (
    <MKBox component="header" position="relative">
      <MKBox
        display="flex"
        alignItems="center"
        minHeight="100vh"
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
          <Grid container spacing={3}>
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
                Unveil the Power of
                <MKTypography
                  variant="h1"
                  color="info"
                  sx={({ breakpoints, typography: { size } }) => ({
                    [breakpoints.down("md")]: {
                      fontSize: size["3xl"],
                    },
                  })}
                >
                  Multimodal AI
                </MKTypography>
                in Automation and Decision Making
              </MKTypography>
              <MKTypography
                variant="body1"
                color="white"
                opacity={0.8}
                pr={6}
                mr={6}
                className="subBanner"
              >
                Redefine how your business analyzes data to optimize processes and automate tasks with the Mialo.AI platform.
              </MKTypography>
              <Stack direction="row" spacing={1} mt={3}>
                {/* <MKButton color="info">Book a Demo</MKButton> */}
                <MKButton color="info" onClick={onButtonClick}>
                  Know more
                </MKButton>
              </Stack>
            </Grid>
            {/* <Grid
              item
              xs={12}
              md={6}
              lg={6}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                component="img"
                src={MialoImage}
                alt="Description of image"
                sx={{
                  width: "80%", // Adjust width as needed
                  height: "auto",
                  borderRadius: 2, // Optional: for rounded corners
                }}
              />
            </Grid> */}
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

HeaderOne.propTypes = {
  onButtonClick: PropTypes.func.isRequired, // Add this line
};

export default HeaderOne;
