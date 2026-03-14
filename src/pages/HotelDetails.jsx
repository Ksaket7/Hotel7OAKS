import { useParams, Link } from "react-router-dom";
import {
  MapPin,
  Star,
  MessageCircle,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { hotelsData } from "../data/hotels";
import Form from "../components/Common/Form";

gsap.registerPlugin(ScrollTrigger);

const HotelDetails = () => {
  const { id } = useParams();
  const hotel = hotelsData.find((h) => h.id === id);

  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (index) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => setIsGalleryOpen(false);

  const goNext = () => {
    setCurrentImageIndex((prev) =>
      prev === hotel.images.length - 1 ? 0 : prev + 1,
    );
  };

  const goPrev = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? hotel.images.length - 1 : prev - 1,
    );
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "919876543210";

    const message = encodeURIComponent(
      `Hi! I'm interested in staying at ${hotel?.name}. Can you share more details?`,
    );

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  useEffect(() => {
    gsap.fromTo(
      ".detail-block",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15 },
    );
  }, []);

  if (!hotel) {
    return (
      <section className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-center">
        <h2 className="text-2xl font-semibold mb-4">Hotel Not Found</h2>

        <Link to="/hotels" className="text-green hover:text-greenH underline">
          Back to Hotels
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
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.4)), url(${hotel.images[0]})`,
          }}
        >
          <h1 className="relative z-10 text-white text-4xl md:text-6xl font-ssBD text-center px-4 drop-shadow-lg">
            {hotel.name}
          </h1>
        </div>

        {/* TAG + WHATSAPP */}
        <div className="max-w-6xl mx-auto px-6 mt-14 detail-block">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
            <p className="text-green text-sm bg-green/10 px-3 py-1 rounded-full font-ssBookD">
              Mountain Stay
            </p>

            <button
              onClick={handleWhatsAppClick}
              className="flex items-center gap-2 bg-green hover:bg-greenH text-white px-5 py-2.5 rounded-full transition font-ssBookD"
            >
              <MessageCircle size={16} />
              Chat with us
            </button>
          </div>
        </div>

        {/* BASIC INFO */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap items-center gap-6 my-6 text-sm detail-block font-ssSBH">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-green" />
              <span>{hotel.location}</span>
            </div>

            <div className="flex items-center gap-2">
              <Star size={16} className="text-yellow-400" />
              <span>{hotel.rating} / 5</span>
            </div>
          </div>

          <p className="text-gray-900 leading-relaxed detail-block font-ssLB max-w-3xl">
            {hotel.description}
          </p>

          <p className="mt-10 text-greenH text-3xl font-bold detail-block font-ssBD">
            Starting from {hotel.price} / night
          </p>
        </div>

        {/* MOST POPULAR FACILITIES */}
        <div className="max-w-6xl mx-auto px-6 mt-16 detail-block">
          <h2 className="text-3xl font-ssBD text-center mb-10">
            Most Popular Facilities
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {hotel.facilities.map((facility, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 hover:bg-green/5 transition"
              >
                <Star size={16} className="text-green" />
                <span className="text-gray-800 text-sm font-ssBookD">
                  {facility}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* GALLERY GRID */}
        <div className="max-w-6xl mx-auto px-6 mt-16 detail-block">
          <h2 className="text-3xl font-ssBD text-center mb-10">
            Hotel Gallery
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[220px]">
            {hotel.images.map((img, idx) => {
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

        {/* REVIEWS */}
        <div className="max-w-5xl mx-auto px-6 mt-20 detail-block">
          <h2 className="text-3xl font-ssBD text-gray-900 mb-10 text-center">
            Guest Reviews
          </h2>

          {hotel.reviews.map((review, index) => (
            <div key={index} className="border-l-4 border-green/60 pl-6 mb-8">
              <p className="text-gray-900 italic mb-2 font-ssLB">
                "{review.comment}"
              </p>

              <p className="text-sm text-gray-600 font-ssLB">
                — {review.name}, ⭐ {review.rating}
              </p>
            </div>
          ))}
        </div>

        {/* INQUIRY FORM */}
        <Form itemName={hotel.name} itemType="Hotel" />

        {/* CTA SECTION */}
        <div className="max-w-6xl mx-auto px-6 mt-20 mb-16 detail-block">
          <div className="bg-gradient-to-r from-green to-greenH p-12 rounded-3xl text-white text-center shadow-2xl">
            <h2 className="text-4xl font-ssBD mb-6">
              Ready to Book Your Stay?
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto">
              <Link
                to="/hotels"
                className="flex-1 inline-block bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-ssBookD px-8 py-4 rounded-full transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02] border-2 border-white/30 font-semibold text-lg"
              >
                Explore More Hotels
              </Link>

              <button
                onClick={handleWhatsAppClick}
                className="flex-1 flex items-center justify-center gap-3 bg-white text-green font-ssBD px-8 py-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-300 font-semibold text-lg border-2 border-white/20"
              >
                <MessageCircle size={22} />
                Book on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MODERN FULLSCREEN GALLERY */}
      {isGalleryOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
          onClick={closeGallery}
        >
          <div
            className="relative w-full max-w-7xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={closeGallery}
              className="absolute top-6 right-6 z-20 p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition backdrop-blur-lg"
            >
              <X size={22} />
            </button>

            {/* IMAGE COUNTER */}
            <div className="absolute top-6 left-6 z-20 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm backdrop-blur-lg">
              {currentImageIndex + 1} / {hotel.images.length}
            </div>

            {/* PREV BUTTON */}
            <button
              onClick={goPrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition backdrop-blur-lg"
            >
              <ChevronLeft size={28} />
            </button>

            {/* NEXT BUTTON */}
            <button
              onClick={goNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition backdrop-blur-lg"
            >
              <ChevronRight size={28} />
            </button>

            {/* MAIN IMAGE */}
            <div className="flex items-center justify-center w-full max-h-[75vh]">
              <img
                src={hotel.images[currentImageIndex]}
                alt=""
                className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-[0_40px_120px_rgba(0,0,0,0.9)] transition duration-500"
              />
            </div>

            {/* THUMBNAILS */}
            <div className="mt-8 flex gap-3 overflow-x-auto px-4 py-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
              {hotel.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt=""
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer transition ${
                    currentImageIndex === idx
                      ? "ring-2 ring-green-400 scale-110 opacity-100"
                      : "opacity-60 hover:opacity-100 hover:scale-105"
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

export default HotelDetails;
