import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Hero = () => {

  const textRef = useRef(null);
  const paraRef = useRef(null);
  const btnRef = useRef(null);
  const imageRefs = useRef([]);
  const hasAnimated = useRef(false);

  const images = [
    "https://images.pexels.com/photos/16868357/pexels-photo-16868357.jpeg",
    "https://images.pexels.com/photos/32108616/pexels-photo-32108616.jpeg",
    "https://images.pexels.com/photos/7846563/pexels-photo-7846563.jpeg",
    "https://images.pexels.com/photos/35080071/pexels-photo-35080071.jpeg",
    "https://images.pexels.com/photos/33677268/pexels-photo-33677268.jpeg",
    "https://images.pexels.com/photos/2430446/pexels-photo-2430446.jpeg"

  ];

  // TEXT ANIMATION (ONLY ONCE)
  const animateText = () => {

    if (hasAnimated.current) return;
    if (!textRef.current || !paraRef.current || !btnRef.current) return;

    hasAnimated.current = true;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      textRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2 }
    )
      .fromTo(
        paraRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.6"
      )
      .fromTo(
        btnRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 0.8 },
        "-=0.5"
      );
  };

  // ZOOM ANIMATION
  const animateZoom = (index) => {

    const img = imageRefs.current[index];
    if (!img) return;

    gsap.fromTo(
      img,
      { scale: 1 },
      {
        scale: 1,
        duration: 6,
        ease: "power1.out"
      }
    );
  };

  useEffect(() => {
    animateText();
    animateZoom(0);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">

      {/* SLIDER */}
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        loop={true}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        pagination={{ clickable: true }}
        className="absolute inset-0 w-full h-full"
        onSlideChange={(swiper) => {

          const index = swiper.realIndex;
          animateZoom(index);

        }}
      >

        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              ref={(el) => (imageRefs.current[index] = el)}
              className="w-full h-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            />
          </SwiperSlide>
        ))}

      </Swiper>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70 backdrop-blur-[1px]" />

      {/* HERO CONTENT */}
      <div className="relative z-10 max-w-4xl px-6 text-white">

        <h1
          ref={textRef}
          className="text-4xl md:text-6xl lg:text-7xl font-ssBD leading-snug drop-shadow-[0_6px_25px_rgba(0,0,0,0.9)]"
        >
          Journeys of Adventure & Faith
        </h1>

        <p
          ref={paraRef}
          className="mt-6 text-lg text-white/90 font-ssLB drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
        >
          Whether it's trekking through snow-clad peaks or embarking on the
          sacred Char Dham Yatra, Oak7 is your trusted travel partner.
        </p>

        <div
          ref={btnRef}
          className="mt-10 flex gap-6 justify-center"
        >

          <Link to="/tours">
            <button className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full shadow-xl transition font-ssLB">
              Explore Packages
            </button>
          </Link>

          <Link to="/contact">
            <button className="text-white bg-white/40 px-8 py-4 rounded-full border border-white/30 shadow-lg font-ssLB">
              Inquire Now
            </button>
          </Link>

        </div>

      </div>

    </section>
  );
};

export default Hero;