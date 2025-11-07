import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BrushStroke from "./BrushStroke";

gsap.registerPlugin(ScrollTrigger);

const Tours = () => {
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
      img: "https://via.placeholder.com/400x250?text=Char+Dham+Yatra",
      link: "#",
    },
    {
      title: "Rishikesh Adventure Tour",
      img: "https://via.placeholder.com/400x250?text=Rishikesh+Adventure",
      link: "#",
    },
    {
      title: "Auli Snow Experience",
      img: "https://via.placeholder.com/400x250?text=Auli+Snow+Trip",
      link: "#",
    },
    {
      title: "Haridwar Spiritual Journey",
      img: "https://via.placeholder.com/400x250?text=Haridwar+Tour",
      link: "#",
    },
  ];

  return (
    <section className="py-8 bg-white overflow-hidden">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Label */}
        <p className="text-green-600 text-lg  tracking-wide font-ssBookD mb-6">
          Popular
        </p>

        {/* Main Heading */}
        <div className="relative text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-ssBD text-gray-900 whitespace-normal lg:whitespace-nowrap inline-block">
            Tours
          </h2>
          <BrushStroke
            color="#27AE60"
            width={150}
            className="absolute left-1/2 -translate-x-1/2 -bottom-3"
          />
        </div>

        {/* Subtext */}
        <p className="text-gray-900 text-base md:text-lg font-ssBookD my-7">
          Discover your next Adventure with Oak7
        </p>

        {/* Tour Images Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-4 sm:px-6 lg:px-8 mt-8">
          {tours.map((tour, index) => (
            <div
              key={index}
              onClick={() => (window.location.href = tour.link)}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:scale-[1.03] transition-transform duration-300"
            >
              <img
                src={tour.img}
                alt={tour.title}
                className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                <h3 className="text-white font-ssBookD text-base sm:text-lg md:text-xl mb-3">
                  {tour.title}
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

export default Tours;
