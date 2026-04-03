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
import { toursData } from "../data/toursnpackages";

gsap.registerPlugin(ScrollTrigger);

const ToursAndPackages = () => {
  const sectionRef = useRef(null);
  const mobileFilterRef = useRef(null);

  const [searchText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [priceRange, setPriceRange] = useState("any");
  const [ratingMin, setRatingMin] = useState("any");
  const [locationsSelected, setLocationsSelected] = useState(["All"]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  /* normalize price */
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

  /* locations */
  const allLocations = useMemo(
    () => ["All", ...new Set(toursWithRawPrice.map((t) => t.location))],
    [toursWithRawPrice],
  );

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  /* filtering */
  const filteredTours = useMemo(() => {
    let filtered = toursWithRawPrice;

    if (searchText.trim()) {
      const s = searchText.toLowerCase();

      filtered = filtered.filter(
        (t) =>
          t.title.toLowerCase().includes(s) ||
          t.location.toLowerCase().includes(s),
      );
    }

    if (!(locationsSelected.length === 1 && locationsSelected[0] === "All")) {
      filtered = filtered.filter((t) => locationsSelected.includes(t.location));
    }

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

    if (ratingMin !== "any") {
      filtered = filtered.filter((t) => (t.rating ?? 0) >= Number(ratingMin));
    }

    return filtered;
  }, [searchText, locationsSelected, priceRange, ratingMin, toursWithRawPrice]);

  /* sorting */
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

  /* animations */
  useEffect(() => {
    if (loading) return;

    const cards = sectionRef.current?.children || [];

    gsap.fromTo(
      cards,
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.08, duration: 0.45 },
    );

    ScrollTrigger.refresh();
  }, [sortedTours, loading]);

  const resetFilters = () => {
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
    <section className="min-h-screen bg-white">
      {/* HERO */}
      <div className="relative w-full h-[70vh] flex items-center justify-center text-center bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/7846474/pexels-photo-7846474.jpeg')",
          }}
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 px-6 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-3 rounded-full text-sm text-white bg-white/10 border border-white/20 backdrop-blur-sm">
            Discover Your Next Journey
          </span>

          <h1 className="text-4xl md:text-6xl font-ssBD text-white mb-3">
            Tours & Travel Packages
          </h1>

          <p className="text-white/90 text-base md:text-lg font-ssBookD">
            Handpicked tours crafted for explorers, spiritual seekers, and
            adventure lovers.
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
                placeholder="Search tours or destinations..."
                className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-green"
              />
            </div>

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
                className="hidden md:flex px-4 py-3 bg-green hover:bg-greenH  rounded-xl items-center gap-2"
              >
                <X size={16} />
                Clear
              </button>
            )}
          </div>

          {/* FILTERS */}
          <div
            className={`
        ${mobileFiltersOpen ? "grid" : "hidden"}
        md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mt-4
      `}
          >
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
            {/* CLEAR FILTERS MOBILE */}
            {anyFilterActive && (
              <button
                onClick={resetFilters}
                className="md:hidden col-span-full flex justify-center items-center gap-2 px-4 py-3 bg-green hover:bg-greenH rounded-xl"
              >
                <X size={16} />
                Clear Filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* TOUR CARDS */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-10 pb-16">
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
            : sortedTours.map((tour) => (
                <Link key={tour.id} to={`/tours/${tour.id}`} className="group">
                  <div className="bg-white rounded-3xl border overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 font-ssSBH">
                    <div className="relative h-60 overflow-hidden">
                      <img
                        src={tour.images[0]}
                        alt={tour.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                      <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-sm flex items-center gap-1 shadow">
                        <Star size={14} className="text-yellow-400" />
                        {tour.rating}
                      </div>

                      <div className="absolute bottom-3 left-3 bg-white px-3 py-1 rounded-full text-xs flex items-center gap-1 shadow">
                        <MapPin size={12} />
                        {tour.location}
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="text-xl font-semibold mb-1 group-hover:text-green transition">
                        {tour.title}
                      </h3>

                      <p className="text-gray-500 text-sm line-clamp-2 mb-4 font-ssBookD">
                        {tour.shortDesc ||
                          "Comfortable stays • Scenic views • Guided experiences"}
                      </p>

                      <div className="flex items-center justify-between font-ssBookD">
                        <div>
                          <p className="text-xs text-gray-500">Start from</p>

                          <p className="text-green text-2xl font-ssBD">
                            {tour.price}
                            <span className="text-xs text-gray-400">
                              {" "}
                              /person
                            </span>
                          </p>
                        </div>

                        <button className="flex items-center gap-2 px-4 py-2 bg-green text-white rounded-full text-sm hover:bg-greenH transition">
                          View Tour <ArrowRight size={16} />
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

export default ToursAndPackages;
