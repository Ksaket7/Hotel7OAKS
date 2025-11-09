// src/pages/Contact.jsx

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Mail } from "lucide-react";
import BrushStroke from "../components/BrushStroke";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);

  // GSAP scroll animation for fade-up effect
  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <div className="bg-white overflow-hidden">
      {/* ---------- HERO SECTION ---------- */}
      <section
        className="relative flex flex-col justify-center items-center text-center min-h-[70vh] bg-cover bg-center px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-white max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-ssBD text-shadow-lg mb-4">
            Let’s Plan Your <span className="text-green-400">Next Adventure</span>
          </h1>
          <p className="text-lg md:text-xl font-ssLB text-gray-100 [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
            We’d love to hear from you — let’s craft your perfect Himalayan journey.
          </p>
        </div>
      </section>

      {/* ---------- CONTACT SECTION ---------- */}
      <section
        ref={sectionRef}
        className="py-24 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 relative"
      >
        {/* Left: Contact Info */}
        <div className="flex flex-col justify-center relative">
          <div className="relative inline-block mx-auto md:mx-0 mb-12">
            <h2 className="text-3xl md:text-4xl font-ssBD text-black relative z-10">
              Get in Touch
            </h2>
            {/* Brush stroke underline */}
            <BrushStroke color="#F2994A" width="230" />
          </div>

          <p className="text-gray-700 font-ssLB text-base leading-relaxed mb-8 text-center md:text-left">
            Have questions about our treks, tours, or custom packages?  
            Our travel experts are ready to help you plan your perfect journey.
          </p>

          <div className="space-y-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4">
              <MapPin className="text-green-600" size={22} />
              <p className="font-ssLB text-gray-700">
                21, Tapovan, Rishikesh, Uttarakhand, India
              </p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <Phone className="text-green-600" size={22} />
              <p className="font-ssLB text-gray-700">+91 98765 43210</p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <Mail className="text-green-600" size={22} />
              <p className="font-ssLB text-gray-700">info@oak7adventures.com</p>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-md border border-green-100">
          <h3 className="text-xl font-ssSBH text-green-700 mb-6 text-center md:text-left">
            Send us a Message
          </h3>
          <form
            action="#"
            method="post"
            className="flex flex-col space-y-5 font-ssLB"
          >
            <div>
              <label className="block text-sm text-gray-600 mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green hover:bg-greenH text-white font-ssBookD text-base px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Send Message ✈️
            </button>
          </form>
        </div>
      </section>

      {/* ---------- MAP / CTA ---------- */}
      <section className="py-24 bg-gray-50 text-center relative">
        <div className="relative inline-block mb-8">
          <h2 className="text-3xl md:text-4xl font-ssBD text-black relative z-10">
            Visit Our Office
          </h2>
          {/* Brush stroke underline */}
          <BrushStroke color="#F2994A" width="250" />
        </div>

        <p className="text-gray-600 font-ssLB mb-8 max-w-2xl mx-auto">
          We’d love to meet you in person — drop by for a cup of tea and let’s
          plan your adventure.
        </p>

        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-green-100">
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
