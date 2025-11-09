import { useEffect, useRef, useState, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MapPin,
  Calendar,
  Star,
  ArrowRight,
  Search,
  X,
  SlidersHorizontal,
  ChevronsRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { toursData } from "../data/toursnpackages";

gsap.registerPlugin(ScrollTrigger);

const ToursAndPackages = () => {
  const sectionRef = useRef(null);

  // Search states
  const [inputText, setInputText] = useState("");
  const [searchText, setSearchText] = useState("");

  // Sort & Filters
  const [sortBy, setSortBy] = useState("");
  const [priceRange, setPriceRange] = useState("any");
  const [ratingMin, setRatingMin] = useState("any");
  const [locationPick, setLocationPick] = useState("All");

  // Unique locations from data
  const locations = useMemo(
    () => ["All", ...Array.from(new Set(toursData.map((t) => t.location)))],
    []
  );

  // Animate cards
  useEffect(() => {
    const items = sectionRef.current?.children || [];
    gsap.fromTo(
      items,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 0.6,
        ease: "power3.out",
      }
    );
  }, [searchText, sortBy, priceRange, ratingMin, locationPick]);

  // Price filter helper
  const inPriceRange = (raw) => {
    if (!raw && raw !== 0) return true;
    switch (priceRange) {
      case "lt5k":
        return raw < 5000;
      case "5to10":
        return raw >= 5000 && raw <= 10000;
      case "10to20":
        return raw > 10000 && raw <= 20000;
      case "gt20":
        return raw > 20000;
      default:
        return true;
    }
  };

  const meetsRating = (r) => {
    if (ratingMin === "any") return true;
    const min = Number(ratingMin);
    return Number(r || 0) >= min;
  };

  // Apply filters
  let filteredTours = toursData.filter((tour) => {
    const s = searchText.toLowerCase();
    const matchesSearch =
      tour.title.toLowerCase().includes(s) ||
      tour.location.toLowerCase().includes(s);

    const matchesLocation =
      locationPick === "All" ? true : tour.location === locationPick;

    return (
      matchesSearch &&
      matchesLocation &&
      inPriceRange(tour.rawPrice) &&
      meetsRating(tour.rating)
    );
  });

  // Sorting
  if (sortBy === "price_low") {
    filteredTours = [...filteredTours].sort(
      (a, b) => (a.rawPrice ?? 0) - (b.rawPrice ?? 0)
    );
  }
  if (sortBy === "price_high") {
    filteredTours = [...filteredTours].sort(
      (a, b) => (b.rawPrice ?? 0) - (a.rawPrice ?? 0)
    );
  }
  if (sortBy === "rating") {
    filteredTours = [...filteredTours].sort(
      (a, b) => (b.rating ?? 0) - (a.rating ?? 0)
    );
  }

  const applySearch = () => setSearchText(inputText);

  const resetSearch = () => {
    setInputText("");
    setSearchText("");
    setSortBy("");
    setPriceRange("any");
    setRatingMin("any");
    setLocationPick("All");
  };

  const anyFilterActive =
    priceRange !== "any" || ratingMin !== "any" || locationPick !== "All";

  return (
    <section className="min-h-screen bg-white">

      {/* ✅ HERO */}
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
            Handpicked tours crafted for explorers, spiritual seekers, and adventure lovers.
          </p>
        </div>

        {/* ✅ Search + Filters Box */}
        <div className="absolute -bottom-12 w-full max-w-6xl px-6 z-20 font-ssBookD">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 flex flex-col gap-4">

            {/* ✅ Search Row */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex-1 relative w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search destinations or tours..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green transition-all"
                />
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={applySearch}
                  className="px-6 py-3 bg-green text-white rounded-xl font-semibold hover:bg-green/90 transition-all"
                >
                  Search
                </button>

                {searchText && (
                  <button
                    onClick={resetSearch}
                    className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 flex items-center gap-2"
                  >
                    <X size={18} /> Reset
                  </button>
                )}
              </div>
            </div>

            {/* ✅ Filters + Sort */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 font-ssBookD">
              <div className="flex items-center gap-2 text-gray-700">
                <SlidersHorizontal className="w-5 h-5 text-green" />
                <span className="font-ssSBH">Filters</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 flex-1">
                {/* Location */}
                <select
                  value={locationPick}
                  onChange={(e) => setLocationPick(e.target.value)}
                  className="px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green"
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
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

              {/* Sort */}
              <div className="flex items-center gap-2 md:ml-auto">
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

            {/* ✅ Active filter chips */}
            {anyFilterActive && (
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {locationPick !== "All" && (
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs">
                    Location: {locationPick}
                  </span>
                )}
                {priceRange !== "any" && (
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs">
                    Price: {priceRange}
                  </span>
                )}
                {ratingMin !== "any" && (
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs">
                    Rating: {ratingMin}+
                  </span>
                )}

                <button
                  onClick={() => {
                    setPriceRange("any");
                    setRatingMin("any");
                    setLocationPick("All");
                  }}
                  className="ml-1 text-xs text-green font-semibold hover:underline flex items-center gap-1"
                >
                  Clear filters <ChevronsRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ✅ GRID */}
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-16">

        {/* Count */}
        {searchText && (
          <h2 className="text-xl font-ssSBH text-gray-800 mb-6">
            {filteredTours.length} {filteredTours.length === 1 ? "Package" : "Packages"} Found
          </h2>
        )}

        <div
          ref={sectionRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredTours.map((tour) => (
            <Link key={tour.id} to={`/tours/${tour.id}`} className="group">

              {/* ✅ CARD */}
              <div className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                {/* Image */}
                <div className="relative h-60 w-full rounded-t-3xl overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Category */}
                  <span className="absolute top-3 left-3 px-3 py-1 bg-white rounded-full text-xs font-semibold shadow">
                    {tour.category}
                  </span>

                  {/* Featured */}
                  {tour.featured && (
                    <span className="absolute top-3 right-3 px-3 py-1 bg-green text-white rounded-full text-xs flex items-center gap-1 shadow">
                      <Star size={12} fill="currentColor" /> Featured
                    </span>
                  )}
                </div>

                {/* CONTENT */}
                <div className="p-5">

                  {/* Title + Price */}
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

                  {/* Location + Rating */}
                  <div className="flex items-center justify-between mt-1 mb-2 text-sm text-gray-600">
                    <p className="flex items-center gap-1">
                      <MapPin size={14} /> {tour.location}
                    </p>

                    <p className="flex items-center gap-1">
                      <Star size={14} className="text-yellow-400" fill="currentColor" />
                      {tour.rating}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4">
                    {tour.shortDesc || "A beautiful, hand-curated travel experience awaits you."}
                  </p>

                  {/* Button */}
                  <button className="w-full py-3 bg-green text-white rounded-full font-semibold hover:bg-green/90 transition-all flex items-center justify-center gap-2">
                    Explore <ArrowRight size={18} />
                  </button>
                </div>

              </div>
            </Link>
          ))}
        </div>

        {/* ✅ No Results */}
        {filteredTours.length === 0 && searchText && (
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

export default ToursAndPackages;
