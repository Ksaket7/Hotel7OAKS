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
    <section className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-16 items-center">
        {/* Left Content: Heading + Stats */}
        <div className="md:col-span-2">
          <p className="text-green text-lg lg:text-2xl font-dsB tracking-wide mb-3">
            Our Impact
          </p>

          <h2 className="text-3xl md:text-5xl font-ssBD text-gray-800 leading-tight mb-8 max-w-xl">
            Trusted Adventures Across the Himalayas
          </h2>

          {/* Stats Grid */}
          <div ref={statsRef} className="grid grid-cols-2 gap-x-12  gap-y-12 max-w-xl">
            {stats.map((stat, index) => (
              <div key={index} className="p-4 pl-0 ">
                <h3 className="text-4xl md:text-5xl font-ssBD text-gray-800">
                  {stat.value}
                </h3>
                <p className="mt-2 text-gray-800 font-ssLB text-sm tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
            alt="Himalayas adventure"
            className="rounded-lg shadow-xl object-cover max-w-full h-[320px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;
