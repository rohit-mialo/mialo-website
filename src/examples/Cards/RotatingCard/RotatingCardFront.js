// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
// import Icon from "@mui/material/Icon";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// function RotatingCardFront({ color = "#190e60", image, icon = "", title, description }) {
function RotatingCardFront({ color = "#1a73e8", image, title, description }) {
  return (
    <MKBox
      display="flex"
      justifyContent="center"
      alignContent="center"
      borderRadius="lg"
      coloredShadow="dark" // Optional: You can adjust or remove this
      width="100%"
      position="relative"
      zIndex={2}
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba } }) =>
          `${linearGradient(rgba(color, 0.85), rgba(color, 0.85))}, url(${image})`,
        backgroundSize: "cover",
        backfaceVisibility: "hidden",
      }}
    >
      <MKBox py={12} px={3} textAlign="center" lineHeight={1}>
        {/* {icon && (
          <MKTypography variant="h2" color="white" my={2}>
            {typeof icon === "string" ? <Icon>{icon}</Icon> : icon}
          </MKTypography>
        )} */}
        <MKTypography variant="h3" color="white" gutterBottom>
          {title}
        </MKTypography>
        <MKTypography variant="body2" color="white" opacity={0.8}>
          {description}
        </MKTypography>
      </MKBox>
    </MKBox>
  );
}

// Typechecking props for the RotatingCardFront
RotatingCardFront.propTypes = {
  color: PropTypes.string, // Update the prop type to accept string
  image: PropTypes.string.isRequired,
  icon: PropTypes.node,
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
};

export default RotatingCardFront;
