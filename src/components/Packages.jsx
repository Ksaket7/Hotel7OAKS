import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { toursData } from "../data/toursnpackages";

gsap.registerPlugin(ScrollTrigger);

const Packages = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section className="py-8 bg-gray-200 overflow-hidden">
      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col justify-center items-center text-center"
      >
        {/* Label & Heading */}
        <div className="relative text-center mb-4">
          <p className="text-green text-xl lg:text-2xl tracking-wide font-dsB mb-3">
            Popular
          </p>
          <h2 className="text-4xl md:text-5xl font-ssBD text-gray-800 inline-block">
            Handpicked Tour Packages
          </h2>
        </div>

        {/* Subtext */}
        <p className="text-gray-900 text-sm sm:text-base md:text-md font-ssLB lg:w-max mx-auto px-4 mb-5">
          From serene getaways to adventurous treks and spiritual journeys —
          choose a tour package that fits your dream escape.
        </p>

        {/* Package Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          {toursData.map((pkg) => (
            <div
              key={pkg.id}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:scale-[1.03] transition-transform duration-300"
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-4 bg-white text-center">
                <h3 className="text-gray-900 font-ssBookD text-lg mb-1">
                  {pkg.title}
                </h3>
                <div className="flex justify-center space-x-6 text-ssLB text-gray-800 mb-3">
                  <span>{pkg.location}</span>
                  <span>{pkg.duration}</span>
                </div>
              </div>

              {/* Hover overlay with price and button in single column */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-center items-center space-y-4 rounded-xl text-white px-6">
                <span className="text-xl font-semibold">{pkg.price}</span>
                <Link
                  to={`/tours/${pkg.id}`}
                  className="bg-green hover:bg-greenH text-white font-ssBookD px-6 py-2 rounded-full text-sm transition-all"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <Link
          to="/tours"
          className="bg-green hover:bg-greenH text-white px-8 py-3 rounded-full font-ssLB transition-all"
        >
          View All
        </Link>
      </div>
    </section>
  );
};

export default Packages;
