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
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const stats = [
    { value: "10K+", label: "Happy customers" },
    { value: "05+", label: "Years of experience" },
    { value: "50+", label: "Total destinations" },
    { value: "4.9", label: "Average rating" },
  ];

  return (
    <section className="w-full bg-white py-28">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 px-6 items-start">
        
        {/* LEFT CONTENT */}
        <div>
          <p className="text-xs font-ssLB tracking-wide text-gray-600 mb-4">
            Our impact
          </p>

          <h2 className="text-4xl md:text-5xl font-ssBD leading-tight text-black mb-6">
            Trusted adventures <br /> across the Himalayas
          </h2>

          <p className="text-base font-ssLB text-gray-600 max-w-md">
            Discover why travelers choose Oak7 for unforgettable journeys
          </p>
        </div>

        {/* RIGHT STATS */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 gap-y-14 gap-x-12 text-left"
        >
          {stats.map((stat, index) => (
            <div key={index}>
              <h3 className="text-5xl md:text-6xl font-ssBD text-black leading-none">
                {stat.value}
              </h3>
              <p className="mt-2 text-gray-600 font-ssLB text-sm">
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