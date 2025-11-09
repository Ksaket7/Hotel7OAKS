import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      statsRef.current.children,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const stats = [
    { value: "10K+", label: "Happy Customers" },
    { value: "05+", label: "Years of Experience" },
    { value: "50+", label: "Total Destinations" },
    { value: "4.9", label: "Average Rating" },
  ];

  return (
    <section className="w-full bg-white py-28">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          <p className="text-green text-sm font-ssBookD tracking-wide mb-3">
            Our Impact
          </p>

          <h2 className="text-3xl md:text-5xl font-ssBD text-gray-900 leading-tight mb-6">
            Trusted Adventures Across <br /> the Himalayas
          </h2>

          <p className="text-gray text-base font-ssLB leading-relaxed max-w-md">
            Explore why travelers choose Oak7 — from unforgettable Himalayan
            journeys to outstanding hospitality and expert guidance. Your adventure
            is crafted with care, passion and years of experience.
          </p>
        </div>

        {/* RIGHT STATS GRID */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 gap-x-12 gap-y-12"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-4 pl-0 border-l-2 border-green-600/20"
            >
              <h3 className="text-4xl md:text-5xl font-ssBD text-gray-900">
                {stat.value}
              </h3>
              <p className="mt-2 text-gray-600 font-ssLB text-sm tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Stats;