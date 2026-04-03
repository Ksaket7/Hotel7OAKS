import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { toursData } from "../../data/toursnpackages";

gsap.registerPlugin(ScrollTrigger);

const Packages = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      gridRef.current.children,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section className="py-12 md:py-20 bg-gray-100 overflow-hidden">
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto px-6 mb-14">
        <p className="text-green text-xl lg:text-2xl tracking-wide font-dsB mb-3">
          Popular
        </p>

        <h2 className="text-4xl md:text-5xl font-ssBD text-gray-900 mb-4">
          Handpicked Tour Packages
        </h2>

        <p className="text-gray-700 text-lg font-ssLB">
          From serene getaways to adventurous treks and spiritual journeys —
          choose a tour package that fits your dream escape.
        </p>
      </div>

      {/* GRID */}
      <div
        ref={gridRef}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        {toursData.slice(0, 4).map((pkg) => (
          <Link
            to={`/tours/${pkg.id}`}
            key={pkg.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col"
          >
            {/* IMAGE */}
            <div className="relative">
              <img
                src={pkg.images[0]}
                alt={pkg.title}
                className="w-full h-56 object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5 flex flex-col flex-grow font-ssSBH">
              
              {/* TITLE */}
              <div className="min-h-[48px]">
                <h3 className="font-semibold text-gray-900 text-md leading-snug line-clamp-2">
                  {pkg.title}
                </h3>
              </div>

              {/* LOCATION + DURATION */}
              <div className="flex flex-col gap-2 text-gray-500 text-sm mt-2 mb-4 font-ssBookD">
                <p className="flex items-center gap-2">
                  <MapPin size={14} />
                  {pkg.location}
                </p>

                <p className="flex items-center gap-2">
                  <Clock size={14} />
                  {pkg.duration}
                </p>
              </div>

              {/* PRICE */}
              <p className="text-lg font-semibold text-gray-900 mt-auto">
                {pkg.price}
                <span className="text-sm text-gray-500 font-normal font-ssBookD">
                  {" "}
                  / person
                </span>
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-14">
        <Link
          to="/tours"
          className="bg-green hover:bg-greenH text-white px-10 py-3 rounded-full font-ssLB transition-all shadow-md hover:shadow-lg"
        >
          View All Packages
        </Link>
      </div>
    </section>
  );
};

export default Packages;