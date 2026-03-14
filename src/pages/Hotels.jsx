import { useEffect, useRef, useState, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MapPin,
  Star,
  ArrowRight,
  Search,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import { hotelsData } from "../data/hotels";

gsap.registerPlugin(ScrollTrigger);

const Hotel = () => {
  const sectionRef = useRef(null);
  const mobileFilterRef = useRef(null);

  const [inputText, setInputText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [priceRange, setPriceRange] = useState("any");
  const [ratingMin, setRatingMin] = useState("any");
  const [locationsSelected, setLocationsSelected] = useState(["All"]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  /* normalize price */
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

  /* locations */
  const allLocations = useMemo(
    () => ["All", ...new Set(hotelsWithRawPrice.map((h) => h.location))],
    [hotelsWithRawPrice]
  );

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  /* filtering */
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

  /* sorting */
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

  /* animations */
  useEffect(() => {
    if (loading) return;

    const cards = sectionRef.current?.children || [];

    gsap.fromTo(
      cards,
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.08, duration: 0.45 }
    );

    ScrollTrigger.refresh();
  }, [sortedHotels, loading]);

  /* mobile filters */
  useEffect(() => {
    if (!mobileFilterRef.current) return;

    gsap.to(mobileFilterRef.current, {
      height: mobileFiltersOpen ? "auto" : 0,
      opacity: mobileFiltersOpen ? 1 : 0,
      duration: 0.3,
    });
  }, [mobileFiltersOpen]);

  const applySearch = () => setSearchText(inputText);

  const resetFilters = () => {
    setInputText("");
    setSearchText("");
    setSortBy("");
    setPriceRange("any");
    setRatingMin("any");
    setLocationsSelected(["All"]);
  };

  const anyFilterActive =
    searchText ||
    !(locationsSelected.length === 1 && locationsSelected[0] === "All") ||
    priceRange !== "any" ||
    ratingMin !== "any" ||
    sortBy;

  return (
    <section className="min-h-screen bg-white font-ss">

      {/* HERO */}
      <div className="relative w-full h-[70vh] flex items-center justify-center text-center bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/939723/pexels-photo-939723.jpeg')",
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 px-6 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-3 rounded-full text-sm font-ssBookD tracking-wider text-white bg-white/10 border border-white/20 backdrop-blur-sm">
            Find Your Perfect Stay
          </span>
          <h1 className="text-4xl md:text-6xl font-ssBD text-white mb-3 leading-tight">
            Hotels & Mountain Stays
          </h1>
          <p className="text-white/90 text-base md:text-lg max-w-xl font-ssLB mx-auto">
            Handpicked hotels offering comfort, luxury, and breathtaking
            landscapes across Uttarakhand.
          </p>
        </div>
      </div>

      {/* SEARCH & FILTERS */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 mt-10 font-ssBookD">

        <div className="sticky top-4 z-40 bg-white rounded-2xl border shadow-sm p-4">

          {/* search */}
          <div className="flex gap-3 items-center">

            <div className="relative flex-1">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />

              <input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && applySearch()}
                placeholder="Search hotels or locations..."
                className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-green"
              />
            </div>

            <button
              onClick={applySearch}
              className="px-5 py-3 bg-green text-white rounded-xl font-semibold"
            >
              Search
            </button>

            <button
              onClick={() => setMobileFiltersOpen((s) => !s)}
              className="md:hidden px-4 py-3 border rounded-xl flex items-center gap-2"
            >
              Filters
              {mobileFiltersOpen ? <ChevronUp size={16} /> : <ChevronDown />}
            </button>

            {anyFilterActive && (
              <button
                onClick={resetFilters}
                className="hidden md:flex px-4 py-3 bg-gray-200 rounded-xl items-center gap-2"
              >
                <X size={16} />
                Clear
              </button>
            )}
          </div>

          {/* desktop filters */}
          <div className="hidden md:grid grid-cols-4 gap-3 mt-4">

            <select
              value={locationsSelected[0]}
              onChange={(e) =>
                e.target.value === "All"
                  ? setLocationsSelected(["All"])
                  : setLocationsSelected([e.target.value])
              }
              className="border rounded-xl px-3 py-2"
            >
              {allLocations.map((loc) => (
                <option key={loc}>{loc}</option>
              ))}
            </select>

            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="border rounded-xl px-3 py-2"
            >
              <option value="any">Any Price</option>
              <option value="lt2k">Below ₹2k</option>
              <option value="2to5">₹2k–₹5k</option>
              <option value="5to10">₹5k–₹10k</option>
              <option value="gt10">Above ₹10k</option>
            </select>

            <select
              value={ratingMin}
              onChange={(e) => setRatingMin(e.target.value)}
              className="border rounded-xl px-3 py-2"
            >
              <option value="any">Any Rating</option>
              <option value="4">⭐ 4+</option>
              <option value="4.5">⭐ 4.5+</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border rounded-xl px-3 py-2"
            >
              <option value="">Recommended</option>
              <option value="price_low">Price Low → High</option>
              <option value="price_high">Price High → Low</option>
              <option value="rating">Rating High → Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* HOTEL CARDS */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-10 pb-16 font-ssBD">

        <div
          ref={sectionRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="animate-pulse space-y-3">
                  <div className="h-60 bg-gray-200 rounded-3xl"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              ))
            : sortedHotels.map((hotel) => (
                <Link
                  key={hotel.id}
                  to={`/hotels/${hotel.id}`}
                  className="group block"
                >
                  <div className="bg-white rounded-3xl border overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

                    {/* IMAGE */}
                    <div className="relative h-60 overflow-hidden">

                      <img
                        src={hotel.images[0]}
                        alt={hotel.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                      <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-sm flex items-center gap-1 shadow">
                        <Star size={14} className="text-yellow-400" />
                        {hotel.rating}
                      </div>

                      <div className="absolute bottom-3 left-3 bg-white px-3 py-1 rounded-full text-xs flex items-center gap-1 shadow">
                        <MapPin size={12} />
                        {hotel.location}
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="p-5">

                      <h3 className="text-xl font-semibold mb-1 group-hover:text-green transition">
                        {hotel.name}
                      </h3>

                      <p className="text-gray-500 text-sm line-clamp-2 mb-4 font-ssBookD">
                        {hotel.shortDesc ||
                          "Comfortable rooms • Scenic views • Calm environment"}
                      </p>

                      <div className="flex items-center justify-between">

                        <div>
                          <p className="text-xs text-gray-500 font-ssBookD">Start from</p>
                          <p className="text-green text-2xl font-bold">
                            {hotel.price}
                            <span className="text-xs text-gray-400">
                              {" "}
                              /night
                            </span>
                          </p>
                        </div>

                        <button className="flex items-center gap-2 px-4 py-2 bg-green text-white rounded-full text-sm font-semibold hover:bg-greenH transition font-ssBookD">
                          View Stay
                          <ArrowRight size={16} />
                        </button>

                      </div>
                    </div>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Hotel;