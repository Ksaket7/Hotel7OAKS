import { useParams } from "react-router-dom";
import { MapPin, Star } from "lucide-react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hotelsData } from "../data/hotels";
import Form from "../components/Form";

gsap.registerPlugin(ScrollTrigger);

const HotelDetail = () => {
  const { id } = useParams();
  const hotel = hotelsData.find((h) => h.id === id);

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

  if (!hotel) {
    return (
      <div className="h-screen flex flex-col justify-center items-center text-center">
        <h2 className="text-2xl font-bold mb-4">Hotel Not Found</h2>
        <a href="/hotels" className="text-green-600 underline">
          Back to Hotels
        </a>
      </div>
    );
  }

  return (
    <section className="bg-white overflow-hidden pb-20">
      {/* === Hero Banner === */}
      <div
        className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${hotel.image})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative z-10 text-white text-4xl md:text-6xl font-ssBD text-center px-4">
          {hotel.name}
        </h1>
      </div>

      {/* === Details Section === */}
      <div className="max-w-6xl mx-auto px-6 mt-14">
        <p className="text-green-700 text-sm bg-green-100 px-3 py-1 rounded-full uppercase tracking-wide w-fit detail-block">
          {hotel.location}
        </p>

        <div className="flex items-center gap-6 my-6 text-gray-900 text-sm detail-block">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>{hotel.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Star size={16} className="text-yellow-400" />
            <span>{hotel.rating} / 5</span>
          </div>
        </div>

        <p className="text-gray-800 text-base leading-relaxed max-w-3xl detail-block">
          {hotel.description}
        </p>

        {/* Price and Book Button */}
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 detail-block">
          <p className="text-green-600 text-2xl font-bold">
            {hotel.price}
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white text-base px-6 py-3 rounded-full transition-all shadow-sm">
            Book Now
          </button>
        </div>

        {/* Reviews */}
        <div className="mt-16 detail-block">
          <h3 className="text-2xl font-semibold text-green-700 mb-6">
            Guest Reviews
          </h3>
          {hotel.reviews.map((review, index) => (
            <div
              key={index}
              className="border-l-4 border-green-600 pl-4 mb-6"
            >
              <p className="text-gray-800 italic mb-2">
                “{review.comment}”
              </p>
              <p className="text-sm text-gray-600">
                — {review.name}, ⭐ {review.rating}
              </p>
            </div>
          ))}
        </div>
          </div>
          <Form itemName={hotel.name} itemType="Hotel" />

    </section>
  );
};

export default HotelDetail;
