import * as React from "react";

const SvgWeatherSunset = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    xmlSpace="preserve"
    {...props}
  >
    <path
      fill="none"
      stroke="#000"
      strokeWidth={2}
      strokeMiterlimit={10}
      d="M0 47h64M10 37H0M64 37H54M32 15V4M14 23l-8-8M50 23l8-8"
    />
    <path
      stroke="#000"
      strokeWidth={2}
      strokeMiterlimit={10}
      d="M48.159 47A18.913 18.913 0 0 0 51 37c0-10.493-8.506-19-19-19s-19 8.507-19 19c0 3.668 1.04 7.094 2.841 9.998"
    />
  </svg>
);

export default SvgWeatherSunset;
