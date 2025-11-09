import { useParams, Link } from "react-router-dom";
import { MapPin, Clock } from "lucide-react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { treksData } from "../data/treks";
import Form from "../components/Form";

gsap.registerPlugin(ScrollTrigger);

const TrekDetails = () => {
  const { id } = useParams();
  const trek = treksData.find((t) => t.id === id);

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

  if (!trek) {
    return (
      <section className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Trek Not Found
        </h2>
        <Link
          to="/treks"
          className="text-green-600 hover:text-green-700 underline font-medium"
        >
          Back to Treks
        </Link>
      </section>
    );
  }

  return (
    <section className="bg-white overflow-hidden pb-20">
      {/* === Hero Banner === */}
      <div
        className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${trek.image})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative z-10 text-white text-4xl md:text-6xl font-ssBD leading-snug text-center px-4">
          {trek.title}
        </h1>
      </div>

      {/* === Trek Info === */}
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

        <div className="mt-8 detail-block">
          <Link
            to="/treks"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-ssBookD px-6 py-3 rounded-full transition-all"
          >
            Back to Treks
          </Link>
        </div>
      </div>

      {/* === Inquiry Form Section === */}
      <Form itemName={trek.title} itemType="Trek" />
    </section>
  );
};

export default TrekDetails;
