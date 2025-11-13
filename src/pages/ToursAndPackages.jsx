import { useEffect, useRef, useState, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MapPin,
  Star,
  ArrowRight,
  Search,
  X,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import { toursData } from "../data/toursnpackages";

gsap.registerPlugin(ScrollTrigger);

const ToursAndPackages = () => {
  const sectionRef = useRef(null);

  // === states ===
  const [inputText, setInputText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [priceRange, setPriceRange] = useState("any");
  const [ratingMin, setRatingMin] = useState("any");
  const [locationsSelected, setLocationsSelected] = useState(["All"]);

  // Mobile collapsed filter toggle
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // simulate loading (local data) like Hotel page
  const [loading, setLoading] = useState(true);

  // === normalize rawPrice ===
  const toursWithRawPrice = useMemo(() => {
    return toursData.map((tour) => {
      let raw = tour.rawPrice;
      if (raw == null) {
        const digits = (tour.price || "").replace(/[^0-9]/g, "");
        raw = digits ? parseInt(digits, 10) : 0;
      }
      return { ...tour, rawPrice: raw };
    });
  }, []);

  const allLocations = useMemo(
    () => ["All", ...new Set(toursWithRawPrice.map((t) => t.location))],
    [toursWithRawPrice]
  );

  // simulate loading for local data (600ms)
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  // === filtering ===
  const filteredTours = useMemo(() => {
    let filtered = toursWithRawPrice;

    if (searchText.trim()) {
      const s = searchText.toLowerCase();
      filtered = filtered.filter(
        (t) =>
          t.title.toLowerCase().includes(s) ||
          t.location.toLowerCase().includes(s)
      );
    }

    // single selection via select (keeps same UX as original)
    if (!(locationsSelected.length === 1 && locationsSelected[0] === "All")) {
      filtered = filtered.filter((t) => locationsSelected.includes(t.location));
    }

    // price
    filtered = filtered.filter((t) => {
      const price = t.rawPrice ?? 0;
      switch (priceRange) {
        case "lt5k":
          return price < 5000;
        case "5to10":
          return price >= 5000 && price <= 10000;
        case "10to20":
          return price > 10000 && price <= 20000;
        case "gt20":
          return price > 20000;
        default:
          return true;
      }
    });

    // rating
    if (ratingMin !== "any") {
      filtered = filtered.filter((t) => (t.rating ?? 0) >= Number(ratingMin));
    }

    return filtered;
  }, [searchText, locationsSelected, priceRange, ratingMin, toursWithRawPrice]);

  // === sorting ===
  const sortedTours = useMemo(() => {
    const sorted = [...filteredTours];
    switch (sortBy) {
      case "price_low":
        sorted.sort((a, b) => (a.rawPrice ?? 0) - (b.rawPrice ?? 0));
        break;
      case "price_high":
        sorted.sort((a, b) => (b.rawPrice ?? 0) - (a.rawPrice ?? 0));
        break;
      case "rating":
        sorted.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
        break;
      default:
        break;
    }
    return sorted;
  }, [filteredTours, sortBy]);

  // === GSAP animation for list items ===
  useEffect(() => {
    if (loading) return;
    const cards = sectionRef.current?.children || [];
    gsap.fromTo(
      cards,
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.07, duration: 0.45, ease: "power3.out" }
    );
    ScrollTrigger.refresh();
  }, [sortedTours, loading]);

  // === Mobile filter dropdown animation ref ===
  const mobileFilterRef = useRef(null);
  useEffect(() => {
    if (!mobileFilterRef.current) return;
    if (mobileFiltersOpen) {
      gsap.to(mobileFilterRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.32,
        ease: "power2.out",
      });
    } else {
      gsap.to(mobileFilterRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.28,
        ease: "power2.inOut",
      });
    }
  }, [mobileFiltersOpen]);

  // === handlers ===
  const applySearch = () => setSearchText(inputText);

  const resetFilters = () => {
    setInputText("");
    setSearchText("");
    setSortBy("");
    setPriceRange("any");
    setRatingMin("any");
    setLocationsSelected(["All"]);
  };

  const toggleLocation = (loc) => {
    if (loc === "All") {
      setLocationsSelected(["All"]);
      return;
    }
    let newSet = [...locationsSelected];
    if (newSet.includes("All")) newSet = [];
    if (newSet.includes(loc)) newSet = newSet.filter((l) => l !== loc);
    else newSet.push(loc);
    if (newSet.length === 0) newSet = ["All"];
    setLocationsSelected(newSet);
  };

  const removeFilter = (type, value) => {
    switch (type) {
      case "search":
        setSearchText("");
        setInputText("");
        break;
      case "location":
        setLocationsSelected((prev) => {
          const next = prev.filter((l) => l !== value);
          return next.length ? next : ["All"];
        });
        break;
      case "price":
        setPriceRange("any");
        break;
      case "rating":
        setRatingMin("any");
        break;
      case "sort":
        setSortBy("");
        break;
      default:
        break;
    }
  };

  const anyFilterActive =
    searchText ||
    !(locationsSelected.length === 1 && locationsSelected[0] === "All") ||
    priceRange !== "any" ||
    ratingMin !== "any" ||
    sortBy;

  const priceLabels = {
    lt5k: "Below ₹5,000",
    "5to10": "₹5,000 – ₹10,000",
    "10to20": "₹10,000 – ₹20,000",
    gt20: "Above ₹20,000",
  };
  const ratingLabels = { 4: "⭐ 4.0+", 4.5: "⭐ 4.5+" };

  return (
    <section className="min-h-screen bg-white">
      {/* HERO */}
      <div className="relative w-full h-[70vh] flex items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-6 max-w-4xl mx-auto">
          <span className="inline-block px-5 py-1.5 mb-4 rounded-full text-sm font-medium text-white bg-white/10 border border-white/20 backdrop-blur-sm">
            Discover Your Next Journey
          </span>
          <h1 className="text-5xl md:text-7xl font-ssBD text-white mb-4 leading-tight">
            Tours & Travel Packages
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto font-ssLB leading-relaxed">
            Handpicked tours crafted for explorers, spiritual seekers, and
            adventure lovers.
          </p>
        </div>
      </div>

      {/* FILTERS - centered and BELOW hero, sticky on scroll (matches Hotel page) */}
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 mt-8">
        <div className="sticky top-4 z-40">
          <div className="bg-white rounded-2xl p-3 md:p-4 shadow-sm border border-gray-200 transition-shadow duration-200">
            {/* Top row: shared input + mobile toggle / desktop buttons */}
            <div className="flex items-center gap-3">
              <div className="relative flex-1">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search destinations or tours..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      applySearch();
                      setMobileFiltersOpen(false);
                    }
                  }}
                  className="w-full pl-10 pr-12 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green"
                />
              </div>

              {/* mobile filters toggle */}
              <button
                onClick={() => setMobileFiltersOpen((s) => !s)}
                className="md:hidden flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 bg-green shadow-sm"
                aria-expanded={mobileFiltersOpen}
                aria-controls="mobile-filters-panel"
              >
                <span className="text-sm font-ssLB">Filters</span>
                {mobileFiltersOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              {/* desktop Search + Clear */}
              <div className="hidden md:flex items-center gap-3">
                <button
                  onClick={applySearch}
                  className="px-5 py-2.5 bg-green text-white rounded-xl font-ssLB"
                >
                  Search
                </button>
                {anyFilterActive && (
                  <button
                    onClick={resetFilters}
                    className="px-4 py-2 bg-gray-200 text-gray-900 rounded-xl font-ssLB flex items-center gap-2"
                  >
                    <X size={16} /> Clear
                  </button>
                )}
              </div>
            </div>

            {/* MOBILE collapsible filters */}
            <div
              id="mobile-filters-panel"
              ref={mobileFilterRef}
              className="md:hidden overflow-hidden mt-3"
              style={{ height: 0, opacity: 0 }}
            >
              <div className="p-3 bg-white rounded-xl border border-gray-100 space-y-3 shadow-sm">
                {/* Location */}
                <select
                  value={locationsSelected.length === 1 ? locationsSelected[0] : ""}
                  onChange={(e) =>
                    e.target.value === "All"
                      ? setLocationsSelected(["All"])
                      : setLocationsSelected([e.target.value])
                  }
                  className="w-full px-3 py-2 rounded-xl border border-gray-500"
                >
                  {allLocations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>

                {/* Price */}
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-500"
                >
                  <option value="any">Any Price</option>
                  <option value="lt5k">Below ₹5,000</option>
                  <option value="5to10">₹5,000 – ₹10,000</option>
                  <option value="10to20">₹10,000 – ₹20,000</option>
                  <option value="gt20">Above ₹20,000</option>
                </select>

                {/* Rating */}
                <select
                  value={ratingMin}
                  onChange={(e) => setRatingMin(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-500"
                >
                  <option value="any">Any Rating</option>
                  <option value="4">⭐ 4.0+</option>
                  <option value="4.5">⭐ 4.5+</option>
                </select>

                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-500"
                >
                  <option value="">Recommended</option>
                  <option value="price_low">Price: Low → High</option>
                  <option value="price_high">Price: High → Low</option>
                  <option value="rating">Rating: High → Low</option>
                </select>

                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      applySearch();
                      setMobileFiltersOpen(false);
                    }}
                    className="flex-1 px-3 py-2 bg-green text-white rounded-xl font-ssLB"
                  >
                    Apply
                  </button>
                  <button onClick={resetFilters} className="px-3 py-2 bg-green rounded-xl font-ssLB">
                    Clear
                  </button>
                </div>
              </div>
            </div>

            {/* DESKTOP filter row */}
            <div className="hidden md:block mt-4">
              <div className="grid grid-cols-4 gap-3 items-center">
                <select
                  value={locationsSelected.length === 1 ? locationsSelected[0] : ""}
                  onChange={(e) =>
                    e.target.value === "All"
                      ? setLocationsSelected(["All"])
                      : setLocationsSelected([e.target.value])
                  }
                  className="px-3 py-2 rounded-xl border border-gray-300"
                >
                  {allLocations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>

                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="px-3 py-2 rounded-xl border border-gray-300"
                >
                  <option value="any">Any Price</option>
                  <option value="lt5k">Below ₹5,000</option>
                  <option value="5to10">₹5,000 – ₹10,000</option>
                  <option value="10to20">₹10,000 – ₹20,000</option>
                  <option value="gt20">Above ₹20,000</option>
                </select>

                <select
                  value={ratingMin}
                  onChange={(e) => setRatingMin(e.target.value)}
                  className="px-3 py-2 rounded-xl border border-gray-300"
                >
                  <option value="any">Any Rating</option>
                  <option value="4">⭐ 4.0+</option>
                  <option value="4.5">⭐ 4.5+</option>
                </select>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 rounded-xl border border-gray-300"
                >
                  <option value="">Recommended</option>
                  <option value="price_low">Price: Low → High</option>
                  <option value="price_high">Price: High → Low</option>
                  <option value="rating">Rating: High → Low</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* ACTIVE FILTER CHIPS */}
        {anyFilterActive && (
          <div className="flex flex-wrap items-center gap-2 mt-4 px-1 md:px-0">
            {searchText && (
              <Chip text={searchText} onRemove={() => removeFilter("search")} />
            )}

            {locationsSelected
              .filter((l) => l !== "All")
              .map((loc) => (
                <Chip
                  key={loc}
                  text={loc}
                  icon={<MapPin size={14} />}
                  onRemove={() => removeFilter("location", loc)}
                />
              ))}

            {priceRange !== "any" && (
              <Chip text={priceLabels[priceRange]} onRemove={() => removeFilter("price")} />
            )}

            {ratingMin !== "any" && (
              <Chip text={ratingLabels[ratingMin]} onRemove={() => removeFilter("rating")} />
            )}

            {sortBy && (
              <Chip
                text={
                  sortBy === "price_low"
                    ? "Price: Low → High"
                    : sortBy === "price_high"
                    ? "Price: High → Low"
                    : "Rating: High → Low"
                }
                onRemove={() => removeFilter("sort")}
              />
            )}
          </div>
        )}
      </div>

      {/* tours grid */}
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-16">
        {searchText && (
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            {sortedTours.length} {sortedTours.length === 1 ? "Package" : "Packages"} Found
          </h2>
        )}

        <div ref={sectionRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="space-y-3 animate-pulse">
                  <div className="h-44 rounded-2xl bg-gray-200" />
                  <div className="h-4 rounded bg-gray-200 w-3/4" />
                  <div className="h-3 rounded bg-gray-200 w-1/2" />
                  <div className="h-10 rounded-md bg-gray-200" />
                </div>
              ))
            : sortedTours.map((tour) => (
                <Link key={tour.id} to={`/tours/${tour.id}`} className="group">
                  <div className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="relative h-60 w-full rounded-t-3xl overflow-hidden">
                      <img
                        src={tour.image}
                        alt={tour.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <span className="absolute top-3 left-3 px-3 py-1 bg-white rounded-full text-xs font-semibold shadow">
                        {tour.category}
                      </span>
                      {tour.featured && (
                        <span className="absolute top-3 right-3 px-3 py-1 bg-green text-white rounded-full text-xs flex items-center gap-1 shadow">
                          <Star size={12} fill="currentColor" /> Featured
                        </span>
                      )}
                    </div>

                    <div className="p-5">
                      <div className="flex items-center justify-between">
                        <h3 className="font-ssBD text-lg text-gray-900">{tour.title}</h3>
                        <div className="text-right">
                          <p className="text-xs text-gray-500">Start From</p>
                          <p className="text-green font-bold text-xl">{tour.price}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-1 mb-2 text-sm text-gray-600">
                        <p className="flex items-center gap-1">
                          <MapPin size={14} /> {tour.location}
                        </p>
                        <p className="flex items-center gap-1">
                          <Star size={14} className="text-yellow-400" fill="currentColor" /> {tour.rating}
                        </p>
                      </div>

                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4">
                        {tour.shortDesc || "A beautiful, hand-curated travel experience awaits you."}
                      </p>

                      <Link to={`${tour.id}`}>
                        <button className="w-full py-3 bg-green text-white rounded-full font-semibold hover:bg-greenH transition-all flex items-center justify-center gap-2">
                          Explore <ArrowRight size={18} />
                        </button>
                      </Link>
                    </div>
                  </div>
                </Link>
              ))}
        </div>

        {sortedTours.length === 0 && !loading && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
              <Search size={32} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No tours found</h3>
            <p className="text-gray-500">Try a different search term or filters.</p>
          </div>
        )}
      </div>
    </section>
  );
};

/* Small reusable Chip component */
const Chip = ({ text, icon, onRemove }) => (
  <button
    onClick={onRemove}
    className="bg-green/10 text-green font-medium px-3 py-1.5 rounded-full flex items-center gap-2 text-sm"
  >
    {icon}
    <span className="truncate max-w-[10rem]">{text}</span>
    <X size={14} />
  </button>
);

export default ToursAndPackages;
