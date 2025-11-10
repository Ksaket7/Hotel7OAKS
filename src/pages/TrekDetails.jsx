import { useParams, Link } from "react-router-dom";
import { MapPin, Clock, Mountain } from "lucide-react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { treksData } from "../data/treks";
import Form from "../components/Form";

gsap.registerPlugin(ScrollTrigger);

const TrekDetails = () => {
  const { id } = useParams();
  const trek = treksData.find((t) => t.id === id);

  useEffect(() => {
    gsap.fromTo(
      ".detail-block",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
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
      {/* === HERO IMAGE === */}
      <div
        className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${trek.images[0]})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-5"></div>
        <h1 className="relative z-10 text-white text-4xl md:text-6xl font-ssBD text-center px-4 drop-shadow-lg">
          {trek.title}
        </h1>
      </div>

      {/* === INFO === */}
      <div className="max-w-6xl mx-auto px-6 mt-14">
        <p className="text-green text-sm font-ssBookD bg-green/10 px-3 py-1 rounded-full  tracking-wide w-fit detail-block">
          {trek.tag}
        </p>

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

      {/* === IMAGE GALLERY === */}
      <div className="max-w-6xl mx-auto px-6 mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 detail-block">
        {trek.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${trek.title} ${idx + 1}`}
            className="w-full h-64 object-cover rounded-xl shadow-md hover:scale-[1.03] transition-transform duration-500 ease-out"
          />
        ))}
      </div>

      {/* === ADVENTURE ITINERARY (TIMELINE STYLE) === */}
      <div className="max-w-5xl mx-auto px-6 mt-20 detail-block">
        <h2 className="text-3xl font-ssBD text-gray-900 mb-10 text-center">
          Trek Itinerary
        </h2>

        <div className="relative border-l-4 border-green/60 pl-8">
          {trek.itinerary.map((item, i) => (
            <div
              key={i}
              className="relative mb-10 pl-4 before:content-[''] before:absolute before:w-4 before:h-4 before:bg-green/60 before:rounded-full before:-left-[0.75rem] before:top-2"
            >
              <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-ssBD text-green mb-2">
                  {item.day} — {item.title}
                </h3>
                <ul className="list-disc pl-6 text-gray-900 font-ssLB text-sm leading-relaxed space-y-1">
                  {item.details.map((d, idx) => (
                    <li key={idx}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === CTA + FORM === */}
      <div className="max-w-6xl mx-auto px-6 mt-16 text-center detail-block">
        <Link
          to="/treks"
          className="inline-block bg-green hover:bg-greenH text-white font-ssBookD px-8 py-3 rounded-full transition-all shadow-lg"
        >
          ← Back to Treks
        </Link>
      </div>

      <Form itemName={trek.title} itemType="Trek" />
    </section>
  );
};

export default TrekDetails;
