import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
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

  const testimonials = [
    {
      title: "Excellent Experience",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Loved Every Moment",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Highly Recommend",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const images = [
    "https://via.placeholder.com/250x350?text=Customer+1",
    "https://via.placeholder.com/250x350?text=Customer+2",
    "https://via.placeholder.com/250x350?text=Customer+3",
    "https://via.placeholder.com/250x350?text=Customer+4",
    "https://via.placeholder.com/250x350?text=Customer+5",
  ];

  return (
    <section className="py-8 bg-white overflow-hidden">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Label */}
        <p className="text-green-600 text-lg tracking-wide font-ssBookD mb-5">
          Popular
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-rsR text-black my-7">
          What do our customers say?
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 text-base md:text-lg font-ssLB my-7">
          Here’s what sets us apart
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 my-16">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="flex flex-col bg-gray-200 rounded-xl p-6 text-left hover:shadow-md transition-all duration-300"
            >
              {/* Icon Placeholder */}
              <div className="w-10 h-10 bg-black rounded-full mb-4"></div>
              {/* Heading */}
              <h3 className="text-lg font-ssSBH text-black mb-2">{t.title}</h3>
              {/* Description */}
              <p className="text-gray-700 font-ssLB text-sm leading-relaxed">
                {t.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Image Strip */}
        <div className="flex flex-wrap justify-center items-center gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-sm w-44 h-64 sm:w-48 sm:h-72 md:w-52 md:h-80 transition-transform duration-500 hover:scale-105"
            >
              <img
                src={img}
                alt={`Customer ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
