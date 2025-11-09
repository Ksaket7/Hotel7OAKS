import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Clock } from "lucide-react";
import { treksData } from "../data/treks";

gsap.registerPlugin(ScrollTrigger);

const Treks = () => {
  const sectionRef = useRef(null);
  const treks = treksData;

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
    <section className="py-0 bg-white overflow-hidden">
      {/* HERO */}
      <div
        className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] flex flex-col justify-center items-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 px-6 max-w-4xl">
          <p className="text-green-400 text-sm sm:text-base md:text-lg tracking-wide font-ssBookD mb-3">
            Adventure Awaits
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-ssBD text-white leading-snug whitespace-normal lg:whitespace-nowrap mb-4">
            Treks of Uttarakhand
          </h2>

          <p className="text-white font-ssLB text-sm sm:text-base md:text-lg text-center max-w-3xl mx-auto">
            From snow peaks to spiritual paths — explore our carefully curated
            Himalayan treks designed for every adventurer.
          </p>
        </div>
      </div>

      {/* TREK LIST */}
      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-green-600 text-lg tracking-wide font-ssBookD text-center mb-2">
          Popular Treks
        </p>

        <h2 className="text-3xl md:text-4xl font-ssBD text-center text-gray-900 my-7 whitespace-normal lg:whitespace-nowrap">
          Explore the Majestic Himalayas
        </h2>

        <p className="text-gray-900 text-center text-base md:text-md font-ssBookD my-7 max-w-3xl mx-auto">
          Discover the raw beauty of Uttarakhand’s mountains — where every step
          tells a story of courage, peace, and breathtaking views.
        </p>

        <div className="flex flex-col gap-12 mt-16 overflow-x-auto no-scrollbar">
          {treks.map((trek, index) => (
            <div
              key={index}
              className={`flex flex-row items-center justify-center gap-6 min-w-[320px] sm:min-w-[480px] md:min-w-full ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-[45%] sm:w-[40%] md:w-1/2 flex-shrink-0">
                <img
                  src={trek.image}
                  alt={trek.title}
                  className="w-full h-40 sm:h-56 md:h-80 object-cover rounded-xl"
                />
              </div>

              <div className="w-[55%] sm:w-[60%] md:w-1/2 flex flex-col text-left md:pl-10">
                <span className="text-xs font-ssBookD text-green-700 bg-green-100 px-3 py-1 rounded-full uppercase tracking-wide w-fit mb-2">
                  {trek.tag}
                </span>

                <h3 className="text-lg sm:text-xl md:text-2xl font-ssBD text-gray-900 mb-2">
                  {trek.title}
                </h3>

                <p className="text-gray-800 font-ssLB text-sm sm:text-base mb-4">
                  {trek.desc}
                </p>

                <div className="flex items-center gap-4 sm:gap-6 mb-4 text-gray-900 font-ssLB text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    <span>{trek.difficulty}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} />
                    <span>{trek.days}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 sm:gap-6">
                  <p className="text-green-700 text-sm sm:text-lg font-ssBD">
                    {trek.price}
                  </p>

                  <Link
                    to={`/treks/${trek.id}`}
                    className="bg-green hover:bg-greenH text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-full font-ssBD text-xs sm:text-sm transition-all"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Treks;
