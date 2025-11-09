import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Packages from "../components/Packages";
import Treks from "../components/Treks";
import Tours from "../components/Hotels";
import WhyUs from "../components/WhyUs";
import Testimonials from "../components/Testimonials";
import ImageMarquee from "../components/ImageMarquee";
import CTA from "../components/CTA";

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
