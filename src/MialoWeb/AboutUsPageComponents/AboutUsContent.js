// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Box from "@mui/material/Box";
import MialoImage from "assets/images/mialo/Who_we_are.png";

// Coworking page component
// import AboutUsOption from "pages/LandingPages/Coworking/components/AboutUsOption";

function AboutUsContent() {
  return (
    <div style={{ paddingTop: "50px", paddingBottom: "50px" }}>
      <MKBox component="section" py={{ xs: 3, md: 1 }} sx={{ maxWidth: "1440px", margin: "auto" }}>
        <Container>
          <Grid container alignItems="center">
            <Grid item xs={12} lg={5}>
              <MKTypography variant="body2" mb={6} style={{ color: "black" }}>
                In today’s fast-evolving world, businesses must constantly adapt and innovate to
                stay competitive!
                <br></br>
                <br></br>
                <a href="/platform">Mialo.AI </a>
                is a Low Code AI Automation and Decision Intelligence Platform designed to help
                businesses interact with multi-modal data in smarter ways. By leveraging
                cutting-edge technologies like AIoT, Deep Learning, Computer Vision, Natural
                Language Processing (NLP), and Automatic Speech Recognition, we empower businesses
                to optimize processes, automate tasks, make data-driven decisions, and enhance
                customer experiences to thrive in a dynamic market.<br></br>
                <br></br> Headquartered in Bangalore, the heart of India’s tech landscape, Mialo
                Technologies also provides comprehensive software solutions and services globally.
                We are committed to transforming operations, reducing costs, and driving growth,
                making us a one-stop destination for businesses seeking to harness the next wave of
                emerging technologies.
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
                BOOK A DEMO
                {/* <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon> */}
              </MKTypography>
            </Grid>
            <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
              <Stack>
                {/* Add responsive image */}
                <Box
                  component="img"
                  src={MialoImage}
                  alt="Something went wrong"
                  sx={{
                    width: "100%",
                    height: "100%",
                    // borderRadius: 2, // Optional: for rounded corners
                  }}
                />
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </div>
  );
}

export default AboutUsContent;
