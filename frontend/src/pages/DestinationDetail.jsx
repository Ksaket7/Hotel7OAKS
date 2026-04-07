import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { destinationsData } from "../data/destinationsData";

const DestinationDetail = () => {
  const { id } = useParams();
  const sectionRef = useRef(null);

  // ✅ STATE FOR READ MORE / LESS
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (placeId) => {
    setExpanded((prev) => ({
      ...prev,
      [placeId]: !prev[placeId],
    }));
  };

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
        style={{
          backgroundImage: `url(${state.image})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <h1 className="relative z-10 text-white text-4xl md:text-6xl font-ssBD">
          {state.title}
        </h1>
      </div>

      {/* INTRO */}
      <div className="max-w-5xl mx-auto px-6 mt-12 text-center">
        <p className="text-gray-600 text-lg">{state.shortDesc}</p>
      </div>

      {/* GRID */}
      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 md:px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10"
      >
        {state.places.map((place) => {
          const isExpanded = expanded[place.id];

          return (
            <div
              key={place.id}
              className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
            >
              {/* IMAGE */}
              <img
                src={
                  place.image ||
                  "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg"
                }
                alt={place.title}
                className="w-full h-[340px] object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

              {/* CONTENT */}
              <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
                
                {/* TITLE */}
                <div className="mb-2">
                  <h3 className="text-2xl font-ssBD leading-tight">
                    {place.title}
                  </h3>

                  <p className="text-sm text-white/90 line-clamp-2">
                    {place.shortDesc}
                  </p>
                </div>

                {/* DESCRIPTION */}
                <p
                  className={`text-xs text-white/85 mb-2 leading-relaxed ${
                    isExpanded ? "" : "line-clamp-2"
                  }`}
                >
                  {place.description}
                </p>

                {/* READ MORE / LESS */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleExpand(place.id);
                  }}
                  className="text-[11px] text-white underline mb-3 w-fit"
                >
                  {isExpanded ? "Show Less" : "Read More"}
                </button>

                {/* HIGHLIGHTS */}
                <div className="flex flex-wrap gap-2 mb-3">
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

              {/* BORDER GLOW */}
              <div className="absolute inset-0 border border-white/10 group-hover:border-white/30 rounded-3xl transition duration-300"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DestinationDetail;