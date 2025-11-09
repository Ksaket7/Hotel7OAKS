import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom"; // ✅ Import Link for navigation

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const sectionRef = useRef(null);

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
        className="relative flex flex-col justify-center items-center text-center min-h-[80vh] bg-cover bg-center px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 text-white max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-ssBD text-shadow-lg mb-4">
            About <span className="text-green-400">Oak7</span>
          </h1>
          <p className="text-lg md:text-xl font-ssLB text-gray-100 [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
            Your trusted partner for unforgettable journeys across the
            Himalayas, Char Dham, and beyond.
          </p>
        </div>
      </section>

      {/* ---------- ABOUT CONTENT ---------- */}
      <section
        ref={sectionRef}
        className="py-24 max-w-6xl mx-auto px-6 text-center md:text-left"
      >
        <h2 className="text-3xl md:text-4xl font-ssBD text-center text-black mb-12">
          Who We Are
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-700 font-ssLB text-base leading-relaxed mb-6">
              At <span className="font-ssBD text-green-700">Oak7</span>, we
              believe travel should be more than just sightseeing — it should be
              a journey of discovery, connection, and peace. Based in the heart
              of Uttarakhand, our team curates authentic travel experiences
              across the Char Dham, treks, and hidden Himalayan trails.
            </p>

            <p className="text-gray-700 font-ssLB text-base leading-relaxed">
              We combine our deep local knowledge with a passion for adventure
              to ensure every traveler experiences the mountains like never
              before — responsibly, safely, and soulfully.
            </p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
              alt="About Oak7"
              className="rounded-xl shadow-md w-full h-[350px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ---------- OUR VISION ---------- */}
      <section className="py-24 bg-gray-50 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-ssBD text-black mb-6">
          Our Vision
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 font-ssLB text-base leading-relaxed">
          To be the most trusted travel brand in Uttarakhand, connecting people
          to nature, culture, and spirituality through mindful adventures and
          curated experiences.
        </p>
      </section>

      {/* ---------- OUR PROMISE / VALUES ---------- */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-ssBD text-center text-black mb-12">
          What We Stand For
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            {
              title: "Sustainable Travel",
              desc: "We prioritize eco-conscious practices that protect the natural beauty of the Himalayas.",
            },
            {
              title: "Authentic Experiences",
              desc: "Every journey is thoughtfully curated to reflect Uttarakhand’s culture, people, and spirit.",
            },
            {
              title: "Trust & Safety",
              desc: "Your safety is our top priority — from trained guides to quality accommodations.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 bg-gray-100 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-ssSBH text-green-700 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 font-ssLB text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-ssBD text-black leading-tight mb-4">
          Ready to Explore the Mountains with Us?
        </h2>
        <p className="text-gray-600 font-ssLB text-base md:text-lg mb-10">
          Discover the beauty, peace, and adventure that Uttarakhand has to
          offer.
        </p>

        {/* ✅ Updated Contact Button */}
        <Link
          to="/contact"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-ssBookD text-base px-8 py-3 rounded-full transition-all duration-300 shadow-sm"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default AboutUs;
