import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Mail } from "lucide-react";
import BrushStroke from "../components/BrushStroke";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.17,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <div className="bg-white overflow-hidden font-ssBookD">
      {/* ---------- HERO SECTION ---------- */}
      <section
        className="relative flex flex-col justify-center items-center text-center min-h-[70vh] bg-cover bg-center px-6"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-transparent backdrop-blur-sm" />
        <div className="relative z-10 text-white max-w-3xl drop-shadow-xl">
          <span className="inline-block mb-5 px-6 py-2 font-semibold rounded-full bg-white/20 backdrop-blur-sm border border-white/20 text-green-300 text-sm tracking-wider shadow-lg">
            Contact Oak7
          </span>
          <h1 className="text-4xl md:text-6xl font-ssBD mb-5">
            Let’s Plan Your <span className="text-green-400">Next Adventure</span>
          </h1>
          <p className="text-lg md:text-xl font-ssLB text-gray-100 mb-4">
            We’d love to hear from you — let’s craft your perfect Himalayan journey.
          </p>
        </div>
      </section>

      {/* ---------- CONTACT SECTION ---------- */}
      <section
        ref={sectionRef}
        className="py-24 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 relative"
      >
        {/* Left: Contact Info - Glass panel */}
        <div className="flex flex-col justify-center bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-8 border border-green-100">
          <div className="mb-12 relative">
            <h2 className="text-3xl md:text-4xl font-ssBD text-green-700 mb-2 z-10">
              Get in Touch
            </h2>
            {/* <BrushStroke color="#16a34a" width="120" /> */}
          </div>
          <p className="text-gray-700 font-ssLB text-base leading-relaxed mb-8">
            Have questions about our treks, tours, or custom packages? Our travel experts are here for you.
          </p>
          <div className="space-y-7">
            <div className="flex items-center gap-4">
              <span className="inline-block font-bold text-green-700 rounded-full bg-green-100 p-2">
                <MapPin size={20} />
              </span>
              <p className="font-ssLB text-gray-700 text-base">
                21, Tapovan, Rishikesh, Uttarakhand, India
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="inline-block font-bold text-green-700 rounded-full bg-green-100 p-2">
                <Phone size={20} />
              </span>
              <p className="font-ssLB text-gray-700 text-base">+91 98765 43210</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="inline-block font-bold text-green-700 rounded-full bg-green-100 p-2">
                <Mail size={20} />
              </span>
              <p className="font-ssLB text-gray-700 text-base">info@oak7adventures.com</p>
            </div>
          </div>
        </div>

        {/* Right: Contact Form - Frost/Glass UI */}
        <div className="bg-gradient-to-br from-green-50 to-white/90 p-10 rounded-2xl shadow-lg border border-green-100">
          <h3 className="text-2xl font-ssSBH text-green-700 mb-7 text-left">
            Send Us a Message
          </h3>
          <form className="flex flex-col space-y-6 font-ssLB">
            <div>
              <label className="block text-xs text-gray-600 mb-2 font-bold">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white shadow-sm"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-2 font-bold">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white shadow-sm"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-2 font-bold">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white shadow-sm"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-all shadow-md hover:shadow-lg text-base active:scale-95"
            >
              Send Message ✈️
            </button>
          </form>
        </div>
      </section>

      {/* ---------- MAP / CTA ---------- */}
      <section className="py-24 bg-gradient-to-br from-green-50 via-white to-blue-50 text-center">
        <div className="inline-block mb-8">
          <h2 className="text-3xl md:text-4xl font-ssBD text-green-700 mb-2 z-10">
            Visit Our Office
          </h2>
          <BrushStroke color="#16a34a" width="120" />
        </div>
        <p className="text-gray-600 font-ssLB mb-8 max-w-2xl mx-auto">
          Drop by for a cup of tea in Rishikesh—let’s plan your adventure together!
        </p>
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-green-100">
          <iframe
            title="Oak7 Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.892631773125!2d78.3237720150928!3d30.121962181861237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390915fe146d1a1d%3A0xa7dc2bb3c61b153a!2sRishikesh%2C%20Uttarakhand%20249192!5e0!3m2!1sen!2sin!4v1701256922508!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
