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
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Dropdown toggles (mobile)
  const [openDropdown, setOpenDropdown] = useState(null);

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

  // === Drawer toggle via navbar ===
  useEffect(() => {
    const handler = () => setDrawerOpen((s) => !s);
    window.addEventListener("toggleFilters", handler);
    return () => window.removeEventListener("toggleFilters", handler);
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
      filtered = filtered.filter((h) => locationsSelected.includes(h.location));
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
  }, [
    searchText,
    locationsSelected,
    priceRange,
    ratingMin,
    hotelsWithRawPrice,
  ]);

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

  // === Animations ===
  useEffect(() => {
    const cards = sectionRef.current?.children || [];
    gsap.fromTo(
      cards,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "power3.out" }
    );
    ScrollTrigger.refresh();
  }, [sortedHotels]);

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
    lt2k: "Below ₹2,000",
    "2to5": "₹2,000 – ₹5,000",
    "5to10": "₹5,000 – ₹10,000",
    gt10: "Above ₹10,000",
  };
  const ratingLabels = { 4: "⭐ 4.0+", 4.5: "⭐ 4.5+" };

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
          <span className="inline-block px-5 py-1.5 mb-4 rounded-full text-sm font-ssBookD text-white bg-white/10 border border-white/20 backdrop-blur-sm">
            Find Your Perfect Stay
          </span>
          <h1 className="text-5xl md:text-7xl font-ssBD text-white mb-4 leading-tight">
            Hotels & Mountain Stays
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto font-ssBookD">
            Handpicked hotels offering comfort, luxury, and breathtaking
            landscapes across Uttarakhand.
          </p>
        </div>

        {/* ===== Desktop Filters ===== */}
        <div className="hidden md:block absolute -bottom-12 w-full max-w-6xl px-6 z-20 font-ssBookD">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 flex flex-col gap-4">
            {/* Search row */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="relative w-full md:flex-1">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search hotels or locations..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && applySearch()}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green transition-all"
                />
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={applySearch}
                  className="px-6 py-3 bg-green text-white rounded-xl font-semibold hover:bg-greenH transition-all"
                >
                  Search
                </button>
                {anyFilterActive && (
                  <button
                    onClick={resetFilters}
                    className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 flex items-center gap-2"
                  >
                    <X size={18} /> Clear
                  </button>
                )}
              </div>
            </div>

            {/* Filters row */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
              <div className="flex items-center gap-2 text-gray-700">
                <SlidersHorizontal className="w-5 h-5 text-green" />
                <span className="font-ssSBH">Filters</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 flex-1">
                {/* Location */}
                <select
                  value={
                    locationsSelected.length === 1 ? locationsSelected[0] : ""
                  }
                  onChange={(e) => {
                    const v = e.target.value;
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
                  <option value="price_low">Price: Low → High</option>
                  <option value="price_high">Price: High → Low</option>
                  <option value="rating">Rating: High → Low</option>
                </select>
              </div>
            </div>

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

      {/* ===== MOBILE Drawer + Overlay ===== */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          drawerOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setDrawerOpen(false)}
      />

      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-xs md:hidden bg-white shadow-xl transform transition-transform duration-300 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          overflowY: "auto",
          WebkitOverflowScrolling: "touch",
          overscrollBehavior: "contain",
          contain: "layout",
          touchAction: "manipulation",
        }}
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

        {/* === Filter content === */}
        <div className="p-4 space-y-6">
          {/* Search */}
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
                placeholder="hotels or locations..."
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

          {/* === Inline dropdowns for mobile === */}
          <Dropdown
            label="Location"
            value={
              locationsSelected.length === 1 ? locationsSelected[0] : "All"
            }
            options={allLocations}
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
            id="location"
            onSelect={(val) =>
              val === "All"
                ? setLocationsSelected(["All"])
                : setLocationsSelected([val])
            }
          />

          <Dropdown
            label="Price"
            value={priceRange}
            options={[
              { value: "any", label: "Any Price" },
              { value: "lt2k", label: "Below ₹2,000" },
              { value: "2to5", label: "₹2,000 – ₹5,000" },
              { value: "5to10", label: "₹5,000 – ₹10,000" },
              { value: "gt10", label: "Above ₹10,000" },
            ]}
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
            id="price"
            onSelect={setPriceRange}
          />

          <Dropdown
            label="Rating"
            value={ratingMin}
            options={[
              { value: "any", label: "Any Rating" },
              { value: "4", label: "⭐ 4.0+" },
              { value: "4.5", label: "⭐ 4.5+" },
            ]}
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
            id="rating"
            onSelect={setRatingMin}
          />

          <Dropdown
            label="Sort by"
            value={sortBy}
            options={[
              { value: "", label: "Recommended" },
              { value: "price_low", label: "Price: Low → High" },
              { value: "price_high", label: "Price: High → Low" },
              { value: "rating", label: "Rating: High → Low" },
            ]}
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
            id="sort"
            onSelect={setSortBy}
          />
        </div>
      </aside>

      {/* ===== RESULTS ===== */}
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-16">
        <div
          ref={sectionRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sortedHotels.map((hotel) => (
            <Link key={hotel.id} to={`/hotels/${hotel.id}`} className="group">
              <div className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-60 w-full rounded-t-3xl overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 bg-white rounded-full text-xs font-semibold shadow">
                    Top Rated
                  </span>
                </div>
                <div className="p-5 font-ssBookD">
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
                  <div className="flex items-center justify-between mt-1 mb-2 text-sm text-gray-600">
                    <p className="flex items-center gap-1">
                      <MapPin size={14} /> {hotel.location}
                    </p>
                    <p className="flex items-center gap-1">
                      <Star
                        size={14}
                        className="text-yellow-400"
                        fill="currentColor"
                      />{" "}
                      {hotel.rating}
                    </p>
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

// ====== Reusable inline dropdown component (for mobile) ======
const Dropdown = ({
  label,
  value,
  options,
  id,
  onSelect,
  openDropdown,
  setOpenDropdown,
}) => {
  const current =
    typeof options[0] === "string"
      ? value
      : options.find((opt) => opt.value === value)?.label || "Select";

  return (
    <div className="relative">
      <label className="text-sm text-gray-700 mb-1 block">{label}</label>
      <button
        type="button"
        onClick={() => setOpenDropdown(openDropdown === id ? null : id)}
        className="w-full flex justify-between items-center px-4 py-2 border border-gray-300 rounded-xl bg-white"
      >
        <span className="truncate text-gray-800 text-sm">{current}</span>
        <ChevronDown
          size={16}
          className={`transition-transform ${
            openDropdown === id ? "rotate-180" : ""
          }`}
        />
      </button>

      {openDropdown === id && (
        <ul className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-md z-50 max-h-48 overflow-auto">
          {options.map((opt) => {
            const val = typeof opt === "string" ? opt : opt.value;
            const labelText = typeof opt === "string" ? opt : opt.label;
            return (
              <li
                key={val}
                onClick={() => {
                  onSelect(val);
                  setOpenDropdown(null);
                }}
                className="px-4 py-2 hover:bg-green/10 text-sm text-gray-800 cursor-pointer"
              >
                {labelText}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Hotel;
