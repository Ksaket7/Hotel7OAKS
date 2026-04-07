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
    []
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

        const matchState = state.title.toLowerCase().includes(s);

        const matchPlaces = state.places.some((p) =>
          p.title.toLowerCase().includes(s)
        );

        return matchState || matchPlaces;
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
      { y: 0, opacity: 1, stagger: 0.15, duration: 0.8 }
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
            Discover breathtaking places across mountains, deserts, and coasts.
          </p>
        </div>
      </div>

      {/* SEARCH + FILTER */}
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

          {/* FILTERS */}
          <div
            className={`${
              mobileFiltersOpen ? "grid" : "hidden"
            } md:grid grid-cols-1 md:grid-cols-2 gap-3 mt-4`}
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

            {anyFilterActive && (
              <button
                onClick={resetFilters}
                className="md:hidden col-span-full px-4 py-3 bg-green text-white rounded-xl"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* STATE CARDS */}
      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col gap-20">
          {filteredStates.map((state, index) => (
            <div
              key={state.id}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* IMAGE */}
              <div className="w-full md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-lg border group">
                  <img
                    src={state.image}
                    alt={state.title}
                    className="w-full h-72 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div
                className={`w-full md:w-1/2 space-y-4 ${
                  index % 2 !== 0 ? "md:pr-10" : "md:pl-10"
                }`}
              >
                <h3 className="text-3xl font-ssBD text-gray-900">
                  {state.title}
                </h3>

                <p className="text-gray-600">
                  {state.shortDesc}
                </p>

                <p className="text-sm text-gray-500">
                  {state.places.length} destinations to explore
                </p>

                <Link
                  to={`/destinations/${state.id}`}
                  className="inline-block px-6 py-3 bg-green text-white rounded-full text-sm"
                >
                  Explore Places →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;