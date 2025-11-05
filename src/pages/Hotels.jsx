import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Hotel = () => {
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

  const hotels = [
    {
      name: "Himalayan Bliss Resort",
      location: "Auli, Uttarakhand",
      rating: 4.8,
      price: "₹ 7,200 / night",
      image: "https://via.placeholder.com/600x400?text=Himalayan+Bliss+Resort",
    },
    {
      name: "Valley View Retreat",
      location: "Rishikesh, Uttarakhand",
      rating: 4.6,
      price: "₹ 5,800 / night",
      image: "https://via.placeholder.com/600x400?text=Valley+View+Retreat",
    },
    {
      name: "Serenity Heights",
      location: "Mussoorie, Uttarakhand",
      rating: 4.9,
      price: "₹ 8,100 / night",
      image: "https://via.placeholder.com/600x400?text=Serenity+Heights",
    },
    {
      name: "Lakeside Lodge",
      location: "Nainital, Uttarakhand",
      rating: 4.7,
      price: "₹ 6,500 / night",
      image: "https://via.placeholder.com/600x400?text=Lakeside+Lodge",
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div
        ref={sectionRef}
        className=" mx-auto px-6 flex flex-col items-center text-center"
      >
        {/* Heading Section */}
        <p className="text-green-600 text-sm sm:text-base md:text-lg font-ssBookD tracking-wide mb-4">
          Stay With Comfort
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-rsR text-gray-900 leading-snug whitespace-normal lg:whitespace-nowrap mb-4">
          Handpicked Hotels for Every Explorer
        </h2>

        <p className="text-gray-800 font-ssLB text-sm sm:text-base md:text-lg text-center whitespace-normal lg:whitespace-nowrap mb-12 ">
          Experience the best of Uttarakhand’s hospitality — from serene resorts
          to boutique mountain stays curated just for you.
        </p>

        {/* Hotel Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {hotels.map((hotel, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:scale-[1.03] transition-transform duration-300 bg-white"
            >
              {/* Hotel Image */}
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-56 sm:h-64 md:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-ssBD text-lg mb-1">
                  {hotel.name}
                </h3>
                <p className="text-white/90 font-ssLB text-sm flex items-center justify-center sm:justify-start gap-2">
                  <MapPin size={14} />
                  {hotel.location}
                </p>
              </div>

              {/* Info Below Image */}
              <div className="p-4 flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="text-yellow-500 w-4 h-4" />
                  <p className="text-gray-800 font-ssLB text-sm">
                    {hotel.rating}
                  </p>
                </div>
                <p className="text-green-700 font-ssBD text-base">
                  {hotel.price}
                </p>
                <button className="mt-3 bg-green-600 hover:bg-green-700 text-white font-ssBookD text-sm px-5 py-2 rounded-full transition-all">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hotel;
