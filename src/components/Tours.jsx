import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
      <div ref={sectionRef} className="max-w-8xl mx-auto px-6 text-center">
        {/* Section Label */}
        <p className="text-green-600 text-lg  tracking-wide font-ssBookD mb-6">
          Popular
        </p>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-rsR text-gray-900 leading-snug my-7">
          Tours
        </h2>

        {/* Subtext */}
        <p className="text-gray-900 text-base md:text-lg font-ssBookD my-7">
          Discover your next Adventure with Oak7
        </p>

        {/* Tour Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 px-12 mt-16">
          {tours.map((tour, index) => (
            <div
              key={index}
              onClick={() => (window.location.href = tour.link)}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:scale-[1.03] transition-transform duration-300"
            >
              <img
                src={tour.img}
                alt={tour.title}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                <h3 className="text-white font-ssSBH text-lg mb-2">
                  {tour.title}
                </h3>
                <button className="bg-green-600 hover:bg-green-700 text-white font-ssBookD px-4 py-2 rounded-full text-sm transition-all">
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
