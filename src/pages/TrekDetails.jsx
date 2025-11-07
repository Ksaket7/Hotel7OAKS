import { useParams } from "react-router-dom";
import { MapPin, Clock } from "lucide-react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { treksData } from "../data/treks";

gsap.registerPlugin(ScrollTrigger);

const TrekDetails = () => {
  const { id } = useParams();
  const trek = treksData[id];

  useEffect(() => {
    gsap.fromTo(
      ".detail-block",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section className="bg-white overflow-hidden pb-20">
      <div
        className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${trek.image})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative z-10 text-white text-4xl md:text-6xl font-rsR leading-snug text-center px-4">
          {trek.title}
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-14">
        <p className="text-green-700 text-sm font-ssBookD bg-green-100 px-3 py-1 rounded-full uppercase tracking-wide w-fit detail-block">
          {trek.tag}
        </p>

        <div className="flex items-center gap-6 my-6 text-gray-900 font-ssLB text-sm detail-block">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>{trek.difficulty}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>{trek.days}</span>
          </div>
        </div>

        <p className="text-gray-800 font-ssLB text-base leading-relaxed max-w-3xl detail-block">
          {trek.desc}
        </p>

        <p className="mt-10 text-green-600 text-3xl font-ssBD detail-block">
          Package Price: {trek.price}
        </p>
      </div>
    </section>
  );
};

export default TrekDetails;
