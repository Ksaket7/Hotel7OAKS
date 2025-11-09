import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock } from "lucide-react";
import { treksData } from "../data/treks";

gsap.registerPlugin(ScrollTrigger);

const Treks = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = sectionRef.current?.children || [];
    gsap.fromTo(
      items,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section className="bg-white overflow-hidden">

      {/* ✅ HERO SECTION */}
      <div
        className="relative w-full h-[70vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      >
        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 px-6 max-w-3xl">
          <span className="inline-block px-5 py-1.5 mb-4 rounded-full text-sm font-ssLBH text-white bg-white/10 border border-white/20 backdrop-blur-sm">
            Adventure Awaits
          </span>

          <h1 className="text-5xl md:text-7xl font-ssBD text-white mb-4 leading-tight">
            Treks of Uttarakhand
          </h1>

          <p className="text-white/85 font-ssLB text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            From snow peaks to spiritual trails — experience handpicked Himalayan treks designed for every adventurer.
          </p>
        </div>
      </div>

      {/* ✅ TREKS LIST SECTION */}
      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 py-20">

        <p className="text-green/80 text-lg font-ssBookD text-center tracking-wide">
          Popular Treks
        </p>

        <h2 className="text-3xl md:text-4xl font-ssBD text-center text-gray-900 my-6">
          Explore the Majestic Himalayas
        </h2>

        <p className="text-gray-600 text-center text-base font-ssLB max-w-3xl mx-auto mb-16 leading-relaxed">
          Discover the breathtaking beauty of Uttarakhand — every trail offers unmatched views, stories, and adventure.
        </p>

        {/* ✅ Trek List */}
        <div className="flex flex-col gap-16">
          {treksData.map((trek, index) => (
            <div
              key={trek.id}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >

              {/* ✅ IMAGE BLOCK */}
              <div className="w-full md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow border border-gray-200 group">
                  <img
                    src={trek.image}
                    alt={trek.title}
                    className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Difficulty Badge */}
                  <span
                    className={`absolute top-4 left-4 px-3 py-1 text-xs font-semibold tracking-wide text-white rounded-full shadow ${
                      trek.difficulty === "Easy"
                        ? "bg-green"
                        : trek.difficulty === "Moderate"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                  >
                    {trek.difficulty}
                  </span>
                </div>
              </div>

              {/* ✅ INFO BLOCK */}
              <div
                className={`w-full md:w-1/2 space-y-4 text-left ${
                  index % 2 !== 0 ? "md:pr-10" : "md:pl-10"
                }`}
              >
                <h3 className="text-xl sm:text-2xl font-ssBD text-gray-900 leading-snug">
                  {trek.title}
                </h3>

                <p className="text-gray-600 font-ssLB text-sm sm:text-base leading-relaxed">
                  {trek.desc}
                </p>

                {/* Details */}
                <div className="flex items-center gap-6 text-gray-700 font-ssLB text-sm">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-green" />
                    <span>{trek.days}</span>
                  </div>
                </div>

                {/* ✅ Price + Button */}
                <div className="flex justify-between items-center gap-6 pt-2">
                  <p className="text-green font-ssBD text-lg tracking-wide">
                    {trek.price}
                  </p>

                  <Link
                    to={`/treks/${trek.id}`}
                    className="px-5 py-2 bg-green hover:bg-green/90 text-white rounded-full font-ssBD text-sm transition-all shadow"
                  >
                    View Details →
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* ✅ CTA SECTION */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="relative bg-gradient-to-r from-green to-green/70 rounded-3xl p-12 text-center overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg')] bg-cover bg-center opacity-10"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-ssBD text-white mb-4">
              Ready for Your Next Trek?
            </h2>
            <p className="text-white/85 font-ssBookD text-lg mb-8 max-w-xl mx-auto">
              Let us craft a personalized Himalayan trekking experience just for you.
            </p>

            <button className="px-8 py-4 bg-white text-green font-ssSBH rounded-full shadow hover:bg-gray-100 transition-all">
              Plan Custom Trek
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Treks;
