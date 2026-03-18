import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { hotelsData } from "../../data/hotels";

gsap.registerPlugin(ScrollTrigger);

const HotelPreview = () => {
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
      },
    );
  }, []);

  return (
    <section className="py-12 md:py-20 bg-gray-100 overflow-hidden">
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto px-6 mb-14">
        <p className="text-green text-xl lg:text-2xl tracking-wide font-dsB mb-3">
          Hotels
        </p>

        <h2 className="text-4xl md:text-5xl font-ssBD text-gray-900 mb-4">
          The Best Stays in Your Budget
        </h2>

        <p className="text-gray-700 text-lg font-ssLB">
          Experience the best of Uttarakhand’s hospitality — from cozy
          mountain lodges to scenic resorts.
        </p>
      </div>

      {/* GRID */}
      <div
        ref={gridRef}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        {hotelsData.slice(0, 4).map((hotel) => (
          <Link
            to={`/hotels/${hotel.id}`}
            key={hotel.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col"
          >
            {/* IMAGE */}
            <div className="relative">
              <img
                src={hotel.images?.[0]}
                alt={hotel.name}
                className="w-full h-56 object-cover transition duration-500 group-hover:scale-105"
              />

              {/* FAVORITE */}
              {/* <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
                <Heart size={16} className="text-gray-600" />
              </div> */}
            </div>

            {/* CONTENT */}
            <div className="p-5 flex flex-col flex-grow  font-ssSBH">
              
              {/* TITLE + RATING */}
              <div className="flex justify-between items-start gap-3 min-h-[48px]">
                <h3 className="font-semibold text-gray-900 text-md leading-snug line-clamp-2">
                  {hotel.name}
                </h3>

                <div className="flex items-center gap-1 text-sm shrink-0">
                  <Star size={14} className="text-yellow-400" />
                  <span className="text-gray-800">{hotel.rating}</span>
                </div>
              </div>

              {/* LOCATION */}
              <p className="flex items-center gap-2 text-gray-500 text-sm mt-2 mb-4 line-clamp-1 font-ssBookD">
                <MapPin size={14} />
                {hotel.location}
              </p>

              {/* PRICE */}
              <p className="text-lg font-semibold text-gray-900 mt-auto">
                {hotel.price}
                <span className="text-sm text-gray-500 font-normal font-ssBookD">
                  {" "}
                  / night
                </span>
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-14">
        <Link
          to="/hotels"
          className="bg-green hover:bg-greenH text-white px-10 py-3 rounded-full font-ssLB transition-all shadow-md hover:shadow-lg"
        >
          View All Hotels
        </Link>
      </div>
    </section>
  );
};

export default HotelPreview;