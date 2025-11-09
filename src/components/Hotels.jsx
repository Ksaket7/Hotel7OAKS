import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { hotelsData } from "../data/hotels"; // ✅ adjust import path if needed

gsap.registerPlugin(ScrollTrigger);

const HotelPreview = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      gridRef.current.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section className="py-20 bg-white overflow-hidden">
      {/* === Section Heading === */}
      <div className="text-center max-w-3xl mx-auto px-6 mb-12">
        <h2 className="text-4xl md:text-5xl font-ssBD text-gray-900 mb-4">
          Hotels
        </h2>
        <p className="text-gray-600 text-lg">
          Experience the best of Uttarakhand’s hospitality — from cozy lakeside
          lodges to mountain-view resorts curated just for you.
        </p>
      </div>

      {/* === Hotels Grid === */}
      <div
        ref={gridRef}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        {hotelsData.slice(0, 4).map((hotel) => (
          <div
            key={hotel.id}
            className="relative group overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-[1.03]"
          >
            {/* Image */}
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

            {/* Hotel Info */}
            <div className="absolute bottom-0 left-0 w-full p-4 text-left z-10">
              <h3 className="text-white font-semibold text-lg mb-1">
                {hotel.name}
              </h3>
              <p className="text-white/90 text-sm flex items-center gap-2 mb-1">
                <MapPin size={14} />
                {hotel.location}
              </p>
              <div className="flex items-center gap-2">
                <Star className="text-yellow-400 w-4 h-4" />
                <p className="text-white text-sm">{hotel.rating}</p>
              </div>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <p className="text-green-400 font-semibold text-lg mb-3">
                {hotel.price}
              </p>
              <Link
                to={`/hotels/${hotel.id}`}
                className="bg-green-600 hover:bg-green-700 text-white text-sm px-6 py-2 rounded-full transition-all"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* === CTA Button === */}
      <div className="text-center mt-12">
        <Link
          to="/hotels"
          className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-semibold transition-all"
        >
          View All Hotels
        </Link>
      </div>
    </section>
  );
};

export default HotelPreview;
