import { useEffect, useRef } from "react";
import Slider from "react-slick";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const Hero = () => {
  const textRef = useRef(null);
  const paraRef = useRef(null);
  const btnRef = useRef(null);

  const images = [
    "https://plus.unsplash.com/premium_photo-1661963741928-673ed7f7c00b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171https://plus.unsplash.com/premium_photo-1661963741928-673ed7f7c00b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2071",
  ];

  // Text entrance animation (once)
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(
      textRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2 }
    )
      .fromTo(
        paraRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.6"
      )
      .fromTo(
        btnRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 },
        "-=0.5"
      );
  }, []);

  // React-Slick settings (slides left continuously)
  const settings = {
    dots: false,
    infinite: true,
    speed: 1200,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false, // we want sliding, not fading
    cssEase: "ease-in-out",
    arrows: false,
    pauseOnHover: false,
    draggable: false,
    swipe: false,
  };

  return (
    <section className="relative flex flex-col justify-center items-center text-center min-h-screen overflow-hidden">
      {/* === Slider Background Layer === */}
      <div className="absolute inset-0 w-full h-full">
        <Slider {...settings} className="h-full">
          {images.map((src, index) => (
            <div key={index}>
              <div
                className="w-full h-screen bg-cover bg-center"
                style={{
                  backgroundImage: `url(${src})`,
                }}
              >
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* === Hero Text Content === */}
      <div className="relative z-10 text-white flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 max-w-[90%] sm:max-w-2xl md:max-w-4xl text-center">
        <h2
          ref={paraRef}
          className="mt-5 text-base sm:text-lg md:text-xl text-white font-ssLB mb-4 [text-shadow:_0_2px_10px_rgba(0,0,0,0.8)] lg:whitespace-nowrap"
        >
          Whether it’s trekking through snow-clad peaks or embarking on the
          sacred Char Dham Yatra, Oak7 is your trusted travel partner.
        </h2>

        <h1
          ref={textRef}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-ssBD font-bold text-white [text-shadow:_0_4px_25px_rgba(0,0,0,0.5)] whitespace-normal lg:whitespace-nowrap leading-relaxed"
        >
          Journeys of Adventure & Faith
        </h1>

        <div
          ref={btnRef}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 w-full"
        >
          <Link to="/tours" className="w-auto">
            <button className="bg-green hover:bg-greenH font-ssBookD text-white px-5 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-full transition-all whitespace-nowrap">
              Explore Packages
            </button>
          </Link>

          <Link to="/contact" className="w-auto">
            <button className="border border-white/70 text-gray-900 sm:text-gray-800 font-ssBookD bg-white/80 hover:bg-white hover:text-green-800 px-5 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-full transition-all whitespace-nowrap">
              Inquire Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
