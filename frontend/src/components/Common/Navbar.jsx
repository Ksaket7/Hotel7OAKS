import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/hotel-7-logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "HOME", path: "/" },
    { name: "HOTELS", path: "/hotels" },
    { name: "TREKS", path: "/treks" },
    { name: "TOURS & PACKAGES", path: "/tours" },
    {name:"DESTINATIONS",path:"/destinations"},
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  const dropdownVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut", staggerChildren: 0.08 },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.25 } },
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "919876543210";
    const message = encodeURIComponent(
      "Hi! I'd like to plan a trip with Oak7.",
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/60 shadow-lg backdrop-blur-xl border-b border-gray-100"
          : "bg-white/45 backdrop-blur-md shadow-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="group flex items-center">
              <img
                src={logo}
                alt="OAK7 Logo"
                className="h-14 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <motion.ul
            className="hidden lg:flex items-center space-x-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {links.map((link, index) => (
              <motion.li
                key={index}
                className="relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to={link.path}
                  className={`px-4 py-2 rounded-xl text-sm font-ssBookD tracking-wide transition-all duration-300 flex items-center gap-1 ${
                    location.pathname === link.path
                      ? "text-green bg-green/10 font-ssBD shadow-lg ring-2 ring-green/20"
                      : "text-gray-700 hover:text-green hover:bg-green/5"
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      className="h-1 w-1 bg-green rounded-full"
                      layoutId="activeIndicator"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          {/* Desktop CTAs */}
          <motion.div
            className="hidden lg:flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-sm font-ssBookD px-6 py-2.5 bg-green text-white rounded-full hover:bg-greenH shadow-lg hover:shadow-xl transition-all duration-300 border border-green/20"
              onClick={handleWhatsAppClick}
            >
              <Phone size={18} />
              Chat Now
            </motion.button>

            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-sm font-ssBookD px-6 py-2.5 bg-white text-green border-2 border-green rounded-full hover:bg-green hover:text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Plan Trip
              </motion.button>
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            className={`lg:hidden p-2 rounded-xl text-green transition-all ${
              scrolled
                ? "bg-white/80 shadow-md"
                : "bg-white/50 backdrop-blur-sm"
            } hover:bg-green/5 hover:shadow-lg`}
            onClick={() => setOpen(!open)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
            className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-2xl border-t border-gray-100"
          >
            <motion.div
              variants={dropdownVariants}
              className="max-w-7xl mx-auto px-6 py-8"
            >
              <motion.ul className="space-y-3" variants={linkVariants}>
                {links.map((link, index) => (
                  <motion.li key={index}>
                    <Link
                      to={link.path}
                      onClick={() => setOpen(false)}
                      className={`block py-4 px-6 rounded-2xl text-lg font-ssBookD transition-all duration-300 border-l-4 ${
                        location.pathname === link.path
                          ? "text-green bg-green/10 font-ssBD border-green shadow-xl"
                          : "text-gray-800 hover:text-green hover:bg-green/5 border-transparent hover:border-green/30"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}

                <motion.div
                  variants={linkVariants}
                  className="pt-6 mt-4 border-t border-gray-100"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setOpen(false);
                      handleWhatsAppClick();
                    }}
                    className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-green text-white rounded-2xl font-ssBD text-lg shadow-xl hover:shadow-2xl hover:bg-greenH transition-all duration-300 border border-green/20"
                  >
                    <Phone size={20} />
                    Chat on WhatsApp
                  </motion.button>

                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="block w-full text-center py-4 px-6 mt-3 bg-white text-green border-2 border-green rounded-2xl font-ssBD text-lg hover:bg-green hover:text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Plan a Trip →
                  </Link>
                </motion.div>
              </motion.ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
