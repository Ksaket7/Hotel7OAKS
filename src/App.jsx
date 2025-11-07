import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
        <Route path="/treks" element={<Treks />} />
        <Route path="/treks/:id" element={<TrekDetails />} />
        <Route path="/contact" element={<Contact />} />
        {/* Individual Pages (can be reused or extended later) */}

        {/* Footer as standalone route (optional) */}
        <Route path="/footer" element={<Footer />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
