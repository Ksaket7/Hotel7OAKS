import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Packages from "../components/Packages";
import Treks from "../components/Treks";
import Tours from "../components/Tours";
import WhyUs from "../components/WhyUs";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Packages />
      <Treks />
      <Tours />
      <WhyUs />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default HomePage;
