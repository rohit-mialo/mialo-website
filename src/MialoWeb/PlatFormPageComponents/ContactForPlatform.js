// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import emailjs from "@emailjs/browser";
import React, { useState } from "react";

// Images
import bgImage from "assets/images/examples/blog2.jpg";
import Swal from "sweetalert2";

function ContactForPlatform() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Create the payload to send via emailjs
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_company: formData.company,
      message: formData.message,
    };

    emailjs.send("service_ydkozpo", "template_ryhxi7j", templateParams, "bHun3mtnX_pHX6i77").then(
      (result) => {
        console.log("SUCCESS!", result.text);
        // Optionally, clear the form or show success message
        Swal.fire({
          title: "SUCCESS!",
          text: "Your Message sent successfully!",
          icon: "success",
        });

        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        });
      },
      (error) => {
        console.log("FAILED...", error.text);

        Swal.fire({
          title: "ERROR!",
          text: "Something went wrong try after sometime!",
          icon: "error",
        });
      }
    );
  };

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
          Ready to Level Up Your Analytics with
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
                  <MKBox component="form" p={2} onSubmit={sendEmail}>
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
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={12} pr={1} mb={3}>
                          <MKInput
                            variant="standard"
                            label="Email"
                            placeholder="abc@xyz.com"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={12} pr={1} mb={3}>
                          <MKInput
                            variant="standard"
                            label="Company"
                            placeholder="Company Name"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
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
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
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
                        <MKButton variant="gradient" color="info" type="submit">
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
                        Fill up the form and our team will get back to you shortly.
                      </MKTypography>
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

export default ContactForPlatform;
