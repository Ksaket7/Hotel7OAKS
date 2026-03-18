// src/components/BrushStroke.jsx
import React from "react";

const BrushStroke = ({
  color = "#27AE60", // Oak7 green (change to "#F2994A" for orange)
  width = 200,
  className = "",
}) => {
  return (
    <img
      src="https://ghoomnechale.com/wp-content/uploads/2023/11/bottom-bar.png"
      alt="brush stroke"
      width={width}
      className={`mx-auto mt-2 opacity-90 ${className}`}
      // style={{
      //   filter:
      //     color === "#27AE60"
      //       ? "hue-rotate(90deg) saturate(1.1)" // tint to greenish if needed
      //       : "none",
      // }}
    />
  );
};

export default BrushStroke;
