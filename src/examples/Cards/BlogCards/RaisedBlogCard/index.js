/**
=========================================================
* Material Kit 2 PRO React - v2.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router components
import { Link } from "react-router-dom";
import React from "react";
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import MuiLink from "@mui/material/Link";
import CardActions from '@mui/material/CardActions';

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function RaisedBlogCard({ image, title, description, action }) {
  // const cardActionStyles = {
  //   display: "flex",
  //   alignItems: "center",

  //   "& .material-icons, .material-icons-round,": {
  //     transform: `translateX(2px)`,
  //     transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
  //   },

  //   "&:hover .material-icons, &:focus .material-icons, &:hover .material-icons-round, &:focus .material-icons-round":
  //     {
  //       transform: `translateX(6px)`,
  //     },
  // };

  // const width = window.innerWidth;
  const height = window.innerHeight;

  return (
    <Card  sx={{
      display: "flex",
      flexDirection: "column", 
      justifyContent: "space-between",
      height: "100%", 
    }}>
      <MKBox position="relative" borderRadius="lg" mx={2} mt={-3}>
        <MKBox
          component="img"
          src={image}
          alt={title}
          borderRadius="lg"
          shadow="md"
          width="100%"
          height={height > 400 ? "210px" : "270px"}
          position="relative"
          zIndex={1}
        />
        <MKBox
          borderRadius="lg"
          shadow="md"
          width="100%"
          height="100%"
          position="absolute"
          left={0}
          top={0}
          sx={{
            backgroundImage: `url(${image})`,
            transform: "scale(0.94)",
            filter: "blur(12px)",
            backgroundSize: "cover",
          }}
        />
      </MKBox>
      <MKBox p="24px 20px" >
        <MKTypography  display="inline" variant="h4" textTransform="capitalize" color="black" className="content-sub-header">
          {title}
        </MKTypography>
        <MKBox mt={1} mb={1}>
          <MKTypography sx={{textAlign:"justify"}} variant="body2" component="p" color="text" className="content-body">
            {description}
          </MKTypography>
        </MKBox>
        </MKBox>
        <CardActions sx={{ mt: "auto" }}>
    {action.type === "external" ? (
      <MKTypography
        component={MuiLink}
        href={action.route}
        target="_blank"
        rel="noreferrer"
        variant="body2"
        fontWeight="regular"
        color={action.color || "dark"}
        sx={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "4px", // Adjust spacing between the label and the icon
          padding: "2px 19px 19px",
          textAlign: "center",
        }}
      >
        {action.label}
        <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
      </MKTypography>
    ) : (
      <MKTypography
        component={Link}
        to={action.route}
        variant="body2"
        fontWeight="regular"
        color={action.color || "dark"}
        sx={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "4px", // Adjust spacing between the label and the icon
          padding: "2px 19px 19px",
          textAlign: "center",
        }}>
        {action.label}
        <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
      </MKTypography>
    )}
  </CardActions>
    
    </Card>
  );
}

// Typechecking props for the RaisedBlogCard
RaisedBlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]),
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default RaisedBlogCard;
