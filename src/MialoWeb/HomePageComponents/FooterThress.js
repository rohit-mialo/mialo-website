// Material Kit 2 PRO React components
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import DetailedFooter from "examples/Footers/DetailedFooter";

import img from "assets/images/mialo/Logo_Mialo.png";

function FooterOne() {
  const date = new Date().getFullYear();

  const footerContent = {
    brand: {
      name: "MATERIAL UI DESIGN",
      description: "Enabling Human Senses in Machines with Multimodal AI",
      image: img,
    },
    socials: [
      {
        icon: <i className="fab fa-facebook" />,
        link: "https://www.facebook.com/CreativeTim/",
      },
      {
        icon: <i className="fab fa-twitter" />,
        link: "https://twitter.com/creativetim",
      },
      {
        icon: <i className="fab fa-instagram" />,
        link: "https://www.instagram.com/creativetimofficial/",
      },
      {
        icon: <i className="fab fa-pinterest" />,
        link: "https://ro.pinterest.com/thecreativetim/",
      },
      {
        icon: <i className="fab fa-github" />,
        link: "https://github.com/creativetimofficial",
      },
    ],
    menus: [
      {
        name: "company",
        items: [
          { name: "About Us", href: "https://www.creative-tim.com" },
          { name: "career", href: "https://www.creative-tim.com" },
          { name: "contact", href: "https://www.creative-tim.com" },
        ],
      },
      {
        name: "Platform",
        items: [
          { name: "Mialo.AI", href: "https://www.creative-tim.com" },
          // { name: "register", href: "https://www.creative-tim.com" },
          // { name: "add list", href: "https://www.creative-tim.com" },
        ],
      },
      {
        name: "Solutions",
        items: [
          { name: "Shopper Analytics", href: "https://www.creative-tim.com" },
          { name: "Smart Parking", href: "https://www.creative-tim.com" },
          { name: "Smart Security", href: "https://services.creative-tim.com" },
          { name: "Access Control", href: "https://www.creative-tim.com" },
          { name: "Document Processing", href: "https://www.creative-tim.com" },
          { name: "Gen & Conversational AI", href: "https://www.creative-tim.com" },
        ],
      },
      // {
      //   name: "resources",
      //   items: [
      //     { name: "blog", href: "https://www.creative-tim.com" },
      //     { name: "services", href: "https://www.creative-tim.com" },
      //     { name: "product", href: "https://www.creative-tim.com" },
      //     { name: "pricing", href: "https://www.creative-tim.com" },
      //   ],
      // },
    ],
    copyright: (
      <MKTypography variant="button" color="white">
        Copyright &copy; {date}{" "}
        <MKTypography
          component="a"
          href="#"
          target="_blank"
          rel="noreferrer"
          variant="button"
          color="white"
        >
          Mialo Technologies
        </MKTypography>
        .
      </MKTypography>
    ),
  };

  return (
    <div style={{ padding: "50px", backgroundColor: "#000620" }}>
      <DetailedFooter content={footerContent} />
    </div>
  );
}

export default FooterOne;
