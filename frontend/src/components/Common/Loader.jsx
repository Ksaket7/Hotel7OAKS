import { useEffect, useRef } from "react";
import gsap from "gsap";
import logo from "../../assets/hotel-7-logo.png";

const Loader = ({ onDone }) => {
  const containerRef = useRef(null);
  const ringRef = useRef(null);
  const arcRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: onDone,
      defaults: { ease: "power2.out" },
    });

    // ✅ FIX: slight right shift for visual centering
    gsap.set(logoRef.current, { x: 4 });

    gsap.set([ringRef.current, arcRef.current, logoRef.current], {
      opacity: 0,
      scale: 0.8,
    });

    // ENTRY
    tl.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    )
      .to(
        [ringRef.current, logoRef.current],
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          stagger: 0.2,
        },
        "-=0.4"
      );

    // 🔄 OUTER RING ROTATION
    gsap.to(ringRef.current, {
      rotation: 360,
      repeat: -1,
      ease: "linear",
      duration: 4,
    });

    // ✨ SUBTLE PULSE
    gsap.to(ringRef.current, {
      scale: 1.04,
      repeat: -1,
      yoyo: true,
      duration: 1.6,
      ease: "sine.inOut",
    });

    // 🔥 PROGRESS BAR
    tl.fromTo(
      arcRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        transformOrigin: "left center",
        duration: 6,
      },
      "-=0.6"
    );

    // ✨ LOGO ENTRY
    tl.fromTo(
      logoRef.current,
      { scale: 0.6, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "back.out(1.7)",
      }
    );

    // ✨ FLOATING (no rotation now)
    gsap.to(logoRef.current, {
      y: -6,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut",
    });

    // ✨ GLOW (brand color)
    gsap.to(logoRef.current, {
      filter: "drop-shadow(0 0 14px rgba(239,68,68,0.5))",
      repeat: -1,
      yoyo: true,
      duration: 1.5,
    });

    // HOLD
    tl.to({}, { duration: 2 });

    // EXIT
    tl.to(
      ringRef.current,
      {
        scale: 1.1,
        duration: 0.6,
      },
      "-=0.4"
    )
      .to(
        logoRef.current,
        {
          scale: 1.15,
          duration: 0.6,
        },
        "-=0.6"
      )
      .to(ringRef.current, {
        rotation: "+=360",
        duration: 1,
        ease: "power4.inOut",
      })
      .to(
        containerRef.current,
        {
          opacity: 0,
          scale: 0.9,
          duration: 0.8,
          ease: "power3.in",
        },
        "-=0.5"
      );

    return () => {
      tl.kill();
      gsap.killTweensOf("*");
    };
  }, [onDone]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-orange-50 via-red-50 to-amber-100"
    >
      <div className="relative flex flex-col items-center gap-6">
        <div className="relative w-44 h-44 md:w-56 md:h-56">

          {/* 🔴 OUTER RING */}
          <div
            ref={ringRef}
            className="absolute inset-0 rounded-full border-[6px]
            border-orange-300/50
            border-t-red-500
            border-b-orange-500
            shadow-[0_0_35px_rgba(239,68,68,0.5)]"
          />

          {/* 🔥 PROGRESS BAR */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[90%] h-[90%] overflow-hidden rounded-full">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-300 to-red-400">
                <div
                  ref={arcRef}
                  className="h-full bg-gradient-to-r from-red-500 to-orange-400"
                />
              </div>
            </div>
          </div>

          {/* 🟠 LOGO */}
          <div className="absolute inset-2 rounded-full bg-white flex items-center justify-center shadow-inner">
            <div ref={logoRef} className="flex items-center justify-center">
              <img
                src={logo}
                alt="7 Oaks Logo"
                className="w-20 h-20 md:w-28 md:h-28 object-contain"
              />
            </div>
          </div>
        </div>

        {/* TEXT */}
        <p className="text-gray-700 font-semibold text-sm tracking-widest uppercase">
          Charting your Himalayan escape…
        </p>
      </div>
    </div>
  );
};

export default Loader;