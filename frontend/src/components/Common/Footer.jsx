import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#050505] text-white">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 h-64 w-[40rem] -translate-x-1/2 bg-emerald-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
      </div>

      <div className="relative">
        

        {/* Main footer */}
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                OAK<span className="text-emerald-400">7</span>
              </h3>
            </Link>

            <p className="mt-5 text-gray-400 leading-7 max-w-sm font-ssLB">
              Explore hidden valleys, alpine trails, and soulful mountain
              experiences with a travel partner that understands adventure.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-emerald-500 hover:text-white"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-emerald-500 hover:text-white"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-white/90 mb-6 font-ssBD">
              Explore
            </h4>

            <ul className="space-y-4 font-ssLB">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 transition-colors duration-300 hover:text-emerald-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/tours"
                  className="text-gray-400 transition-colors duration-300 hover:text-emerald-400"
                >
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link
                  to="/treks"
                  className="text-gray-400 transition-colors duration-300 hover:text-emerald-400"
                >
                  Treks
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 transition-colors duration-300 hover:text-emerald-400"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-white/90 mb-6 font-ssBD">
              Contact
            </h4>

            <ul className="space-y-5 font-ssLB">
              <li className="flex items-start gap-3 text-gray-400">
                <Phone size={18} className="mt-1 text-emerald-400 shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="transition-colors hover:text-emerald-400"
                >
                  +91 9259600261
                </a>
              </li>

              <li className="flex items-start gap-3 text-gray-400">
                <Mail size={18} className="mt-1 text-emerald-400 shrink-0" />
                <a
                  href="mailto:hotel7oaks7@gmail.com"
                  className="transition-colors hover:text-emerald-400"
                >
                  hotel7oaks7@gmail.com
                </a>
              </li>

              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={18} className="mt-1 text-emerald-400 shrink-0" />
                <span>Dehradun, Uttarakhand, India</span>
              </li>
            </ul>
          </div>

          {/* Trust / extra */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-white/90 mb-6 font-ssBD">
              Why Oak7
            </h4>

            <div className="space-y-4 text-gray-400 font-ssLB">
              <p className="leading-7">
                Handpicked itineraries for mountain lovers, families, and
                adventure seekers.
              </p>
              <p className="leading-7">
                Personalized planning, local insight, and dependable support
                from inquiry to return.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-6  font-medium transition-all duration-300 hover:text-emerald-300"
            >
              Start planning
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Oak7 Tours & Travels. All rights reserved.</p>

            <div className="flex flex-wrap items-center gap-5">
              <Link
                to="/privacy"
                className="transition-colors hover:text-emerald-400"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="transition-colors hover:text-emerald-400"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
