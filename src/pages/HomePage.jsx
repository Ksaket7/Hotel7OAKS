import Hero from "../components/Homepage/Hero";
import Stats from "../components/Homepage/Stats";
import Packages from "../components/Homepage/Packages";
import Treks from "../components/Homepage/Treks";
import Tours from "../components/Homepage/Hotels";
import WhyUs from "../components/Homepage/WhyUs";
import Testimonials from "../components/Homepage/Testimonials";
import ImageMarquee from "../components/Homepage/ImageMarquee";
import CTA from "../components/Homepage/CTA";

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
