// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Coworking page component
// import AboutUsOption from "pages/LandingPages/Coworking/components/AboutUsOption";

function FeaturesOne() {
  return (
    <div style={{ backgroundColor: "white", paddingTop: "50px", paddingBottom: "50px" }}>
      <MKBox component="section" py={{ xs: 3, md: 12 }}>
        <Container>
          <Grid container alignItems="center">
            <Grid item xs={12} lg={5}>
              <MKTypography variant="h1" my={1} color="black">
                Our Vision
              </MKTypography>
              <MKTypography variant="body1" color="text" mb={2}>
                To transform lives by harnessing the power of generative, responsible, and privacy
                preserving AI that transform pixel and sensor data into actionable insights.
              </MKTypography>
              {/* <MKTypography
              component="a"
              href="#"
              variant="body2"
              color="info"
              fontWeight="regular"
              sx={{
                width: "max-content",
                display: "flex",
                alignItems: "center",

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
              More about us
              <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </MKTypography> */}
            </Grid>
            <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
              <Stack>
                <MKTypography variant="h1" my={1} color="black">
                  Our Mission
                </MKTypography>
                <MKTypography variant="body1" color="text" mb={2}>
                  To democratize artificial intelligence, empowering businesses with human-like
                  abilities in hearing, seeing, reasoning, and learning through advanced AI
                  technologies.
                </MKTypography>
                {/* <MKTypography
                component="a"
                href="#"
                variant="body2"
                color="info"
                fontWeight="regular"
                sx={{
                  width: "max-content",
                  display: "flex",
                  alignItems: "center",

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
                More about us
                <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
              </MKTypography> */}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </div>
  );
}

export default FeaturesOne;
