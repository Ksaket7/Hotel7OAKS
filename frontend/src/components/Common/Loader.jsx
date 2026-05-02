import { useEffect, useRef } from "react";
import gsap from "gsap";
import logo from "../../assets/hotel-7-logo.png";

const Loader = ({ onDone }) => {
  const containerRef = useRef(null);
  const ringRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: onDone,
      defaults: { ease: "power2.out" },
    });

    gsap.set([ringRef.current, logoRef.current], {
      opacity: 0,
      scale: 0.8,
      transformOrigin: "center center",
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
        <div className="relative w-40 h-40 md:w-48 md:h-48">

          {/* 🔴 OUTER RING */}
          <div
            ref={ringRef}
            className="absolute inset-0 rounded-full border-[6px]
            border-orange-300/50
            border-t-orange-500
            border-b-orange-500
            shadow-[0_0_35px_rgba(239,68,68,0.5)]"
          />

          {/* 🟠 LOGO */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div ref={logoRef} className="flex items-center justify-center">
              <img
                src={logo}
                alt="7 Oaks Logo"
                className="w-40 h-40 md:w-48 md:h-48 object-contain"
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
