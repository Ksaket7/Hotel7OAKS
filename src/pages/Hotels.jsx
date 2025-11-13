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
import { hotelsData } from "../data/hotels";

gsap.registerPlugin(ScrollTrigger);

const Hotel = () => {
  const sectionRef = useRef(null);

  // === STATES ===
  const [inputText, setInputText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [priceRange, setPriceRange] = useState("any");
  const [ratingMin, setRatingMin] = useState("any");
  const [locationsSelected, setLocationsSelected] = useState(["All"]);

  // Mobile filters toggle
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Loading state (simulate for local data)
  const [loading, setLoading] = useState(true);

  // === Normalize price ===
  const hotelsWithRawPrice = useMemo(() => {
    return hotelsData.map((hotel) => {
      let raw = hotel.rawPrice;
      if (raw == null) {
        const digits = (hotel.price || "").replace(/[^0-9]/g, "");
        raw = digits ? parseInt(digits, 10) : 0;
      }
      return { ...hotel, rawPrice: raw };
    });
  }, []);

  // === Unique locations ===
  const allLocations = useMemo(
    () => ["All", ...new Set(hotelsWithRawPrice.map((h) => h.location))],
    [hotelsWithRawPrice]
  );

  // === Simulate loading for local data (600ms) ===
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600); // change delay if you want
    return () => clearTimeout(t);
  }, []);

  // === Filtering ===
  const filteredHotels = useMemo(() => {
    let filtered = hotelsWithRawPrice;

    if (searchText.trim()) {
      const s = searchText.toLowerCase();
      filtered = filtered.filter(
        (h) =>
          h.name.toLowerCase().includes(s) ||
          h.location.toLowerCase().includes(s)
      );
    }

    if (!(locationsSelected.length === 1 && locationsSelected[0] === "All")) {
      filtered = filtered.filter((h) =>
        locationsSelected.includes(h.location)
      );
    }

    filtered = filtered.filter((h) => {
      const price = h.rawPrice ?? 0;
      switch (priceRange) {
        case "lt2k":
          return price < 2000;
        case "2to5":
          return price >= 2000 && price <= 5000;
        case "5to10":
          return price > 5000 && price <= 10000;
        case "gt10":
          return price > 10000;
        default:
          return true;
      }
    });

    if (ratingMin !== "any") {
      filtered = filtered.filter((h) => (h.rating ?? 0) >= Number(ratingMin));
    }

    return filtered;
  }, [searchText, locationsSelected, priceRange, ratingMin, hotelsWithRawPrice]);

  // === Sorting ===
  const sortedHotels = useMemo(() => {
    const sorted = [...filteredHotels];
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
  }, [filteredHotels, sortBy]);

  // === Animations for cards ===
  useEffect(() => {
    if (loading) return;
    const cards = sectionRef.current?.children || [];
    gsap.fromTo(
      cards,
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.07, duration: 0.45, ease: "power3.out" }
    );
    ScrollTrigger.refresh();
  }, [sortedHotels, loading]);

  // === Mobile filter dropdown animation ===
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

  // === Handlers ===
  const applySearch = () => setSearchText(inputText);

  const resetFilters = () => {
    setInputText("");
    setSearchText("");
    setSortBy("");
    setPriceRange("any");
    setRatingMin("any");
    setLocationsSelected(["All"]);
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
    lt2k: "Below ₹2,000",
    "2to5": "₹2,000 – ₹5,000",
    "5to10": "₹5,000 – ₹10,000",
    gt10: "Above ₹10,000",
  };
  const ratingLabels = { 4: "⭐ 4.0+", 4.5: "⭐ 4.5+" };

  return (
    <section className="min-h-screen bg-white">

      {/* HERO */}
      <div className="relative w-full h-[60vh] flex items-center justify-center text-center bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-6 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-3 rounded-full text-sm text-white bg-white/10 border border-white/20 backdrop-blur-sm">
            Find Your Perfect Stay
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-3 leading-tight">
            Hotels & Mountain Stays
          </h1>
          <p className="text-white/90 text-base md:text-lg max-w-xl mx-auto">
            Handpicked hotels offering comfort, luxury, and breathtaking
            landscapes across Uttarakhand.
          </p>
        </div>
      </div>

      {/* FILTERS - centered and BELOW hero, sticky on scroll */}
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 mt-8">

        {/* Sticky wrapper: becomes sticky when scrolled */}
        <div className="sticky top-4 z-40">
          <div
            className="bg-white rounded-2xl p-3 md:p-4 shadow-sm border border-gray-200 transition-shadow duration-200"
            // Add extra shadow when page is scrolled — via sticky state using CSS : not easily detectable here,
            // but we still rely on natural sticky appearance. If you'd like, you can toggle a class on scroll to increase shadow.
          >
            {/* TOP ROW: mobile search + toggle OR desktop search + buttons */}
            <div className="flex items-center gap-3">

              {/* Input (shared) */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search hotels or locations..."
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

              {/* MOBILE: Filters toggle */}
              <button
                onClick={() => setMobileFiltersOpen((s) => !s)}
                className="md:hidden flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 bg-green shadow-sm"
                aria-expanded={mobileFiltersOpen}
              >
                <span className="text-md font-ssLB">Filters</span>
                {mobileFiltersOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              {/* DESKTOP: Search & Clear */}
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

            {/* MOBILE COLLAPSIBLE FILTERS */}
            <div
              ref={mobileFilterRef}
              className="md:hidden overflow-hidden mt-3"
              style={{ height: 0, opacity: 0 }}
            >
              <div className="p-3 bg-white rounded-xl border border-gray-100 space-y-3 shadow-sm">

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
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>

                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-500"
                >
                  <option value="any">Any Price</option>
                  <option value="lt2k">Below ₹2,000</option>
                  <option value="2to5">₹2,000 – ₹5,000</option>
                  <option value="5to10">₹5,000 – ₹10,000</option>
                  <option value="gt10">Above ₹10,000</option>
                </select>

                <select
                  value={ratingMin}
                  onChange={(e) => setRatingMin(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-500"
                >
                  <option value="any">Any Rating</option>
                  <option value="4">⭐ 4.0+</option>
                  <option value="4.5">⭐ 4.5+</option>
                </select>

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
                  <button
                    onClick={resetFilters}
                    className="px-3 py-2 bg-green rounded-xl font-ssLB"
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>

            {/* DESKTOP FILTER ROW */}
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
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>

                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="px-3 py-2 rounded-xl border border-gray-300"
                >
                  <option value="any">Any Price</option>
                  <option value="lt2k">Below ₹2,000</option>
                  <option value="2to5">₹2,000 – ₹5,000</option>
                  <option value="5to10">₹5,000 – ₹10,000</option>
                  <option value="gt10">Above ₹10,000</option>
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

      {/* RESULTS */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-8 pb-16">
        {/* Grid */}
        <div
          ref={sectionRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {loading
            ? // Skeleton placeholders (3 columns worth)
              Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="space-y-3 animate-pulse">
                  <div className="h-44 rounded-2xl bg-gray-200" />
                  <div className="h-4 rounded bg-gray-200 w-3/4" />
                  <div className="h-3 rounded bg-gray-200 w-1/2" />
                  <div className="h-10 rounded-md bg-gray-200" />
                </div>
              ))
            : // Actual hotel cards
              sortedHotels.map((hotel) => (
                <Link key={hotel.id} to={`/hotels/${hotel.id}`} className="group">
                  <div className="bg-white rounded-3xl border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="relative h-56 w-full rounded-t-3xl overflow-hidden">
                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <span className="absolute top-3 left-3 px-3 py-1 bg-white rounded-full text-xs font-semibold shadow">
                        Top Rated
                      </span>
                    </div>

                    <div className="p-4 md:p-5">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {hotel.name}
                        </h3>
                        <div className="text-right">
                          <p className="text-xs text-gray-500">Start From</p>
                          <p className="text-green font-bold text-xl">
                            {hotel.price}
                            <span className="text-xs text-gray-500"> /Night</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-1 mb-3 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <MapPin size={14} /> {hotel.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star size={14} className="text-yellow-400" /> {hotel.rating}
                        </span>
                      </div>

                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4">
                        {hotel.shortDesc ||
                          "Comfortable rooms • Scenic views • Verified hospitality • Calm environment"}
                      </p>

                      <Link to={`${hotel.id}`}>
                        <button className="w-full py-3 bg-green text-white rounded-full font-semibold hover:bg-greenH transition-all flex items-center justify-center gap-2">
                          Book Now <ArrowRight size={18} />
                        </button>
                      </Link>
                    </div>
                  </div>
                </Link>
              ))}
        </div>
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

export default Hotel;
