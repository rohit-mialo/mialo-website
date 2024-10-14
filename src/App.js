import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 PRO React themes
import theme from "assets/theme";
import Presentation from "layouts/pages/presentation";

// Material Kit 2 PRO React routes
import routes from "routes";
import Home from "MialoWeb/Home";
import Platform from "MialoWeb/Platform";
import CustomNavbar from "MialoWeb/Navbar/Navbar";
import AboutUs from "MialoWeb/AboutUs";
import Solutions from "MialoWeb/Solutions";
import UseCases from "MialoWeb/UseCases";
import ContactUs from "MialoWeb/ContactUs";

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        <Route path="/presentation" element={<Presentation />} />
        <Route path="*" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/navbar" element={<CustomNavbar />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/usecases" element={<UseCases />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
    </ThemeProvider>
  );
}
