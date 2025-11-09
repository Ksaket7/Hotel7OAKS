import { useEffect, useRef } from "react";
import gsap from "gsap";

const Error404 = () => {
  const carRef = useRef();

  useEffect(() => {
    // Simple infinite bounce animation for the car
    gsap.to(carRef.current, {
      y: -10,
      duration: 1,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <h1 className="text-9xl font-ssBD text-green mb-6 select-none">404</h1>
      
      <div className="relative w-52 h-12 mb-6">
        {/* Road */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-300 rounded-full -translate-y-1/2" />

        {/* Car */}
        <svg
          ref={carRef}
          className="absolute left-0 top-[-18px]"
          width={52}
          height={30}
          viewBox="0 0 52 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Car body */}
          <rect x="5" y="8" width="42" height="14" rx="4" fill="#34D399" />
          <rect x="18" y="4" width="16" height="10" rx="3" fill="#A7F3D0" />
          {/* Wheels */}
          <circle cx="14" cy="26" r="6" fill="#222222" />
          <circle cx="38" cy="26" r="6" fill="#222222" />
        </svg>
      </div>

      <h2 className="text-3xl md:text-4xl font-ssBD text-green mb-3 text-center">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 font-ssLB mb-8 max-w-md text-center">
        The page you are looking for does not exist or might have been moved.
        Let's get you back on track!
      </p>

      <a
        href="/"
        className="inline-block bg-green hover:bg-greenH text-white font-ssBookD py-3 px-8 rounded-full transition-colors"
      >
        Back to Home
      </a>
    </div>
  );
};

export default Error404;
