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
  ChevronsRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { hotelsData } from "../data/hotels";

gsap.registerPlugin(ScrollTrigger);

const Hotel = () => {
  const sectionRef = useRef(null);

  // --- Search state (type vs applied) ---
  const [inputText, setInputText] = useState("");
  const [searchText, setSearchText] = useState("");

  // --- Sort & Filters ---
  const [sortBy, setSortBy] = useState(""); // "", price_low, price_high, rating
  const [priceRange, setPriceRange] = useState("any"); // any, lt2k, 2to5, 5to10, gt10
  const [ratingMin, setRatingMin] = useState("any"); // any, 4, 4.5
  const [locationPick, setLocationPick] = useState("All");

  // Derive location list from data
  const locations = useMemo(
    () => ["All", ...Array.from(new Set(hotelsData.map((h) => h.location)))],
    []
  );

  // Animate in on (applied) search or sort/filter change
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

  // --- Helpers for price filter ---
  const inPriceRange = (raw) => {
    if (!raw && raw !== 0) return true; // fail-open if field missing
    switch (priceRange) {
      case "lt2k":
        return raw < 2000;
      case "2to5":
        return raw >= 2000 && raw <= 5000;
      case "5to10":
        return raw > 5000 && raw <= 10000;
      case "gt10":
        return raw > 10000;
      default:
        return true; // "any"
    }
  };

  const meetsRating = (r) => {
    if (ratingMin === "any") return true;
    const min = Number(ratingMin);
    return Number(r || 0) >= min;
  };

  // Filter logic
  let filteredHotels = hotelsData.filter((hotel) => {
    const s = searchText.toLowerCase();
    const matchesSearch =
      hotel.name.toLowerCase().includes(s) ||
      hotel.location.toLowerCase().includes(s);

    const matchesLocation =
      locationPick === "All" ? true : hotel.location === locationPick;

    return (
      matchesSearch &&
      matchesLocation &&
      inPriceRange(hotel.rawPrice) &&
      meetsRating(hotel.rating)
    );
  });

  // Sort logic
  if (sortBy === "price_low") {
    filteredHotels = [...filteredHotels].sort(
      (a, b) => (a.rawPrice ?? 0) - (b.rawPrice ?? 0)
    );
  } else if (sortBy === "price_high") {
    filteredHotels = [...filteredHotels].sort(
      (a, b) => (b.rawPrice ?? 0) - (a.rawPrice ?? 0)
    );
  } else if (sortBy === "rating") {
    filteredHotels = [...filteredHotels].sort(
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
      {/* ===== HERO ===== */}
      <div className="relative w-full h-[70vh] flex items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 px-6 max-w-4xl">
          <span className="inline-block px-5 py-1.5 mb-4 rounded-full text-sm font-ssBookD text-white bg-white/10 border border-white/20 backdrop-blur-sm leading-tight">
            Find Your Perfect Stay
          </span>

          <h1 className="text-5xl md:text-7xl font-ssBD text-white mb-4 leading-tight">
            Hotels & Mountain Stays
          </h1>

          <p className="text-white/90 text-lg max-w-2xl mx-auto font-ssBookD leading-relaxed">
            Handpicked hotels offering comfort, luxury, and breathtaking
            landscapes across Uttarakhand.
          </p>
        </div>

        {/* ===== Search / Filters Bar ===== */}
        <div className="absolute -bottom-12 w-full max-w-6xl px-6 z-20 font-ssBookD">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 flex flex-col gap-4">
            {/* Row 1: Search input + buttons */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex-1 relative w-full">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search hotels or locations..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green focus:border-transparent transition-all"
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
                    className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-all flex items-center gap-2"
                  >
                    <X size={18} /> Reset
                  </button>
                )}
              </div>
            </div>

            {/* Row 2: Filters + Sort */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
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
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>

                {/* Price Range */}
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green"
                >
                  <option value="any">Any Price</option>
                  <option value="lt2k">Below ₹2,000</option>
                  <option value="2to5">₹2,000 – ₹5,000</option>
                  <option value="5to10">₹5,000 – ₹10,000</option>
                  <option value="gt10">Above ₹10,000</option>
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
                  <option value="price_low">Price: Low to High</option>
                  <option value="price_high">Price: High to Low</option>
                  <option value="rating">Rating: High to Low</option>
                </select>
              </div>
            </div>

            {/* Active filter chips */}
            {anyFilterActive && (
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {locationPick !== "All" && (
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs">
                    Location: {locationPick}
                  </span>
                )}
                {priceRange !== "any" && (
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs">
                    Price: {priceRange === "lt2k"
                      ? "Below ₹2k"
                      : priceRange === "2to5"
                      ? "₹2k–₹5k"
                      : priceRange === "5to10"
                      ? "₹5k–₹10k"
                      : "Above ₹10k"}
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

      {/* ===== RESULTS ===== */}
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-16">
        {/* Show count only after a search is applied */}
        {searchText && (
          <h2 className="text-xl font-ssSBH text-gray-800 mb-6">
            {filteredHotels.length}{" "}
            {filteredHotels.length === 1 ? "Hotel" : "Hotels"} Found
          </h2>
        )}

        <div
          ref={sectionRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredHotels.map((hotel) => (
            <Link key={hotel.id} to={`/hotels/${hotel.id}`} className="group">
              {/* Card */}
              <div className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                {/* Image */}
                <div className="relative h-60 w-full rounded-t-3xl overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Top Rated badge */}
                  <div className="text-black absolute top-3 left-3 px-3 py-1 bg-white rounded-full text-xs font-ssSBH flex items-center gap-1 shadow">
                    <Star size={12} className="text-yellow-400" /> Top Rated
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 font-ssBookD">
                  {/* Name + Price */}
                  <div className="flex items-center justify-between">
                    <h3 className="font-ssBD text-lg text-gray-900">
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

                  {/* Location + Rating */}
                  <div className="flex items-center justify-between mt-1 mb-2">
                    <p className="text-sm text-gray-600 flex items-center gap-1">
                      <MapPin size={14} /> {hotel.location}
                    </p>
                    <p className="text-sm text-gray-700 flex items-center gap-1">
                      <Star
                        size={14}
                        className="text-yellow-400"
                        fill="currentColor"
                      />
                      {hotel.rating}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4">
                    {hotel.shortDesc ||
                      "Comfortable rooms • Scenic views • Verified hospitality • Calm environment"}
                  </p>

                  {/* CTA */}
                  <button className="w-full py-3 bg-green text-white rounded-full font-semibold hover:bg-green/90 transition-all flex items-center justify-center gap-2">
                    Book Now <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No results */}
        {filteredHotels.length === 0 && searchText && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
              <Search size={32} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No hotels found
            </h3>
            <p className="text-gray-500">Try a different search or filters.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hotel;
