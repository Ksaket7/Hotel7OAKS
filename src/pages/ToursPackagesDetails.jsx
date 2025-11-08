import { useParams } from "react-router-dom";
import { MapPin, Clock } from "lucide-react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { toursData } from "../data/toursnpackages";

gsap.registerPlugin(ScrollTrigger);

const TourPackageDetails = () => {
  const { id } = useParams();
  const tour = toursData.find((t) => t.id === id);

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

  if (!tour) {
    return (
      <section className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Package not found
        </h2>
        <a
          href="/tours"
          className="text-green-600 hover:underline font-medium"
        >
          Back to Tours
        </a>
      </section>
    );
  }

  return (
    <section className="bg-white overflow-hidden pb-20">
      {/* === Hero Banner === */}
      <div
        className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${tour.image})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative z-10 text-white text-4xl md:text-6xl font-ssBD leading-snug text-center px-4">
          {tour.title}
        </h1>
      </div>

      {/* === Content === */}
      <div className="max-w-6xl mx-auto px-6 mt-14">
        {/* Tag */}
        <p className="text-green-700 text-sm font-ssBookD bg-green-100 px-3 py-1 rounded-full uppercase tracking-wide w-fit detail-block">
          {tour.location}
        </p>

        {/* Meta Info */}
        <div className="flex items-center gap-6 my-6 text-gray-900 font-ssLB text-sm detail-block">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>{tour.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>Available Year-Round</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-800 font-ssLB text-base leading-relaxed max-w-3xl detail-block">
          {tour.description}
        </p>

        {/* Highlights */}
        {tour.highlights && (
          <div className="mt-10 bg-green-50 p-6 rounded-xl shadow-sm detail-block">
            <h3 className="text-xl font-ssBD text-green-700 mb-3">
              Highlights
            </h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              {tour.highlights.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Price */}
        <p className="mt-10 text-green-600 text-3xl font-ssBD detail-block">
          Package Price: {tour.price}
        </p>
      </div>
    </section>
  );
};

export default TourPackageDetails;
