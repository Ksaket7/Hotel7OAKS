import { useParams, Link } from "react-router-dom";
import { MapPin, Clock, Mountain, MessageCircle } from "lucide-react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { treksData } from "../data/treks";
import Form from "../components/Common/Form";

gsap.registerPlugin(ScrollTrigger);

const TrekDetails = () => {
  const { id } = useParams();
  const trek = treksData.find((t) => t.id === id);

  const handleWhatsAppClick = () => {
    const phoneNumber = "919876543210";
    const message = encodeURIComponent(`Hi! I'm interested in ${trek?.title || 'this trek'}. Can you share more details?`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  useEffect(() => {
    gsap.fromTo(
      ".detail-block",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" }
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
    <section className="bg-white overflow-hidden pb-20">
      {/* === HERO === */}
      <div
        className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${trek.images[0]})`,
        }}
      >
        <h1 className="relative z-10 text-white text-4xl md:text-6xl font-ssBD text-center px-4 drop-shadow-lg">
          {trek.title}
        </h1>
      </div>

      {/* === TAG + WHATSAPP ROW === */}
      <div className="max-w-6xl mx-auto px-6 mt-14 detail-block">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
          <p className="text-green text-sm font-ssBookD bg-green/10 px-3 py-1 rounded-full tracking-wide w-fit">
            {trek.tag}
          </p>
          
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

      {/* === BASIC INFO === */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap items-center gap-6 my-6 text-gray-900 font-ssSBH text-sm detail-block">
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

        <p className="text-gray-900 font-ssLB text-base leading-relaxed max-w-3xl detail-block">
          {trek.desc}
        </p>

        <p className="mt-10 text-gray-900 text-3xl font-ssBD detail-block">
          Package Price: {trek.price}
        </p>
      </div>

      {/* === TREK OVERVIEW === */}
      <div className="max-w-6xl mx-auto px-6 mt-16 detail-block">
        <h2 className="text-2xl font-ssBD text-gray-900 mb-8 text-center">
          Trek Overview
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          {trek.region && (
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group">
              <p className="text-gray-500 text-sm group-hover:text-green transition-colors">Region</p>
              <p className="font-ssSBH text-gray-900 text-lg">{trek.region}</p>
            </div>
          )}

          {trek.startingPoint && (
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group">
              <p className="text-gray-500 text-sm group-hover:text-green transition-colors">Starting Point</p>
              <p className="font-ssSBH text-gray-900 text-lg">{trek.startingPoint}</p>
            </div>
          )}

          {trek.distance && (
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group">
              <p className="text-gray-500 text-sm group-hover:text-green transition-colors">Distance</p>
              <p className="font-ssSBH text-gray-900 text-lg">{trek.distance}</p>
            </div>
          )}

          {trek.bestSeason && (
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group">
              <p className="text-gray-500 text-sm group-hover:text-green transition-colors">Best Season</p>
              <p className="font-ssSBH text-gray-900 text-lg">{trek.bestSeason}</p>
            </div>
          )}
        </div>
      </div>

      {/* === IMAGE GALLERY === */}
      <div className="max-w-6xl mx-auto px-6 mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 detail-block">
        {trek.images.map((img, idx) => (
          <div key={idx} className="group">
            <img
              src={img}
              alt={`${trek.title} ${idx + 1}`}
              className="w-full h-64 object-cover rounded-xl shadow-md hover:scale-[1.03] hover:shadow-2xl transition-all duration-500 group-hover:-rotate-1"
            />
          </div>
        ))}
      </div>

      {/* === HIGHLIGHTS === */}
      {trek.highlights && (
        <div className="max-w-5xl mx-auto px-6 mt-20 detail-block">
          <h2 className="text-3xl font-ssBD text-gray-900 mb-6 text-center">
            Trek Highlights
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {trek.highlights.map((item, i) => (
              <div key={i} className="bg-gradient-to-r from-green/5 to-emerald-50 p-6 rounded-2xl shadow-sm hover:shadow-xl border border-green/20 hover:border-green/40 transition-all duration-300">
                <div className="w-2 h-2 bg-green rounded-full mb-4"></div>
                <p className="text-gray-900 font-ssLB leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* === ITINERARY === */}
      <div className="max-w-5xl mx-auto px-6 mt-20 detail-block">
        <h2 className="text-3xl font-ssBD text-gray-900 mb-10 text-center bg-gradient-to-r from-green to-greenH bg-clip-text text-transparent">
          Trek Itinerary
        </h2>

        <div className="relative border-l-4 border-green/60 pl-8">
          {trek.itinerary.map((item, i) => (
            <div
              key={i}
              className="relative mb-12 pl-4 before:content-[''] before:absolute before:w-5 before:h-5 before:bg-gradient-to-r before:from-green before:to-greenH before:rounded-full before:-left-[0.875rem] before:top-2 before:shadow-md before:ring-2 before:ring-green/30"
            >
              <div className="bg-white/80 backdrop-blur-sm border border-gray-100/50 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-400 border-green/10 hover:border-green/20">
                <h3 className="text-xl font-ssBD bg-gradient-to-r from-green to-greenH bg-clip-text text-transparent mb-4 pt-4 pl-4">
                  {item.day}
                </h3>
                <div className="p-6">
                  <h4 className="text-lg font-ssSBH text-gray-900 mb-4">{item.title}</h4>
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
          {trek.included && (
            <div className="bg-gradient-to-br from-green/5 via-white to-emerald-50 p-8 rounded-3xl shadow-xl border border-green/20">
              <h3 className="text-2xl font-ssBD bg-gradient-to-r from-green to-greenH bg-clip-text text-transparent mb-6">
                What's Included
              </h3>
              <div className="space-y-3">
                {trek.included.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-white/50 rounded-xl hover:bg-white hover:shadow-sm transition-all">
                    <div className="w-6 h-6 bg-green rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-white font-bold text-sm">✔</span>
                    </div>
                    <span className="font-ssLB text-gray-900 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {trek.excluded && (
            <div className="bg-gradient-to-br from-red/5 via-white to-rose-50 p-8 rounded-3xl shadow-xl border border-red/20">
              <h3 className="text-2xl font-ssBD bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-6">
                Not Included
              </h3>
              <div className="space-y-3">
                {trek.excluded.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-white/50 rounded-xl hover:bg-white hover:shadow-sm transition-all">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-white font-bold text-sm">✖</span>
                    </div>
                    <span className="font-ssLB text-gray-900 leading-relaxed">{item}</span>
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

      {/* === CTA SECTION === */}
      <div className="max-w-6xl mx-auto px-6 mt-20 mb-16 detail-block">
        <div className="bg-gradient-to-r from-green to-greenH p-12 rounded-3xl text-white text-center shadow-2xl">
          <h2 className="text-4xl font-ssBD mb-6 leading-tight">
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

      <Form itemName={trek.title} itemType="Trek" />
    </section>
  );
};

export default TrekDetails;
