import { useParams, Link } from "react-router-dom";
import {
  MapPin,
  Clock,
  Mountain,
  MessageCircle,
  X,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { treksData } from "../data/treks/treks";
import Form from "../components/Common/Form";

gsap.registerPlugin(ScrollTrigger);

const TrekDetails = () => {
  const { id } = useParams();
  const trek = treksData.find((t) => t.id === id);

  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (index) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) =>
      prev === trek.images.length - 1 ? 0 : prev + 1,
    );
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? trek.images.length - 1 : prev - 1,
    );
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "919876543210";
    const message = encodeURIComponent(
      `Hi! I'm interested in ${trek?.title || "this trek"}. Can you share more details?`,
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  useEffect(() => {
    gsap.fromTo(
      ".detail-block",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" },
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
          className="text-green hover:text-greenH underline font-medium"
        >
          Back to Treks
        </Link>
      </section>
    );
  }

  return (
    <>
      <section className="bg-white overflow-hidden pb-20">
        {/* HERO */}
        <div
          className="relative w-full h-[70vh] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url(${trek.images[0]})`,
          }}
        >
          <h1 className="relative z-10 text-white text-4xl md:text-6xl font-ssBD text-center px-4 drop-shadow-lg">
            {trek.title}
          </h1>
        </div>

        {/* TAG + WHATSAPP */}
        <div className="max-w-6xl mx-auto px-6 mt-14 detail-block">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
            <p className="text-green text-sm bg-green/10 px-3 py-1 rounded-full w-fit font-ssBookD">
              {trek.tag}
            </p>

            <button
              onClick={handleWhatsAppClick}
              className="flex items-center gap-2 bg-green hover:bg-greenH text-white px-5 py-2.5 rounded-full transition font-ssBookD"
            >
              <MessageCircle size={16} />
              Book Now
            </button>
          </div>
        </div>

        {/* BASIC INFO */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap items-center gap-6 my-6 text-sm detail-block font-ssSBH">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-green" />
              <span>{trek.difficulty}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-green" />
              <span>{trek.days}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mountain size={16} className="text-green" />
              <span>{trek.altitude}</span>
            </div>
          </div>

          <p className="text-gray-900 leading-relaxed detail-block font-ssLB">
            {trek.desc}
          </p>

          <p className="mt-10 text-greenH text-3xl font-bold detail-block font-ssBD">
            Package Price: {trek.price}
          </p>
        </div>

        {/* OVERVIEW */}
        <div className="max-w-6xl mx-auto px-6 mt-16 detail-block">
          <h2 className="text-2xl font-ssBD mb-8 text-center">Trek Overview</h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            {trek.region && (
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="text-gray-500 text-sm font-ssSBH">Region</p>
                <p className="font-semibold">{trek.region}</p>
              </div>
            )}

            {trek.startingPoint && (
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="text-gray-500 text-sm font-ssSBH">
                  Starting Point
                </p>
                <p className="font-semibold">{trek.startingPoint}</p>
              </div>
            )}

            {trek.distance && (
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="text-gray-500 text-sm font-ssSBH">Distance</p>
                <p className="font-semibold">{trek.distance}</p>
              </div>
            )}

            {trek.bestSeason && (
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="text-gray-500 text-sm font-ssSBH">Best Season</p>
                <p className="font-semibold">{trek.bestSeason}</p>
              </div>
            )}
          </div>
        </div>

        {/* === GOOGLE MAP LOCATION === */}
        {trek.map && (
          <div className="max-w-6xl mx-auto px-6 mt-20 detail-block">
            <h2 className="text-3xl font-ssBD text-center mb-10">
              Trek Location
            </h2>

            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
              <iframe
                src={trek.map}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[450px]"
              ></iframe>
            </div>
          </div>
        )}

        {/* GALLERY GRID */}
        <div className="max-w-6xl mx-auto px-6 mt-16 detail-block">
          <h2 className="text-3xl font-ssBD text-center mb-10">Trek Gallery</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[220px]">
            {trek.images.map((img, idx) => {
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

        {/* === HIGHLIGHTS (IMAGE STYLE) === */}
        {trek.highlights && (
          <div className="max-w-6xl mx-auto px-6 mt-24 detail-block">
            <h2 className="text-3xl md:text-4xl font-ssBD text-center mb-12">
              Trek Highlights
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {trek.highlights.map((item, i) => (
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

        {/* === ITINERARY === */}
        <div className="max-w-5xl mx-auto px-6 mt-20 detail-block">
          <h2 className="text-3xl font-ssBD  mb-10 text-center  text-gray-900">
            Trek Itinerary
          </h2>
          <div className="relative border-l-4 border-green/60 pl-8">
            {trek.itinerary.map((item, i) => (
              <div
                key={i}
                className="relative mb-12 pl-4 before:content-[''] before:absolute before:w-5 before:h-5 before:bg-gradient-to-r before:from-green before:to-greenH before:rounded-full before:-left-[0.875rem] before:top-2 before:shadow-md before:ring-2 before:ring-green/30"
              >
                <div className="bg-white/80 backdrop-blur-sm border rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-400 border-green/10 hover:border-green/20">
                  <h3 className="text-xl font-ssBD bg-gradient-to-r from-green to-greenH bg-clip-text text-transparent mb-4 pt-4 pl-4">
                    {item.day}
                  </h3>
                  <div className="p-6">
                    <h4 className="text-lg font-ssSBH text-gray-900 mb-4">
                      {item.title}
                    </h4>
                    <ul className="list-disc pl-6 text-gray-900 font-ssLB text-sm leading-relaxed space-y-2">
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

        {/* === INCLUSIONS / EXCLUSIONS === */}
        {(trek.included || trek.excluded) && (
          <div className="max-w-6xl mx-auto px-6 mt-20 grid md:grid-cols-2 gap-10 detail-block">
            {/* INCLUDED */}
            {trek.included && (
              <div className="bg-gradient-to-br from-green/5 via-white to-emerald-50 p-8 rounded-3xl shadow-xl border border-green/20">
                <h3 className="text-2xl font-ssBD bg-gradient-to-r from-green to-greenH bg-clip-text text-transparent mb-6">
                  What's Included
                </h3>

                <div className="space-y-3">
                  {trek.included.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 bg-white/50 rounded-xl hover:bg-white hover:shadow-sm transition-all"
                    >
                      <div className="w-6 h-6 bg-green rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <Check size={14} className="text-white" />
                      </div>

                      <span className="font-ssLB text-gray-900 leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* EXCLUDED */}
            {trek.excluded && (
              <div className="bg-gradient-to-br from-red/5 via-white to-rose-50 p-8 rounded-3xl shadow-xl border border-red/20">
                <h3 className="text-2xl font-ssBD bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-6">
                  Not Included
                </h3>

                <div className="space-y-3">
                  {trek.excluded.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 bg-white/50 rounded-xl hover:bg-white hover:shadow-sm transition-all"
                    >
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <X size={14} className="text-white" />
                      </div>

                      <span className="font-ssLB text-gray-900 leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* === ABOUT TREK === */}
        {trek.about && (
          <div className="max-w-4xl mx-auto px-6 mt-20 text-center detail-block">
            <h2 className="text-3xl font-ssBD text-gray-900 mb-6">
              About This Trek
            </h2>
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-10 rounded-3xl shadow-xl border border-gray-200/50 backdrop-blur-sm">
              <p className="text-gray-900 font-ssLB leading-relaxed text-lg max-w-3xl mx-auto">
                {trek.about}
              </p>
            </div>
          </div>
        )}

        <Form itemName={trek.title} itemType="Trek" />
        {/* === CTA SECTION === */}
        <div className="max-w-6xl mx-auto px-6 mt-20 mb-16 detail-block">
          <div className="bg-gradient-to-r from-green to-greenH p-12 rounded-3xl text-white text-center shadow-2xl">
            <h2 className="text-4xl font-ssBD mb-6">
              Ready for Your Adventure?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
              <Link
                to="/treks"
                className="flex-1 inline-block bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-ssBookD px-8 py-4 rounded-full transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02] border-2 border-white/30 font-semibold text-lg"
              >
                ← Explore More Treks
              </Link>
              <button
                onClick={handleWhatsAppClick}
                className="flex-1 flex items-center justify-center gap-3 bg-white text-green font-ssBD px-8 py-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-300 font-semibold text-lg border-2 border-white/20"
              >
                <MessageCircle size={24} />
                Book This Trek Now
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* MODERN FULLSCREEN GALLERY */}{" "}
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
              {currentImageIndex + 1} / {trek.images.length}{" "}
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
                src={trek.images[currentImageIndex]}
                alt=""
                className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-[0_40px_120px_rgba(0,0,0,0.9)] transition duration-500"
              />{" "}
            </div>{" "}
            {/* THUMBNAILS */}{" "}
            <div className="mt-8 flex gap-3 overflow-x-auto px-4 py-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
              {" "}
              {trek.images.map((img, idx) => (
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

export default TrekDetails;
