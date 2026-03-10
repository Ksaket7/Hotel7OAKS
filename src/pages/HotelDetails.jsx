import { useParams } from "react-router-dom";
import { MapPin, Star, MessageCircle } from "lucide-react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hotelsData } from "../data/hotels";
import Form from "../components/Common/Form";

gsap.registerPlugin(ScrollTrigger);

const HotelDetail = () => {
  const { id } = useParams();
  const hotel = hotelsData.find((h) => h.id === id);

  const handleWhatsAppClick = () => {
    // Replace with your WhatsApp number and pre-filled message
    const phoneNumber = "919876543210"; // Your WhatsApp number (with country code)
    const message = encodeURIComponent(`Hi! I'm interested in ${hotel?.name || 'this hotel'}. Can you share more details?`);
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

  if (!hotel) {
    return (
      <div className="h-screen flex flex-col justify-center items-center text-center">
        <h2 className="text-2xl font-bold mb-4">Hotel Not Found</h2>
        <a href="/hotels" className="text-green hover:text-greenH underline font-medium">
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

      {/* === TAG + WHATSAPP ROW === */}
      <div className="max-w-6xl mx-auto px-6 mt-14 detail-block">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
          {/* Left: Location tag */}
          <p className="text-green text-sm font-ssBookD bg-green/10 px-3 py-1 rounded-full tracking-wide w-fit">
            {hotel.location}
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

      {/* === Details Section === */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-6 my-6 text-gray-900 font-ssSBH text-sm detail-block">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-green" />
            <span>{hotel.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Star size={16} className="text-yellow-400" />
            <span>{hotel.rating} / 5</span>
          </div>
        </div>

        <p className="text-gray-900 font-ssLB text-base leading-relaxed max-w-3xl detail-block">
          {hotel.description}
        </p>

        {/* Price and Book Button */}
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 detail-block">
          <p className="text-gray-900 text-3xl font-ssBD">
            {hotel.price}
          </p>
          {/* <button className="bg-green hover:bg-greenH text-white font-ssBookD text-base px-6 py-3 rounded-full transition-all shadow-lg hover:shadow-xl">
            Book Now
          </button> */}
        </div>

        {/* Reviews */}
        <div className="mt-16 detail-block">
          <h3 className="text-2xl font-ssBD text-gray-900 mb-6">
            Guest Reviews
          </h3>
          {hotel.reviews.map((review, index) => (
            <div
              key={index}
              className="border-l-4 border-green/60 pl-4 mb-6 detail-block"
            >
              <p className="text-gray-900 font-ssLB italic mb-2">
                "{review.comment}"
              </p>
              <p className="text-sm text-gray-600 font-ssLB">
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
