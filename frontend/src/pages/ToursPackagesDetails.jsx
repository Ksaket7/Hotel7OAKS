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
      prev === tour.images.length - 1 ? 0 : prev + 1,
    );
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? tour.images.length - 1 : prev - 1,
    );
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "919876543210";
    const message = encodeURIComponent(
      `Hi! I'm interested in ${tour?.title || "this package"}`,
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
      },
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

        {/* ✨ CENTERED TAGLINE STRIP */}
        <div className="max-w-6xl mx-auto px-6 -mt-10 relative z-20 flex justify-center detail-block">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-xl">
            
            <span className="w-1 h-4 bg-green rounded-full"></span>

            <span className="text-sm md:text-base font-ssBD bg-gradient-to-r from-green to-greenH bg-clip-text text-transparent text-center">
              Fixed Departures & Custom Packages
            </span>

            <span className="w-1 h-4 bg-green rounded-full"></span>
          </div>
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
              Book Now
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

          {/* === HIGHLIGHTS (IMAGE STYLE) === */}
          {tour.highlights && (
            <div className="max-w-6xl mx-auto px-6 mt-24 detail-block">
              <h2 className="text-3xl md:text-4xl font-ssBD text-center mb-12">
                Tour Highlights
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {tour.highlights.map((item, i) => (
                  <div
                    key={i}
                    className="highlight-card group relative rounded-3xl overflow-hidden shadow-lg cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                  >
                    {/* IMAGE */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[280px] object-cover transition duration-700 group-hover:scale-110"
                    />

                    {/* DARK OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                    {/* CONTENT */}
                    <div className="absolute bottom-0 p-5 text-white">
                      <h3 className="text-lg font-ssBD mb-1">{item.title}</h3>
                      <p className="text-sm opacity-90 font-ssLB leading-snug">
                        {item.desc}
                      </p>
                    </div>

                    {/* BORDER GLOW */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-400 rounded-3xl transition duration-300"></div>
                  </div>
                ))}
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
          {" "}
          <div
            className="relative w-full max-w-7xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {" "}
            {/* CLOSE BUTTON */}{" "}
            <button
              onClick={closeGallery}
              className="absolute top-6 right-6 z-20 p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition backdrop-blur-lg"
            >
              {" "}
              <X size={22} />{" "}
            </button>{" "}
            {/* IMAGE COUNTER */}{" "}
            <div className="absolute top-6 left-6 z-20 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm backdrop-blur-lg">
              {" "}
              {currentImageIndex + 1} / {tour.images.length}{" "}
            </div>{" "}
            {/* PREV BUTTON */}{" "}
            <button
              onClick={goToPrevious}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition backdrop-blur-lg"
            >
              {" "}
              <ChevronLeft size={28} />{" "}
            </button>{" "}
            {/* NEXT BUTTON */}{" "}
            <button
              onClick={goToNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition backdrop-blur-lg"
            >
              {" "}
              <ChevronRight size={28} />{" "}
            </button>{" "}
            {/* MAIN IMAGE */}{" "}
            <div className="flex items-center justify-center w-full max-h-[75vh]">
              {" "}
              <img
                src={tour.images[currentImageIndex]}
                alt=""
                className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-[0_40px_120px_rgba(0,0,0,0.9)] transition duration-500"
              />{" "}
            </div>{" "}
            {/* THUMBNAILS */}{" "}
            <div className="mt-8 flex gap-3 overflow-x-auto px-4 py-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
              {" "}
              {tour.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt=""
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer transition ${currentImageIndex === idx ? "ring-2 ring-green-400 scale-110 opacity-100" : "opacity-60 hover:opacity-100 hover:scale-105"}`}
                />
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </div>
      )}
    </>
  );
};

export default TourPackageDetails;
