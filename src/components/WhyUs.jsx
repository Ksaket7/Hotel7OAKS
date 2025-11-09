import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Cog, Leaf, Headphones } from "lucide-react";
import BrushStroke from "./BrushStroke";

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
      icon: <ShieldCheck size={26} className="text-green-700" />,
      title: "Experienced Guides",
      desc: "Certified Himalayan experts who ensure every trek stays safe, smooth and meaningful.",
    },
    {
      icon: <Cog size={26} className="text-green-700" />,
      title: "Customizable Packages",
      desc: "We tailor your itinerary exactly the way you want — pace, stay, food, routes and more.",
    },
    {
      icon: <Leaf size={26} className="text-green-700" />,
      title: "Sustainable Travel",
      desc: "We follow Leave-No-Trace ethics and support local communities and eco-living.",
    },
    {
      icon: <Headphones size={26} className="text-green-700" />,
      title: "24/7 Support",
      desc: "We stay available — before booking, during your trek and even after you return.",
    },
  ];

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 text-center">
        <div className="relative inline-block mb-10">
          <h2 className="text-3xl md:text-5xl font-ssBD text-gray-900">
            Why Us?
          </h2>
          <BrushStroke
            color="#27AE60"
            width={140}
            className="absolute left-1/2 -translate-x-1/2 -bottom-3"
          />
        </div>

        <p className="text-gray-600 text-base font-ssLB mb-14">
          Here’s what sets us apart
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-left">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-5 border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-300"
            >
              <div>{feature.icon}</div>

              <div>
                <h3 className="text-lg font-ssSBH text-black mb-1">
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
