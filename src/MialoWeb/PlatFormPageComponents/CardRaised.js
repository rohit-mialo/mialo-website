// import React, { useState } from "react";
// import Grid from "@mui/material/Grid";
// import MKBox from "components/MKBox";
// import RaisedBlogCard from "examples/Cards/BlogCards/RaisedBlogCard";
// import MKButton from "components/MKButton";
// import MKTypography from "components/MKTypography";

// const CardRaised = () => {
//   const cardData = [
//     {
//       image:
//         "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
//       title: "Derive Insights from Images",
//       description:
//         "Extracts actionable insights from images and empowers businesses to make informed decisions.",
//       route: "/sections/page-sections/general-cards",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
//       title: "Object Detection & Tracking",
//       description:
//         "Detects & tracks objects in images or videos, enabling real-time surveillance & analysis.",
//       route: "/sections/page-sections/general-cards",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
//       title: "Image Classification",
//       description:
//         "Offers facial detection & recognition capabilities, enhancing security and user experience.",
//       route: "/sections/page-sections/general-cards",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
//       title: "Anomaly Detection",
//       description:
//         "Identifies unusual patterns or deviations in visual data, allowing businesses to detect and mitigate potential issues before they escalate.",
//       route: "/sections/page-sections/general-cards",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
//       title: "Scene Understanding",
//       description:
//         "Interprets the content and context of scenes, allowing for more intelligent automation and in-depth analytics.",
//       route: "/sections/page-sections/general-cards",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
//       title: "Facial Detection & Recognition",
//       description:
//         "Enhances security & ensures personalized experiences for users using face detection and recognition capabilities.",
//       route: "/sections/page-sections/general-cards",
//     },
//     // Add more card data as needed
//   ];

//   const [visibleCards, setVisibleCards] = useState(3);

//   const handleLoadMore = () => {
//     setVisibleCards((prev) => prev + 3);
//   };

//   return (
//     <div style={{ backgroundColor: "white" }}>
//       <MKBox pt={6} pb={3} px={3}>
//         <MKTypography
//           variant="h2"
//           align="center"
//           color="black"
//           fontWeight="bold"
//           gutterBottom
//           py={8}
//         >
//           Make Sense of Data by Leveraging
//           <br />
//           Multimodal AI
//         </MKTypography>
//         <Grid container spacing={3} sx={{ marginBottom: "70px" }}>
//           {cardData.slice(0, visibleCards).map((card, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <div style={{ marginBottom: "20px" }}>
//                 {" "}
//                 {/* Margin wrapper */}
//                 <RaisedBlogCard
//                   image={card.image}
//                   title={card.title}
//                   description={card.description}
//                   action={{
//                     type: "internal",
//                     route: card.route,
//                     color: "info",
//                     label: "Learn more",
//                   }}
//                 />
//               </div>
//             </Grid>
//           ))}
//         </Grid>
//         {visibleCards < cardData.length && (
//           <MKBox mt={3} display="flex" justifyContent="center">
//             <MKButton color="info" onClick={handleLoadMore}>
//               Load More
//             </MKButton>
//           </MKBox>
//         )}
//       </MKBox>
//     </div>
//   );
// };

// export default CardRaised;
import React, { useState } from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 PRO React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

// Images
import img1 from "assets/images/mialo/Derive_Insights_from_Images.png";
import img2 from "assets/images/mialo/Object_Detection_&_Tracking.png";
import img3 from "assets/images/mialo/Image_Classification.png";
import img4 from "assets/images/mialo/Anomaly_Detection.png";
import img5 from "assets/images/mialo/Scene_understading.png";
import img6 from "assets/images/mialo/Facial_Recognition.png";

function CardRaised() {
  const cardData = [
    {
      image: img1,
      title: "Derive Insights from Images",
      description:
        "Extracts actionable insights from images and empowers businesses to make informed decisions.",
      route: "/sections/page-sections/general-cards",
    },
    {
      image: img2,
      title: "Object Detection & Tracking",
      description:
        "Detects & tracks objects in images or videos, enabling real-time surveillance & analysis.",
      route: "/sections/page-sections/general-cards",
    },
    {
      image: img3,
      title: "Image Classification",
      description:
        "Offers facial detection & recognition capabilities, enhancing security and user experience.",
      route: "/sections/page-sections/general-cards",
    },
    {
      image: img4,
      title: "Anomaly Detection",
      description:
        "Identifies unusual patterns in visual data, allowing businesses to detect and mitigate potential issues before they escalate.",
      route: "/sections/page-sections/general-cards",
    },
    {
      image: img5,
      title: "Scene Understanding",
      description:
        "Interprets the content and context of scenes, allowing for more intelligent automation and in-depth analytics.",
      route: "/sections/page-sections/general-cards",
    },
    {
      image: img6,
      title: "Facial Detection & Recognition",
      description:
        "Enhances security & ensures personalized experiences for users using face detection and recognition capabilities.",
      route: "/sections/page-sections/general-cards",
    },
    // Add more card data as needed
  ];

  const [visibleCards, setVisibleCards] = useState(3);

  const handleLoadMore = () => {
    setVisibleCards((prev) => prev + 3);
  };
  return (
    <div style={{ backgroundColor: "white" }}>
      <div style={{ maxWidth: "1440px", margin: "auto" }}>
        <MKBox component="section" py={6}>
          <Container>
            <Grid
              container
              item
              xs={12}
              lg={6}
              justifyContent="center"
              mx="auto"
              textAlign="center"
            >
              <MKTypography variant="h2" mb={2} color="black">
                Make Sense of Data by Leveraging
                <br />
                Multimodal AI
              </MKTypography>
            </Grid>
            <Grid container spacing={3} mt={8}>
              {cardData.slice(0, visibleCards).map((card, index) => (
                <Grid item xs={12} md={8} lg={4} mb={{ xs: 3, lg: 1 }} key={index}>
                  <DefaultReviewCard
                    color="light"
                    image={card.image}
                    name={card.title}
                    review={card.description}
                  />
                </Grid>
              ))}
            </Grid>
            {visibleCards < cardData.length && (
              <MKBox mt={3} display="flex" justifyContent="center">
                <MKButton color="info" onClick={handleLoadMore}>
                  Load More
                </MKButton>
              </MKBox>
            )}
          </Container>
        </MKBox>
      </div>
    </div>
  );
}

export default CardRaised;
