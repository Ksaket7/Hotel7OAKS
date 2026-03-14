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

const HotelDetail = () => {
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
      `Hi! I'm interested in ${hotel?.name}. Can you share details?`,
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
      <section className="min-h-screen flex items-center justify-center">
        <h2>Hotel Not Found</h2>
      </section>
    );
  }

  return (
    <>
      <section className="bg-white pb-20 overflow-hidden">
        {/* HERO */}

        <div
          className="relative w-full h-[70vh] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.4)),url(${hotel.images[0]})`,
          }}
        >
          <h1 className="text-white text-5xl font-ssBD z-10 text-center px-4">
            {hotel.name}
          </h1>
        </div>

        {/* TAG + WHATSAPP */}

        <div className="max-w-6xl mx-auto px-6 mt-14 detail-block">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <p className="text-green text-sm bg-green/10 px-3 py-1 rounded-full w-fit font-ssBookD">
              {hotel.tag}
            </p>

            <button
              onClick={handleWhatsAppClick}
              className="flex items-center gap-2 bg-green text-white px-5 py-2.5 rounded-full"
            >
              <MessageCircle size={16} />
              Chat with us
            </button>
          </div>
        </div>

        {/* BASIC INFO */}

        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-6 my-6 text-sm detail-block">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-green" />
              <span>{hotel.location}</span>
            </div>

            <div className="flex items-center gap-2">
              <Star size={16} className="text-yellow-400" />
              <span>{hotel.rating}/5</span>
            </div>
          </div>

          <p className="text-gray-900 leading-relaxed detail-block">
            {hotel.description}
          </p>

          <p className="mt-10 text-green text-3xl font-bold detail-block">
            Starting From {hotel.price} / night
          </p>
        </div>

        {/* HOTEL OVERVIEW */}

        <div className="max-w-6xl mx-auto px-6 mt-16 detail-block">
          <h2 className="text-2xl font-ssBD text-center mb-8">
            Hotel Amenities
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            {hotel.amenities?.map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl">
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* GALLERY */}

        <div className="max-w-6xl mx-auto px-6 mt-16 detail-block">
          <h2 className="text-3xl font-ssBD text-center mb-10">
            Hotel Gallery
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {hotel.images.map((img, i) => (
              <div
                key={i}
                onClick={() => openGallery(i)}
                className="cursor-pointer overflow-hidden rounded-xl"
              >
                <img
                  src={img}
                  className="w-full h-[200px] object-cover hover:scale-110 transition"
                />
              </div>
            ))}
          </div>
        </div>

        {/* HIGHLIGHTS */}

        {hotel.highlights && (
          <div className="max-w-5xl mx-auto px-6 mt-20 detail-block">
            <h2 className="text-3xl text-center font-ssBD mb-8">
              Hotel Highlights
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {hotel.highlights.map((h, i) => (
                <div key={i} className="bg-green/5 p-6 rounded-xl">
                  <p>{h}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* REVIEWS */}

        <div className="max-w-5xl mx-auto px-6 mt-20 detail-block">
          <h2 className="text-3xl text-center font-ssBD mb-8">Guest Reviews</h2>

          {hotel.reviews.map((r, i) => (
            <div key={i} className="border-l-4 border-green/60 pl-4 mb-6">
              <p className="italic">"{r.comment}"</p>

              <p className="text-sm text-gray-500">
                — {r.name} ⭐ {r.rating}
              </p>
            </div>
          ))}
        </div>

        <Form itemName={hotel.name} itemType="Hotel" />

       {/* === CTA SECTION === */}
        <div className="max-w-6xl mx-auto px-6 mt-20 mb-16 detail-block">
          <div className="bg-gradient-to-r from-green to-greenH p-12 rounded-3xl text-white text-center shadow-2xl">
            <h2 className="text-4xl font-ssBD mb-6">
              Ready for Your Stay?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
              <Link
                to="/treks"
                className="flex-1 inline-block bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-ssBookD px-8 py-4 rounded-full transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02] border-2 border-white/30 font-semibold text-lg"
              >
                ← Explore More Hotels
              </Link>
              <button
                onClick={handleWhatsAppClick}
                className="flex-1 flex items-center justify-center gap-3 bg-white text-green font-ssBD px-8 py-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-300 font-semibold text-lg border-2 border-white/20"
              >
                <MessageCircle size={24} />
                Book This Hotel Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FULLSCREEN GALLERY */}

      {isGalleryOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={closeGallery}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeGallery}
              className="absolute top-6 right-6 text-white"
            >
              <X />
            </button>

            <button
              onClick={goPrev}
              className="absolute left-6 top-1/2 text-white"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={goNext}
              className="absolute right-6 top-1/2 text-white"
            >
              <ChevronRight />
            </button>

            <img
              src={hotel.images[currentImageIndex]}
              className="w-full max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default HotelDetail;
