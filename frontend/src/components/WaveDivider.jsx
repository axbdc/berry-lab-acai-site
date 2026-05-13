import React from "react";

/**
 * Organic, asymmetric wave divider between sections.
 * `fill` is the color of the NEXT section below.
 * `flip` mirrors the curve for visual variety.
 */
export const WaveDivider = ({ fill = "#FDFBF7", flip = false, height = 110 }) => {
  return (
    <svg
      className="wave-bottom"
      viewBox="0 0 1440 140"
      preserveAspectRatio="none"
      style={{ height: `${height}px`, transform: flip ? "scaleX(-1)" : "none" }}
      aria-hidden="true"
    >
      <path
        d="M0,72 C160,130 320,10 520,38 C720,66 880,138 1080,118 C1240,102 1340,52 1440,68 L1440,140 L0,140 Z"
        fill={fill}
      />
    </svg>
  );
};

export default WaveDivider;
