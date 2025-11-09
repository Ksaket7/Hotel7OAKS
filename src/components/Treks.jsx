import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { Mountain, MapPinned } from "lucide-react";
import trek from "../assets/Images/trek.png"

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
    <section className="w-full bg-white ">
      <div ref={sectionRef} className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">

        <div className="-ml-10">
          <img
            src={trek}
            alt="trekker"
            className="rounded-xl w-full object-cover"
          />
        </div>

        <div>
          <p className="text-lg  tracking-wider font-ssBookD text-green mb-3">
            Treks
          </p>

          <h2 className="text-4xl md:text-5xl font-ssBD text-gray-900 leading-tight mb-6">
            Trek the Himalayas <br /> with us
          </h2>

          <p className="text-gray-800 font-ssLB leading-relaxed max-w-md mb-12">
            Discover the raw beauty of Uttarakhand’s most legendary mountain trails.
            Every path tells a story of adventure and resilience.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">
            <div>
              <Mountain size={22} className="text-green-700 mb-3" />
              <h4 className="font-ssBD text-gray-800 mb-1">Kedarnath trail</h4>
              <p className="text-gray-800 font-ssLB text-sm leading-relaxed">
                Ancient pilgrimage route through rugged mountain terrain, challenging and transformative.
              </p>
            </div>

            <div>
              <MapPinned size={22} className="text-green-700 mb-3" />
              <h4 className="font-ssBD text-gray-800 mb-1">Auli expedition</h4>
              <p className="text-gray-800 font-ssLB text-sm leading-relaxed">
                High-altitude snow trek revealing pristine landscapes and breathtaking Himalayan panoramas.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Link
              to="/treks"
              className="px-12 py-3 w-full text-center rounded-full bg-green text-white font-ssBD text-sm hover:bg-greenH"
            >
              Explore
            </Link>
            {/* <button className="px-12 py-3 rounded-full text-green-600 border border-green-600 font-ssBD text-sm hover:bg-greenH hover:text-white transition">
              Details
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Treks;
