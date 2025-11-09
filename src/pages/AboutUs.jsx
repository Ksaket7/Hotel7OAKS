import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

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
      {/* HERO */}
      <section
        className="relative flex flex-col justify-center items-center text-center min-h-[70vh] bg-cover bg-center px-6"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent backdrop-blur-sm" />
        <div className="relative z-10 text-white max-w-3xl drop-shadow-xl flex flex-col items-center">
          <span className="mb-4 px-6 py-2 rounded-full bg-white/10 border border-white/20 font-semibold text-green-300 text-sm tracking-wider shadow-sm backdrop-blur-md">
            Who We Are
          </span>
          <h1 className="text-4xl md:text-6xl font-ssBD mb-4">
            About <span className="text-green-400">Oak7</span>
          </h1>
          <p className="text-lg font-ssLB text-gray-100 mb-4">
            Your trusted partner for unforgettable journeys across the Himalayas, Char Dham, and beyond.
          </p>
          <div className="flex justify-center mt-4 gap-4">
            <Link
              to="/tours"
              className="inline-block bg-green hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full transition-all shadow"
            >
              Explore Tours
            </Link>
            <Link
              to="/contact"
              className="inline-block bg-white/80 hover:bg-white text-green-700 font-semibold px-6 py-2 rounded-full transition-all shadow"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT CONTENT - Glass/Panel look */}
      <section
        ref={sectionRef}
        className="py-12 max-w-7xl mx-auto px-6 text-center md:text-left"
      >
        <div className="grid md:grid-cols-2 gap-16 rounded-2xl p-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-ssBD text-green-700 mb-7">
              Who We Are
            </h2>
            <p className="text-gray-700 font-ssLB text-base leading-relaxed mb-6">
              At <span className="font-ssBD text-green-600">Oak7</span>, we believe travel is more than sightseeing—it's a journey of discovery, connection, and peace.
              <br />
              We are based in the heart of Uttarakhand, curating authentic journeys across the Char Dham, treks, and hidden trails.
            </p>
            <p className="text-gray-700 font-ssLB text-base leading-relaxed">
              We blend deep local knowledge with adventure spirit so every traveler experiences the mountains responsibly, safely, and soulfully.
            </p>
          </div>
          <div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-white/30">
              <img
                src="https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?auto=compress&fit=crop&w=1000&q=80"
                alt="About Oak7"
                className="w-full h-[350px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-ssBD text-green-700 mb-6">
            Our Vision
          </h2>
          <p className="text-gray-800 font-ssLB text-lg leading-relaxed">
            To be the most trusted travel brand in Uttarakhand, connecting people to nature, culture, and spirituality through mindful adventures and curated experiences.
          </p>
        </div>
      </section>

      {/* Values/Promise - Card style */}
      <section className="py-12 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-ssBD text-center text-green-700 mb-12">
          What We Stand For
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            {
              title: "Sustainable Travel",
              desc: "Eco-conscious practices that protect Himalayan beauty.",
              emoji: "🌿"
            },
            {
              title: "Authentic Experiences",
              desc: "Every journey reflects Uttarakhand’s culture and spirit.",
              emoji: "🌄"
            },
            {
              title: "Trust & Safety",
              desc: "Your safety is our top priority—trained guides and quality stays.",
              emoji: "🛡️"
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 bg-gradient-to-br from-white via-green-50 to-gray-100 rounded-2xl shadow hover:shadow-xl transition-all border border-green-100 flex flex-col items-center"
            >
              <div className="text-4xl mb-4">{item.emoji}</div>
              <h3 className="text-xl font-ssSBH text-green-700 mb-2">{item.title}</h3>
              <p className="text-gray-700 font-ssLB text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-br from-green-50 via-white to-blue-50 text-center">
        <h2 className="text-3xl md:text-4xl font-ssBD text-green-700 leading-tight mb-4">
          Ready to Explore the Himalayas?
        </h2>
        <p className="text-gray-600 font-ssLB text-base md:text-lg mb-10">
          Discover the beauty, peace, and adventure that Uttarakhand offers.
        </p>
        <Link
          to="/tours"
          className="inline-block bg-green hover:bg-green-700 text-white font-ssBookD text-lg px-10 py-4 rounded-full transition-all shadow-lg"
        >
          Start Your Journey
        </Link>
      </section>
    </div>
  );
};

export default AboutUs;
