// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import SimpleBackgroundCard from "examples/Cards/BackgroundCards/SimpleBackgroundCard";

// Images
import post2 from "assets/images/examples/blog2.jpg";
// import post3 from "assets/images/examples/blog3.jpg";

function AboutUsLeaderShip() {
  return (
    <div style={{ paddingTop: "50px", paddingBottom: "50px" }}>
      <MKBox component="section" py={6}>
        <Container>
          <Grid container item xs={12} lg={6} flexDirection="column">
            <MKTypography variant="h3" mt={3} mb={1} color="black">
              Our Leadership
            </MKTypography>
          </Grid>
          <Grid container spacing={3} mt={3}>
            <Grid item xs={12} lg={4}>
              <Link to="/sections/page-sections/blog-posts">
                <SimpleBackgroundCard
                  image={post2}
                  title="Vinod Bhawnani"
                  subtitle="Founder & CEO"
                  description="Mialo Technologies Pvt. Ltd."
                />
              </Link>
            </Grid>
            <Grid item xs={12} lg={8}>
              <MKTypography variant="h4" color="text" mb={1}>
                Vinod Bhawnani
              </MKTypography>
              <MKTypography variant="body2" color="text" mb={1}>
                Founder & CEO
              </MKTypography>
              <MKTypography variant="body2" color="text" mb={2}>
                Mialo Technologies Pvt. Ltd.
              </MKTypography>
              <MKTypography variant="body2" color="text" mb={2}>
                Vinod Bhawnani is a visionary leader with over 20 years of experience driving
                innovation in global enterprise and mobile solutions. As a seasoned tech expert and
                former Chief Architect, CTO, and COO at Digimaker, he has shaped cutting-edge,
                scalable architectures that fuel business growth. With a deep passion for solving
                complex challenges, Vinod continues to lead Mialo Technologies in empowering
                businesses to thrive in an AI-first, data-driven world.
              </MKTypography>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </div>
  );
}

export default AboutUsLeaderShip;
