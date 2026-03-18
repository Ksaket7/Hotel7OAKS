import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const statsRef = useRef(null);
  const imageRef = useRef(null);

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

    gsap.fromTo(
      imageRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
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
    <section className="w-full bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <p className="text-green text-lg lg:text-2xl font-dsB tracking-wide mb-3">
            Our Impact
          </p>

          <h2 className="text-3xl md:text-5xl font-ssBD text-gray-800 leading-tight mb-10 max-w-xl">
            Trusted Adventures Across the Himalayas
          </h2>

          {/* STATS GRID */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 gap-x-12 gap-y-12 max-w-lg"
          >
            {stats.map((stat, index) => (
              <div key={index}>
                <h3 className="text-4xl md:text-5xl font-ssBD text-gray-800">
                  {stat.value}
                </h3>

                <p className="mt-2 text-gray-700 font-ssLB text-sm tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          ref={imageRef}
          className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[460px] rounded-2xl overflow-hidden shadow-xl"
        >
          <img
            src="https://images.pexels.com/photos/19877298/pexels-photo-19877298.jpeg"
            alt="Himalayas adventure"
            className="w-full h-full object-cover"
          />

          {/* subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Stats;