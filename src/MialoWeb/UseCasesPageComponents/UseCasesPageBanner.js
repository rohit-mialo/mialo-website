// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Stack from "@mui/material/Stack";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
// import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/mialo/usecaseBanner.png";
// import { Box } from "@mui/material";
// import MialoImage from "../../assets/images/Mialo.A.png";

function UseCasesPageBanner() {
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
              >
                A Unified Platform Solving a Spectrum of Use Cases
              </MKTypography>
              <MKTypography variant="body1" color="white" opacity={0.8} pr={6} mr={6}>
                Tackle unique business challenges and gain intelligent insights with Mialo.AI&#39;s
                comprehensive capabilities.
              </MKTypography>
              {/* <Stack direction="row" spacing={1} mt={3}>
                <MKButton color="info">Book a Demo</MKButton>
                <MKButton color="info">Talk to Us</MKButton>
              </Stack> */}
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

export default UseCasesPageBanner;
