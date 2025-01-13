// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import emailjs from "@emailjs/browser";
import React, { useState, useEffect} from "react";

// Images
import bgImage from "assets/images/examples/blog2.jpg";
import Swal from "sweetalert2";

function ContactForPlatform() {


  const navbarHeight = 90; // Adjust this value to match your navbar height

  const scrollToSection = () => {
    // Check if 'usecases' is part of the id and extract only the part after it
    const sectionId = "contact-form"

    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionTop - navbarHeight, // Adjust for the navbar height
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const hash = window.location.hash; // Get the hash from the URL
    console.log(hash);
    
    if (hash=="#/contactUs") {
      
      const id = hash.substring(1); // Remove the '#' from the hash
      setTimeout(() => {
        scrollToSection(id); // Scroll to the section after a short delay
      }, 0); // Ensure it runs after the page has rendered
    }
  }, []); // Run this effect on component mount


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [emailError, setEmailError] = useState("");

const handleChange = (e) => {
  const { name, value } = e.target;

  // Update email error only for email input
  if (name === "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    setEmailError(emailRegex.test(value) ? "" : "Please enter a valid email address.");
  }

  // Update form data state
  setFormData((prevState) => ({
    ...prevState,
    [name]: value,
  }));
};

const sendEmail = (e) => {
  e.preventDefault();

  // Validation: Ensure all fields are filled and email is valid
  if (!formData.name || !formData.email || !formData.company || !formData.message) {
    Swal.fire({
      title: "ERROR!",
      text: "All fields are required. Please fill out the entire form.",
      icon: "error",
    });
    return;
  }

  if (emailError) {
    Swal.fire({
      title: "ERROR!",
      text: "Please fix the email error before submitting.",
      icon: "error",
    });
    return;
  }

  // Create the payload to send via emailjs
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    from_company: formData.company,
    message: formData.message,
  };

  emailjs
    .send("service_ydkozpo", "template_ryhxi7j", templateParams, "bHun3mtnX_pHX6i77")
    .then(
      (result) => {
        console.log("SUCCESS!", result.text);

        Swal.fire({
          title: "SUCCESS!",
          text: "Your message has been sent successfully!",
          icon: "success",
        });

        // Reset form fields after successful submission
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
          text: "Something went wrong. Please try again later!",
          icon: "error",
        });
      }
    );
};

  return (
    <div style={{ paddingTop: "60px" }}>
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
        <MKTypography variant="h3" color="black" className="content-header">
          Ready to Level Up Your &apos;X&apos; Analytics with
          <br /> AI-Powered Insights?
        </MKTypography>
      </div>

      <MKBox id="contact-form" component="section" py={{ xs: 0, lg: 6 }} sx={{ backgroundColor: "white" }}>
        <Container>
          <Grid container item px={6}>
            <MKBox width="100%" bgColor="white" borderRadius="xl" shadow="xl" mb={6} sx={{ overflow: "hidden" }}>
              <Grid container spacing={3}>
                <Grid item xs={12} lg={7}>
                  <MKBox component="form" p={2} pr={6} onSubmit={sendEmail}>
                    <MKBox px={3} py={{ xs: 2, sm: 4, lg: 1 }}>
                      <MKTypography variant="h2" mb={1} color="black" className="content-header">
                        Send us a message
                      </MKTypography>
                      <MKTypography variant="body1" color="text" mb={0} className="content-body">
                        We&apos;d like to talk with you.
                      </MKTypography>
                    </MKBox>
                    <MKBox pb={3} px={3}>
                      <Grid container>
                        <Grid item xs={12} pr={1} mb={3}>
                          <MKInput
                            variant="standard"
                            label="Name"
                            required
                            placeholder="Full Name"
                            InputLabelProps={{
                              shrink: true,
                              style: { fontWeight: "bold", fontSize: "18px" },
                            }}
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
                            required
                            placeholder="abc@xyz.com"
                            InputLabelProps={{
                              shrink: true,
                              style: { fontWeight: "bold", fontSize: "18px" },
                            }}
                            fullWidth
                            name="email"
                            value={formData.email}
                            error={!!emailError}
                            helperText={emailError}
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={12} pr={1} mb={3}>
                          <MKInput
                            variant="standard"
                            label="Company"
                            required
                            placeholder="Company Name"
                            InputLabelProps={{
                              shrink: true,
                              style: { fontWeight: "bold", fontSize: "18px" },
                            }}
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
                            required
                            placeholder="Let us know what you're looking for!"
                            InputLabelProps={{
                              shrink: true,
                              style: { fontWeight: "bold", fontSize: "18px" },
                            }}
                            fullWidth
                            multiline
                            rows={2}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                          />
                        </Grid>
                      </Grid>
                      <Grid container item xs={12} md={6} justifyContent="flex-end" textAlign="right" ml="auto">
                        <MKButton variant="gradient" color="info" type="submit">
                          Send Message
                        </MKButton>
                      </Grid>
                    </MKBox>
                  </MKBox>
                </Grid>
                {/* Right Panel */}
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
                  <MKBox display="flex" justifyContent="center" alignItems="center" width="100%" height="100%">
                    <MKBox py={6} pl={6} pr={{ xs: 6, sm: 12 }} my="auto">
                      <MKTypography className="content-header" variant="h3" color="white" mb={1}>
                        Contact Information
                      </MKTypography>
                      <MKTypography className="content-body" variant="body2" color="white" opacity={0.8} mb={3}>
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
