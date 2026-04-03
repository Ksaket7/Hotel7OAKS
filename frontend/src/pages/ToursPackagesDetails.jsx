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
    const phoneNumber = "919876543210";
    const message = encodeURIComponent(
      `Hi! I'm interested in ${tour?.title || "this package"}. Can you share more details?`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  useEffect(() => {
    gsap.fromTo(
      ".detail-block",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
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
      {/* HERO */}
      <div
        className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${tour.image})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative z-10 text-white text-4xl md:text-6xl font-ssBD text-center px-4">
          {tour.title}
        </h1>
      </div>

      {/* TAG + WHATSAPP */}
      <div className="max-w-6xl mx-auto px-6 mt-14 detail-block">
        <div className="flex sm:items-center gap-4 justify-between flex-wrap">
          <p className="text-green text-sm font-ssBookD bg-green/10 px-3 py-1 rounded-full">
            {tour.location}
          </p>

          <button
            onClick={handleWhatsAppClick}
            className="group flex items-center gap-2 bg-green hover:bg-greenH text-white px-5 py-2.5 rounded-full transition-all shadow-lg hover:scale-[1.02] text-sm"
          >
            <MessageCircle size={16} />
            Chat with us
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6">
        {/* META */}
        <div className="flex items-center gap-6 my-6 text-gray-900 text-sm detail-block">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-green" />
            <span>{tour.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-green" />
            <span>Available Year-Round</span>
          </div>
        </div>

        {/* DESCRIPTION */}
        {tour.description && (
          <p className="text-gray-900 text-base leading-relaxed max-w-3xl detail-block">
            {tour.description}
          </p>
        )}

        {/* INTRO */}
        {tour.intro && (
          <div className="max-w-4xl mt-10 detail-block">
            <h2 className="text-2xl font-ssBD text-gray-900 mb-4">
              About This Package
            </h2>

            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-2xl shadow border">
              <p className="text-gray-900 font-ssLB leading-relaxed">
                {tour.intro}
              </p>
            </div>
          </div>
        )}

        {/* FEATURES */}
        {tour.features && (
          <div className="mt-16 detail-block">
            <h2 className="text-3xl font-ssBD text-center mb-10">
              What Makes This Special
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {tour.features.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
                >
                  ✨ {item}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ITINERARY */}
        {tour.itinerary && (
          <div className="max-w-5xl mx-auto mt-20 detail-block">
            <h2 className="text-3xl font-ssBD mb-10 text-center text-gray-900">
              Tour Itinerary
            </h2>

            <div className="relative border-l-4 border-green/60 pl-8">
              {tour.itinerary.map((item, i) => (
                <div
                  key={i}
                  className="relative mb-12 pl-4 before:content-[''] before:absolute before:w-5 before:h-5 before:bg-gradient-to-r before:from-green before:to-greenH before:rounded-full before:-left-[0.875rem] before:top-2"
                >
                  <div className="bg-white border rounded-2xl shadow-lg hover:shadow-xl transition">
                    <h3 className="text-xl font-ssBD text-green mb-2 pt-4 pl-4">
                      {item.day}
                    </h3>

                    <div className="p-6">
                      <h4 className="text-lg font-ssSBH text-gray-900 mb-3">
                        {item.title}
                      </h4>

                      <ul className="list-disc pl-6 text-sm space-y-2 font-ssLB">
                        {item.details.map((d, idx) => (
                          <li key={idx}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* INCLUSIONS / EXCLUSIONS */}
        {(tour.inclusions || tour.exclusions) && (
          <div className="mt-20 grid md:grid-cols-2 gap-10 detail-block">
            {tour.inclusions && (
              <div className="bg-gradient-to-br from-green/5 to-emerald-50 p-8 rounded-3xl shadow border border-green/20">
                <h3 className="text-2xl font-ssBD text-green mb-6">
                  Inclusions
                </h3>

                {tour.inclusions.map((item, i) => (
                  <div key={i} className="flex gap-3 mb-3">
                    <span>✔️</span>
                    <span className="font-ssLB">{item}</span>
                  </div>
                ))}
              </div>
            )}

            {tour.exclusions && (
              <div className="bg-gradient-to-br from-red/5 to-rose-50 p-8 rounded-3xl shadow border border-red/20">
                <h3 className="text-2xl font-ssBD text-red-500 mb-6">
                  Exclusions
                </h3>

                {tour.exclusions.map((item, i) => (
                  <div key={i} className="flex gap-3 mb-3">
                    <span>✖️</span>
                    <span className="font-ssLB">{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ADD-ONS */}
        {tour.addons && (
          <div className="mt-20 detail-block">
            <h2 className="text-3xl font-ssBD text-center mb-10">
              Optional Add-ons
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {tour.addons.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-100 p-4 rounded-xl shadow-sm"
                >
                  ➕ {item}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PRICE */}
        <p className="mt-14 text-gray-900 text-3xl font-bold detail-block">
          Package Price: {tour.price}
        </p>
      </div>

      {/* FORM */}
      <Form itemName={tour.title} itemType="Package" />
    </section>
  );
};

export default TourPackageDetails;