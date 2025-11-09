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

  // mobile drawer open
  const [drawerOpen, setDrawerOpen] = useState(false);

  // listen for navbar toggle event
  useEffect(() => {
    const handler = () => setDrawerOpen((s) => !s);
    window.addEventListener("toggleFilters", handler);
    return () => window.removeEventListener("toggleFilters", handler);
  }, []);

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

    // multi-location
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

  // gsap animation on list change
  useEffect(() => {
    const cards = sectionRef.current?.children || [];
    gsap.fromTo(
      cards,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "power3.out" }
    );
    ScrollTrigger.refresh();
  }, [sortedTours]);

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
      case "price":
        setPriceRange("any");
        break;
      case "rating":
        setRatingMin("any");
        break;
      default:
        break;
    }
  };

  const anyFilterActive =
    searchText ||
    !(locationsSelected.length === 1 && locationsSelected[0] === "All") ||
    priceRange !== "any" ||
    ratingMin !== "any";

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
        <div className="relative z-10 px-6 max-w-4xl">
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

        {/* Filters panel (desktop visible) */}
        <div className="hidden md:block  absolute -bottom-12 w-full max-w-6xl px-6 z-20 font-ssBookD">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 flex flex-col gap-4 md:flex-nowrap">
            {/* Search row */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="relative w-full md:flex-1">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search destinations or tours..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && applySearch()}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green transition-all"
                />
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={applySearch}
                  className="px-6 py-3 bg-green text-white rounded-xl font-semibold hover:bg-greenH transition-all whitespace-nowrap"
                >
                  Search
                </button>
                {anyFilterActive && (
                  <button
                    onClick={resetFilters}
                    className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 flex items-center gap-2 whitespace-nowrap"
                  >
                    <X size={18} /> Clear
                  </button>
                )}
              </div>
            </div>

            {/* Filters row */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 w-full">
              <div className="flex items-center gap-2 text-gray-700 flex-none">
                <SlidersHorizontal className="w-5 h-5 text-green" />
                <span className="font-ssSBH">Filters</span>
              </div>

              {/* LOCATION DROPDOWN + multi-select buttons (desktop) */}
              <div className="flex-1 min-w-0 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Keep the original name/location dropdown for desktop */}
                <select
                  value={
                    locationsSelected.length === 1 ? locationsSelected[0] : ""
                  }
                  onChange={(e) => {
                    const v = e.target.value;
                    // if choosing All or a single location, replace current selection
                    if (v === "All") setLocationsSelected(["All"]);
                    else setLocationsSelected([v]);
                  }}
                  className="px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green"
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
                  className="px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green"
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
                  className="px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green"
                >
                  <option value="any">Any Rating</option>
                  <option value="4">⭐ 4.0+</option>
                  <option value="4.5">⭐ 4.5+</option>
                </select>
              </div>

              {/* Sort - placed to right */}
              <div className="flex items-center gap-2 md:ml-auto flex-none mt-3 md:mt-0">
                <span className="text-sm text-gray-600">Sort by</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green"
                >
                  <option value="">Recommended</option>
                  <option value="price_low">Price: Low → High</option>
                  <option value="price_high">Price: High → Low</option>
                  <option value="rating">Rating: High → Low</option>
                </select>
              </div>
            </div>

            {/* Desktop multi-location quick buttons (visible on md+) */}
            {/* <div className="hidden md:flex flex-wrap gap-2">
              {allLocations.map(loc => (
                <button key={loc} onClick={() => toggleLocation(loc)}
                  className={`px-3 py-1.5 rounded-full border text-sm ${locationsSelected.includes(loc) ? "bg-green text-white border-green" : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"}`}>
                  {loc}
                </button>
              ))}
            </div> */}

            {/* Active filter chips */}
            {anyFilterActive && (
              <div className="flex flex-wrap items-center gap-2 mt-2">
                {searchText && (
                  <button
                    onClick={() => removeFilter("search")}
                    className="bg-green/10 text-green font-medium px-3 py-1.5 rounded-full flex items-center gap-1 text-sm"
                  >
                    <span>{searchText}</span>
                    <X size={14} />
                  </button>
                )}
                {locationsSelected
                  .filter((l) => l !== "All")
                  .map((loc) => (
                    <button
                      key={loc}
                      onClick={() => removeFilter("location", loc)}
                      className="bg-green/10 text-green font-medium px-3 py-1.5 rounded-full flex items-center gap-1 text-sm"
                    >
                      <MapPin size={14} />
                      <span>{loc}</span>
                      <X size={14} />
                    </button>
                  ))}
                {priceRange !== "any" && (
                  <button
                    onClick={() => removeFilter("price")}
                    className="bg-green/10 text-green font-medium px-3 py-1.5 rounded-full flex items-center gap-1 text-sm"
                  >
                    <span>{priceLabels[priceRange]}</span>
                    <X size={14} />
                  </button>
                )}
                {ratingMin !== "any" && (
                  <button
                    onClick={() => removeFilter("rating")}
                    className="bg-green/10 text-green font-medium px-3 py-1.5 rounded-full flex items-center gap-1 text-sm"
                  >
                    <span>{ratingLabels[ratingMin]}</span>
                    <X size={14} />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE Drawer + overlay */}
      {/* overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          drawerOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setDrawerOpen(false)}
      />

      {/* drawer panel */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-xs md:hidden bg-white shadow-xl transform transition-transform duration-300 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Filters</h3>
          <button
            onClick={() => setDrawerOpen(false)}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-4 space-y-4 overflow-y-auto h-full">
          {/* Search (mobile) */}
          <div>
            <label className="text-sm text-gray-700 mb-1 block">Search</label>
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" && (applySearch(), setDrawerOpen(false))
                }
                placeholder="destinations or tours..."
                className="w-full pl-10 pr-3 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green"
              />
            </div>
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => {
                  applySearch();
                  setDrawerOpen(false);
                }}
                className="flex-1 px-4 py-2 bg-green text-white rounded-xl"
              >
                Apply
              </button>
              <button
                onClick={() => {
                  resetFilters();
                }}
                className="px-4 py-2 bg-gray-100 rounded-xl"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Locations (mobile dropdown) */}
          <div className="md:hidden">
            <label className="text-sm text-gray-700 mb-1 block">Location</label>
            <select
              value={
                locationsSelected.length === 1 ? locationsSelected[0] : "All"
              }
              onChange={(e) => {
                const value = e.target.value;
                if (value === "All") setLocationsSelected(["All"]);
                else setLocationsSelected([value]);
              }}
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green"
            >
              {allLocations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="text-sm text-gray-700 mb-1 block">Price</label>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full px-4 py-2 rounded-xl border border-gray-300"
            >
              <option value="any">Any Price</option>
              <option value="lt5k">Below ₹5,000</option>
              <option value="5to10">₹5,000 – ₹10,000</option>
              <option value="10to20">₹10,000 – ₹20,000</option>
              <option value="gt20">Above ₹20,000</option>
            </select>
          </div>

          {/* Rating */}
          <div>
            <label className="text-sm text-gray-700 mb-1 block">Rating</label>
            <select
              value={ratingMin}
              onChange={(e) => setRatingMin(e.target.value)}
              className="w-full px-4 py-2 rounded-xl border border-gray-300"
            >
              <option value="any">Any Rating</option>
              <option value="4">⭐ 4.0+</option>
              <option value="4.5">⭐ 4.5+</option>
            </select>
          </div>

          {/* Sort */}
          <div>
            <label className="text-sm text-gray-700 mb-1 block">Sort by</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-2 rounded-xl border border-gray-300"
            >
              <option value="">Recommended</option>
              <option value="price_low">Price: Low → High</option>
              <option value="price_high">Price: High → Low</option>
              <option value="rating">Rating: High → Low</option>
            </select>
          </div>

          {/* Active chips (mobile) */}
          {anyFilterActive && (
            <div>
              <label className="text-sm text-gray-700 mb-2 block">
                Active Filters
              </label>
              <div className="flex flex-wrap gap-2">
                {searchText && (
                  <button
                    onClick={() => removeFilter("search")}
                    className="bg-green/10 text-green px-3 py-1.5 rounded-full flex items-center gap-1 text-sm"
                  >
                    <span>{searchText}</span>
                    <X size={14} />
                  </button>
                )}
                {locationsSelected
                  .filter((l) => l !== "All")
                  .map((loc) => (
                    <button
                      key={loc}
                      onClick={() => removeFilter("location", loc)}
                      className="bg-green/10 text-green px-3 py-1.5 rounded-full flex items-center gap-1 text-sm"
                    >
                      <MapPin size={14} />
                      <span>{loc}</span>
                      <X size={14} />
                    </button>
                  ))}
                {priceRange !== "any" && (
                  <button
                    onClick={() => removeFilter("price")}
                    className="bg-green/10 text-green px-3 py-1.5 rounded-full flex items-center gap-1 text-sm"
                  >
                    <span>{priceLabels[priceRange]}</span>
                    <X size={14} />
                  </button>
                )}
                {ratingMin !== "any" && (
                  <button
                    onClick={() => removeFilter("rating")}
                    className="bg-green/10 text-green px-3 py-1.5 rounded-full flex items-center gap-1 text-sm"
                  >
                    <span>{ratingLabels[ratingMin]}</span>
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* tours grid */}
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-16">
        {searchText && (
          <h2 className="text-xl font-ssSBH text-gray-800 mb-6">
            {sortedTours.length}{" "}
            {sortedTours.length === 1 ? "Package" : "Packages"} Found
          </h2>
        )}

        <div
          ref={sectionRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sortedTours.map((tour) => (
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
                    <h3 className="font-ssBD text-lg text-gray-900">
                      {tour.title}
                    </h3>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">Start From</p>
                      <p className="text-green font-bold text-xl">
                        {tour.price}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-1 mb-2 text-sm text-gray-600">
                    <p className="flex items-center gap-1">
                      <MapPin size={14} /> {tour.location}
                    </p>
                    <p className="flex items-center gap-1">
                      <Star
                        size={14}
                        className="text-yellow-400"
                        fill="currentColor"
                      />{" "}
                      {tour.rating}
                    </p>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4">
                    {tour.shortDesc ||
                      "A beautiful, hand-curated travel experience awaits you."}
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

        {sortedTours.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
              <Search size={32} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No tours found
            </h3>
            <p className="text-gray-500">
              Try a different search term or filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ToursAndPackages;
