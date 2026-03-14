import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { Mountain, MapPinned } from "lucide-react";
import trek from "../../assets/Images/trek.png";

gsap.registerPlugin(ScrollTrigger);

const Treks = () => {
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
    <section className="w-full bg-white py-12 md:py-20 overflow-hidden">
      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 px-6 items-center"
      >
        {/* IMAGE */}
        <div className="order-2 lg:order-1">
          <div className="h-[320px] sm:h-[380px] md:h-[480px] ">
            <img
              src={trek}
              alt="trekker"
              className="w-full h-full object-cover"
            />

          </div>

          {/* MOBILE BUTTON */}
          <div className="mt-6 lg:hidden flex justify-center">
            <Link
              to="/treks"
              className="px-12 py-3 rounded-full bg-green text-white font-ssBD text-sm hover:bg-greenH transition"
            >
              Explore Treks
            </Link>
          </div>
        </div>

        {/* CONTENT */}
        <div className="order-1 lg:order-2">
          <p className="text-lg lg:text-2xl tracking-wider font-dsB text-green mb-3">
            Treks
          </p>

          <h2 className="text-4xl md:text-5xl font-ssBD text-gray-900 leading-tight mb-6">
            Trek the Himalayas <br /> with us
          </h2>

          <p className="text-gray-700 font-ssLB leading-relaxed max-w-lg mb-12">
            Discover the raw beauty of Uttarakhand’s most legendary mountain
            trails. Every path tells a story of adventure, spirituality,
            and resilience in the heart of the Himalayas.
          </p>

          {/* TREK FEATURES */}
          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            <div className="p-5 rounded-xl border border-gray-200 hover:border-green/30 transition">
              <Mountain size={22} className="text-green-700 mb-3" />

              <h4 className="font-ssBD text-gray-800 mb-1">
                Kedarnath Trail
              </h4>

              <p className="text-gray-600 font-ssLB text-sm leading-relaxed">
                Ancient pilgrimage route through rugged Himalayan terrain,
                challenging yet spiritually rewarding.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-gray-200 hover:border-green/30 transition">
              <MapPinned size={22} className="text-green-700 mb-3" />

              <h4 className="font-ssBD text-gray-800 mb-1">
                Auli Expedition
              </h4>

              <p className="text-gray-600 font-ssLB text-sm leading-relaxed">
                High-altitude snow trek revealing pristine landscapes and
                breathtaking Himalayan panoramas.
              </p>
            </div>
          </div>

          {/* DESKTOP BUTTON */}
          <div className="hidden lg:flex">
            <Link
              to="/treks"
              className="px-12 py-3 rounded-full bg-green text-white font-ssBD text-sm hover:bg-greenH transition shadow-md hover:shadow-lg"
            >
              Explore Treks
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Treks;