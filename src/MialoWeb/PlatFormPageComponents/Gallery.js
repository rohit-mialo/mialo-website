// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import { useState } from "react";

// Images
import bg1 from "assets/images/bg.jpg";
import bg2 from "assets/images/examples/content-1.jpg";
import bg3 from "assets/images/examples/content-2.jpg";
import bg4 from "assets/images/examples/content-3.jpg";
import bg5 from "assets/images/examples/content-4.jpg";
import bg6 from "assets/images/examples/content-5.jpg";
import bg7 from "assets/images/examples/content-3.jpg";
import bg8 from "assets/images/examples/content-5.jpg";
import bg9 from "assets/images/examples/content-4.jpg";
import bg10 from "assets/images/examples/content-3.jpg";
import bg11 from "assets/images/examples/content-2.jpg";
import bg12 from "assets/images/examples/content-1.jpg";

// Array of image data
const images = [
  { src: bg1 },
  { src: bg2 },
  { src: bg3 },
  { src: bg4 },
  { src: bg5 },
  { src: bg6 },
  { src: bg7 },
  { src: bg8 },
  { src: bg9 },
  { src: bg10 },
  { src: bg11 },
  { src: bg12 },
];

function Gallery() {
  const [visibleImages, setVisibleImages] = useState(6); // Start with 6 images

  const handleLoadMore = () => {
    setVisibleImages((prev) => prev + 6); // Load 6 more images
  };

  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid
          container
          item
          xs={8}
          flexDirection="column"
          alignItems="center"
          mx="auto"
          textAlign="center"
          mb={6}
        >
          <MKTypography variant="h2" mb={1} color="black">
            See Mialo.AI in Action
          </MKTypography>
          <MKTypography variant="body2" color="text">
            If you’ve got the right data in the right content, less is more.
          </MKTypography>
        </Grid>
        <Grid container spacing={3} minHeight="40vh">
          {images.slice(0, visibleImages).map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <MKBox
                width="100%"
                height="0"
                paddingBottom="75%" // Maintain aspect ratio (4:3)
                borderRadius="lg"
                shadow="md"
                sx={{
                  backgroundImage: `url(${image.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  margin: "10px", // Add margin of 10px
                }}
              />
            </Grid>
          ))}
        </Grid>
        {/* Load More Button */}
        {visibleImages < images.length && (
          <MKBox mt={3} display="flex" justifyContent="center">
            <MKButton color="info" onClick={handleLoadMore}>
              Load More
            </MKButton>
          </MKBox>
        )}
      </Container>
    </MKBox>
  );
}

export default Gallery;
