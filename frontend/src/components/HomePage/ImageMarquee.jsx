import { useEffect, useRef } from "react";

const images = [
  "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157767/1000065666_imnsfj.jpg",
  "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157762/1000065688_avago5.jpg",
  "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157744/vasuki-Tal-1_ajo0y2.jpg",
  "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157538/sdasdadsa_ffjylv.jpg",
  "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157319/Sunrise-at-the-Kedarkantha-Summit-820x1024_hra1hx.webp",
  "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157320/1000065673_i7q8v0.jpg",
  "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157765/1000065691_ux96o6.jpg",
  "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157237/d2bb48da-81fe-48e7-9d14-1ca0f9d06575_Dayara_Bugyal_DB_Sudheer_Hegde-Frozen_Gui_Lake_-_Sunlight_-_EArly_morning_-_trekkers_-_indiahikes_u7jphj.webp",
  "https://res.cloudinary.com/dxg5vbsyy/image/upload/v1773157209/photo-1522506209496-4536d9020ec4_d2ndq5.jpg",
];

const variableHeights = [
  "h-40 sm:h-52 md:h-64",
  "h-52 sm:h-64 md:h-72",
  "h-44 sm:h-56 md:h-64",
  "h-60 sm:h-72 md:h-80",
  "h-48 sm:h-60 md:h-72",
  "h-56 sm:h-68 md:h-80",
];

const ImageMarquee = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    let x = 0;
    const tick = setInterval(() => {
      x -= 0.4; // slow premium
      marqueeRef.current.style.transform = `translateX(${x}px)`;
      if (Math.abs(x) > marqueeRef.current.scrollWidth / 2) x = 0;
    }, 20);

    return () => clearInterval(tick);
  }, []);

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="w-full overflow-hidden">
        <div
          ref={marqueeRef}
          className="flex gap-6 w-max"
          style={{ willChange: "transform" }}
        >
          {[...images, ...images].map((img, i) => (
            <div
              key={i}
              className={`rounded-xl overflow-hidden shadow-sm w-44 sm:w-52 md:w-60 flex-shrink-0 ${variableHeights[i % variableHeights.length]}`}
            >
              <img src={img} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageMarquee;
