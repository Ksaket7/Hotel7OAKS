import { useEffect, useRef, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, X, ChevronDown, ChevronUp } from "lucide-react";
import { destinationsData } from "../data/destinationsData";

gsap.registerPlugin(ScrollTrigger);

const Destinations = () => {
  const sectionRef = useRef(null);

  const [searchText, setSearchText] = useState("");
  const [selectedState, setSelectedState] = useState("all");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const allStates = useMemo(
    () => ["all", ...destinationsData.map((s) => s.id)],
    [],
  );

  const anyFilterActive = searchText || selectedState !== "all";

  const resetFilters = () => {
    setSearchText("");
    setSelectedState("all");
  };

  /* FILTER */
  const filteredStates = useMemo(() => {
    return destinationsData.filter((state) => {
      if (selectedState !== "all" && state.id !== selectedState) return false;

      if (searchText.trim()) {
        const s = searchText.toLowerCase();

        return (
          state.title.toLowerCase().includes(s) ||
          state.places.some((p) => p.title.toLowerCase().includes(s))
        );
      }

      return true;
    });
  }, [searchText, selectedState]);

  /* ANIMATION */
  useEffect(() => {
    const items = sectionRef.current?.children || [];

    gsap.fromTo(
      items,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.8 },
    );
  }, [filteredStates]);

  return (
    <section className="bg-white overflow-hidden">
      {/* HERO */}
      <div
        className="relative w-full h-[70vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 px-6 max-w-3xl">
          <span className="inline-block px-5 py-1.5 mb-4 rounded-full text-sm text-white bg-white/10 border border-white/20 backdrop-blur-sm">
            Explore India
          </span>

          <h1 className="text-5xl md:text-7xl font-ssBD text-white mb-4">
            Destinations
          </h1>

          <p className="text-white/85 text-base md:text-lg max-w-xl mx-auto">
            Discover breathtaking places across India.
          </p>
        </div>
      </div>

      {/* SEARCH */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 mt-10">
        <div className="sticky top-4 z-40 bg-white rounded-2xl border shadow-sm p-4">
          <div className="flex gap-3 items-center">
            <div className="relative flex-1">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />

              <input
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search destinations..."
                className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-green"
              />
            </div>

            <button
              onClick={() => setMobileFiltersOpen((s) => !s)}
              className="md:hidden px-4 py-3 border rounded-xl flex items-center gap-2"
            >
              Filters
              {mobileFiltersOpen ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </button>

            {anyFilterActive && (
              <button
                onClick={resetFilters}
                className="hidden md:flex px-4 py-3 bg-green text-white rounded-xl items-center gap-2"
              >
                <X size={16} />
                Clear
              </button>
            )}
          </div>

          {/* FILTER */}
          <div
            className={`${
              mobileFiltersOpen ? "grid" : "hidden"
            } md:grid grid-cols-1 mt-4`}
          >
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="border rounded-xl px-3 py-3"
            >
              {allStates.map((state) => (
                <option key={state} value={state}>
                  {state === "all"
                    ? "All States"
                    : state.replace("-", " ").toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* DESTINATION GRID */}
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredStates.map((state) => (
            <div
              key={state.id}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* IMAGE */}
              <img
                src={state.image}
                alt={state.title}
                className="w-full h-[320px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* CONTENT */}
              <div className="absolute inset-0 p-5 flex  justify-between items-end text-white">
                {/* TEXT BLOCK */}
                <div className="mb-4 space-y-2">
                  <h3 className="text-2xl font-ssBD leading-tight">
                    {state.title}
                  </h3>

                  <p className="text-sm text-white/90 line-clamp-2 font-ssBookD">
                    {state.shortDesc}
                  </p>

                  {/* META BADGE */}
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 text-xs rounded-full bg-white/20 backdrop-blur-sm border border-white/20">
                      {state.places.length} Places
                    </span>
                  </div>
                </div>

                {/* BUTTON */}
                <div className="flex justify-end">
                  <Link
                    to={`/destinations/${state.id}`}
                    className="px-4 py-2 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-200 transition"
                  >
                    Explore →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
