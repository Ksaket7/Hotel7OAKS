import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // optional scroll listener for styling in future
    const handleScroll = () => {};
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "HOME", path: "/" },
    { name: "HOTELS", path: "/hotels" },
    { name: "TOURS & PACKAGES", path: "/tours" },
    { name: "TREKS", path: "/treks" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  // Animation variants for mobile dropdown
  const dropdownVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut", staggerChildren: 0.05 },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

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
      </div>

      {/* --- Mobile Dropdown (Animated) --- */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
            className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden py-6 px-8"
          >
            <motion.ul
              className="space-y-4 text-gray-700 font-ssBookD text-sm"
              variants={dropdownVariants}
            >
              {links.map((link, index) => (
                <motion.li key={index} variants={linkVariants}>
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
                </motion.li>
              ))}

              {/* CTA Button inside dropdown */}
              <motion.li variants={linkVariants}>
                <Link to="/contact" onClick={() => setOpen(false)}>
                  <button className="mt-4 w-full bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 font-ssBD transition-all">
                    Plan a Trip
                  </button>
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
