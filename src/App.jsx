import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Packages from "./components/Packages";
import Treks from "./components/Treks";
import TripsAndTours from "./components/Tours";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import "./index.css";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/ContactUs.jsx";
import Hotel from "./pages/Hotels.jsx";
import ToursAndPackages from "./pages/ToursAndPackages.jsx";


function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/hotels" element={<Hotel />} />
        <Route path="/tours" element={<ToursAndPackages />} />

        {/* Individual Pages (can be reused or extended later) */}
        <Route path="/packages" element={<Packages />} />
        <Route path="/treks" element={<Treks />} />
        <Route path="/trips" element={<TripsAndTours />} />
        <Route path="/whyus" element={<WhyUs />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />

        {/* Footer as standalone route (optional) */}
        <Route path="/footer" element={<Footer />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
