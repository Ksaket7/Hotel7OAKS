// src/components/BrushStroke.jsx

const BrushStroke = ({ color = "#27AE60", width = "220" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 400 50"
    width={width}
    height="auto"
    className="absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 bottom-[-12px] opacity-90"
  >
    {/* Organic, hand-painted style brush shape */}
    <path
      d="M5 30 
         C80 25, 150 20, 220 25 
         C300 30, 350 35, 395 28 
         L395 38 
         C350 40, 280 43, 210 40 
         C130 38, 70 35, 5 38 
         Z"
      fill={color}
      opacity="0.9"
    />
  </svg>
);

export default BrushStroke;
