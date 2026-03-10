import Hero from "../components/HomePage/Hero";
import Stats from "../components/HomePage/Stats";
import Packages from "../components/HomePage/Packages";
import Treks from "../components/HomePage/Treks";
import Tours from "../components/HomePage/Hotels";
import WhyUs from "../components/HomePage/WhyUs";
import Testimonials from "../components/HomePage/Testimonials";
import ImageMarquee from "../components/HomePage/ImageMarquee";
import CTA from "../components/HomePage/CTA";

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Stats />
      <Packages />
      <Treks />
      <Tours />
      <WhyUs />
      <Testimonials />
      <ImageMarquee />
      <CTA />
    </div>
  );
};

export default HomePage;
