import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Calendar, Star, ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { toursData } from "../data/toursnpackages";

gsap.registerPlugin(ScrollTrigger);

const ToursAndPackages = () => {
  const sectionRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(toursData.map((t) => t.category || "Adventure"))];

  useEffect(() => {
    const elements = sectionRef.current?.children || [];
    gsap.fromTo(
      elements,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 0.6,
        ease: "power3.out",
      }
    );
  }, [selectedCategory, searchTerm]);

  const filteredTours = toursData.filter((tour) => {
    const s = searchTerm.toLowerCase();
    const matchesSearch =
      tour.title.toLowerCase().includes(s) || tour.location.toLowerCase().includes(s);

    const matchesCategory = selectedCategory === "All" || tour.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="min-h-screen bg-white">

      {/* HERO */}
      <div className="relative w-full h-[65vh] flex items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=2')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 px-6 max-w-4xl">
          <span className="inline-block px-5 py-1.5 mb-4 rounded-full text-sm font-medium text-green bg-white/10 border border-white/20 backdrop-blur-sm">
            Discover Your Next Journey
          </span>

          <h1 className="text-5xl md:text-7xl font-ssBD text-white mb-4 leading-tight">
            Tours & Travel Packages
          </h1>

          <p className="text-white/90 text-lg max-w-2xl mx-auto font-ssLB leading-relaxed">
            Handpicked tours crafted for explorers, spiritual seekers, and adventure lovers.
          </p>
        </div>

        {/* Search / Filters */}
        <div className="absolute -bottom-10 w-full max-w-4xl px-6 z-20">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 flex flex-col md:flex-row gap-4">
            
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search destinations or tours..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green focus:border-transparent transition-all"
              />
            </div>

            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedCategory(c)}
                  className={`px-5 py-2 rounded-xl font-medium whitespace-nowrap transition-all
                    ${
                      selectedCategory === c
                        ? "bg-green text-white shadow"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16">

        <h2 className="text-xl font-ssSBH text-gray-800 mb-6">
          {filteredTours.length} {filteredTours.length === 1 ? "Package" : "Packages"} Found
        </h2>

        <div
          ref={sectionRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredTours.map((tour) => (
            <Link key={tour.id} to={`/tours/${tour.id}`} className="group">
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">

                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                  <span className="absolute top-4 left-4 px-3 py-1 bg-white/95 text-gray-800 text-xs font-semibold rounded-full">
                    {tour.category || "Adventure"}
                  </span>

                  {tour.featured && (
                    <span className="absolute top-4 right-4 px-3 py-1 bg-green text-white text-xs rounded-full flex items-center gap-1">
                      <Star size={12} fill="currentColor" /> Featured
                    </span>
                  )}

                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-ssSBH text-lg mb-1 drop-shadow">
                      {tour.title}
                    </h3>
                    <p className="text-sm flex items-center gap-1 text-white/90">
                      <MapPin size={14} /> {tour.location}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} /> {tour.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star size={16} className="text-yellow-400" fill="currentColor" />
                      <span>{tour.rating || "4.8"}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500">Starting from</p>
                      <p className="text-xl font-bold text-green">{tour.price}</p>
                    </div>
                    <div className="flex items-center gap-2 text-green font-semibold group-hover:gap-3 transition-all">
                      Explore <ArrowRight size={18} />
                    </div>
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>

        {/* No results */}
        {filteredTours.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
              <Search size={32} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No packages found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-r from-green to-blue-600 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg')] bg-cover bg-center opacity-10"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-ssBD text-white mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
              Let us create a custom package tailored to your dream destination.
            </p>
            <button className="px-8 py-4 bg-white text-green font-semibold rounded-full shadow hover:bg-gray-50 transition-all">
              Plan Custom Trip
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToursAndPackages;
