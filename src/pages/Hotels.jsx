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
      image:
        "https://images.unsplash.com/photo-1551888419-7b7a520fe6ac?auto=format&fit=crop&w=1600&q=80",
    },
    {
      name: "Valley View Retreat",
      location: "Rishikesh, Uttarakhand",
      rating: 4.6,
      price: "₹ 5,800 / night",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80",
    },
    {
      name: "Serenity Heights",
      location: "Mussoorie, Uttarakhand",
      rating: 4.9,
      price: "₹ 8,100 / night",
      image:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1600&q=80",
    },
    {
      name: "Lakeside Lodge",
      location: "Nainital, Uttarakhand",
      rating: 4.7,
      price: "₹ 6,500 / night",
      image:
        "https://images.unsplash.com/photo-1551776235-dde6d4829808?auto=format&fit=crop&w=1600&q=80",
    },
  ];

  return (
    <section className="py-0 bg-white overflow-hidden">
      {/* === Hero-style Header Section === */}
      <div
        className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] flex flex-col justify-center items-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 px-6 lg:w-max">
          {/* <p className="text-green-400 text-sm sm:text-base md:text-lg tracking-wide font-ssBookD mb-3">
            Stay With Comfort
          </p> */}

          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-rsR text-white leading-snug whitespace-normal lg:whitespace-nowrap mb-4">
            Handpicked Hotels for Every Explorer
          </h2>

          <p className="text-white font-ssLB text-sm sm:text-base md:text-lg text-center max-w-3xl mx-auto">
            Experience the best of Uttarakhand’s hospitality — from serene
            resorts to boutique mountain stays curated just for you.
          </p>
        </div>
      </div>

      {/* === Hotel Grid === */}
      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center text-center"
      >
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {hotels.map((hotel, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl transition-transform duration-300 bg-white hover:scale-[1.03]"
            >
              {/* Hotel Image */}
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-56 sm:h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

              {/* Always Visible Info (Name, Location, Rating) */}
              <div className="absolute bottom-0 left-0 w-full p-4 text-left z-10">
                <h3 className="text-white font-ssBD text-lg mb-1">
                  {hotel.name}
                </h3>
                <p className="text-white/90 font-ssLB text-sm flex items-center gap-2 mb-1">
                  <MapPin size={14} />
                  {hotel.location}
                </p>
                <div className="flex items-center gap-2">
                  <Star className="text-yellow-400 w-4 h-4" />
                  <p className="text-white font-ssLB text-sm">
                    {hotel.rating}
                  </p>
                </div>
              </div>

              {/* Hover-Reveal Info (Price + Button) */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-green-400 font-ssBD text-lg mb-3">
                  {hotel.price}
                </p>
                <button className="bg-green-600 hover:bg-green-700 text-white font-ssBookD text-sm px-6 py-2 rounded-full transition-all">
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
