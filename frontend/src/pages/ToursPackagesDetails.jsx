import { useParams } from "react-router-dom";
import { MapPin, Clock, MessageCircle } from "lucide-react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { toursData } from "../data/toursnpackages";
import Form from "../components/Common/Form";

gsap.registerPlugin(ScrollTrigger);

const TourPackageDetails = () => {
  const { id } = useParams();
  const tour = toursData.find((t) => t.id === id);

  const handleWhatsAppClick = () => {
    // Replace with your WhatsApp number and pre-filled message
    const phoneNumber = "919876543210"; // Your WhatsApp number (with country code)
    const message = encodeURIComponent(`Hi! I'm interested in ${tour?.title || 'this package'}. Can you share more details?`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

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
          className="text-green hover:text-greenH underline font-medium"
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

      {/* === TAG + WHATSAPP ROW === */}
      <div className="max-w-6xl mx-auto px-6 mt-14 detail-block">
        <div className="flex  sm:items-center gap-4 justify-between">
          {/* Left: Location tag */}
          <p className="text-green text-sm font-ssBookD bg-green/10 px-3 py-1 rounded-full tracking-wide w-fit">
            {tour.location}
          </p>
          
          {/* Right: WhatsApp Button */}
          <div className="flex justify-start sm:justify-end">
            <button
              onClick={handleWhatsAppClick}
              className="group flex items-center gap-2 bg-green hover:bg-greenH text-white font-ssBookD px-5 py-2.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] whitespace-nowrap text-sm"
            >
              <MessageCircle size={16} className="group-hover:scale-110 transition-transform" />
              Chat with us
            </button>
          </div>
        </div>
      </div>

      {/* === Content === */}
      <div className="max-w-6xl mx-auto px-6">
        {/* Meta Info */}
        <div className="flex items-center gap-6 my-6 text-gray-900 font-ssSBH text-sm detail-block">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-green" />
            <span>{tour.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-green" />
            <span>Available Year-Round</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-900 font-ssLB text-base leading-relaxed max-w-3xl detail-block">
          {tour.description}
        </p>

        {/* Highlights */}
        {tour.highlights && (
          <div className="mt-10 bg-green/5 p-6 rounded-xl shadow-sm detail-block">
            <h3 className="text-xl font-ssBD text-green mb-3">
              Highlights
            </h3>
            <ul className="list-disc pl-5 text-gray-900 font-ssLB space-y-1">
              {tour.highlights.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Price */}
        <p className="mt-10 text-gray-900 text-3xl font-ssBD detail-block">
          Package Price: {tour.price}
        </p>
      </div>
      <Form itemName={tour.title} itemType="Package" />
    </section>
  );
};

export default TourPackageDetails;
