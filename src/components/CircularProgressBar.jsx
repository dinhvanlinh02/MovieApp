import React from "react";

const CircularProgressBar = ({
  percen = 0,
  size = 10, // đơn vị là số, tượng trưng cho 10vw
  strokeWidth = 0.5, // số, tượng trưng cho 0.5vw
  strokeColor = "green",
  textColor = "white",
}) => {
  // bán kính hình tròn
  const radius = size / 2 - strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const offset = isNaN(circumference)
    ? 0
    : circumference - (percen / 100) * circumference;

  return (
    <div>
      <svg
        width={`${size}vw`}
        height={`${size}vw`}
        viewBox={`0 0 ${size} ${size}`}
      >
        {/* vòng ngoài background */}
        <circle
          r={radius}
          cx={size / 2}
          cy={size / 2}
          stroke="white"
          strokeWidth={strokeWidth}
          fill="none"
          opacity="0.2"
        />

        {/* vòng progress */}
        <circle
          r={radius}
          cx={size / 2}
          cy={size / 2}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference || 0}
          strokeDashoffset={offset || 0}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          strokeLinecap="round"
        />

        {/* hiển thị % */}
        <text
          x="50%"
          y="50%"
          fill={textColor}
          fontSize={size * 0.25}
          alignmentBaseline="middle"
          textAnchor="middle"
        >
          {percen}
        </text>
      </svg>
    </div>
  );
};

export default CircularProgressBar;
