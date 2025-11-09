import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import "./index.css";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/ContactUs.jsx";
import Hotel from "./pages/Hotels.jsx";
import ToursAndPackages from "./pages/ToursAndPackages.jsx";
import Treks from "./pages/Treks.jsx";
import TrekDetails from "./pages/TrekDetails.jsx";
import TourPackageDetails from "./pages/ToursPackagesDetails.jsx";
import HotelDetail from "./pages/HotelDetails.jsx";
import Loader from "./components/Loader.jsx"; // 👈 Import your loader
import Error404 from "./pages/Error.jsx";

// --- RouteTransitionWrapper for smooth fade-ins on navigation ---
const RouteTransitionWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

function AppContent() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Simulated loading time (you can tie this to actual API/image loading)
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />; // ✅ Show loader during initial load

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <RouteTransitionWrapper>
                <HomePage />
              </RouteTransitionWrapper>
            }
          />
          <Route
            path="/about"
            element={
              <RouteTransitionWrapper>
                <AboutUs />
              </RouteTransitionWrapper>
            }
          />
          <Route
            path="/hotels"
            element={
              <RouteTransitionWrapper>
                <Hotel />
              </RouteTransitionWrapper>
            }
          />
          <Route
            path="/hotels/:id"
            element={
              <RouteTransitionWrapper>
                <HotelDetail />
              </RouteTransitionWrapper>
            }
          />
          <Route
            path="/tours"
            element={
              <RouteTransitionWrapper>
                <ToursAndPackages />
              </RouteTransitionWrapper>
            }
          />
          <Route
            path="/tours/:id"
            element={
              <RouteTransitionWrapper>
                <TourPackageDetails />
              </RouteTransitionWrapper>
            }
          />
          <Route
            path="/treks"
            element={
              <RouteTransitionWrapper>
                <Treks />
              </RouteTransitionWrapper>
            }
          />
          <Route
            path="/treks/:id"
            element={
              <RouteTransitionWrapper>
                <TrekDetails />
              </RouteTransitionWrapper>
            }
          />
          <Route
            path="/contact"
            element={
              <RouteTransitionWrapper>
                <Contact />
              </RouteTransitionWrapper>
            }
          />

          <Route
            path="*"
            element={
              <RouteTransitionWrapper>
                <Error404 />
              </RouteTransitionWrapper>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
