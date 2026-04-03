import { useParams } from "react-router-dom";
import {
  MapPin,
  Clock,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  XCircle,
  PlusCircle,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { toursData } from "../data/toursnpackages";
import Form from "../components/Common/Form";

gsap.registerPlugin(ScrollTrigger);

const TourPackageDetails = () => {
  const { id } = useParams();
  const tour = toursData.find((t) => t.id === id);

  // ✅ GALLERY STATE (ADDED)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (index) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => setIsGalleryOpen(false);

  const goToNext = () => {
    setCurrentImageIndex((prev) =>
      prev === tour.images.length - 1 ? 0 : prev + 1
    );
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? tour.images.length - 1 : prev - 1
    );
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "919876543210";
    const message = encodeURIComponent(
      `Hi! I'm interested in ${tour?.title || "this package"}`
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
        <h2 className="text-2xl font-ssBD text-gray-800 mb-4">
          Package not found
        </h2>
      </section>
    );
  }

  return (
    <>
      <section className="bg-white overflow-hidden pb-20">
        {/* HERO */}
        <div
          className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${tour.images[0]})` }}
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
              className="group flex items-center gap-2 bg-green hover:bg-greenH text-white px-5 py-2.5 rounded-full transition-all shadow-lg hover:scale-[1.02] text-sm font-ssBookD"
            >
              <MessageCircle size={16} />
              Chat with us
            </button>
          </div>
        </div>

        {/* CONTENT */}
        <div className="max-w-6xl mx-auto px-6">
          {/* META */}
          <div className="flex items-center gap-6 my-6 text-gray-900 text-sm detail-block font-ssSBH">
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
            <p className="text-gray-900 text-base leading-relaxed max-w-3xl detail-block font-ssLB">
              {tour.description}
            </p>
          )}

          {/* PRICE */}
          <p className="mt-10 text-greenH text-3xl font-ssBD detail-block">
            {tour.price}
          </p>

          {/* ✅ GALLERY GRID (ADDED ONLY) */}
          {tour.images && (
            <div className="max-w-6xl mx-auto mt-16 detail-block">
              <h2 className="text-3xl font-ssBD text-center mb-10">
                Tour Gallery
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[220px]">
                {tour.images.map((img, idx) => {
                  const large = idx === 0 || idx === 3;

                  return (
                    <div
                      key={idx}
                      onClick={() => openGallery(idx)}
                      className={`relative cursor-pointer overflow-hidden rounded-2xl ${
                        large ? "md:col-span-2 md:row-span-2" : ""
                      }`}
                    >
                      <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover hover:scale-110 transition"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
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
                    className="flex items-start gap-3 bg-gray-50 p-6 rounded-xl shadow"
                  >
                    <Sparkles className="text-green" size={18} />
                    <p className="font-ssLB">{item}</p>
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
                  <div key={i} className="relative mb-12 pl-4">
                    <div className="bg-white border rounded-2xl shadow-lg">
                      <h3 className="text-xl font-ssBD text-green mb-2 pt-4 pl-4">
                        {item.day}
                      </h3>

                      <div className="p-6">
                        <h4 className="text-lg font-ssSBH mb-3">
                          {item.title}
                        </h4>

                        <ul className="space-y-2">
                          {item.details.map((d, idx) => (
                            <li
                              key={idx}
                              className="flex gap-2 text-sm font-ssLB"
                            >
                              <CheckCircle2
                                size={16}
                                className="text-green mt-1"
                              />
                              {d}
                            </li>
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
                <div className="bg-green/5 p-8 rounded-3xl border">
                  <h3 className="text-2xl font-ssBD text-green mb-6">
                    Inclusions
                  </h3>

                  {tour.inclusions.map((item, i) => (
                    <div key={i} className="flex gap-3 mb-3">
                      <CheckCircle2 size={18} className="text-green" />
                      <span className="font-ssLB">{item}</span>
                    </div>
                  ))}
                </div>
              )}

              {tour.exclusions && (
                <div className="bg-red/5 p-8 rounded-3xl border">
                  <h3 className="text-2xl font-ssBD text-red-500 mb-6">
                    Exclusions
                  </h3>

                  {tour.exclusions.map((item, i) => (
                    <div key={i} className="flex gap-3 mb-3">
                      <XCircle size={18} className="text-red-500" />
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
                    className="flex items-center gap-3 bg-gray-100 p-4 rounded-xl"
                  >
                    <PlusCircle size={18} className="text-green" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <Form itemName={tour.title} itemType="Package" />
      </section>

      {/* ✅ FULLSCREEN GALLERY (ADDED ONLY) */}
      {isGalleryOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
          onClick={closeGallery}
        >
          <div
            className="relative w-full max-w-7xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeGallery}
              className="absolute top-6 right-6 text-white"
            >
              <X size={22} />
            </button>

            <button
              onClick={goToPrevious}
              className="absolute left-6 top-1/2 text-white"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-6 top-1/2 text-white"
            >
              <ChevronRight size={28} />
            </button>

            <img
              src={tour.images[currentImageIndex]}
              className="max-h-[75vh] object-contain"
            />

            <div className="mt-6 flex gap-3 overflow-x-auto">
              {tour.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-20 h-20 object-cover cursor-pointer ${
                    currentImageIndex === idx
                      ? "ring-2 ring-green"
                      : "opacity-60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TourPackageDetails;