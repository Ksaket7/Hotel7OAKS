import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

  const packages = [
    {
      title: "Char Dham Yatra",
      img: "https://via.placeholder.com/400x250?text=Char+Dham+Yatra",
      link: "#",
    },
    {
      title: "Valley of Flowers",
      img: "https://via.placeholder.com/400x250?text=Valley+of+Flowers",
      link: "#",
    },
    {
      title: "Kedarnath Expedition",
      img: "https://via.placeholder.com/400x250?text=Kedarnath+Trek",
      link: "#",
    },
    {
      title: "Auli Skiing Adventure",
      img: "https://via.placeholder.com/400x250?text=Auli+Skiing",
      link: "#",
    },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col justify-center items-center text-center"
      >
        {/* Section Label */}
        <p className="text-green-600 text-sm sm:text-base md:text-lg tracking-wide font-ssBookD mb-3">
          Popular
        </p>

        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-rsR text-gray-900 leading-snug whitespace-normal lg:whitespace-nowrap my-4">
          Handpicked Packages for Every Explorer
        </h2>

        {/* Subtext */}
        <p className="text-gray-900 text-sm sm:text-base md:text-md font-ssLB lg:w-max mx-auto px-4 whitespace-normal lg:whitespace-nowrap text-center mb-12">
          From serene getaways to adventurous treks and spiritual journeys — choose a package that fits your dream escape.
        </p>

        {/* Package Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-4 sm:px-6 lg:px-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              onClick={() => (window.location.href = pkg.link)}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:scale-[1.03] transition-transform duration-300"
            >
              <img
                src={pkg.img}
                alt={pkg.title}
                className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                <h3 className="text-white font-ssBookD text-base sm:text-lg md:text-xl mb-3">
                  {pkg.title}
                </h3>
                <button className="bg-green-600 hover:bg-green-700 text-white font-ssBookD px-4 sm:px-5 py-2 rounded-full text-sm transition-all">
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

export default Packages;
