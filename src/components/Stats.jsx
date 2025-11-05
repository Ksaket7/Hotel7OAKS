import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Stats = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current.children,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
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
    <section className="py-16 bg-white">
      <div
        ref={containerRef}
        className="max-w-8xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center"
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center py-6 px-6 relative ${
              index !== stats.length - 1
                ? "after:content-[''] after:absolute after:top-6 after:bottom-6 after:right-0 after:w-[8px] after:bg-gray-300 after:rounded-md"
                : ""
            }`}
          >
            <h3 className="text-4xl md:text-6xl text-gray-900 font-ssBD tracking-tight">
              {stat.value}
            </h3>
            <p className="mt-2 text-gray-600 font-ssLB text-lg md:text-base tracking-wide">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
