import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote } from "lucide-react";
import BrushStroke from "./BrushStroke";

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
      desc: "The trek felt well organised, safe and extremely enjoyable. Highly professional throughout.",
    },
    {
      title: "Loved Every Moment",
      desc: "The views were unreal. The team was warm, caring and supportive all along the expedition.",
    },
    {
      title: "Highly Recommend",
      desc: "Perfect balance of adventure and comfort. Worth every minute and every rupee!",
    },
  ];

  return (
    <section className="py-8 bg-white overflow-hidden">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 text-center">
        
        <p className="text-green text-sm tracking-wide font-ssBookD mb-3">
          Customers
        </p>

        <div className="relative inline-block mb-10">
          <h2 className="text-3xl md:text-5xl font-ssBD text-gray-900">
            What Do Our Customers Say?
          </h2>
          <BrushStroke
            color="#27AE60"
            width={240}
            className="absolute left-1/2 -translate-x-1/2 -bottom-3"
          />
        </div>

        <p className="text-gray-600 text-base md:text-lg font-ssLB mb-14">
          Genuine feedback from real trekkers
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="flex flex-col bg-[#F6F6F6] rounded-xl p-7 text-left hover:shadow-lg transition duration-300"
            >
              <Quote className="text-green-700 mb-4" size={30} />
              <h3 className="text-lg font-ssSBH text-black mb-2">{t.title}</h3>
              <p className="text-gray-700 font-ssLB text-sm leading-relaxed">
                {t.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
