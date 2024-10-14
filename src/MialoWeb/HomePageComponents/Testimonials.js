import { useRef } from "react";

// SwiperJS
import SwiperCore, { Autoplay, Navigation } from "swiper";

// SwiperJS react components
import { Swiper, SwiperSlide } from "swiper/react";

// SwiperJS styles
import "swiper/swiper.min.css";
import "swiper/css/navigation";

// @mui material components
import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import ComplexReviewCard from "examples/Cards/ReviewCards/ComplexReviewCard";

// Images
// import review1 from "assets/images/examples/clem-onojegaw.jpg";
import review2 from "assets/images/mialo/abcData.png";
import review3 from "assets/images/mialo/digiMaker.png";
// import logoSpotify from "assets/images/logos/small-logos/logo-spotify.svg";
import logoSlack from "assets/images/logos/small-logos/logo-slack.svg";

const testimonialsData = [
  // {
  //   image: review1,
  //   title: "Excellent payment service. You guys are the best!",
  //   review:
  //     "The beauty of working with Mialo is it feels like you are working with your co-founders. They will make you think harder, they are ready for any technology challenges and have a keen eye on not only giving fine solutions to you but a futuristic one. Great spirit, great team.",
  //   author: {
  //     logo: logoSpotify,
  //     name: "Abdul G Sait",
  //     role: "Group CEO, Basket Option Pvt. Ltd.",
  //   },
  // },
  {
    image: review2,
    title: "Awesome services! Fast and secure.",
    review:
      "We are very pleased to use Mialo's services. Our needs are handled in a most satisfying way. Services provided to us by Mialo does not only include managing the pre-existing source code of the CMS Digimaker but also creating new modules, creating customized services and continuously catering to the change requests.",
    author: {
      logo: logoSlack,
      name: "Christian R Bull",
      role: "Software Development Manager, ABC Data AS",
    },
  },
  {
    image: review3,
    title: "Awesome services! Fast and secure.",
    review:
      "Mialo has been a very stable and reliable provider of any IT related consultant services.The consultants are very skilled and a pleasure to work with. I would highly recommend anyone to approach Mialo for software and web related development. A+.",
    author: {
      logo: logoSlack,
      name: "Fredrik Kristiansen",
      role: "Web- and Interaction Designer / Advisor, Digimaker Webbyrå",
    },
  },
];

function Testimonials() {
  // Install SwiperJS modules
  SwiperCore.use([Autoplay, Navigation]);

  // Swiper navigation buttons styles
  const navigationStyles = {
    position: "absolute",
    top: 0,
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "15%",
    height: "100%",
    textAlign: "center",
    opacity: 0.5,
    cursor: "pointer",
    transition: "opacity 0.15s ease",

    "&:hover, &:focus": {
      opacity: 1,
    },
  };

  // SwiperJS navigation buttons ref
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div style={{ paddingTop: "50px" }}>
      <div style={{ maxWidth: "1440px", margin: "auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          <MKTypography variant="h2" color="black" align="center">
            What Our Clients Say About Us
          </MKTypography>
        </div>
        <MKBox position="relative">
          <Swiper
            onInit={({ params, navigation }) => {
              const { navigation: nav } = params;

              nav.prevEl = navigationPrevRef.current;
              nav.nextEl = navigationNextRef.current;
              navigation.init();
              navigation.update();
            }}
            autoplay={{ delay: 5000 }}
            speed={800}
            spaceBetween={0}
            slidesPerView={1}
            loop
          >
            {testimonialsData.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Container>
                  <ComplexReviewCard
                    image={testimonial.image}
                    // title={testimonial.title}
                    review={testimonial.review}
                    author={testimonial.author}
                  />
                </Container>
              </SwiperSlide>
            ))}
            <MKTypography
              variant="h2"
              color="dark"
              sx={{
                ...navigationStyles,
                left: 0,
              }}
              ref={navigationPrevRef}
            >
              <Icon>chevron_left</Icon>
            </MKTypography>
            <MKTypography
              variant="h2"
              color="dark"
              sx={{
                ...navigationStyles,
                right: 0,
              }}
              ref={navigationNextRef}
            >
              <Icon>chevron_right</Icon>
            </MKTypography>
          </Swiper>
        </MKBox>
      </div>
    </div>
  );
}

export default Testimonials;
