import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { toursData } from "../data/toursnpackages";

gsap.registerPlugin(ScrollTrigger);

const ToursAndPackages = () => {
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
    <section className="py-0 bg-white overflow-hidden">
      {/* Hero Header */}
      <div
        className="relative w-full h-[60vh] flex flex-col justify-center items-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1508261305435-63174d10c0a6?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-6 max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-ssBD text-white mb-4">
            Tours & Travel Packages
          </h2>
          <p className="text-white text-lg">
            From serene spiritual getaways to adrenaline-filled mountain
            adventures — explore packages designed for every traveler.
          </p>
        </div>
      </div>

      {/* Tour Grid */}
      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        {toursData.map((tour) => (
          <div
            key={tour.id}
            className="relative group cursor-pointer overflow-hidden rounded-xl transition-transform duration-300 bg-white hover:scale-[1.03]"
          >
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

            <div className="absolute bottom-0 left-0 w-full p-4 text-left z-10">
              <h3 className="text-white font-semibold text-lg mb-1">
                {tour.title}
              </h3>
              <p className="text-white/90 text-sm flex items-center gap-2">
                <MapPin size={14} />
                {tour.location}
              </p>
            </div>

            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <p className="text-white mb-2">{tour.duration}</p>
              <p className="text-white font-semibold mb-3">
                {tour.price}
              </p>
              <Link
                to={`/tours/${tour.id}`}
                className="bg-green hover:bg-greenH text-white text-sm px-5 py-2 rounded-full transition-all"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToursAndPackages;
