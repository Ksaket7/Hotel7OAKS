import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "HOME", href: "#" },
    { name: "ABOUT", href: "#" },
    { name: "TRIPS", href: "#" },
    { name: "TOURS & PACKAGES", href: "#" },
    { name: "TREKS", href: "#" },
    { name: "CONTACT", href: "#" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* --- Left: Logo --- */}
        <h1
          className={`text-xl md:text-2xl tracking-tight font-ssSBH ${
            scrolled ? "text-green-800" : "text-black"
          }`}
        >
          OAK7
        </h1>

        {/* --- Center: Nav Links --- */}
        <ul
          className={`hidden md:flex space-x-10 font-ssBookD text-sm tracking-wide transition-all ${
            scrolled ? "text-gray-800" : "text-black"
          }`}
        >
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="hover:text-green-600 transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* --- Right: Plan Trip Button --- */}
        <button
          className={`hidden md:block font-ssBD text-sm px-5 py-2 rounded-full transition-all ${
            scrolled
              ? "bg-green-600 text-white hover:bg-green-700"
              : "bg-white/25 text-white hover:bg-white hover:text-green-700"
          }`}
        >
          Plan a Trip
        </button>

        {/* --- Mobile Menu --- */}
        <button
          className={`md:hidden ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

        {open && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden py-6 px-8">
            <ul className="space-y-4 text-gray-700 font-ssBookD text-sm">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block hover:text-green-700"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <button className="mt-4 w-full bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 font-ssBD">
                  Plan a Trip
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
