import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { destinationsData } from "../data/destinationsData";

const DestinationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  const [selectedPlace, setSelectedPlace] = useState(null);

  const state = destinationsData.find(
    (s) => s.id.toLowerCase() === id?.toLowerCase()
  );

  useEffect(() => {
    const items = sectionRef.current?.children || [];

    gsap.fromTo(
      items,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.7 }
    );
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedPlace(null);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedPlace ? "hidden" : "auto";
  }, [selectedPlace]);

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Destination not found</p>
      </div>
    );
  }

  return (
    <section className="bg-white">
      {/* HERO */}
      <div
        className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${state.image})` }}
      >
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        <h1 className="relative z-10 text-white text-4xl md:text-6xl font-ssBD">
          {state.title}
        </h1>
      </div>

      {/* INTRO */}
      <div className="max-w-5xl mx-auto px-6 mt-12 text-center">
        <p className="text-gray-600 text-lg font-ssBookD">
          {state.shortDesc}
        </p>
      </div>

      {/* GRID */}
      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 md:px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10"
      >
        {state.places.map((place) => (
          <div
            key={place.id}
            className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
          >
            <img
              src={
                place.image ||
                "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg"
              }
              alt={place.title}
              className="w-full h-[340px] object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none" />

            <div className="absolute inset-0 p-5 flex flex-col justify-end text-white z-10">
              <h3 className="text-2xl font-ssBD">{place.title}</h3>

              <p className="text-sm text-white/90 line-clamp-2 font-ssBookD">
                {place.shortDesc}
              </p>

              <p className="text-xs text-white/85 mb-3 line-clamp-2 font-ssLB">
                {place.description}
              </p>

              {/* 🔥 NEW DESIGNED BUTTON */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPlace(place);
                }}
                className="mt-2 w-fit flex items-center gap-2 px-4 py-1.5 text-[12px] rounded-full 
                           bg-green backdrop-blur-md border border-white/30 
                           hover:bg-greenH transition-all duration-300 
                           hover:scale-105 active:scale-95"
              >
                <span>Explore</span>
                <span className="text-xs">→</span>
              </button>

              {/* HIGHLIGHTS */}
              <div className="flex flex-wrap gap-2 mt-3">
                {place.highlights?.map((h, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-[11px] rounded-full bg-white/20 backdrop-blur-sm border border-white/20"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>

            <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedPlace && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setSelectedPlace(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl max-h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-fadeIn"
          >
            <div className="relative">
              <img
                src={
                  selectedPlace.image ||
                  "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg"
                }
                alt={selectedPlace.title}
                className="w-full h-[220px] object-cover"
              />

              <button
                onClick={() => setSelectedPlace(null)}
                className="absolute top-3 right-3 bg-black/60 text-white px-3 py-1 rounded-full text-sm"
              >
                ✕
              </button>
            </div>

            <div className="p-6 overflow-y-auto">
              <h2 className="text-2xl font-ssBD mb-1">
                {selectedPlace.title}
              </h2>

              <p className="text-gray-500 text-sm mb-4 font-ssBookD">
                {selectedPlace.shortDesc}
              </p>

              <p className="text-gray-700 text-sm leading-relaxed mb-6 font-ssLB">
                {selectedPlace.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedPlace.highlights?.map((h, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-gray-100 border"
                  >
                    {h}
                  </span>
                ))}
              </div>

              <button
                onClick={() =>
                  navigate("/contact", {
                    state: { place: selectedPlace.title },
                  })
                }
                className="w-full bg-black text-white py-3 rounded-xl text-sm hover:bg-gray-800 transition"
              >
                Plan Trip →
              </button>
            </div>
          </div>
        </div>
      )}

      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 0.25s ease;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px) scale(0.98);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `}
      </style>
    </section>
  );
};

export default DestinationDetail;