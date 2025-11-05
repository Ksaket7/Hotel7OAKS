import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
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

  return (
    <section className="py-8 bg-white overflow-hidden">
      <div
        ref={sectionRef}
        className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center"
      >
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-ssBD text-black leading-tight mb-4 whitespace-normal lg:whitespace-nowrap text-center lg:w-max">
          Ready to embark on your next adventure
        </h2>

        {/* Subtext */}
        <p className="text-gray-700 font-ssLB text-sm sm:text-base md:text-lg mb-10 text-center whitespace-normal lg:whitespace-nowrap lg:w-max">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>

        {/* CTA Button */}
        <button className="bg-green-600 hover:bg-green-700 text-white font-ssBookD text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-300 shadow-sm">
          Contact Us Now
        </button>
      </div>
    </section>
  );
};

export default CTA;
