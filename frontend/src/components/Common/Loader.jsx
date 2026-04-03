import { useEffect, useRef } from "react";
import gsap from "gsap";

const Loader = ({ onDone }) => {
  const barRef = useRef();
  const carRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: onDone,
      defaults: { ease: "power2.out" }
    });

    // Phase 1: Logo fade in + bounce dots
    tl.fromTo(
      ".logo-text",
      { opacity: 0, y: 30, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8 }
    )
    .to(".bounce-dot", {
      scale: 1.5,
      y: -10,
      stagger: 0.1,
      duration: 0.6,
      yoyo: true,
      repeat: 1
    }, "-=0.5");

    // Phase 2: Car entrance from left
    tl.fromTo(
      carRef.current,
      { x: "-120%", scale: 0.6, rotation: -10, opacity: 0 },
      { 
        x: "10%", 
        scale: 1, 
        rotation: 0, 
        opacity: 1, 
        duration: 1.2
      },
      "+=0.3"
    )
    // Car bounce on "road"
    .to(carRef.current, {
      y: -15,
      duration: 0.3,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut"
    })
    // Car headlights flicker
    .to(".headlight", {
      scale: 1.3,
      opacity: [1, 0.7, 1],
      duration: 0.4,
      stagger: 0.1,
      repeat: -1,
      yoyo: true
    }, "-=0.4");

    // Phase 3: Progress bar fill
    tl.to(barRef.current, {
      width: "100%",
      duration: 2.4,
    }, "-=0.5");

    // Phase 4: Car drives off + fade out
    tl.to(carRef.current, {
      x: "120%",
      scale: 0.8,
      rotation: 8,
      duration: 1,
      ease: "power2.in"
    }, "-=1.2")
    .to(".loader-content", {
      opacity: 0,
      y: -30,
      duration: 0.6
    }, "-=0.8");

  }, [onDone]);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-white via-emerald-50 to-green-50 overflow-hidden">
      <style jsx>{`
        @keyframes roadLines {
          0% { transform: translateX(0); }
          100% { transform: translateX(100vw); }
        }
        @keyframes roadLinesDelayed {
          0% { transform: translateX(-8rem); }
          100% { transform: translateX(calc(100vw - 8rem)); }
        }
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes glow {
          0%, 100% { 
            box-shadow: 0 0 10px rgba(255, 193, 7, 0.8); 
            transform: scale(1);
          }
          50% { 
            box-shadow: 0 0 25px rgba(255, 193, 7, 1); 
            transform: scale(1.1);
          }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-road-lines {
          animation: roadLines 3s linear infinite;
        }
        .animate-road-lines-delayed {
          animation: roadLinesDelayed 3s linear infinite;
        }
        .animate-shine {
          animation: shine 2s linear infinite;
        }
        .glow-animation {
          animation: glow 1.5s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spinSlow 4s linear infinite;
        }
        .animate-pulse-hover {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>

      {/* Road Background */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-gray-900 via-gray-800 to-transparent">
        <div className="absolute inset-0 bg-white/20">
          {/* Road lines - animated */}
          <div className="absolute top-8 left-0 w-full h-2 bg-yellow-300/80 animate-road-lines"></div>
          <div className="absolute top-8 -ml-8 w-16 h-2 bg-yellow-300/80 animate-road-lines-delayed"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="loader-content relative z-10 px-6 pointer-events-none">
        {/* Logo */}
        <h1 className="logo-text text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 tracking-wide drop-shadow-2xl">
          OAK<span className="text-emerald-600 drop-shadow-lg">7</span>
        </h1>

        {/* Animated Dots Loader */}
        <div className="flex items-center justify-center gap-1 mb-10">
          {[...Array(3)].map((_, i) => (
            <span
              key={i}
              className="bounce-dot block w-3 h-3 md:w-4 md:h-4 bg-emerald-500 rounded-full shadow-lg animate-bounce"
              style={{
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="relative w-64 md:w-80 h-2 bg-white/60 backdrop-blur-xl rounded-full overflow-hidden shadow-2xl mb-6 border border-white/40">
          <div
            ref={barRef}
            className="h-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-500 shadow-[0_0_20px_rgba(16,185,129,0.6)] rounded-full relative overflow-hidden"
            style={{ width: "0%" }}
          >
            {/* Progress shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 transform animate-shine" />
          </div>
        </div>

        {/* Tagline */}
        <p className="text-gray-600 font-semibold text-lg md:text-xl tracking-widest drop-shadow-sm animate-pulse">
          Journey through Himalayas awaits...
        </p>
      </div>

      {/* Animated Car */}
      <div 
        ref={carRef}
        className="car-container absolute bottom-24 left-0 w-28 md:w-36 h-20 md:h-24 shadow-2xl drop-shadow-2xl"
      >
        {/* Car Body */}
        <div className="car-body w-full h-14 md:h-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-t-2xl rounded-br-lg shadow-2xl border border-gray-700/50 relative overflow-hidden">
          {/* Car shine */}
          <div className="absolute top-1 left-1 w-16 h-8 bg-white/10 -skew-x-12 -rotate-1" />
          
          {/* Oak7 Logo on car */}
          <div className="absolute top-3 right-3 text-xs font-bold text-emerald-400 drop-shadow-md tracking-wide">
            OAK7
          </div>

          {/* Windows */}
          <div className="absolute top-2 left-4 w-8 h-5 bg-blue-200/90 rounded-sm shadow-inner" />
          <div className="absolute top-2 right-4 w-10 h-5 bg-blue-300/90 rounded-sm shadow-inner" />
          
          {/* Car details */}
          <div className="absolute bottom-0 left-2 w-3 h-2 bg-gray-600 rounded-t-sm" />
          <div className="absolute bottom-0 right-2 w-3 h-2 bg-gray-600 rounded-t-sm" />
        </div>

        {/* Wheels */}
        <div className="flex gap-2 -mt-1 px-2">
          <div className="wheel w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full shadow-lg border-4 border-gray-900/50 relative">
            <div className="absolute inset-1 bg-white/20 rounded-full" />
            <div className="absolute inset-2 bg-gray-900/50 rounded-full animate-spin-slow" />
          </div>
          <div className="wheel w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full shadow-lg border-4 border-gray-900/50 relative">
            <div className="absolute inset-1 bg-white/20 rounded-full" />
            <div className="absolute inset-2 bg-gray-900/50 rounded-full animate-spin-slow" />
          </div>
        </div>

        {/* Headlights */}
        <div className="headlight absolute top-4 left-1 w-3 h-3 bg-yellow-400/90 rounded-full shadow-lg blur-sm glow-animation" />
        <div className="headlight absolute top-4 right-1 w-3 h-3 bg-yellow-400/90 rounded-full shadow-lg blur-sm glow-animation" />
      </div>
    </div>
  );
};

export default Loader;
