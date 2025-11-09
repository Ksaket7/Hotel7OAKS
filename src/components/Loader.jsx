import { useEffect, useRef } from "react";
import gsap from "gsap";

const Loader = ({ onDone }) => {
  const barRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      barRef.current,
      { width: "0%" },
      {
        width: "100%",
        duration: 2.4,
        ease: "power2.out",
        onComplete: onDone,
      }
    );
  }, [onDone]);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">
      {/* Logo */}
      <h1 className="text-4xl md:text-5xl font-bold text-green mb-7 tracking-wide">
        OAK<span className="text-greenH">7</span>
      </h1>

      {/* Animated Dots Loader */}
      <div className="flex items-center justify-center gap-1 mb-6">
        {[...Array(3)].map((_, i) => (
          <span
            key={i}
            className="block w-2 h-2 bg-green rounded-full animate-bounce"
            style={{
              animationDelay: `${i * 0.15}s`,
              animationIterationCount: "infinite",
              animationDuration: "1.2s",
            }}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="relative w-52 h-1.5 bg-gray-100 rounded-full overflow-hidden mb-4">
        <div
          ref={barRef}
          className="h-full bg-gradient-to-r from-green via-greenH to-emerald-300 rounded-full"
          style={{ width: "0%" }}
        />
      </div>

      {/* Tagline */}
      <p className="mt-2 text-gray-500 font-medium text-base tracking-widest">
        Discover Uttarakhand with us...
      </p>
    </div>
  );
};

export default Loader;
