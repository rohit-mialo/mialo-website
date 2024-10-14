/*
=========================================================
* Material Kit 2 PRO React - v2.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import MuiLink from "@mui/material/Link";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

function RotatingCard({ color = "#1a73e8", image, description, action }) {
  return (
    <MKBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="lg"
      coloredShadow="custom" // If you have a custom shadow for your color
      position="absolute"
      width="100%"
      height="100%"
      top={0}
      left={0}
      zIndex={5}
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba } }) =>
          `${linearGradient(rgba(color, 0.85), rgba(color, 0.85))}, url(${image})`,
        backgroundSize: "cover",
        backfaceVisibility: "hidden",
        transform: "rotateY(180deg)",
      }}
    >
      <MKBox pb={2} px={2} textAlign="center" lineHeight={1}>
        <MKTypography variant="body1" color="white" opacity={0.8}>
          {description}
        </MKTypography>
        {action && (
          <MKBox width="50%" mt={4} mb={2} mx="auto">
            {action.type === "external" ? (
              <MKButton
                component={MuiLink}
                href={action.route}
                target="_blank"
                rel="noreferrer"
                color="white"
                size="small"
                fullWidth
              >
                {action.label}
              </MKButton>
            ) : (
              <MKButton component={Link} to={action.route} color="white" size="small" fullWidth>
                {action.label}
              </MKButton>
            )}
          </MKBox>
        )}
      </MKBox>
    </MKBox>
  );
}

// Typechecking props for the RotatingCard
RotatingCard.propTypes = {
  color: PropTypes.string, // Updated to accept any string color
  image: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  action: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      type: PropTypes.oneOf(["external", "internal"]).isRequired,
      route: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ]).isRequired,
};

export default RotatingCard;
