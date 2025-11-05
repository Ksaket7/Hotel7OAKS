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
      image: "https://via.placeholder.com/600x400?text=Char+Dham+Yatra",
    },
    {
      title: "Rishikesh Adventure Tour",
      location: "Rishikesh",
      duration: "4 Days / 3 Nights",
      price: "₹ 12,000",
      image: "https://via.placeholder.com/600x400?text=Rishikesh+Adventure",
    },
    {
      title: "Auli Skiing Getaway",
      location: "Auli",
      duration: "6 Days / 5 Nights",
      price: "₹ 18,500",
      image: "https://via.placeholder.com/600x400?text=Auli+Skiing",
    },
    {
      title: "Haridwar Spiritual Journey",
      location: "Haridwar",
      duration: "3 Days / 2 Nights",
      price: "₹ 8,500",
      image: "https://via.placeholder.com/600x400?text=Haridwar+Spiritual",
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center"
      >
        {/* Header Section */}
        <p className="text-green-600 text-sm sm:text-base md:text-lg tracking-wide font-ssBookD mb-4">
          Explore
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-rsR text-gray-900 leading-snug whitespace-normal lg:whitespace-nowrap mb-4">
          Tours & Travel Packages
        </h2>

        <p className="text-gray-800 font-ssLB text-sm sm:text-base md:text-lg text-center whitespace-normal lg:whitespace-nowrap mb-12">
          From serene spiritual getaways to adrenaline-filled mountain adventures —  
          explore packages designed for every traveler.
        </p>

        {/* Tour Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {tours.map((tour, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:scale-[1.03] transition-transform duration-300 bg-white"
            >
              {/* Image */}
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-56 sm:h-64 md:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-ssBD text-lg mb-1">
                  {tour.title}
                </h3>
                <p className="text-white/90 font-ssLB text-sm flex items-center gap-2 justify-center sm:justify-start">
                  <MapPin size={14} />
                  {tour.location}
                </p>
              </div>

              {/* Info Section */}
              <div className="p-4 flex flex-col items-center sm:items-start text-center sm:text-left">
                <p className="text-gray-700 font-ssLB text-sm mb-2">
                  {tour.duration}
                </p>
                <p className="text-green-700 font-ssBD text-base">{tour.price}</p>
                <button className="mt-3 bg-green-600 hover:bg-green-700 text-white font-ssBookD text-sm px-5 py-2 rounded-full transition-all">
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
