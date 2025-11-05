import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Clock } from "lucide-react";

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

  const treks = [
    {
      title: "Mountains Majesty Trek",
      tag: "HIMALAYAS",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      difficulty: "Difficult",
      days: "14 days",
      price: "₹ 15750",
      image: "https://via.placeholder.com/600x400?text=Trek+1",
    },
    {
      title: "Valley Serenity Trek",
      tag: "HIMALAYAS",
      desc: "Experience peace and challenge in equal measure as you journey across serene Himalayan valleys.",
      difficulty: "Moderate",
      days: "10 days",
      price: "₹ 13200",
      image: "https://via.placeholder.com/600x400?text=Trek+2",
    },
    {
      title: "Snow Ridge Expedition",
      tag: "HIMALAYAS",
      desc: "Trek through the breathtaking snow trails and experience the grandeur of the mighty peaks.",
      difficulty: "Difficult",
      days: "12 days",
      price: "₹ 18900",
      image: "https://via.placeholder.com/600x400?text=Trek+3",
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <p className="text-green-600 text-sm uppercase tracking-wide font-ssBookD text-center mb-5">
          Trending
        </p>

        <h2 className="text-3xl md:text-4xl font-rsR text-center text-gray-900 my-7 whitespace-normal lg:whitespace-nowrap">
          Trek the Himalayas with Us
        </h2>

        <p className="text-gray-900 text-center text-base md:text-md font-ssBookD my-7 max-w-3xl mx-auto">
          Discover Uttarakhand’s most iconic trails — from beginner-friendly
          hikes to challenging high-altitude expeditions.
        </p>

        {/* Trek Items */}
        <div className="flex flex-col gap-12 mt-16 overflow-x-auto no-scrollbar">
          {treks.map((trek, index) => (
            <div
              key={index}
              className={`flex flex-row items-center justify-center gap-6 min-w-[320px] sm:min-w-[480px] md:min-w-full ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="w-[45%] sm:w-[40%] md:w-1/2 flex-shrink-0">
                <img
                  src={trek.image}
                  alt={trek.title}
                  className="w-full h-40 sm:h-56 md:h-80 object-cover rounded-xl shadow-md"
                />
              </div>

              {/* Text Content */}
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
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-full font-ssBD text-xs sm:text-sm transition-all">
                    View Details →
                  </button>
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
