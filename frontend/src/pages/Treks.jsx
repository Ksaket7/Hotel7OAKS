import { useEffect, useRef, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, X, ChevronDown, ChevronUp, Mountain } from "lucide-react";
import { treksData } from "../data/treks/treks";

gsap.registerPlugin(ScrollTrigger);

const Treks = () => {
  const sectionRef = useRef(null);

  const [searchText, setSearchText] = useState("");
  const [difficulty, setDifficulty] = useState("any");
  const [duration, setDuration] = useState("any");
  const [sortBy, setSortBy] = useState("");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const anyFilterActive =
    searchText || difficulty !== "any" || duration !== "any" || sortBy;

  const resetFilters = () => {
    setSearchText("");
    setDifficulty("any");
    setDuration("any");
    setSortBy("");
  };

  /* FILTERING */
  const filteredTreks = useMemo(() => {
    let filtered = [...treksData];

    if (searchText.trim()) {
      const s = searchText.toLowerCase();
      filtered = filtered.filter((t) => t.title.toLowerCase().includes(s));
    }

    if (difficulty !== "any") {
      filtered = filtered.filter((t) =>
        t.difficulty.toLowerCase().includes(difficulty.toLowerCase()),
      );
    }

    if (duration !== "any") {
      filtered = filtered.filter((t) => {
        const days = parseInt(t.days);
        if (duration === "short") return days <= 4;
        if (duration === "medium") return days >= 5 && days <= 8;
        if (duration === "long") return days > 8;
        return true;
      });
    }

    if (sortBy === "price_low") {
      filtered.sort((a, b) => {
        const priceA = Number((a.price || "").replace(/[^0-9]/g, ""));
        const priceB = Number((b.price || "").replace(/[^0-9]/g, ""));
        return priceA - priceB;
      });
    }

    if (sortBy === "price_high") {
      filtered.sort((a, b) => {
        const priceA = Number((a.price || "").replace(/[^0-9]/g, ""));
        const priceB = Number((b.price || "").replace(/[^0-9]/g, ""));
        return priceB - priceA;
      });
    }

    return filtered;
  }, [searchText, difficulty, duration, sortBy]);

  useEffect(() => {
    const items = sectionRef.current?.children || [];
    gsap.fromTo(
      items,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out" },
    );
  }, [filteredTreks]);

  return (
    <section className="bg-white overflow-hidden">
      {/* HERO */}
      <div
        className="relative w-full h-[70vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/32284790/pexels-photo-32284790.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 px-6 max-w-3xl">
          <span className="inline-block px-5 py-1.5 mb-4 rounded-full text-sm text-white bg-white/10 border border-white/20 backdrop-blur-sm font-ssBookD tracking-wider">
            Adventure Awaits
          </span>

          <h1 className="text-5xl md:text-7xl font-ssBD text-white mb-4">
            Treks of Himalayas
          </h1>

          <p className="text-white/85 font-ssLB text-base md:text-lg max-w-xl mx-auto">
            From snow peaks to spiritual trails — experience handpicked
            Himalayan treks designed for every adventurer.
          </p>
        </div>
      </div>

      {/* SEARCH + FILTERS */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 mt-10 font-ssSBH">
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
                placeholder="Search treks..."
                className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-green outline-none"
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
                className="hidden md:flex px-4 py-3 bg-green hover:bg-greenH rounded-xl items-center gap-2"
              >
                <X size={16} />
                Clear
              </button>
            )}
          </div>

          {/* FILTERS */}
          <div
            className={`${mobileFiltersOpen ? "grid" : "hidden"} md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-4 pt-4 border-t`}
          >
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="border rounded-xl px-3 py-3"
            >
              <option value="any">Any Difficulty</option>
              <option value="Easy">Easy</option>
              <option value="Moderate">Moderate</option>
              <option value="Difficult">Difficult</option>
            </select>

            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="border rounded-xl px-3 py-3"
            >
              <option value="any">Any Duration</option>
              <option value="short">1–4 Days</option>
              <option value="medium">5–8 Days</option>
              <option value="long">9+ Days</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border rounded-xl px-3 py-3"
            >
              <option value="">Recommended</option>
              <option value="price_low">Price Low → High</option>
              <option value="price_high">Price High → Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* TREK GRID */}
      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTreks.map((trek) => (
            <div
              key={trek.id}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* IMAGE & BADGES */}
              <div className="relative h-[280px] overflow-hidden">
                <img
                  src={trek.images[0]}
                  alt={trek.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle gradient for badge readability */}
                <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black/40 to-transparent" />

                {/* TAGS (Using your exact color logic and styling) */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <div className="flex gap-2">
                    <span className="px-3 py-1 text-xs rounded-full bg-white/90 text-black font-semibold shadow-sm">
                      {trek.days}
                    </span>
                    <span
                      className={`px-3 py-1 text-xs rounded-full text-white font-semibold shadow-sm ${
                        trek.difficulty.includes("Easy")
                          ? "bg-green"
                          : trek.difficulty.includes("Moderate")
                            ? "bg-yellow-500"
                            : "bg-red-500"
                      }`}
                    >
                      {trek.difficulty}
                    </span>
                  </div>

                  {/* ALTITUDE TAG */}
                  {trek.altitude && (
                    <span className="px-3 py-1 text-xs rounded-full bg-black/70 backdrop-blur-sm text-white font-semibold flex items-center gap-1 shadow-sm">
                      <Mountain size={12} />
                      {trek.altitude}
                    </span>
                  )}
                </div>
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <div className="flex gap-2">
                    <span className="px-3 py-1 text-xs rounded-full bg-white/90 backdrop-blur-sm text-zinc-900 font-bold shadow-sm">
                      {trek.days}
                    </span>
                    <span
                      className={`px-3 py-1 text-xs rounded-full font-bold shadow-sm ${
                        trek.difficulty.includes("Easy")
                          ? "bg-emerald-100 text-emerald-800"
                          : trek.difficulty.includes("Moderate")
                            ? "bg-amber-100 text-amber-800"
                            : "bg-rose-100 text-rose-800"
                      }`}
                    >
                      {trek.difficulty}
                    </span>
                  </div>

                  {trek.altitude && (
                    <span className="px-3 py-1 text-xs rounded-full bg-zinc-900/80 backdrop-blur-sm text-white font-semibold flex items-center gap-1 shadow-sm">
                      <Mountain size={12} />
                      {trek.altitude}
                    </span>
                  )}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-grow">
                {/* TITLE (Using your custom font) */}
                <h3 className="text-xl font-ssBD text-gray-900 mb-2">
                  {trek.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-sm text-gray-600 line-clamp-2 mb-6 flex-grow">
                  {trek.intro || trek.desc}
                </p>

                {/* FOOTER: PRICE & BUTTON */}
                <div className="flex justify-between items-center pt-5 border-t border-gray-100 mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[11px] text-gray-400 uppercase tracking-wider font-ssSBH">
                      Starting From
                    </span>
                    <span className="text-xl font-ssBD text-green">
                      {trek.price}
                    </span>
                  </div>

                  <Link
                    to={`/treks/${trek.id}`}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-green text-white hover:bg-greenH transition-colors shadow-sm"
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

export default Treks;
