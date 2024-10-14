// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Box from "@mui/material/Box";
import MialoVideo from "assets/videos/Mialo.AI_Features.mp4";

// Coworking page component
// import AboutUsOption from "pages/LandingPages/Coworking/components/AboutUsOption";

function AboutPlatform() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <MKBox component="section" py={{ xs: 3, md: 1 }} sx={{ maxWidth: "1440px", margin: "auto" }}>
        <Container>
          <Grid container alignItems="center">
            <Grid item xs={12} lg={5}>
              <MKTypography fontWeight="bold" my={2} sx={{ fontSize: "3.2rem", color: "#000620" }}>
                Mialo.AI
              </MKTypography>
              <MKTypography variant="h4" mb={6} style={{ color: "black" }}>
                Power up Your Multimodal Data with our
                <br /> Feature-Rich AI Platform for
                <br /> ‘X’ Analytics
              </MKTypography>
              <MKTypography
                component="a"
                href="#"
                variant="body2"
                color="light"
                fontWeight="regular"
                sx={{
                  width: "max-content",
                  display: "flex",
                  backgroundColor: "#2d87ec",
                  padding: "10px",
                  alignItems: "center",
                  borderRadius: "15px",
                  fontWeight: "700",

                  "& .material-icons-round": {
                    fontSize: "1.125rem",
                    transform: "translateX(3px)",
                    transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                  },

                  "&:hover .material-icons-round, &:focus .material-icons-round": {
                    transform: "translateX(6px)",
                  },
                }}
              >
                Explore more
                <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
              </MKTypography>
            </Grid>
            <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
              <Stack>
                {/* Add responsive image */}
                <Box
                  component="video"
                  autoPlay
                  loop
                  muted
                  sx={{
                    width: "100%",
                    height: "100%",
                    // borderRadius: 2, // Optional: for rounded corners
                  }}
                >
                  <source src={MialoVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </div>
  );
}

export default AboutPlatform;
