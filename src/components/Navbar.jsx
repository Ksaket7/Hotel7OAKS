import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Optionally keep scroll listener for future effects (active link highlight)
  useEffect(() => {
    const handleScroll = () => {};
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "TRIPS", path: "/trips" },
    { name: "TOURS & PACKAGES", path: "/tours" },
    { name: "TREKS", path: "/treks" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* --- Left: Logo --- */}
        <Link to="/">
          <h1 className="text-xl md:text-2xl tracking-tight font-ssSBH text-green-800">
            OAK7
          </h1>
        </Link>

        {/* --- Center: Nav Links --- */}
        <ul className="hidden md:flex space-x-10 font-ssBookD text-sm tracking-wide text-gray-800">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                className={`hover:text-green-600 transition-colors duration-200 ${
                  location.pathname === link.path
                    ? "text-green-700 font-ssBD"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* --- Right: Plan Trip Button --- */}
        <Link to="/contact">
          <button className="hidden md:block font-ssBookD text-sm px-5 py-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition-all">
            Plan a Trip
          </button>
        </Link>

        {/* --- Mobile Menu Toggle --- */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* --- Mobile Dropdown --- */}
        {open && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden py-6 px-8">
            <ul className="space-y-4 text-gray-700 font-ssBookD text-sm">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={`block hover:text-green-700 ${
                      location.pathname === link.path
                        ? "text-green-700 font-ssBD"
                        : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/contact" onClick={() => setOpen(false)}>
                  <button className="mt-4 w-full bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 font-ssBD">
                    Plan a Trip
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
