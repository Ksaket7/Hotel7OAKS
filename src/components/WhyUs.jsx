import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyUs = () => {
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

  const features = [
    {
      title: "Experienced Guides",
      desc: "Our certified local guides ensure you have a safe, insightful, and memorable journey on every trek and tour.",
    },
    {
      title: "Customizable Packages",
      desc: "We understand every traveler is unique — that’s why our packages can be tailored to match your preferences.",
    },
    {
      title: "Sustainable Travel",
      desc: "We’re committed to eco-friendly practices, ensuring our adventures respect the environment and local communities.",
    },
    {
      title: "24/7 Support",
      desc: "Whether before, during, or after your trip, our dedicated team is always just a call away to assist you.",
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Label */}
        <p className="text-green-600 text-sm uppercase tracking-wide font-ssBookD mb-3">
          Popular
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-rsR text-black mb-2">
          Why Us?
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 text-base md:text-lg font-ssLB mb-16">
          Here’s what sets us apart
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12 text-left">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-5 bg-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-300"
            >
              {/* Icon Placeholder */}
              <div className="w-10 h-10 bg-black rounded-full flex-shrink-0"></div>

              {/* Text Content */}
              <div>
                <h3 className="text-lg font-ssSBH text-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700 font-ssLB text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
