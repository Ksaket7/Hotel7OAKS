import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-gray-300 pt-20 pb-10 overflow-hidden">

      {/* subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green/10 blur-[120px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* BRAND */}
        <div>
          <h3 className="text-4xl font-extrabold text-white mb-5 tracking-tight">
            OAK<span className="text-green">7</span>
          </h3>

          <p className="text-gray-400 leading-relaxed text-lg max-w-sm font-ssLB">
            Discover hidden trails, conquer mountains, and explore the wild
            with trusted adventure experiences.
          </p>

          {/* SOCIALS */}
          <div className="flex items-center gap-5 mt-6 font-ssLB">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-green hover:text-white transition-all duration-300"
            >
              <Facebook size={18} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-green hover:text-white transition-all duration-300"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-6 font-ssBD">
            Explore
          </h4>

          <ul className="space-y-3 font-ssLB">
            <li>
              <Link
                to="/"
                className="hover:text-green transition-colors duration-300"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/tours"
                className="hover:text-green transition-colors duration-300"
              >
                Tour Packages
              </Link>
            </li>

            <li>
              <Link
                to="/treks"
                className="hover:text-green transition-colors duration-300"
              >
                Treks
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-green transition-colors duration-300"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-6 font-ssBD">
            Contact
          </h4>

          <ul className="space-y-4 font-ssLB">

            <li className="flex items-center gap-3 text-gray-400">
              <Phone size={18} className="text-green" />
              <a
                href="tel:+919876543210"
                className="hover:text-green transition-colors"
              >
                +91 98765 43210
              </a>
            </li>

            <li className="flex items-center gap-3 text-gray-400">
              <Mail size={18} className="text-green" />
              <a
                href="mailto:info@oak7.com"
                className="hover:text-green transition-colors"
              >
                info@oak7.com
              </a>
            </li>

          </ul>

          {/* CTA */}
          <Link
            to="/contact"
            className="inline-block mt-6 bg-green hover:bg-greenH text-white px-6 py-3 rounded-full transition shadow-lg"
          >
            Plan Your Trip
          </Link>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="relative max-w-7xl mx-auto px-6 mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">

        <p>
          © {new Date().getFullYear()} Oak7 Tours & Travels
        </p>

        <div className="flex gap-6 mt-3 md:mt-0">
          <Link to="/privacy" className="hover:text-green transition">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-green transition">
            Terms
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
