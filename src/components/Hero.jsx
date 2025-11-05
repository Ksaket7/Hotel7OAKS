import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const textRef = useRef(null);
  const paraRef = useRef(null);
  const btnRef = useRef(null);
  const imageRefs = useRef([]);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1508261305435-63174d10c0a6?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1600&q=80",
  ];

  // GSAP text animations
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

  // Background slider animation
  useEffect(() => {
    const interval = setInterval(() => {
      const nextImage = (currentImage + 1) % images.length;
      const currentSlide = imageRefs.current[currentImage];
      const nextSlide = imageRefs.current[nextImage];

      gsap.to(currentSlide, {
        x: "-100%",
        opacity: 0,
        duration: 1.2,
        ease: "power2.inOut",
      });
      gsap.fromTo(
        nextSlide,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 1.2, ease: "power2.inOut" }
      );

      setCurrentImage(nextImage);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <section className="relative flex flex-col justify-center items-center text-center min-h-screen overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((src, index) => (
          <div
            key={index}
            ref={(el) => (imageRefs.current[index] = el)}
            className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
            style={{
              backgroundImage: `url(${src})`,
              opacity: index === 0 ? 1 : 0,
              zIndex: index === currentImage ? 1 : 0,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-white flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 max-w-[90%] sm:max-w-2xl md:max-w-4xl text-center">
        {/* Subtitle */}
        <h2
          ref={paraRef}
          className="mt-5 text-base sm:text-lg md:text-xl text-white font-ssLB mb-4 [text-shadow:_0_2px_10px_rgba(0,0,0,0.8)] lg:whitespace-nowrap"
        >
          Whether it’s trekking through snow-clad peaks or embarking on the
          sacred Char Dham Yatra, Oak7 is your trusted travel partner.
        </h2>

        {/* Main Heading */}
        <h1
          ref={textRef}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-ssBD leading-tight tracking-tight font-bold text-white [text-shadow:_0_4px_25px_rgba(0,0,0,0.5)] whitespace-normal lg:whitespace-nowrap"
        >
          Journeys of Adventure & Faith
        </h1>

        {/* Buttons */}
        <div
          ref={btnRef}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto"
        >
          <button className="bg-green-600 hover:bg-green-700 font-ssBookD text-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-full transition-all w-[80%] sm:w-auto">
            Explore Packages
          </button>
          <button className="border border-white/70 text-gray-900 sm:text-gray-800 font-ssBookD bg-white/80 hover:bg-white hover:text-green-800 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-full transition-all w-[80%] sm:w-auto">
            Inquire Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
