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

  // Text animations (only once)
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

      // Slide animation
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
    }, 5000); // changes every 5 seconds

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <section className="relative flex flex-col justify-center items-center text-center min-h-screen overflow-hidden">
      {/* Background Images Layer */}
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
      <div className="relative z-10 text-black font-ssBookD flex flex-col items-center max-w-3xl px-6">
        <p
          ref={paraRef}
          className="mt-5 text-lg md:text-xl w-max text-black font-ssLB mb-3"
        >
          Whether it’s trekking through snow-clad peaks or embarking on the
          sacred Char Dham Yatra, Oak7 is your trusted travel partner.
        </p>

        <h1
          ref={textRef}
          className="text-5xl md:text-8xl w-max  font-ssBD leading-tight tracking-tight font-bold"
        >
          Journeys of Adventure & Faith
        </h1>

        <div
          ref={btnRef}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <button className="bg-green-600 hover:bg-green-700 font-ssBD text-white px-7 py-2.5 rounded-full  transition-all">
            Explore Packages
          </button>
          <button className="border border-gray-300 text-gray-800 bg-white/70 px-7 py-2.5 rounded-full hover:bg-white hover:text-green-800 font-ssBD transition-all">
            Inquire Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
