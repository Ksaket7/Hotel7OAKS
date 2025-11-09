import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { Mountain, MapPinned } from "lucide-react";
import trek from "../assets/Images/trek.png";

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
    <section className="w-full bg-white py-8">
      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 px-6 items-center"
      >
        {/* Content: order 1 on mobile, order 2 on desktop */}
        <div className="order-1 md:order-2 flex-1">
          <p className="text-lg lg:text-2xl tracking-wider font-dsB text-green mb-3">
            Treks
          </p>

          <h2 className="text-4xl md:text-5xl font-ssBD text-gray-900 leading-tight mb-6">
            Trek the Himalayas <br /> with us
          </h2>

          <p className="text-gray-800 font-ssLB leading-relaxed max-w-md mb-12">
            Discover the raw beauty of Uttarakhand’s most legendary mountain
            trails. Every path tells a story of adventure and resilience.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 ">
            <div>
              <Mountain size={22} className="text-green-700 mb-3" />
              <h4 className="font-ssBD text-gray-800 mb-1">Kedarnath trail</h4>
              <p className="text-gray-800 font-ssLB text-sm leading-relaxed">
                Ancient pilgrimage route through rugged mountain terrain,
                challenging and transformative.
              </p>
            </div>

            <div>
              <MapPinned size={22} className="text-green-700 mb-3" />
              <h4 className="font-ssBD text-gray-800 mb-1">Auli expedition</h4>
              <p className="text-gray-800 font-ssLB text-sm leading-relaxed">
                High-altitude snow trek revealing pristine landscapes and
                breathtaking Himalayan panoramas.
              </p>
            </div>
          </div>

          {/* BUTTON: hidden on mobile, visible on md+ */}
          <div className="hidden md:flex gap-4">
            <Link
              to="/treks"
              className="px-12 py-3 w-full text-center rounded-full bg-green text-white font-ssBD text-sm hover:bg-greenH"
            >
              Explore
            </Link>
          </div>
        </div>

        {/* Image: order 2 on mobile, order 1 on desktop */}
        <div className="order-2 md:order-1 flex-1 flex flex-col items-center">
          <img
            src={trek}
            alt="trekker"
            className="rounded-xl w-full object-cover max-w-md"
          />

          {/* Button centered below image on mobile only */}
          <div className="mt-6 w-full px-6 md:hidden flex justify-center">
            <Link
              to="/treks"
              className="px-12 py-3 w-auto text-center rounded-full bg-green text-white font-ssBD text-sm hover:bg-greenH"
            >
              Explore
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Treks;
