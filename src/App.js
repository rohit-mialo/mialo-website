import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import routes from "routes";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 PRO React themes
import theme from "assets/theme";
import ScrollToHash from "pages/ScrollToHash";

// Lazy-loaded components
const Presentation = lazy(() => import("layouts/pages/presentation"));
const Home = lazy(() => import("MialoWeb/Home"));
const Platform = lazy(() => import("MialoWeb/Platform"));
const CustomNavbar = lazy(() => import("MialoWeb/Navbar/Navbar"));
const AboutUs = lazy(() => import("MialoWeb/AboutUs"));
const Solutions = lazy(() => import("MialoWeb/Solutions"));const UseCases = lazy(() => import("MialoWeb/UseCases"));
const IndustriesUseCase = lazy(() => import("MialoWeb/Industries"));
const ContactUs = lazy(() => import("MialoWeb/ContactUs"));

// Material Kit 2 PRO React routes

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
      <ScrollToHash />
      <Suspense
        fallback={
          <div
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            Loading...
          </div>
        }
      >
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
          <Route path="/IndustriesUseCase" element={<IndustriesUseCase />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}
