import { useEffect, useRef } from "react";
import gsap from "gsap";

const Loader = ({ onDone }) => {
  const containerRef = useRef(null);
  const ringRef = useRef(null);
  const arcRef = useRef(null);
  const mountainsRef = useRef(null);
  const logoRef = useRef(null);
  const innerRingRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: onDone,
      defaults: { ease: "power2.out" },
    });

    gsap.set(
      [
        ringRef.current,
        arcRef.current,
        mountainsRef.current,
        logoRef.current,
        innerRingRef.current,
      ],
      {
        opacity: 0,
        scale: 0.8,
      }
    );

    // ENTRY (slightly smoother)
    tl.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    )
      .to(
        [ringRef.current, logoRef.current, innerRingRef.current],
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          stagger: 0.2,
        },
        "-=0.4"
      )
      .to(
        mountainsRef.current,
        {
          opacity: 1,
          scale: 1,
          y: -4,
          duration: 1.2,
        },
        "-=0.7"
      );

    // 🔄 SPINNER (slightly slower = premium feel)
    gsap.to(ringRef.current, {
      rotation: 360,
      repeat: -1,
      ease: "linear",
      duration: 4.5,
    });

    gsap.to(innerRingRef.current, {
      rotation: -360,
      repeat: -1,
      ease: "linear",
      duration: 3.5,
    });

    // ✨ Pulse
    gsap.to(ringRef.current, {
      scale: 1.04,
      repeat: -1,
      yoyo: true,
      duration: 1.6,
      ease: "sine.inOut",
    });

    // Parallax
    gsap.to(mountainsRef.current, {
      x: 12,
      yoyo: true,
      repeat: -1,
      duration: 4,
      ease: "sine.inOut",
    });

    // 🔥 MAIN PROGRESS (BIG CHANGE)
    tl.fromTo(
      arcRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        transformOrigin: "left center",
        duration: 7, // ⬅️ increased
      },
      "-=0.6"
    );

    // 🔥 LONG HOLD (important for premium feel)
    tl.to({}, { duration: 2.5 });

    // EXIT (slightly slower + smoother)
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
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-emerald-50 via-sky-50 to-slate-100"
    >
      <div className="relative flex flex-col items-center gap-6">
        <div className="relative w-44 h-44 md:w-56 md:h-56">
          <div
            ref={ringRef}
            className="absolute inset-0 rounded-full border-[6px] border-emerald-400/60 border-t-emerald-600 border-b-teal-500 shadow-[0_0_40px_rgba(16,185,129,0.5)]"
          />

          <div
            ref={innerRingRef}
            className="absolute inset-6 rounded-full border-2 border-dashed border-emerald-400/40"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[85%] h-[85%] overflow-hidden rounded-full">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-400 to-teal-400">
                <div
                  ref={arcRef}
                  className="h-full bg-gradient-to-r from-emerald-600 to-teal-300"
                />
              </div>
            </div>
          </div>

          <div className="absolute inset-4 rounded-full bg-white flex items-center justify-center shadow-inner">
            <div ref={logoRef} className="text-center">
              <h1 className="text-3xl font-bold tracking-widest">
                OAK<span className="text-emerald-600">7</span>
              </h1>
              <span className="text-xs uppercase tracking-widest text-emerald-700">
                Travel Compass
              </span>
            </div>
          </div>
        </div>

        <p className="text-gray-700 font-semibold text-sm tracking-widest uppercase">
          Charting your Himalayan escape…
        </p>
      </div>
    </div>
  );
};

export default Loader;