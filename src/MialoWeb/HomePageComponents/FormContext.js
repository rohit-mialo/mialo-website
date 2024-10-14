// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/examples/blog2.jpg";

function FormContext() {
  return (
    <div style={{ paddingTop: "50px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 50,
          textAlign: "center", // Ensure text doesn't overflow
          paddingLeft: "16px", // Ensure padding for smaller screens
          paddingRight: "16px", // Ensure padding for smaller screens
        }}
      >
        <MKTypography variant="h3" color="black">
          Ready to Level Up Your &apos;X&apos; Analytics with
          <br /> AI-Powered Insights?
        </MKTypography>
      </div>
      <MKBox component="section" py={{ xs: 0, lg: 6 }} sx={{ backgroundColor: "white" }}>
        <Container>
          <Grid container item px={6}>
            <MKBox
              width="100%"
              bgColor="white"
              borderRadius="xl"
              shadow="xl"
              mb={6}
              sx={{ overflow: "hidden" }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12} lg={7}>
                  <MKBox component="form" p={2} method="post">
                    <MKBox px={3} py={{ xs: 2, sm: 6 }}>
                      <MKTypography variant="h2" mb={1} color="black">
                        Send Us a Message
                      </MKTypography>
                      <MKTypography variant="body1" color="text" mb={2}>
                        We&apos;d like to talk with you.
                      </MKTypography>
                    </MKBox>
                    <MKBox pt={0.5} pb={3} px={3}>
                      <Grid container>
                        <Grid item xs={12} pr={1} mb={3}>
                          <MKInput
                            variant="standard"
                            label="Name"
                            placeholder="Full Name"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} pr={1} mb={3}>
                          <MKInput
                            variant="standard"
                            label="Email"
                            placeholder="abc@xyz.com"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} pr={1} mb={3}>
                          <MKInput
                            variant="standard"
                            label="Your message"
                            placeholder="I want to say that..."
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            multiline
                            rows={6}
                          />
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        item
                        xs={12}
                        md={6}
                        justifyContent="flex-end"
                        textAlign="right"
                        ml="auto"
                      >
                        <MKButton variant="gradient" color="info">
                          Send Message
                        </MKButton>
                      </Grid>
                    </MKBox>
                  </MKBox>
                </Grid>
                <Grid
                  item
                  xs={12}
                  lg={5}
                  position="relative"
                  px={0}
                  sx={{
                    backgroundImage: ({
                      palette: { gradients },
                      functions: { rgba, linearGradient },
                    }) =>
                      `${linearGradient(
                        rgba(gradients.info.main, 0.8),
                        rgba(gradients.info.state, 0.8)
                      )}, url(${bgImage})`,
                    backgroundSize: "cover",
                  }}
                >
                  <MKBox
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width="100%"
                    height="100%"
                  >
                    <MKBox py={6} pl={6} pr={{ xs: 6, sm: 12 }} my="auto">
                      <MKTypography variant="h3" color="white" mb={1}>
                        Contact Information
                      </MKTypography>
                      <MKTypography variant="body2" color="white" opacity={0.8} mb={3}>
                        Fill up the form and our Team will get back to you within 24 hours.
                      </MKTypography>
                      <MKBox display="flex" p={1}>
                        <MKTypography variant="button" color="white">
                          <i className="fas fa-phone" />
                        </MKTypography>
                        <MKTypography
                          component="span"
                          variant="button"
                          color="white"
                          opacity={0.8}
                          ml={2}
                          fontWeight="regular"
                        >
                          (+91) 96866 00130
                        </MKTypography>
                      </MKBox>
                      <MKBox display="flex" color="white" p={1}>
                        <MKTypography variant="button" color="white">
                          <i className="fas fa-envelope" />
                        </MKTypography>
                        <MKTypography
                          component="span"
                          variant="button"
                          color="white"
                          opacity={0.8}
                          ml={2}
                          fontWeight="regular"
                        >
                          info@mialotech.com
                        </MKTypography>
                      </MKBox>
                      <MKBox display="flex" color="white" p={1}>
                        <MKTypography variant="button" color="white">
                          <i className="fas fa-map-marker-alt" />
                        </MKTypography>
                        <MKTypography
                          component="span"
                          variant="button"
                          color="white"
                          opacity={0.8}
                          ml={2}
                          fontWeight="regular"
                        >
                          Nasscom CoE IoT & AI, 3rd Floor, K-Tech, 29/A (E), 27th Main, 7th Cross
                          Rd, Sector 1, HSR Layout,Bengaluru, Karnataka 560102
                        </MKTypography>
                      </MKBox>
                      <MKBox mt={3}>
                        <MKButton variant="text" color="white" size="large" iconOnly>
                          <i className="fab fa-facebook" style={{ fontSize: "1.25rem" }} />
                        </MKButton>
                        <MKButton variant="text" color="white" size="large" iconOnly>
                          <i className="fab fa-twitter" style={{ fontSize: "1.25rem" }} />
                        </MKButton>
                        <MKButton variant="text" color="white" size="large" iconOnly>
                          <i className="fab fa-dribbble" style={{ fontSize: "1.25rem" }} />
                        </MKButton>
                        <MKButton variant="text" color="white" size="large" iconOnly>
                          <i className="fab fa-instagram" style={{ fontSize: "1.25rem" }} />
                        </MKButton>
                      </MKBox>
                    </MKBox>
                  </MKBox>
                </Grid>
              </Grid>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
    </div>
  );
}

export default FormContext;
