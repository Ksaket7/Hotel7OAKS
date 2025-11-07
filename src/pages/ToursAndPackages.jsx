import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin } from "lucide-react";

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

  const tours = [
    {
      title: "Char Dham Yatra",
      location: "Uttarakhand",
      duration: "10 Days / 9 Nights",
      price: "₹ 25,000",
      image:
        "https://images.unsplash.com/photo-1519003300446-1c068d11e0e9?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Rishikesh Adventure Tour",
      location: "Rishikesh",
      duration: "4 Days / 3 Nights",
      price: "₹ 12,000",
      image:
        "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2a?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Auli Skiing Getaway",
      location: "Auli",
      duration: "6 Days / 5 Nights",
      price: "₹ 18,500",
      image:
        "https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Haridwar Spiritual Journey",
      location: "Haridwar",
      duration: "3 Days / 2 Nights",
      price: "₹ 8,500",
      image:
        "https://images.unsplash.com/photo-1606144048515-5e7b6e2e6b55?auto=format&fit=crop&w=1600&q=80",
    },
  ];

  return (
    <section className="py-0 bg-white overflow-hidden">
      {/* === Hero Header Section === */}
      <div
        className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] flex flex-col justify-center items-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1508261305435-63174d10c0a6?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 px-6 max-w-4xl">
          {/* <p className="text-green-400 text-sm sm:text-base md:text-lg tracking-wide font-ssBookD mb-3">
            Explore
          </p> */}

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-rsR text-white leading-snug whitespace-normal lg:whitespace-nowrap mb-4">
            Tours & Travel Packages
          </h2>

          <p className="text-white font-ssLB text-sm sm:text-base md:text-lg text-center max-w-3xl mx-auto">
            From serene spiritual getaways to adrenaline-filled mountain
            adventures — explore packages designed for every traveler.
          </p>
        </div>
      </div>

      {/* === Tour Grid === */}
      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center text-center"
      >
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {tours.map((tour, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl transition-transform duration-300 bg-white hover:scale-[1.03]"
            >
              {/* Background Image */}
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-56 sm:h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

              {/* Always Visible Content (Name + Location) */}
              <div className="absolute bottom-0 left-0 w-full p-4 text-left z-10">
                <h3 className="text-white font-ssBD text-lg mb-1">
                  {tour.title}
                </h3>
                <p className="text-white/90 font-ssLB text-sm flex items-center gap-2">
                  <MapPin size={14} />
                  {tour.location}
                </p>
              </div>

              {/* Hover-Reveal Details */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white font-ssLB text-sm sm:text-base mb-2">
                  {tour.duration}
                </p>
                <p className="text-green-400 font-ssBD text-base mb-3">
                  {tour.price}
                </p>
                <button className="bg-green-600 hover:bg-green-700 text-white font-ssBookD text-sm px-5 py-2 rounded-full transition-all">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToursAndPackages;
