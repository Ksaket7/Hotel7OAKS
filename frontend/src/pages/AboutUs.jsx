import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link, useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const sectionRef = useRef(null);
  const Navigate = useNavigate();

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
      },
    );
  }, []);

  return (
    <div className="bg-white overflow-hidden font-ssBookD">
      {/* HERO */}
      <section
        className="relative flex flex-col justify-center items-center text-center min-h-[70vh] bg-cover bg-center px-6"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/16635811/pexels-photo-16635811.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 text-white max-w-3xl drop-shadow-xl flex flex-col items-center">
          <span className="mb-4 px-6 py-2 rounded-full bg-white/10 border border-white/20 font-semibold text-green-300 text-sm tracking-wider shadow-sm backdrop-blur-md">
            Who We Are
          </span>

          <h1 className="text-4xl md:text-6xl font-ssBD mb-4">
            About <span className="text-green-400">Oak7</span>
          </h1>

          <p className="text-lg font-ssLB text-gray-100 mb-4">
            Your trusted partner for unforgettable journeys across the
            Himalayas, Char Dham, and beyond.
          </p>

          {/* <div className="flex justify-center mt-4 gap-4">
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
          </div> */}
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section
        ref={sectionRef}
        className="py-12 max-w-7xl mx-auto px-6 text-center md:text-left"
      >
        <div className="grid md:grid-cols-2 gap-16 rounded-2xl p-4 justify-center items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-ssBD text-green-700 mb-7">
              Who We Are ?
            </h2>

            <p className="text-gray-700 font-ssLB text-base leading-relaxed mb-6">
              <span className="font-ssBD text-green-600">
                7 Oaks Trek and Travels
              </span>{" "}
              is a trusted travel and trekking service provider operating since
              <span className="font-ssBD text-green-600"> 2012</span>, dedicated
              to delivering memorable travel experiences in the Himalayan
              region. Over the years, we have proudly hosted{" "}
              <span className="font-ssBD text-green-600">
                15,000+ satisfied travelers
              </span>
              , building a strong reputation for reliability, local expertise,
              and personalized service.
            </p>

            <p className="text-gray-700 font-ssLB text-base leading-relaxed mb-6">
              Our company specializes in organizing{" "}
              <span className="font-ssBD text-green-600">
                Char Dham Yatra tours
              </span>
              , trekking expeditions, adventure travel, and customized holiday
              packages across Uttarakhand, Himachal Pradesh, and other
              destinations. With deep knowledge of mountain routes, weather
              conditions, and local culture, our team ensures every journey is
              carefully planned for comfort, safety, and spiritual fulfillment.
            </p>

            <p className="text-gray-700 font-ssLB text-base leading-relaxed">
              At{" "}
              <span className="font-ssBD text-green-600">
                7 Oaks Trek and Travels
              </span>
              , we believe travel is not just about reaching a destination but
              about experiencing the beauty, culture, and serenity of the
              Himalayas. Whether it is a sacred pilgrimage like the{" "}
              <span className="font-ssBD text-green-600">Char Dham Yatra</span>{" "}
              or an adventurous trek through breathtaking landscapes, we are
              committed to making every trip smooth, memorable, and enjoyable
              for our guests.
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

      {/* VISION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-ssBD text-green-700 mb-6">
            Our Vision
          </h2>

          <p className="text-gray-800 font-ssLB text-lg leading-relaxed max-w-3xl mx-auto">
            To be the most trusted travel brand in Uttarakhand, connecting
            people to nature, culture, and spirituality through mindful
            adventures and curated experiences.
          </p>

          {/* ✨ PILLARS */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              "To be the most trusted travel brand",
              "Local Employment",
              "Remote Area Skill Development",
              "Sustainable Tourism",
              "Eco Friendly Tourism",
              "Cultural Tourism",
            ].map((item, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-white border border-green/20 text-green-700 text-sm font-ssSBH shadow-sm hover:shadow-md hover:bg-green/5 transition-all"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-ssBD text-center text-green-700 mb-12">
            What We Do ?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* HOTELS */}
            <div
              onClick={() => Navigate("/hotels")}
              className="bg-gradient-to-br from-white via-green-50 to-gray-100 p-8 rounded-2xl shadow hover:shadow-xl transition-all border border-green-100 hover:cursor-pointer tracking-wider"
            >
              <div className="text-4xl mb-4">🏨</div>

              <h3 className="text-xl font-ssSBH text-green-700 mb-4">
                Hotel Bookings
              </h3>

              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                Personally verified hotel bookings across Himachal Pradesh and
                Uttarakhand tailored for family holidays, spiritual trips,
                corporate travel, and romantic getaways.
              </p>

              <p className="text-sm text-gray-700">
                <span className="font-semibold text-green-700">
                  Popular Destinations:
                </span>
                <br />
                Manali • Shimla • Dharamshala • Mussoorie • Nainital • Rishikesh
                • Haridwar
              </p>
            </div>

            {/* TREKS */}
            <div
              onClick={() => Navigate("/treks")}
              className="bg-gradient-to-br from-white via-green-50 to-gray-100 p-8 rounded-2xl shadow hover:shadow-xl transition-all border border-green-100 hover:cursor-pointer tracking-wider"
            >
              <div className="text-4xl mb-4">🥾</div>

              <h3 className="text-xl font-ssSBH text-green-700 mb-4">
                Trekking Adventures
              </h3>

              <p className="text-gray-700 text-sm mb-4">
                Thoughtfully designed trekking journeys across Himachal Pradesh
                and Uttarakhand with certified guides and carefully planned
                routes.
              </p>

              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Guided Mountain Treks</li>
                <li>• Weekend Treks & Camping</li>
                <li>• High Altitude Expeditions</li>
                <li>• Nature & Forest Trails</li>
                <li>• Custom Trekking Plans</li>
              </ul>
            </div>

            {/* TOUR PACKAGES */}
            <div
              onClick={() => Navigate("/tours")}
              className="bg-gradient-to-br from-white via-green-50 to-gray-100 p-8 rounded-2xl shadow hover:shadow-xl transition-all border border-green-100 hover:cursor-pointer tracking-wider"
            >
              <div className="text-4xl mb-4">🌍</div>

              <h3 className="text-xl font-ssSBH text-green-700 mb-4">
                Tour Packages
              </h3>

              <p className="text-gray-700 text-sm mb-4">
                Complete end-to-end travel planning with professional
                coordination, trusted stays, and reliable transport.
              </p>

              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Family & Spiritual Holidays</li>
                <li>• Honeymoon Escapes</li>
                <li>• Wildlife & Nature Tours</li>
                <li>• Corporate & Educational Trips</li>
                <li>• Luxury & International Packages</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SPIRITUAL YATRAS */}
      <section className="py-16 bg-gray-50 tracking-wider">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-ssBD text-green-700 mb-6">
            Special Spiritual Yatras
          </h2>

          <p className="text-gray-700 max-w-3xl mx-auto mb-10 ">
            We specialize in well-organized pilgrimage tours with trusted
            accommodations, experienced drivers, route planning and VIP darshan
            assistance where available.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            {[
              "Char Dham Yatra",
              "Do Dham Yatra",
              "Panch Badri",
              "Triyugi Narayan",
              "Adi Kailash",
              "Kedarnath",
              "Badrinath",
            ].map((item, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-white rounded-full shadow hover:shadow-md transition"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-12 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-ssBD text-center text-green-700 mb-12">
          What We Stand For ?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            {
              title: "Sustainable Travel",
              desc: "Eco-conscious practices that protect Himalayan beauty.",
              emoji: "🌿",
            },
            {
              title: "Authentic Experiences",
              desc: "Every journey reflects Uttarakhand’s culture and spirit.",
              emoji: "🌄",
            },
            {
              title: "Trust & Safety",
              desc: "Your safety is our top priority.",
              emoji: "🛡️",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 bg-gradient-to-br from-white via-green-50 to-gray-100 rounded-2xl shadow hover:shadow-xl transition-all border border-green-100 flex flex-col items-center"
            >
              <div className="text-4xl mb-4">{item.emoji}</div>

              <h3 className="text-xl font-ssSBH text-green-700 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-700 font-ssLB text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-br from-green-50 via-white to-blue-50 text-center">
        <h2 className="text-3xl md:text-4xl font-ssBD text-green-700 mb-4">
          Ready to Explore the Himalayas?
        </h2>

        <p className="text-gray-600 font-ssLB text-lg mb-10">
          Discover the beauty, peace, and adventure that Uttarakhand offers.
        </p>

        <Link
          to="/tours"
          className="inline-block bg-green hover:bg-green-700 text-white text-lg px-10 py-4 rounded-full transition-all shadow-lg"
        >
          Start Your Journey
        </Link>
      </section>
    </div>
  );
};

export default AboutUs;
