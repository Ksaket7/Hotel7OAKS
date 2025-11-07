import { useEffect, useRef } from "react";

const images = [
  "https://images.unsplash.com/photo-1508261305435-5b19bfc84b58?&auto=format&fit=crop&w=900&q=60",
  "https://images.unsplash.com/photo-1603126857599-5719f2434efb?&auto=format&fit=crop&w=900&q=60",
  "https://images.unsplash.com/photo-1549887534-3db1bd59dcca?&auto=format&fit=crop&w=900&q=60",
  "https://images.unsplash.com/photo-1633265486064-e59b8f0fba99?&auto=format&fit=crop&w=900&q=60",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?&auto=format&fit=crop&w=900&q=60",
  "https://images.unsplash.com/photo-1526481280695-3c720685208b?&auto=format&fit=crop&w=900&q=60",
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
        <div ref={marqueeRef} className="flex gap-6 w-max" style={{ willChange: "transform" }}>
          {[...images, ...images].map((img, i) => (
            <div
              key={i}
              className={`rounded-xl overflow-hidden shadow-sm w-44 sm:w-52 md:w-60 flex-shrink-0 ${variableHeights[i % variableHeights.length]}`}
            >
              <img
                src={img}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageMarquee;
