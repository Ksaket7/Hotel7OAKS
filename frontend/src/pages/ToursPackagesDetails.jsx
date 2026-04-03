import { useParams, Link } from "react-router-dom";
import {
  MapPin,
  Clock,
  MessageCircle,
  X,
  ChevronLeft,
  ChevronRight,
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
      `Hi! I'm interested in ${tour?.title || "this package"}. Can you share more details?`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  useEffect(() => {
    gsap.fromTo(
      ".detail-block",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15 }
    );
  }, []);

  if (!tour) {
    return (
      <section className="min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-2xl font-semibold">Package Not Found</h2>
        <Link to="/tours" className="text-green underline mt-2">
          Back to Tours
        </Link>
      </section>
    );
  }

  return (
    <>
      <section className="bg-white pb-20">

        {/* HERO */}
        <div
          className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${tour.images[0]})`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <h1 className="text-white text-5xl font-bold z-10 text-center px-4">
            {tour.title}
          </h1>
        </div>

        {/* TAG + CTA */}
        <div className="max-w-6xl mx-auto px-6 mt-14 detail-block flex justify-between">
          <p className="text-green bg-green/10 px-3 py-1 rounded-full text-sm">
            {tour.location}
          </p>

          <button
            onClick={handleWhatsAppClick}
            className="bg-green text-white px-5 py-2.5 rounded-full flex gap-2"
          >
            <MessageCircle size={16} />
            Chat with us
          </button>
        </div>

        {/* BASIC INFO */}
        <div className="max-w-6xl mx-auto px-6 detail-block">
          <div className="flex gap-6 my-6 text-sm">
            <div className="flex gap-2 items-center">
              <MapPin size={16} />
              {tour.duration}
            </div>
            <div className="flex gap-2 items-center">
              <Clock size={16} />
              Available Year-Round
            </div>
          </div>

          <p>{tour.description}</p>

          <h2 className="text-3xl mt-6 font-bold">
            ₹ {tour.price}
          </h2>
        </div>

        {/* 🔥 HIGHLIGHTS WITH IMAGES (YOUR REQUIREMENT) */}
        {tour.experience && (
          <div className="max-w-6xl mx-auto px-6 mt-20 detail-block">
            <h2 className="text-3xl text-center mb-10 font-bold">
              Experience Highlights
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {tour.experience.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden shadow-lg"
                >
                  <img
                    src={item.image}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">
                      {item.title}
                    </h3>
                    <p className="text-sm mt-2 text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* GALLERY */}
        <div className="max-w-6xl mx-auto px-6 mt-20 detail-block">
          <h2 className="text-3xl text-center mb-10 font-bold">
            Tour Gallery
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tour.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                onClick={() => openGallery(idx)}
                className="rounded-xl cursor-pointer hover:scale-105 transition"
              />
            ))}
          </div>
        </div>

        {/* ITINERARY */}
        {tour.itinerary && (
          <div className="max-w-5xl mx-auto px-6 mt-20 detail-block">
            <h2 className="text-3xl text-center mb-10 font-bold">
              Itinerary
            </h2>

            {tour.itinerary.map((day, i) => (
              <div key={i} className="mb-6">
                <h3 className="font-semibold text-lg">{day.day}</h3>
                <ul className="list-disc pl-5">
                  {day.details.map((d, idx) => (
                    <li key={idx}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        <Form itemName={tour.title} itemType="Tour Package" />
      </section>

      {/* FULLSCREEN GALLERY */}
      {isGalleryOpen && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center">
          <button onClick={closeGallery} className="absolute top-6 right-6">
            <X color="white" />
          </button>

          <button onClick={goToPrevious} className="absolute left-6">
            <ChevronLeft color="white" />
          </button>

          <img
            src={tour.images[currentImageIndex]}
            className="max-h-[80vh]"
          />

          <button onClick={goToNext} className="absolute right-6">
            <ChevronRight color="white" />
          </button>
        </div>
      )}
    </>
  );
};

export default TourPackageDetails;