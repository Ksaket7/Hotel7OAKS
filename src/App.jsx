import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Packages from "./components/Packages";
import Treks from "./components/Treks";
import TripsAndTours from "./components/Tours";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* Individual Pages (can be reused or extended later) */}
        <Route path="/packages" element={<Packages />} />
        <Route path="/treks" element={<Treks />} />
        <Route path="/trips" element={<TripsAndTours />} />
        <Route path="/whyus" element={<WhyUs />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<CTA />} />

        {/* Footer as standalone route (optional) */}
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
