// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
// import bgImage from "assets/images/bg-coworking.jpeg";
import { Box } from "@mui/material";
// import MialoImage from "assets/images/Mialo.A.png";
import MialoVideo from "assets/videos/Section_two_video.mp4";

function SectionTwo() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <MKBox component="header" position="relative">
        <MKBox
          display="flex"
          alignItems="center"
          minHeight="70vh"
          sx={{
            //   backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
            //     `${linearGradient(
            //       rgba(gradients.dark.main, 0.5),
            //       rgba(gradients.dark.state, 0.5)
            //     )}, url(${bgImage})`,
            //   backgroundSize: "cover",
            //   backgroundPosition: "center",
            backgroundColor: "white",
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
                  variant="h2"
                  color="light"
                  mb={3}
                  sx={({ breakpoints, typography: { size } }) => ({
                    [breakpoints.down("md")]: {
                      fontSize: size["3xl"],
                    },
                  })}
                >
                  Turn Ambiguous, Siloed Multimodal Data into Reusable Resource
                </MKTypography>
                <MKTypography variant="body2" color="light" opacity={0.8} pr={6} mr={6}>
                  Unlock AI-powered, multi-modal data for ‘X’ analytics with Mialo.AI, a full stack
                  AI platform. By leveraging cutting-edge technologies like AIoT, Deep Learning,
                  Computer Vision, Natural Language Processing, and Speech Recognition, the platform
                  provides businesses with a comprehensive approach to data, empowering them to
                  navigate today’s complex landscape-easily and efficiently.
                </MKTypography>
                <Stack direction="row" spacing={1} mt={3}>
                  <MKButton color="info">Book a Demo</MKButton>
                  <MKButton color="info">Talk to Us</MKButton>
                </Stack>
              </Grid>
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
                    width: "100%",
                    height: "80vh",
                    // borderRadius: 2, // Optional: for rounded corners
                  }}
                >
                  <source src={MialoVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </Box>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </MKBox>
    </div>
  );
}

export default SectionTwo;
